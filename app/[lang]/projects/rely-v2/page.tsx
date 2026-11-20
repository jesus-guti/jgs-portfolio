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

// Same order as `rely.figures` in the dictionaries.
const images = [
  { src: "/projects/rely-v2/stations.png", width: 1024, height: 634 },
  { src: "/projects/rely-v2/recipe-flow-nodes.png", width: 1920, height: 941 },
  { src: "/projects/rely-v2/overlays.png", width: 1024, height: 634 },
  { src: "/projects/rely-v2/analytics.png", width: 1024, height: 634 },
] as const;

// Which image sits under each decision; the rest go to Proof.
// stations.png (index 0) is out: its Line 1 thumbnail shows a client PCB.
const decisionImage: readonly (number | null)[] = [null, 1, null];
const proofImages = [2, 3] as const;

export default async function RelyCaseStudyPage({
  params,
}: PageProps<"/[lang]/projects/rely-v2">) {
  const locale = await requireLocale(params);
  const dict = await getDictionary(locale);
  const { rely, case: caseCopy, nav } = dict;

  const figure = (index: number) => (
    <CaseStudyFigure
      alt={rely.figures[index].alt}
      caption={rely.figures[index].caption}
      height={images[index].height}
      key={images[index].src}
      src={images[index].src}
      width={images[index].width}
    />
  );

  return (
    <div className="mx-auto max-w-[1200px]">
      <SiteHeader locale={locale} nav={nav} />
      <article className="px-6 py-10 md:px-container-px">
        <CaseStudyBackLink href={localePath(locale)} label={nav.work} />
        <CaseStudyHeader
          externalHref="https://relyqa.com/"
          externalLabel="relyqa.com"
          origin={rely.origin}
          role={rely.role}
          split
          stack={rely.stack}
          status={caseCopy.production}
          thesis={rely.thesis}
          title="Rely"
          year="2025"
        />

        <CaseStudyFigure
          alt={rely.previewAlt}
          caption={rely.previewCaption}
          height={941}
          priority
          src="/projects/rely-v2/live-nut.png"
          width={1920}
        />

        <CaseSectionLabel>{caseCopy.decisions}</CaseSectionLabel>
        <div className="flex flex-col gap-14">
          {rely.decisions.map((decision, index) => {
            const imageIndex = decisionImage[index];
            return (
              <section key={decision.title}>
                <CaseRow
                  aside={
                    <CaseRowTitle index={index + 1} title={decision.title} />
                  }
                >
                  <CaseProse value={decision.content} />
                </CaseRow>
                {imageIndex === null ? null : (
                  <div className="mt-8">{figure(imageIndex)}</div>
                )}
              </section>
            );
          })}
        </div>

        <CaseRow
          aside={<CaseRowTitle title={caseCopy.result} />}
          className="mt-16 border-t border-border-general pt-6"
        >
          <CaseProse value={rely.result} />
        </CaseRow>

        <CaseRow
          aside={<CaseRowTitle title={rely.leadership.title} />}
          className="mt-12"
        >
          <CaseProse value={rely.leadership.content} />
        </CaseRow>

        <div className="mt-16">
          <CaseSectionLabel>{caseCopy.proof}</CaseSectionLabel>
          {proofImages.map((index) => figure(index))}
        </div>
      </article>
    </div>
  );
}
