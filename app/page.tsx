import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { ProjectCard } from "./components/project-card";
import { SiteHeader } from "./components/site-header";
import { SectionIntersection } from "./components/section-intersection";
import { GridBackground } from "./components/grid-background";
import { StreakCromoCard } from "./projects/loadzone/streak-cromo-phone";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const employmentWork = [
  {
    name: "rely v2",
    year: "2025",
    stack: ["Next.js", "Go", "WebSockets", "Tailwind v4"],
    description:
      "Industrial quality inspection on the line. Multi-tenant Hub of Stations, no-code Recipe graph, live OK/KO for operators.",
    status: "production" as const,
    href: "/projects/rely-v2",
  },
  {
    name: "Safe",
    year: "2023",
    stack: ["React", "WebRTC", "Multi-tenant", "Tailwind"],
    description:
      "Workplace safety on existing CCTV. Real-time risk events, audits and reporting, private network access.",
    status: "production" as const,
    href: "https://www.safehs.ai/",
  },
  {
    name: "Sorolla",
    year: "2023",
    stack: ["React", "TypeScript", "npm", "TurboRepo"],
    description:
      "Open-source React component library for image and video annotation. Bounding box, segmentation, and oriented bounding box support.",
    status: "open source" as const,
  },
];

type OneWeekProject = {
  year: string;
  name: string;
  description: string;
  stack: string;
  duration?: string;
  hrefs?: { label: string; href: string }[];
};

const oneWeekProjects: OneWeekProject[] = [
  {
    year: "2025",
    name: "Storyblok blocks",
    description:
      "Reusable CMS blocks behind the live rely and Safe marketing sites.",
    stack: "Storyblok, Tailwind",
    hrefs: [
      { label: "relyqa.com", href: "https://relyqa.com/" },
      { label: "safehs.ai", href: "https://www.safehs.ai/" },
    ],
  },
  {
    year: "2024",
    name: "Egg grading vision system",
    description:
      "Automated quality inspection for an egg production line using computer vision.",
    stack: "Python, OpenCV",
    duration: "7 days",
  },
  {
    year: "2024",
    name: "Racing exercise tracker",
    description:
      "Pose estimation model to track and analyze squat form for a racing team.",
    stack: "Python, MediaPipe",
    duration: "6 days",
  },
  {
    year: "2023",
    name: "Internal dashboard",
    description:
      "Data visualization tool for operations team to monitor model performance metrics.",
    stack: "Next.js, Recharts",
    duration: "5 days",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-[1080px] border-x border-b border-border-general">
      <SiteHeader />

      <section className="relative border-b border-border-general px-6 py-12 md:px-container-px">
        <GridBackground />
        <SectionIntersection className="hidden md:block" position="top-left" />
        <SectionIntersection className="hidden md:block" position="top-right" />
        <SectionIntersection
          className="hidden md:block"
          position="bottom-left"
        />
        <SectionIntersection
          className="hidden md:block"
          position="bottom-right"
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <Image
            alt="Jesús Gutiérrez"
            className="mb-4 rounded-full border border-border-general object-cover"
            height={48}
            src="/jesus-profile.jpeg"
            width={48}
          />
          <h1 className="text-heading-display font-bold tracking-[-0.02em] text-text-strong">
            Jesús Gutiérrez Siliceo
          </h1>
          <p className="mt-1.5 font-mono text-caption tracking-[0.04em] text-text-weak">
            Frontend &amp; Product Engineering
          </p>
          <p className="mt-4 max-w-[28rem] text-[15px] leading-[1.65] text-text-strong">
            Interfaces and product systems shipped under real constraints —
            factory floors, production teams.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              aria-label="GitHub"
              className="text-text-weak transition-colors hover:text-text-strong"
              href="https://github.com/jesus-guti"
              rel="noreferrer"
              target="_blank"
            >
              <GithubLogo size={20} weight="regular" />
            </a>
            <a
              aria-label="LinkedIn"
              className="text-text-weak transition-colors hover:text-text-strong"
              href="https://www.linkedin.com/in/jesús-gutiérrez-siliceo-52108524a"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedinLogo size={20} weight="regular" />
            </a>
            <a
              aria-label="Email"
              className="text-text-weak transition-colors hover:text-text-strong"
              href="mailto:jesusgutierrezsiliceo@gmail.com"
            >
              <EnvelopeSimple size={20} weight="regular" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative border-b border-border-general px-6 py-10 md:px-container-px">
        <SectionIntersection className="hidden md:block" position="top-left" />
        <SectionIntersection className="hidden md:block" position="top-right" />
        <h2 className="relative z-10 mb-6 text-heading-section font-semibold text-text-strong">
          Employment work
        </h2>
        <div className="relative z-10 grid gap-5 md:grid-cols-2">
          {employmentWork.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>

      <section className="relative border-b border-border-general px-6 py-10 md:px-container-px">
        <SectionIntersection className="hidden md:block" position="top-left" />
        <SectionIntersection className="hidden md:block" position="top-right" />
        <p className="relative z-10 mb-3 font-mono text-caption uppercase tracking-wide text-text-weak">
          Personal product
        </p>
        <Link
          className="relative z-10 block rounded-lg border border-border-general transition-colors hover:border-text-weak"
          href="/projects/loadzone"
        >
          <div className="flex flex-col gap-6 p-5 md:flex-row md:items-center">
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-heading-section font-semibold text-text-strong">
                  Loadzone
                </h2>
                <span className="shrink-0 font-mono text-caption text-text-weak">
                  2025
                </span>
              </div>
              <p className="mt-3 text-body text-text-default">
                One club, two products — an operational staff scan of wellness
                and load, and a player check-in that is one question at a time.
                The Streak Cromo is the identity that grows with that habit.
              </p>
              <span className="mt-4 inline-block rounded border border-green-800/50 px-2 py-0.5 font-mono text-[11px] text-green-400">
                production
              </span>
            </div>
            <div className="pointer-events-none mx-auto h-[15.5rem] w-[11.5rem] shrink-0 overflow-hidden md:mx-0">
              <div className="origin-top scale-[0.7]">
                <StreakCromoCard />
              </div>
            </div>
          </div>
        </Link>
      </section>

      <section className="relative px-6 py-8 md:px-container-px">
        <SectionIntersection className="hidden md:block" position="top-left" />
        <SectionIntersection className="hidden md:block" position="top-right" />
        <h2 className="relative z-10 mb-4 text-heading-section font-semibold text-text-strong">
          1-Week Projects
        </h2>
        <div className="relative z-10 flex flex-col gap-3">
          {oneWeekProjects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col gap-0.5 border-b border-border-special pb-3 last:border-b-0 last:pb-0 md:flex-row md:items-baseline md:gap-4"
            >
              <span className="shrink-0 font-mono text-caption text-text-weak">
                {project.year}
              </span>
              <div className="flex-1">
                <span className="text-body font-medium text-text-strong">
                  {project.name}
                </span>
                <span className="text-body text-text-default">
                  {" "}
                  — {project.description}
                </span>
                {project.hrefs ? (
                  <span className="mt-1 flex flex-wrap gap-x-3">
                    {project.hrefs.map((link) => (
                      <a
                        className="font-mono text-caption text-text-weak transition-colors hover:text-text-strong"
                        href={link.href}
                        key={link.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {link.label}
                      </a>
                    ))}
                  </span>
                ) : null}
              </div>
              <div className="flex shrink-0 items-center gap-3 font-mono text-caption text-text-weak">
                <span>{project.stack}</span>
                {project.duration ? (
                  <>
                    <span className="text-text-weaker">·</span>
                    <span>{project.duration}</span>
                  </>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
