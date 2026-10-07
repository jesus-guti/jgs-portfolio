"use client";

import dynamic from "next/dynamic";
import type { JSX } from "react";

const PorcoPlane = dynamic(
  () => import("./porco-plane").then((mod) => mod.PorcoPlane),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden
        className="h-[min(40vh,280px)] w-full"
      />
    ),
  },
);

export function PorcoPlaneLazy({
  className,
}: {
  className?: string;
}): JSX.Element {
  return <PorcoPlane className={className} />;
}
