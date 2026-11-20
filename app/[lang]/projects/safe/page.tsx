import type { JSX } from "react";

import {
  CaseStudyBackLink,
  CaseStudyHeader,
} from "../../../components/case-study-header";
import { LoopVideo } from "../../../components/loop-video";
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

type CaseVideo = {
  readonly mp4: string;
  readonly webm: string;
  readonly poster: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
  readonly caption: string;
};

function CaseStudyVideo({ video }: { video: CaseVideo }): JSX.Element {
  return (
    <figure className="mb-8">
      <LoopVideo
        className="block h-auto w-full rounded border border-border-general"
        height={video.height}
        label={video.alt}
        mp4={video.mp4}
        poster={video.poster}
        webm={video.webm}
        width={video.width}
      />
      <figcaption className="mt-3 text-caption text-text-weak">
        {video.caption}
      </figcaption>
    </figure>
  );
}

export default async function SafeCaseStudyPage({
  params,
}: PageProps<"/[lang]/projects/safe">) {
  const locale = await requireLocale(params);
  const dict = await getDictionary(locale);
  const { safeCase: safe, case: caseCopy, nav } = dict;

  return (
    <div className="mx-auto max-w-[1200px]">
      <SiteHeader locale={locale} nav={nav} />
      <article className="px-6 py-10 md:px-container-px">
        <CaseStudyBackLink href={localePath(locale)} label={nav.work} />
        <CaseStudyHeader
          externalHref="https://www.safehs.ai/"
          externalLabel={safe.externalLabel}
          origin={safe.origin}
          role={safe.role}
          split
          stack={safe.stack}
          status={caseCopy.production}
          thesis={safe.thesis}
          title="Safe"
          year="2023"
        />

        <CaseStudyVideo video={safe.preview} />

        <CaseSectionLabel>{caseCopy.decisions}</CaseSectionLabel>
        <div className="flex flex-col gap-14">
          {safe.decisions.map((decision, index) => (
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
          <CaseProse value={safe.result} />
        </CaseRow>

        <section>
          <CaseSectionLabel>{caseCopy.proof}</CaseSectionLabel>
          {safe.figures.map((video) => (
            <CaseStudyVideo key={video.mp4} video={video} />
          ))}
        </section>
      </article>
    </div>
  );
}
