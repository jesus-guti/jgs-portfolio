import Link from "next/link";

type ProjectStatus = "production" | "in progress" | "open source";

interface ProjectCardProps {
  slug: string;
  name: string;
  year: string;
  stack: string[];
  description: string;
  status: ProjectStatus;
}

const statusStyles: Record<ProjectStatus, string> = {
  production: "border-green-800/50 text-green-400",
  "in progress": "border-amber-800/50 text-amber-400",
  "open source": "border-blue-800/50 text-blue-400",
};

export function ProjectCard({
  slug,
  name,
  year,
  stack,
  description,
  status,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group flex flex-col gap-3 rounded-lg border border-border-general p-5 transition-colors hover:border-text-weak"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-heading-section font-semibold text-text-strong">
          {name}
        </h3>
        <span className="text-caption font-mono text-text-weak">{year}</span>
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

      <p className="text-body text-text-default line-clamp-2">{description}</p>

      <div className="mt-auto pt-2">
        <span
          className={`inline-block rounded border px-2 py-0.5 font-mono text-[11px] ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
    </Link>
  );
}
