import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

import { ProjectCard } from "../components/project-card";
import { SiteHeader } from "../components/site-header";
import { SectionIntersection } from "../components/section-intersection";
import { GridBackground } from "../components/grid-background";
import { ImageLightbox } from "../components/image-lightbox";
import { StreakCromoCard } from "./projects/loadzone/streak-cromo-phone";
import { localePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { requireLocale } from "@/lib/i18n/require-locale";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const locale = await requireLocale(params);
  return {
    alternates: {
      canonical: localePath(locale),
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
  };
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const locale = await requireLocale(params);
  const dict = await getDictionary(locale);
  const { home } = dict;

  return (
    <div className="mx-auto max-w-[1080px] border-x border-b border-border-general">
      <SiteHeader locale={locale} nav={dict.nav} />

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
          <ImageLightbox
            alt="Jesús Gutiérrez"
            height={800}
            src="/jesus-profile.jpeg"
            triggerClassName="mb-4 overflow-hidden rounded-full border border-border-general"
            width={800}
          >
            <Image
              alt="Jesús Gutiérrez"
              className="block rounded-full object-cover"
              height={48}
              src="/jesus-profile.jpeg"
              width={48}
            />
          </ImageLightbox>
          <h1 className="text-heading-display font-bold tracking-[-0.02em] text-text-strong">
            Jesús Gutiérrez Siliceo
          </h1>
          <p className="mt-1.5 font-mono text-caption tracking-[0.04em] text-text-weak">
            {home.role}
          </p>
          <p className="mt-4 max-w-[28rem] text-[15px] leading-[1.65] text-text-strong">
            {home.thesis}
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
        <h2 className="relative z-10 mb-2 text-heading-section font-semibold text-text-strong">
          {home.employmentWork}
        </h2>
        <div className="relative z-10 divide-y divide-border-special">
          {home.projects.map((project) => (
            <ProjectCard
              key={project.name}
              description={project.description}
              href={
                project.href?.startsWith("/")
                  ? localePath(locale, project.href)
                  : project.href
              }
              name={project.name}
              stack={project.stack}
              status={project.status as "production" | "open source"}
              year={project.year}
            />
          ))}
        </div>
      </section>

      <section className="relative border-b border-border-general px-6 py-10 md:px-container-px">
        <SectionIntersection className="hidden md:block" position="top-left" />
        <SectionIntersection className="hidden md:block" position="top-right" />
        <p className="relative z-10 mb-2 font-mono text-caption text-text-weak">
          {home.personalProduct}
        </p>
        <Link
          className="group relative z-10 flex flex-col gap-6 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-strong md:flex-row md:items-center"
          href={localePath(locale, "/projects/loadzone")}
        >
          <div className="min-w-0 flex-1">
            <p className="font-mono text-caption capitalize text-text-weak">
              production
            </p>
            <div className="mt-2 flex items-baseline justify-between gap-4">
              <h2 className="text-heading-section font-semibold text-text-strong group-hover:underline group-hover:decoration-border-general group-hover:underline-offset-4">
                Loadzone
              </h2>
              <span className="font-mono text-caption text-text-weak">
                2025
              </span>
            </div>
            <p className="mt-3 max-w-[36rem] text-body text-text-default">
              {home.loadzoneThesis}
            </p>
          </div>
          <div className="pointer-events-none mx-auto h-[15.5rem] w-[11.5rem] shrink-0 overflow-hidden md:mx-0">
            <div className="origin-top scale-[0.7]">
              <StreakCromoCard />
            </div>
          </div>
        </Link>
      </section>

      <section className="relative px-6 py-8 md:px-container-px">
        <SectionIntersection className="hidden md:block" position="top-left" />
        <SectionIntersection className="hidden md:block" position="top-right" />
        <h2 className="relative z-10 mb-4 text-heading-section font-semibold text-text-strong">
          {home.oneWeek}
        </h2>
        <div className="relative z-10 flex flex-col gap-3">
          {home.oneWeekProjects.map((project) => (
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
                {"hrefs" in project && project.hrefs ? (
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
                {"duration" in project && project.duration ? (
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
