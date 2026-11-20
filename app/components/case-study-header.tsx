import Link from "next/link";
import { ArrowLeft, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import type { JSX } from "react";

import { EmphasisText } from "./emphasis-text";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-strong";

export function CaseStudyBackLink({
  href,
  label,
}: {
  href: string;
  label: string;
}): JSX.Element {
  return (
    <Link
      className={`mb-8 inline-flex min-h-11 items-center gap-2 text-caption text-text-weak transition-colors hover:text-text-strong ${focusRing}`}
      href={href}
    >
      <ArrowLeft aria-hidden="true" size={14} weight="regular" />
      {label}
    </Link>
  );
}

export function CaseStudyHeader({
  origin,
  title,
  role,
  year,
  status,
  stack,
  thesis,
  thesisClassName,
  split,
  externalHref,
  externalLabel,
}: {
  origin: string;
  title: string;
  role: string;
  year: string;
  status: string;
  stack?: string;
  thesis: string;
  thesisClassName?: string;
  /** Wide case layout: meta on the left, thesis as a lead on the right. */
  split?: boolean;
  externalHref?: string;
  externalLabel?: string;
}): JSX.Element {
  return (
    <header
      className={
        split
          ? "mb-10 grid gap-y-6 lg:grid-cols-[minmax(0,1fr)_36rem] lg:gap-x-16"
          : "mb-10"
      }
    >
      <div>
        <p className="font-mono text-caption text-text-weak">{origin}</p>
        <h1 className="mt-2 text-heading-display font-bold tracking-[-0.02em] text-text-strong">
          {title}
        </h1>
        <p className="mt-3 text-caption text-text-default">{role}</p>
        <p className="mt-1 font-mono text-caption text-text-weak">
          <span>{year}</span>
          <span aria-hidden="true" className="text-text-weaker">
            {" "}
            ·{" "}
          </span>
          <span className="capitalize">{status}</span>
        </p>
        {stack ? (
          <p className="mt-2 font-mono text-caption text-text-weak">{stack}</p>
        ) : null}
        {externalHref && externalLabel ? (
          <p className="mt-3">
            <a
              className={`inline-flex min-h-11 items-center gap-1.5 font-mono text-caption text-text-weak transition-colors hover:text-text-strong ${focusRing}`}
              href={externalHref}
              rel="noreferrer"
              target="_blank"
            >
              {externalLabel}
              <ArrowSquareOut aria-hidden="true" size={14} weight="regular" />
            </a>
          </p>
        ) : null}
      </div>
      {split ? (
        <p className="text-lead text-text-default lg:pt-6">
          <EmphasisText value={thesis} />
        </p>
      ) : (
        <p
          className={
            thesisClassName ?? "mt-5 max-w-[36rem] text-body text-text-default"
          }
        >
          <EmphasisText value={thesis} />
        </p>
      )}
    </header>
  );
}
