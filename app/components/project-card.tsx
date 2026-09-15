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
}

const rowClassName =
  "group block py-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-strong";

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
}: ProjectCardProps): JSX.Element {
  const external = href !== undefined && isExternalHref(href);

  return (
    <>
      <p className="font-mono text-caption capitalize text-text-weak">{status}</p>
      <div className="mt-2 flex items-baseline justify-between gap-4">
        <h3 className="flex items-center gap-1.5 text-heading-section font-semibold text-text-strong group-hover:underline group-hover:decoration-border-general group-hover:underline-offset-4">
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
      <p className="mt-3 max-w-[36rem] text-body text-text-default">
        {description}
      </p>
      <p className="mt-4 font-mono text-caption text-text-weak">
        {stack.join(" · ")}
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
