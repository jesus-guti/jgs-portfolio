"use client";

import Image from "next/image";
import {
  useCallback,
  useRef,
  useState,
  type JSX,
  type PointerEvent as ReactPointerEvent,
} from "react";

import type { Dictionary } from "@/lib/i18n/get-dictionary";

type CanvasCopy = Dictionary["home"]["hero"]["canvas"];

/**
 * Box in fractions of the square source image (0–1). The frame shows the full
 * square on desktop and its top 75 % on mobile (`--r`, visible height ÷ width),
 * so boxes are stored in source space and survive both crops and resizes.
 */
type Box = { id: number; x: number; y: number; w: number; h: number };

/** Source image is 800×800; readouts use its pixels, like a labelling tool. */
const SOURCE_PX = 800;
const MAX_BOXES = 4;
/** Ignore clicks and tiny jitters: a box needs at least 3 % of the frame. */
const MIN_FRACTION = 0.03;

/** The model's guess, drawn dashed: the face in the 800×800 source. */
const PREDICTION = { x: 300 / 800, y: 86 / 800, w: 206 / 800, h: 294 / 800 };

const clamp = (value: number, max: number) => Math.min(max, Math.max(0, value));
const toPx = (fraction: number) => Math.round(fraction * SOURCE_PX);

function boxStyle(box: Omit<Box, "id">) {
  return {
    left: `${box.x * 100}%`,
    top: `calc(${box.y * 100}% / var(--r))`,
    width: `${box.w * 100}%`,
    height: `calc(${box.h * 100}% / var(--r))`,
  };
}

const boxEdge = "label-edge";
const chipBase =
  "absolute left-[-1.5px] whitespace-nowrap px-1.5 py-px font-mono text-label";
/** Label sits above the box, or inside it when the box touches the top edge. */
const chip = (y: number) =>
  `${chipBase} ${y < 0.06 ? "top-0" : "bottom-full mb-1"}`;

export function LabelCanvas({ copy }: { copy: CanvasCopy }): JSX.Element {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [announcement, setAnnouncement] = useState("");
  const frameRef = useRef<HTMLDivElement>(null);
  const draftRef = useRef<HTMLDivElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);
  const start = useRef<{ x: number; y: number; pointerId: number } | null>(
    null,
  );
  const nextId = useRef(1);

  const point = useCallback((event: ReactPointerEvent) => {
    const rect = frameRef.current!.getBoundingClientRect();
    // The image is square and top-aligned, so source y is measured in widths.
    return {
      x: clamp((event.clientX - rect.left) / rect.width, 1),
      y: clamp(
        (event.clientY - rect.top) / rect.width,
        rect.height / rect.width,
      ),
    };
  }, []);

  const rectFrom = useCallback(
    (a: { x: number; y: number }, b: { x: number; y: number }) => ({
      x: Math.min(a.x, b.x),
      y: Math.min(a.y, b.y),
      w: Math.abs(b.x - a.x),
      h: Math.abs(b.y - a.y),
    }),
    [],
  );

  // Track phase: write styles straight to the draft node, no React render per move.
  const paintDraft = useCallback(
    (box: Omit<Box, "id"> | null) => {
      const draft = draftRef.current;
      const readout = readoutRef.current;
      if (!draft || !readout) return;
      if (!box) {
        draft.style.display = "none";
        readout.textContent = copy.idle;
        return;
      }
      Object.assign(draft.style, boxStyle(box), { display: "block" });
      readout.textContent = `x ${toPx(box.x)}  y ${toPx(box.y)}  ·  ${toPx(box.w)} × ${toPx(box.h)}`;
    },
    [copy.idle],
  );

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.button !== 0 || start.current) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    start.current = { ...point(event), pointerId: event.pointerId };
    paintDraft({ ...start.current, w: 0, h: 0 });
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (start.current?.pointerId !== event.pointerId) return;
    paintDraft(rectFrom(start.current, point(event)));
  }

  function finish(event: ReactPointerEvent<HTMLDivElement>, commit: boolean) {
    if (start.current?.pointerId !== event.pointerId) return;
    const box = rectFrom(start.current, point(event));
    start.current = null;
    paintDraft(null);
    if (!commit || box.w < MIN_FRACTION || box.h < MIN_FRACTION) return;

    const id = nextId.current++;
    setBoxes((current) => [...current, { id, ...box }].slice(-MAX_BOXES));
    setAnnouncement(
      copy.announce
        .replace("{n}", String(id))
        .replace("{w}", String(toPx(box.w)))
        .replace("{h}", String(toPx(box.h))),
    );
  }

  return (
    <figure className="m-0">
      <div
        className="relative aspect-[4/3] cursor-crosshair [--r:0.75] lg:aspect-square lg:[--r:1] touch-none select-none overflow-hidden border border-border-general bg-surface-root"
        onLostPointerCapture={(event) => finish(event, false)}
        onPointerCancel={(event) => finish(event, false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(event) => finish(event, true)}
        ref={frameRef}
      >
        <Image
          alt={copy.alt}
          className="pointer-events-none object-cover object-top"
          draggable={false}
          fill
          preload
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 480px, 100vw"
          src="/jesus-profile.jpeg"
        />

        <div
          aria-hidden="true"
          className={`${boxEdge} border-[1.5px] border-dashed border-text-strong/80`}
          style={boxStyle(PREDICTION)}
        >
          <span
            className={`${chip(PREDICTION.y)} bg-surface-root/85 text-text-strong`}
          >
            {copy.prediction}
          </span>
        </div>

        {boxes.map((box) => (
          <div
            aria-hidden="true"
            className={`${boxEdge} border-[1.5px] border-text-strong`}
            key={box.id}
            style={boxStyle(box)}
          >
            <span
              className={`label-in ${chip(box.y)} bg-text-strong text-surface-root`}
            >
              {copy.box} {box.id} · {toPx(box.w)}×{toPx(box.h)}
            </span>
          </div>
        ))}

        <div
          aria-hidden="true"
          className={`${boxEdge} hidden border-[1.5px] border-text-strong`}
          ref={draftRef}
        />
      </div>

      <div className="flex min-h-11 items-center justify-between gap-3 border-x border-b border-border-general pl-3 font-mono text-meta text-text-default">
        <span
          aria-hidden="true"
          className="min-w-0 py-2 tabular-nums"
          ref={readoutRef}
        >
          {copy.idle}
        </span>
        {/* Always mounted: unmounting on clear would drop keyboard focus to <body>. */}
        <button
          aria-disabled={boxes.length === 0}
          className="inline-flex min-h-11 shrink-0 items-center px-3 text-text-default transition-colors hover:text-text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-text-strong aria-disabled:cursor-default aria-disabled:text-text-weak aria-disabled:hover:text-text-weak"
          onClick={() => {
            if (boxes.length === 0) return;
            setBoxes([]);
            setAnnouncement(copy.cleared);
          }}
          type="button"
        >
          {copy.clear}
        </button>
      </div>
      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>

      <figcaption className="mt-3 text-meta text-text-default">
        {copy.caption}{" "}
        <a
          className="text-text-strong underline decoration-border-general underline-offset-4 transition-colors hover:decoration-text-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-strong"
          href="https://www.npmjs.com/package/@siali/sorolla"
          rel="noreferrer"
          target="_blank"
        >
          {copy.sorolla}
        </a>
        .
      </figcaption>
    </figure>
  );
}
