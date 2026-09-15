import Link from "next/link";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import type { JSX } from "react";

type ProjectStatus = "production" | "open source";

interface ProjectCardProps {
  name: string;
  year: string;
  stack: string[];
  description: string;
  status: ProjectStatus;
  href?: string;
}

const statusStyles: Record<ProjectStatus, string> = {
  production: "border-green-800/50 text-green-400",
  "open source": "border-blue-800/50 text-blue-400",
};

const cardClassName =
  "flex h-full flex-col gap-3 rounded-lg border border-border-general p-5";

function isExternalHref(href: string): boolean {
  return /^https?:\/\//.test(href);
}

export function ProjectCard({
  name,
  year,
  stack,
  description,
  status,
  href,
}: ProjectCardProps): JSX.Element {
  const external = href !== undefined && isExternalHref(href);

  const inner = (
    <>
      <div className="flex items-start justify-between">
        <h3 className="flex items-center gap-1.5 text-heading-section font-semibold text-text-strong">
          {name}
          {external ? (
            <ArrowSquareOut
              aria-hidden="true"
              className="text-text-weak"
              size={14}
              weight="regular"
            />
          ) : null}
        </h3>
        <span className="font-mono text-caption text-text-weak">{year}</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border-special px-1.5 py-0.5 font-mono text-[11px] text-text-weak"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="line-clamp-2 text-body text-text-default">{description}</p>

      <div className="mt-auto pt-2">
        <span
          className={`inline-block rounded border px-2 py-0.5 font-mono text-[11px] ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
    </>
  );

  if (href && external) {
    return (
      <a
        className={`${cardClassName} transition-colors hover:border-text-weak`}
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {inner}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        className={`${cardClassName} transition-colors hover:border-text-weak`}
        href={href}
      >
        {inner}
      </Link>
    );
  }

  return <div className={cardClassName}>{inner}</div>;
}
