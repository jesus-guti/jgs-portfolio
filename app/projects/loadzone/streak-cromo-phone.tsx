"use client";

import { UserIcon } from "@phosphor-icons/react/dist/ssr";
import { type JSX, useEffect, useId, useState } from "react";

import "./streak-cromo.css";
import { usePointerTilt } from "./use-cromo-pointer-tilt";

/** Invented adult seed — not a real academy Player. */
const SEED = {
  playerName: "Martín Vega",
  positionLine: "MED",
  teamName: "Valle Norte",
  shirtNumber: 8,
  streakCount: 36,
  rank: 2,
  teamSize: 18,
  clubCrestUrl: "/cromo/valle-norte-crest.svg",
} as const;

const SEAL_ARC_TOP = "M 10.5,50 A 39.5,39.5 0 1 1 89.5,50";
const SEAL_ARC_BOTTOM = "M 3.5,50 A 46.5,46.5 0 1 0 96.5,50";
const CROMO_SEAL_ARC_TOP = "RACHA DEL EQUIPO";
const CROMO_INK_ROTATION_DEG = 25;

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = (): void => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return reduced;
}

function ShirtInkSeal({
  rank,
  teamSize,
}: {
  readonly rank: number;
  readonly teamSize: number;
}): JSX.Element {
  const arcId = useId();

  return (
    <div
      className="relative size-9 shrink-0"
      style={{ transform: `rotate(${CROMO_INK_ROTATION_DEG}deg)` }}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 z-[1] size-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 100 100"
      >
        <defs>
          <path d={SEAL_ARC_TOP} id={`${arcId}-top`} />
          <path d={SEAL_ARC_BOTTOM} id={`${arcId}-bottom`} />
        </defs>
        <circle cx="50" cy="50" r="49" vectorEffect="non-scaling-stroke" />
        <circle cx="50" cy="50" r="37" vectorEffect="non-scaling-stroke" />
        <g
          fill="currentColor"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.35"
          stroke="none"
          textAnchor="middle"
        >
          <text>
            <textPath href={`#${arcId}-top`} startOffset="50%">
              {CROMO_SEAL_ARC_TOP}
            </textPath>
          </text>
          <text>
            <textPath href={`#${arcId}-bottom`} startOffset="50%">
              {`DE ${teamSize}`}
            </textPath>
          </text>
        </g>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-start leading-none">
          <span className="mt-px text-[0.4rem] font-black">#</span>
          <span className="text-[1rem] font-black leading-[0.8] tracking-[-0.04em] tabular-nums">
            {rank}
          </span>
        </span>
      </span>
    </div>
  );
}

function ShirtOverprint({
  shirtNumber,
}: {
  readonly shirtNumber: number;
}): JSX.Element {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <p className="sr-only">{`Dorsal ${shirtNumber}`}</p>
      <div
        aria-hidden
        className="absolute -left-1 bottom-5"
        style={{
          transform: `rotate(${CROMO_INK_ROTATION_DEG}deg)`,
        }}
      >
        <span className="cromo-dorsal text-[4.5rem] font-black leading-[0.72] tracking-[-0.07em] tabular-nums">
          {shirtNumber}
        </span>
      </div>
    </div>
  );
}

function CromoPortrait(): JSX.Element {
  return (
    <div className="cromo-window w-full">
      <div className="cromo-silhouette">
        <div className="cromo-silhouette-stack">
          <div className="cromo-silhouette-head">
            <UserIcon className="h-11 w-11" weight="regular" />
          </div>
          <div className="cromo-silhouette-body" />
        </div>
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/45 to-transparent"
      />
      <ShirtOverprint shirtNumber={SEED.shirtNumber} />
    </div>
  );
}

function StreakCromoCard(): JSX.Element {
  const reducedMotion = useReducedMotion();
  const tilt = usePointerTilt(reducedMotion);

  return (
    <div className="cromo-root mb-0 mt-0 flex w-full flex-col items-center gap-3">
      <div className="cromo-stage" style={tilt.style}>
        <div className="cromo-translater">
          <div
            className="cromo-rotator"
            onPointerEnter={tilt.onPointerEnter}
            onPointerLeave={tilt.onPointerLeave}
            onPointerMove={tilt.onPointerMove}
            role="img"
            aria-label="Streak Cromo for Martín Vega, Valle Norte, MED, dorsal 8"
          >
            <div className="cromo-flip">
              <article
                className="cromo-frame cromo-front"
                data-cromo-foil="holo"
                data-streak-cromo-tier="5"
              >
                <div className="cromo-mat">
                  <span aria-hidden className="cromo-shine" />
                  <CromoPortrait />
                  <header className="relative z-1 space-y-0.5 px-0.5">
                    <p className="text-2xl font-bold leading-[1.05] tracking-[-0.02em]">
                      {SEED.playerName}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-70">
                      {SEED.positionLine}
                    </p>
                  </header>
                  <footer className="relative z-1 mt-auto flex flex-col gap-2">
                    <div className="relative flex items-center justify-between gap-3">
                      <div className="absolute top-3.5 left-1 flex items-end">
                        <p className="sr-only">
                          {`Puesto ${SEED.rank} de ${SEED.teamSize} por racha en el equipo`}
                        </p>
                        <span aria-hidden>
                          <ShirtInkSeal
                            rank={SEED.rank}
                            teamSize={SEED.teamSize}
                          />
                        </span>
                      </div>
                      <div className="cromo-crest">
                        {/* biome-ignore lint/performance/noImgElement: local demo crest */}
                        <img
                          alt=""
                          height={44}
                          src={SEED.clubCrestUrl}
                          width={44}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="cromo-chip flex w-fit min-w-24 items-stretch overflow-hidden rounded-[4px] border border-current text-[0.45rem] font-bold uppercase tracking-[0.08em] opacity-80">
                        <span className="relative z-[1] shrink-0 px-1.5 py-1">
                          LOADZONE
                        </span>
                        <span
                          aria-hidden
                          className="relative z-[1] w-3.5 shrink-0 border-x border-current bg-[repeating-linear-gradient(-45deg,transparent,transparent_1px,currentColor_1px,currentColor_2px)]"
                        />
                        <span className="relative z-[1] min-w-0 flex-1 truncate px-1.5 py-1 text-right normal-case tracking-normal">
                          {`${SEED.streakCount} días`}
                        </span>
                      </div>
                      <p className="cromo-team-name">{SEED.teamName}</p>
                    </div>
                  </footer>
                </div>
                <span aria-hidden className="cromo-glare" />
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StreakCromoPhone(): JSX.Element {
  return (
    <figure className="player-phone" aria-label="Player check-in on a phone">
      <div className="player-phone-screen">
        <StreakCromoCard />
      </div>
      <div className="player-phone-home" aria-hidden />
    </figure>
  );
}
