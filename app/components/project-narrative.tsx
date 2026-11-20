import Link from "next/link";
import type { JSX } from "react";

import { EmphasisText } from "./emphasis-text";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-strong";

type ProjectNarrativeProps = {
  name?: string;
  year?: string;
  status?: string;
  nameHref?: string;
  stack?: string;
  lead?: string;
  highlights: readonly string[];
  contextLabel: string;
  context: string;
  className?: string;
};

export function ProjectNarrative({
  name,
  year,
  status,
  nameHref,
  stack,
  lead,
  highlights,
  contextLabel,
  context,
  className,
}: ProjectNarrativeProps): JSX.Element {
  return (
    <div className={className}>
      {status ? (
        <p className="font-mono text-caption capitalize text-text-weak">
          {status}
        </p>
      ) : null}
      {name ? (
        <div className="mt-2 flex items-baseline gap-4">
          <h3 className="text-heading-section font-semibold text-text-strong">
            {nameHref ? (
              <Link
                className={`underline decoration-transparent underline-offset-4 transition-colors hover:decoration-border-general ${focusRing}`}
                href={nameHref}
              >
                {name}
              </Link>
            ) : (
              name
            )}
          </h3>
          {year ? (
            <span className="font-mono text-caption text-text-weak">{year}</span>
          ) : null}
        </div>
      ) : null}
      {stack ? (
        <p className="mt-3 font-mono text-caption text-text-weak">{stack}</p>
      ) : null}
      {lead ? (
        <p className="mt-3 max-w-[36rem] text-body font-bold leading-relaxed text-text-strong">
          {lead}
        </p>
      ) : null}
      <ul className="mt-3 max-w-[36rem] list-disc space-y-2 pl-5 text-body leading-relaxed text-text-default">
        {highlights.map((highlight) => (
          <li key={highlight}>
            <EmphasisText value={highlight} />
          </li>
        ))}
      </ul>
      <details className="mt-4 max-w-[36rem]">
        <summary
          className={`block min-h-11 cursor-pointer py-3 text-caption font-medium text-text-default ${focusRing}`}
        >
          {contextLabel}
        </summary>
        <p className="pb-1 text-body leading-relaxed text-text-default">
          {context}
        </p>
      </details>
    </div>
  );
}
