import type { JSX, ReactNode } from "react";

import { EmphasisText } from "./emphasis-text";

/**
 * Two-column row for case studies: a heading column that stays in view while
 * its text scrolls, and the text held at a readable 36rem. Stacks below lg.
 */
export function CaseRow({
  aside,
  children,
  className,
}: {
  aside: ReactNode;
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={`grid gap-y-3 lg:grid-cols-[minmax(0,1fr)_36rem] lg:gap-x-16 ${className ?? ""}`}
    >
      <div className="lg:sticky lg:top-8 lg:self-start">{aside}</div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export function CaseRowTitle({
  index,
  title,
}: {
  index?: number;
  title: string;
}): JSX.Element {
  return (
    <h3 className="text-heading-section font-semibold text-text-strong lg:max-w-[18rem]">
      {index === undefined ? null : (
        <span className="mb-1 block font-mono text-caption font-normal text-text-weak">
          {String(index).padStart(2, "0")}
        </span>
      )}
      {title}
    </h3>
  );
}

/** Paragraphs separated by a blank line, with `**bold**` support. */
export function CaseProse({ value }: { value: string }): JSX.Element {
  return (
    <div className="flex flex-col gap-4 text-body leading-relaxed text-text-default">
      {value.split("\n\n").map((paragraph) => (
        <p key={paragraph}>
          <EmphasisText value={paragraph} />
        </p>
      ))}
    </div>
  );
}

export function CaseSectionLabel({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <h2 className="mb-8 border-t border-border-general pt-6 font-mono text-caption text-text-weak">
      {children}
    </h2>
  );
}
