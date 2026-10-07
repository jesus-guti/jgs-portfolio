import Link from "next/link";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

import { PorcoPlaneLazy } from "../../components/porco-plane-lazy";
import { SiteHeader } from "../../components/site-header";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { localePath, type Locale } from "@/lib/i18n/config";
import { requireLocale } from "@/lib/i18n/require-locale";

type HomeCopy = Dictionary["home"];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b border-border-special pb-1 font-mono text-caption uppercase tracking-[0.06em] text-text-weak">
      {children}
    </h2>
  );
}

function WorkList({ locale, home }: { locale: Locale; home: HomeCopy }) {
  const items = [
    ...home.projects.map((project) => ({
      name: project.name,
      href: project.href
        ? project.href.startsWith("/")
          ? localePath(locale, project.href)
          : project.href
        : undefined,
      external: Boolean(project.href && !project.href.startsWith("/")),
      detail: project.description,
    })),
    {
      name: "Loadzone",
      href: localePath(locale, "/projects/loadzone"),
      external: false,
      detail: home.loadzoneThesis,
    },
  ];

  return (
    <ul className="divide-y divide-border-special">
      {items.map((item) => (
        <li key={item.name} className="py-3 first:pt-0 last:pb-0">
          {item.href ? (
            <Link
              className="font-semibold text-text-strong transition-colors duration-[120ms] ease-[var(--ease-out)] hover:text-accent"
              href={item.href}
              {...(item.external
                ? { rel: "noreferrer", target: "_blank" }
                : {})}
            >
              {item.name}
            </Link>
          ) : (
            <span className="font-semibold text-text-strong">{item.name}</span>
          )}
          <p className="mt-1 text-caption text-text-weak">{item.detail}</p>
        </li>
      ))}
    </ul>
  );
}

function OnTheWeb() {
  return (
    <ul className="flex flex-col gap-1">
      <li>
        <a
          className="inline-flex h-11 items-center gap-2 text-body text-text-default transition-colors duration-[120ms] ease-[var(--ease-out)] hover:text-accent"
          href="https://github.com/jesus-guti"
          rel="noreferrer"
          target="_blank"
        >
          <GithubLogo size={18} weight="regular" />
          @jesus-guti
        </a>
      </li>
      <li>
        <a
          className="inline-flex h-11 items-center gap-2 text-body text-text-default transition-colors duration-[120ms] ease-[var(--ease-out)] hover:text-accent"
          href="https://www.linkedin.com/in/jesús-gutiérrez-siliceo-52108524a"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedinLogo size={18} weight="regular" />
          LinkedIn
        </a>
      </li>
      <li>
        <a
          className="inline-flex h-11 items-center gap-2 text-body text-text-default transition-colors duration-[120ms] ease-[var(--ease-out)] hover:text-accent"
          href="mailto:jesusgutierrezsiliceo@gmail.com"
        >
          <EnvelopeSimple size={18} weight="regular" />
          Email
        </a>
      </li>
    </ul>
  );
}

export default async function AboutPage({
  params,
}: PageProps<"/[lang]/about">) {
  const locale = await requireLocale(params);
  const dict = await getDictionary(locale);
  const { about, home } = dict;

  return (
    <div className="mx-auto max-w-[1080px] border-x border-b border-border-general">
      <SiteHeader locale={locale} nav={dict.nav} />
      <article className="mx-auto max-w-[640px] px-6 py-12 md:px-container-px">
        <header>
          <h1 className="text-heading-display font-bold text-text-strong">
            {about.title}
          </h1>
          <p className="mt-2 text-caption text-text-weak">{about.location}</p>
        </header>
        <div className="mt-10 flex flex-col gap-10">
          <section>
            <SectionTitle>{about.howIWork ?? about.bio}</SectionTitle>
            <div className="flex flex-col gap-4 text-body text-text-default">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
          <section>
            <SectionTitle>{about.work}</SectionTitle>
            <WorkList home={home} locale={locale} />
          </section>
          <section>
            <SectionTitle>{about.iLove}</SectionTitle>
            <p className="text-body text-text-default">
              {about.iLoveItems.join(", ")}
            </p>
          </section>
          <section>
            <SectionTitle>{about.onTheWeb}</SectionTitle>
            <OnTheWeb />
          </section>
        </div>
      </article>
      <section className="border-t border-border-special px-6 pb-10 pt-6 md:px-container-px">
        <PorcoPlaneLazy className="mx-auto h-[min(40vh,280px)] w-full max-w-[420px]" />
        <p className="mt-3 text-center font-mono text-caption text-text-weak">
          {about.planeCredit}
        </p>
      </section>
    </div>
  );
}
