"use client";

import { useEffect, useRef } from "react";
import type { JSX } from "react";

type LoopVideoProps = {
  readonly mp4: string;
  readonly webm: string;
  readonly poster: string;
  readonly width: number;
  readonly height: number;
  readonly label: string;
  readonly className?: string;
};

// Muted UI loop. It only plays when the viewer has not asked for reduced
// motion; otherwise the poster stays and the native controls let them play it.
export function LoopVideo({
  mp4,
  webm,
  poster,
  width,
  height,
  label,
  className,
}: LoopVideoProps): JSX.Element {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      video.controls = true;
      return;
    }
    video.play().catch(() => {
      video.controls = true;
    });
  }, []);

  return (
    <video
      aria-label={label}
      className={className}
      height={height}
      loop
      muted
      playsInline
      poster={poster}
      preload="metadata"
      ref={ref}
      width={width}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
