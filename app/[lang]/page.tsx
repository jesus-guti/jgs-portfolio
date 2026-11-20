import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { ProjectCard } from "../components/project-card";
import { ProjectNarrative } from "../components/project-narrative";
import { SiteHeader } from "../components/site-header";
import { GridBackground } from "../components/grid-background";
import { LabelCanvas } from "../components/label-canvas";
import { ImageLightbox } from "../components/image-lightbox";
import { LoopVideo } from "../components/loop-video";
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

const textLink =
  "inline-flex min-h-11 items-center font-mono text-meta text-text-default underline decoration-border-general underline-offset-4 transition-colors hover:text-text-strong hover:decoration-text-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-strong";

/** Text with **facts** in strong colour; the rest stays a step quieter. */
function Emphasis({ value }: { value: string }) {
  return value.split("**").map((part, index) =>
    index % 2 === 1 ? (
      <span className="text-text-strong" key={index}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const locale = await requireLocale(params);
  const dict = await getDictionary(locale);
  const { home, loadzone, case: caseCopy } = dict;
  const { hero } = home;
  const relyProject = home.projects.find(
    (project) => project.href === "/projects/rely-v2",
  );
  const otherProjects = home.projects.filter(
    (project) => project !== relyProject,
  );

  return (
    <div className="mx-auto max-w-[1200px]">
      <SiteHeader locale={locale} nav={dict.nav} />

      <main>
        <section className="relative px-6 pb-10 pt-8 md:px-container-px md:pb-14 md:pt-14">
          <GridBackground />

          {/* Mobile: statement → canvas → action → support, so the thing to touch
            and the primary action share the first viewport. Desktop: text left,
            canvas right; the actions line up with the foot of the canvas. */}
          <div className="relative z-10 grid grid-cols-[minmax(0,1fr)] gap-y-7 [grid-template-areas:'intro'_'canvas'_'actions'_'lead'] md:gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:grid-rows-[auto_1fr_auto] lg:gap-x-14 lg:gap-y-0 lg:[grid-template-areas:'intro_canvas'_'lead_canvas'_'actions_canvas']">
            <div className="[grid-area:intro]">
              <p className="font-mono text-meta text-text-default">
                {hero.eyebrow}
              </p>
              <h1 className="mt-4 max-w-[34rem] text-hero font-medium text-text-default md:mt-5 md:text-hero-lg">
                <Emphasis value={hero.statement} />
              </h1>
            </div>

            <p className="max-w-[34rem] text-lead text-text-default [grid-area:lead] lg:mt-6">
              {hero.lead}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-1 [grid-area:actions] lg:mt-8 lg:self-end">
              <Link
                className="group inline-flex min-h-11 items-center gap-2 border border-text-strong bg-text-strong px-4 text-lead font-medium text-surface-root transition-colors hover:bg-text-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-strong"
                href={localePath(locale, "/projects/rely-v2")}
              >
                {hero.cta}
                <ArrowRight
                  aria-hidden="true"
                  className="transition-transform duration-150 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none"
                  size={16}
                  weight="bold"
                />
              </Link>
              <div className="flex flex-wrap items-center gap-x-5">
                <a
                  className={textLink}
                  href="mailto:jesusgutierrezsiliceo@gmail.com"
                >
                  {home.contacts.email}
                </a>
                <a
                  className={textLink}
                  href="https://www.linkedin.com/in/jesús-gutiérrez-siliceo-52108524a"
                  rel="noreferrer"
                  target="_blank"
                >
                  {home.contacts.linkedin}
                </a>
              </div>
            </div>

            <div className="[grid-area:canvas] md:max-w-[30rem] lg:max-w-none">
              <LabelCanvas copy={hero.canvas} />
            </div>
          </div>
        </section>

        <section className="relative px-6 py-10 md:px-container-px">
          <h2 className="relative z-10 mb-2 text-heading-section font-semibold text-text-strong">
            {home.employmentWork}
          </h2>
          <div className="relative z-10 space-y-2">
            {relyProject ? (
              <article className="flex flex-col pb-10">
                <div className="min-w-0 flex-1">
                  <ProjectCard
                    description={relyProject.description}
                    href={localePath(locale, relyProject.href)}
                    name={relyProject.name}
                    stack={relyProject.stack}
                    status={relyProject.status as "production" | "open source"}
                    statusLabel={
                      relyProject.status === "production"
                        ? caseCopy.production
                        : relyProject.status
                    }
                    year={relyProject.year}
                  />
                </div>
                <Link
                  aria-label={hero.cta}
                  className="project-media group block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-strong"
                  href={localePath(locale, relyProject.href)}
                >
                  <Image
                    alt={dict.rely.previewAlt}
                    className="h-auto w-full transition-opacity duration-150 ease-out group-hover:opacity-90 motion-reduce:transition-none"
                    height={941}
                    sizes="(min-width: 1200px) 1072px, 100vw"
                    src="/projects/rely-v2/live-nut.png"
                    width={1920}
                  />
                </Link>
              </article>
            ) : null}
            <article className="flex flex-col gap-6 py-7">
              <ProjectNarrative
                className="min-w-0 flex-1"
                context={home.relyCloud.context}
                contextLabel={caseCopy.context}
                highlights={home.relyCloud.highlights}
                lead={home.relyCloud.lead}
                name={home.relyCloud.name}
                nameHref={localePath(locale, "/projects/rely-cloud")}
                stack={home.relyCloud.stack}
                status={home.relyCloud.status}
                year={home.relyCloud.year}
              />
              <ImageLightbox
                alt={home.relyCloud.dataAlt}
                height={938}
                src="/projects/rely-cloud/data-grid.png"
                triggerClassName="project-media block w-full rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text-strong"
                width={1920}
              >
                <Image
                  alt={home.relyCloud.dataAlt}
                  className="h-auto w-full"
                  height={938}
                  sizes="(min-width: 1200px) 1072px, 100vw"
                  src="/projects/rely-cloud/data-grid.png"
                  width={1920}
                />
              </ImageLightbox>
            </article>
            {otherProjects.map((project) => {
              const card = (
                <ProjectCard
                  description={project.description}
                  href={
                    project.href?.startsWith("/")
                      ? localePath(locale, project.href)
                      : project.href
                  }
                  name={project.name}
                  stack={project.stack}
                  status={project.status as "production" | "open source"}
                  statusLabel={
                    project.status === "production"
                      ? caseCopy.production
                      : project.status
                  }
                  year={project.year}
                />
              );

              if ("video" in project && project.video) {
                return (
                  <article
                    className="flex flex-col pb-10"
                    key={project.name}
                  >
                    <div className="min-w-0 flex-1">{card}</div>
                    <LoopVideo
                      className="project-media h-auto w-full"
                      height={project.video.height}
                      label={project.video.alt}
                      mp4={project.video.mp4}
                      poster={project.video.poster}
                      webm={project.video.webm}
                      width={project.video.width}
                    />
                  </article>
                );
              }

              if (!("image" in project) || !project.image) {
                return <div key={project.name}>{card}</div>;
              }

              return (
                <article
                  className="flex flex-col pb-10"
                  key={project.name}
                >
                  <div className="min-w-0 flex-1">{card}</div>
                  <ImageLightbox
                    alt={project.image.alt}
                    height={project.image.height}
                    src={project.image.src}
                    triggerClassName="project-media block w-full"
                    width={project.image.width}
                  >
                    <Image
                      alt={project.image.alt}
                      className="h-auto w-full"
                      height={project.image.height}
                      sizes="(min-width: 1200px) 1072px, 100vw"
                      src={project.image.src}
                      width={project.image.width}
                    />
                  </ImageLightbox>
                </article>
              );
            })}
          </div>
        </section>

        <section className="relative px-6 py-10 md:px-container-px">
          <h2 className="relative z-10 mb-2 text-heading-section font-semibold text-text-strong">
            {home.personalProduct}
          </h2>
          <div className="relative z-10 flex flex-col gap-6 py-7 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <ProjectNarrative
                context={loadzone.context}
                contextLabel={caseCopy.context}
                highlights={loadzone.highlights}
                lead={loadzone.thesis}
                name="Loadzone"
                nameHref={localePath(locale, "/projects/loadzone")}
                stack={loadzone.stack}
                status={caseCopy.production}
                year={loadzone.year}
              />
            </div>
            <div className="pointer-events-none mx-auto w-full max-w-[18rem] shrink-0 px-3 pb-12 md:mx-0">
              <StreakCromoCard copy={loadzone.cromo} />
            </div>
          </div>
        </section>

        <section className="relative px-6 py-8 md:px-container-px">
          <h2 className="relative z-10 mb-4 text-heading-section font-semibold text-text-strong">
            {home.oneWeek}
          </h2>
          <div className="relative z-10 flex flex-col gap-3">
            {home.oneWeekProjects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col gap-0.5 pb-3 last:pb-0 md:flex-row md:items-baseline md:gap-4"
              >
                {"year" in project && project.year ? (
                  <span className="shrink-0 font-mono text-caption text-text-weak">
                    {project.year}
                  </span>
                ) : null}
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
                          className="font-mono text-caption text-text-default underline decoration-border-special underline-offset-4 transition-colors hover:text-text-strong hover:decoration-text-weak focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-strong"
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
      </main>
    </div>
  );
}
