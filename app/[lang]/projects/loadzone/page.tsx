import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

import { SiteHeader } from "../../../components/site-header";
import {
  CaseStudyFigure,
  CaseStudyPhoneFigure,
} from "./case-study-figure";
import { StreakCromoPhone } from "./streak-cromo-phone";
import { localePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { requireLocale } from "@/lib/i18n/require-locale";

export default async function LoadzoneCaseStudyPage({
  params,
}: PageProps<"/[lang]/projects/loadzone">) {
  const locale = await requireLocale(params);
  const dict = await getDictionary(locale);
  const { loadzone, case: caseCopy, nav } = dict;

  return (
    <div className="mx-auto max-w-[1080px] border-x border-b border-border-general">
      <SiteHeader locale={locale} nav={nav} />
      <article className="mx-auto max-w-[720px] px-6 py-10 md:px-container-px">
        <Link
          className="mb-8 inline-flex items-center gap-2 text-caption text-text-weak transition-colors hover:text-text-strong"
          href={localePath(locale)}
        >
          <ArrowLeft size={14} weight="regular" />
          {nav.work}
        </Link>

        <header className="mb-8">
          <p className="font-mono text-caption uppercase tracking-wide text-text-weak">
            {loadzone.origin}
          </p>
          <h1 className="mt-1 text-heading-display font-bold text-text-strong">
            Loadzone
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-caption text-text-weak">
            <span>{loadzone.role}</span>
            <span className="text-text-weaker">·</span>
            <span className="font-mono">2025</span>
            <span className="text-text-weaker">·</span>
            <span className="rounded border border-green-800/50 px-2 py-0.5 font-mono text-[11px] text-green-400">
              {caseCopy.production}
            </span>
          </div>
          <p className="mt-5 text-body text-text-default">{loadzone.thesis}</p>
        </header>

        <StreakCromoPhone />
        <p className="mb-12 mt-3 text-center text-caption text-text-weak">
          {loadzone.cromoCaption}
        </p>

        <section className="mb-12">
          <h2 className="mb-6 text-heading-section font-semibold text-text-strong">
            {caseCopy.decisions}
          </h2>
          <div className="flex flex-col gap-6">
            {loadzone.decisions.map((decision, index) => (
              <div key={decision.title}>
                <h3 className="mb-2 text-body font-semibold text-text-strong">
                  {index + 1}. {decision.title}
                </h3>
                <p className="text-body text-text-default">{decision.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-heading-section font-semibold text-text-strong">
            {caseCopy.proof}
          </h2>
          <CaseStudyFigure
            alt={loadzone.figures[0].alt}
            caption={loadzone.figures[0].caption}
            height={600}
            src="/projects/loadzone/staff-wellness-shell.png"
            width={1024}
          />
          <CaseStudyFigure
            alt={loadzone.figures[1].alt}
            caption={loadzone.figures[1].caption}
            height={312}
            src="/projects/loadzone/staff-wellness-table.png"
            width={1024}
          />
          <CaseStudyPhoneFigure
            alt={loadzone.figures[2].alt}
            caption={loadzone.figures[2].caption}
            height={1024}
            src="/projects/loadzone/player-check-in-form.png"
            width={577}
          />
          <CaseStudyFigure
            alt={loadzone.figures[3].alt}
            caption={loadzone.figures[3].caption}
            height={987}
            src="/projects/loadzone/staff-exercise-form.png"
            width={1024}
          />
          <CaseStudyFigure
            alt={loadzone.figures[4].alt}
            caption={loadzone.figures[4].caption}
            height={967}
            src="/projects/loadzone/staff-injuries.png"
            width={1024}
          />
          <CaseStudyFigure
            alt={loadzone.figures[5].alt}
            caption={loadzone.figures[5].caption}
            height={1024}
            maxWidthClassName="max-w-[16rem]"
            src="/projects/loadzone/staff-primeros-pasos.png"
            width={772}
          />
        </section>
      </article>
    </div>
  );
}
