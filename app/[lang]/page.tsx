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
  const { home, case: caseCopy } = dict;

  return (
    <div className="mx-auto max-w-[1080px] border-x border-b border-border-general">
      <SiteHeader locale={locale} nav={dict.nav} />

      <section className="border-b border-border-general px-6 py-10 md:px-container-px md:py-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
          <ImageLightbox
            alt="Jesús Gutiérrez"
            height={800}
            src="/jesus-profile.jpeg"
            triggerClassName="shrink-0 overflow-hidden rounded-full border border-border-general"
            width={800}
          >
            <Image
              alt="Jesús Gutiérrez"
              className="block rounded-full object-cover"
              height={48}
              priority
              src="/jesus-profile.jpeg"
              width={48}
            />
          </ImageLightbox>
          <div className="min-w-0">
            <p className="font-mono text-caption tracking-[0.04em] text-text-weak">
              {home.role}
            </p>
            <h1 className="mt-2 max-w-[36rem] text-body font-normal text-text-strong">
              {home.thesis}
            </h1>
            <div className="mt-5 flex items-center gap-1">
              <a
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center text-text-weak transition-colors duration-[120ms] ease-[var(--ease-out)] hover:text-accent"
                href="https://github.com/jesus-guti"
                rel="noreferrer"
                target="_blank"
              >
                <GithubLogo size={20} weight="regular" />
              </a>
              <a
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center text-text-weak transition-colors duration-[120ms] ease-[var(--ease-out)] hover:text-accent"
                href="https://www.linkedin.com/in/jesús-gutiérrez-siliceo-52108524a"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedinLogo size={20} weight="regular" />
              </a>
              <a
                aria-label="Email"
                className="inline-flex h-11 w-11 items-center justify-center text-text-weak transition-colors duration-[120ms] ease-[var(--ease-out)] hover:text-accent"
                href="mailto:jesusgutierrezsiliceo@gmail.com"
              >
                <EnvelopeSimple size={20} weight="regular" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border-general px-6 py-section-py md:px-container-px">
        <p className="mb-1 font-mono text-caption uppercase tracking-[0.06em] text-text-weak">
          {home.employmentWork}
        </p>
        <div className="divide-y divide-border-special">
          {home.projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              description={project.description}
              featured={index === 0}
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

      <section className="px-6 py-section-py md:px-container-px">
        <p className="mb-1 font-mono text-caption uppercase tracking-[0.06em] text-text-weak">
          {home.personalProduct}
        </p>
        <Link
          className="group flex flex-col gap-6 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:flex-row md:items-center"
          href={localePath(locale, "/projects/loadzone")}
        >
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-heading-section font-semibold text-text-strong transition-[color] duration-[120ms] ease group-hover:text-accent">
                Loadzone
              </h2>
              <span className="font-mono text-caption text-text-weak">2025</span>
            </div>
            <p className="mt-2 max-w-[36rem] text-body text-text-default">
              {home.loadzoneThesis}
            </p>
            <p className="mt-3 font-mono text-caption text-text-weak">
              <span className="text-accent">{caseCopy.production}</span>
            </p>
          </div>
          <div className="pointer-events-none mx-auto h-[10rem] w-[7.5rem] shrink-0 overflow-hidden md:mx-0">
            <div className="origin-top scale-[0.48]">
              <StreakCromoCard />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
