import { CaseStudyFigure } from "../../../components/case-study-figure";
import {
  CaseStudyBackLink,
  CaseStudyHeader,
} from "../../../components/case-study-header";
import { SiteHeader } from "../../../components/site-header";
import { localePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { requireLocale } from "@/lib/i18n/require-locale";

const proofImages = [
  { src: "/projects/rely-v2/stations.png", height: 634 },
  { src: "/projects/rely-v2/recipe-flow.png", height: 634 },
  { src: "/projects/rely-v2/overlays.png", height: 634 },
  { src: "/projects/rely-v2/analytics.png", height: 634 },
] as const;

export default async function RelyCaseStudyPage({
  params,
}: PageProps<"/[lang]/projects/rely-v2">) {
  const locale = await requireLocale(params);
  const dict = await getDictionary(locale);
  const { rely, case: caseCopy, nav } = dict;

  return (
    <div className="mx-auto max-w-[1080px] border-x border-b border-border-general">
      <SiteHeader locale={locale} nav={nav} />
      <article className="mx-auto max-w-[720px] px-6 py-10 md:px-container-px">
        <CaseStudyBackLink href={localePath(locale)} label={nav.work} />
        <CaseStudyHeader
          externalHref="https://relyqa.com/"
          externalLabel="relyqa.com"
          origin={rely.origin}
          role={rely.role}
          stack={rely.stack}
          status={caseCopy.production}
          thesis={rely.thesis}
          title="Rely"
          year="2025"
        />

        <CaseStudyFigure
          alt={rely.previewAlt}
          caption={rely.previewCaption}
          height={634}
          priority
          src="/projects/rely-v2/preview-surface.jpg"
          width={1024}
        />

        <section className="mb-12">
          <h2 className="mb-6 text-heading-section font-semibold text-text-strong">
            {caseCopy.decisions}
          </h2>
          <div className="flex flex-col gap-6">
            {rely.decisions.map((decision, index) => (
              <div key={decision.title}>
                <h3 className="mb-2 text-body font-semibold text-text-strong">
                  {index + 1}. {decision.title}
                </h3>
                <div className="flex flex-col gap-4 text-body text-text-default">
                  {decision.content.split("\n\n").map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-heading-section font-semibold text-text-strong">
            {rely.leadership.title}
          </h2>
          <p className="text-body text-text-default">
            {rely.leadership.content}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-heading-section font-semibold text-text-strong">
            {caseCopy.result}
          </h2>
          <p className="text-body text-text-default">{rely.result}</p>
        </section>

        <section>
          <h2 className="mb-4 text-heading-section font-semibold text-text-strong">
            {caseCopy.proof}
          </h2>
          {proofImages.map((image, index) => (
            <CaseStudyFigure
              alt={rely.figures[index].alt}
              caption={rely.figures[index].caption}
              height={image.height}
              key={image.src}
              src={image.src}
              width={1024}
            />
          ))}
        </section>
      </article>
    </div>
  );
}
