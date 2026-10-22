import {
  CaseStudyBackLink,
  CaseStudyHeader,
} from "../../../components/case-study-header";
import { ProjectNarrative } from "../../../components/project-narrative";
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
        <CaseStudyBackLink href={localePath(locale)} label={nav.work} />
        <CaseStudyHeader
          origin={loadzone.origin}
          role={loadzone.role}
          stack={loadzone.stack}
          status={caseCopy.inProgress}
          thesis={loadzone.thesis}
          thesisClassName="mt-5 max-w-[36rem] text-body font-bold leading-relaxed text-text-strong"
          title="Loadzone"
          year={loadzone.year}
        />
        <ProjectNarrative
          className="mb-12"
          context={loadzone.context}
          contextLabel={caseCopy.context}
          highlights={loadzone.highlights}
        />

        <StreakCromoPhone copy={loadzone.cromo} />
        <p className="mb-12 mt-3 text-center text-caption text-text-weak">
          {loadzone.cromoCaption}
        </p>

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
