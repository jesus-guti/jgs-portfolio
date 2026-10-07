import Link from "next/link";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import type { JSX, ReactNode } from "react";

type ProjectStatus = "production" | "open source";

interface ProjectCardProps {
  name: string;
  year: string;
  stack: string[];
  description: string;
  status: ProjectStatus;
  href?: string;
  featured?: boolean;
}

const rowClassName =
  "group block py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function isExternalHref(href: string): boolean {
  return /^https?:\/\//.test(href);
}

function ProjectBody({
  name,
  year,
  stack,
  description,
  status,
  href,
  featured = false,
}: ProjectCardProps): JSX.Element {
  const external = href !== undefined && isExternalHref(href);

  return (
    <>
      <div className="flex items-baseline justify-between gap-4">
        <h2
          className={`flex items-center gap-1.5 text-heading-section font-semibold transition-[color] duration-[120ms] ease ${
            featured
              ? "text-accent group-hover:text-accent-hover"
              : "text-text-strong group-hover:text-accent"
          }`}
        >
          {name}
          {external ? (
            <ArrowSquareOut
              aria-hidden="true"
              className="text-text-weak"
              size={14}
              weight="regular"
            />
          ) : null}
        </h2>
        <span className="font-mono text-caption text-text-weak">{year}</span>
      </div>
      <p className="mt-2 max-w-[36rem] text-body text-text-default">
        {description}
      </p>
      <p className="mt-3 font-mono text-caption text-text-weak">
        <span className={status === "production" ? "text-accent" : undefined}>
          {status}
        </span>
        <span className="text-text-weaker"> · </span>
        {stack.join(", ")}
      </p>
    </>
  );
}

function ProjectHref({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}): JSX.Element {
  if (!href) {
    return <div className={rowClassName}>{children}</div>;
  }

  if (isExternalHref(href)) {
    return (
      <a
        className={rowClassName}
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={rowClassName} href={href}>
      {children}
    </Link>
  );
}

export function ProjectCard(props: ProjectCardProps): JSX.Element {
  return (
    <ProjectHref href={props.href}>
      <ProjectBody {...props} />
    </ProjectHref>
  );
}
