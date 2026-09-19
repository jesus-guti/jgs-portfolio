import Link from "next/link";
import { ArrowLeft, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";

import { CaseStudyFigure } from "../../../components/case-study-figure";
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
        <Link
          className="mb-8 inline-flex items-center gap-2 text-caption text-text-weak transition-colors hover:text-text-strong"
          href={localePath(locale)}
        >
          <ArrowLeft size={14} weight="regular" />
          {nav.work}
        </Link>

        <header className="mb-8">
          <p className="font-mono text-caption uppercase tracking-wide text-text-weak">
            {rely.origin}
          </p>
          <h1 className="mt-1 text-heading-display font-bold text-text-strong">
            Rely
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-caption text-text-weak">
            <span>{rely.role}</span>
            <span className="text-text-weaker">·</span>
            <span className="font-mono">2025</span>
            <span className="text-text-weaker">·</span>
            <span className="rounded border border-green-800/50 px-2 py-0.5 font-mono text-[11px] text-green-400">
              {caseCopy.production}
            </span>
          </div>
          <p className="mt-2 font-mono text-caption text-text-weak">
            {rely.stack}
          </p>
          <p className="mt-3">
            <a
              className="inline-flex items-center gap-1 font-mono text-caption text-text-weak transition-colors hover:text-text-strong"
              href="https://relyqa.com/"
              rel="noreferrer"
              target="_blank"
            >
              relyqa.com
              <ArrowSquareOut size={12} weight="regular" />
            </a>
          </p>
          <p className="mt-5 text-body text-text-default">{rely.thesis}</p>
        </header>

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
                <p className="text-body text-text-default">{decision.content}</p>
              </div>
            ))}
          </div>
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
