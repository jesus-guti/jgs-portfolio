import { CaseStudyFigure } from "../../../components/case-study-figure";
import {
  CaseStudyBackLink,
  CaseStudyHeader,
} from "../../../components/case-study-header";
import {
  CaseProse,
  CaseRow,
  CaseRowTitle,
  CaseSectionLabel,
} from "../../../components/case-study-layout";
import { SiteHeader } from "../../../components/site-header";
import { localePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { requireLocale } from "@/lib/i18n/require-locale";

const narrowFigure = "max-w-[16rem]";

export default async function RelyCloudCaseStudyPage({
  params,
}: PageProps<"/[lang]/projects/rely-cloud">) {
  const locale = await requireLocale(params);
  const dict = await getDictionary(locale);
  const { relyCloudCase: cloud, case: caseCopy, nav } = dict;

  return (
    <div className="mx-auto max-w-[1200px]">
      <SiteHeader locale={locale} nav={nav} />
      <article className="px-6 py-10 md:px-container-px">
        <CaseStudyBackLink href={localePath(locale)} label={nav.work} />
        <CaseStudyHeader
          origin={cloud.origin}
          role={cloud.role}
          split
          stack={cloud.stack}
          status={caseCopy.production}
          thesis={cloud.thesis}
          title="Rely Cloud"
          year="2023"
        />

        <CaseStudyFigure
          alt={cloud.previewAlt}
          caption={cloud.previewCaption}
          height={938}
          priority
          src="/projects/rely-cloud/data-grid.png"
          width={1920}
        />

        <CaseSectionLabel>{caseCopy.decisions}</CaseSectionLabel>
        <div className="flex flex-col gap-14">
          {cloud.decisions.map((decision, index) => (
            <CaseRow
              aside={<CaseRowTitle index={index + 1} title={decision.title} />}
              key={decision.title}
            >
              <CaseProse value={decision.content} />
            </CaseRow>
          ))}
        </div>

        <CaseRow
          aside={<CaseRowTitle title={caseCopy.result} />}
          className="mb-16 mt-16 border-t border-border-general pt-6"
        >
          <CaseProse value={cloud.result} />
        </CaseRow>

        <section>
          <CaseSectionLabel>{caseCopy.proof}</CaseSectionLabel>
          {cloud.figures.map((figure) => (
            <CaseStudyFigure
              alt={figure.alt}
              caption={figure.caption}
              height={figure.height}
              key={figure.src}
              maxWidthClassName={
                figure.height > figure.width ? narrowFigure : undefined
              }
              src={figure.src}
              width={figure.width}
            />
          ))}
        </section>
      </article>
    </div>
  );
}
