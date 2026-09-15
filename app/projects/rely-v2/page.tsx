import Link from "next/link";
import { ArrowLeft, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import type { JSX } from "react";

import { CaseStudyFigure } from "../../components/case-study-figure";
import { SiteHeader } from "../../components/site-header";

const decisions: { title: string; content: string }[] = [
  {
    title: "The Station is the product",
    content:
      "The Hub is a list of Stations, not a model zoo. Opening one is the floor: live camera, piece identity, OK/KO. The operator reads a verdict. Recipes, overlays, and analytics sit beside that surface — they do not replace it.",
  },
  {
    title: "A Recipe is a graph you deploy",
    content:
      "Inspection is not a script per line. Trigger → images → detect → Evaluación is a visual flow with a contextual inspector. Evaluación is a rule on detections (count, confidence) that writes a station status: OK if it holds, KO if it does not. Deploy publishes the Recipe; the canvas draft is not what the floor is running.",
  },
  {
    title: "Overlays are the operator language",
    content:
      "Detections have to be readable on the image: label corner, dashed ROI, human vs model. That overlay is configured per Station so Preview and review share the same picture language — status is the color, not the class name.",
  },
];

export default function RelyCaseStudyPage(): JSX.Element {
  return (
    <div className="mx-auto max-w-[1080px] border-x border-b border-border-general">
      <SiteHeader />
      <article className="mx-auto max-w-[720px] px-6 py-10 md:px-container-px">
        <Link
          className="mb-8 inline-flex items-center gap-2 text-caption text-text-weak transition-colors hover:text-text-strong"
          href="/"
        >
          <ArrowLeft size={14} weight="regular" />
          Work
        </Link>

        <header className="mb-8">
          <p className="font-mono text-caption uppercase tracking-wide text-text-weak">
            Employment work
          </p>
          <h1 className="mt-1 text-heading-display font-bold text-text-strong">
            Rely
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-caption text-text-weak">
            <span>Frontend Lead &amp; Product Designer</span>
            <span className="text-text-weaker">·</span>
            <span className="font-mono">2025</span>
            <span className="text-text-weaker">·</span>
            <span className="rounded border border-green-800/50 px-2 py-0.5 font-mono text-[11px] text-green-400">
              production
            </span>
          </div>
          <p className="mt-2 font-mono text-caption text-text-weak">
            Next.js, Go, WebSockets, Tailwind v4
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
          <p className="mt-5 text-body text-text-default">
            A Hub of Stations: live Preview with an OK/KO on the piece, and a
            Recipe graph engineers deploy to the floor.
          </p>
        </header>

        <CaseStudyFigure
          alt="Station Preview with a live PCB camera feed, piece identity, defect count, and OK/KO totals"
          caption="Preview is the floor: the piece, a verdict, OK/KO/Rework. The red card is the status, not a chart."
          height={634}
          priority
          src="/projects/rely-v2/preview-surface.jpg"
          width={1024}
        />

        <section className="mb-12">
          <h2 className="mb-6 text-heading-section font-semibold text-text-strong">
            Decisions
          </h2>
          <div className="flex flex-col gap-6">
            {decisions.map((decision, index) => (
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
            Result
          </h2>
          <p className="text-body text-text-default">
            In production on factory floors, multi-tenant / multi-site. Hub in
            the cloud, an agent per Station on the line.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-heading-section font-semibold text-text-strong">
            Proof
          </h2>
          <CaseStudyFigure
            alt="Hub Stations list showing Linea 1 with a live thumbnail and an empty Linea 2 card"
            caption="Hub: Stations in the org. Enter one to work the line."
            height={634}
            src="/projects/rely-v2/stations.png"
            width={1024}
          />
          <CaseStudyFigure
            alt="Recipe flow canvas with trigger, images, detector, live view, and Evaluación inspector"
            caption="Recipe as a graph: trigger → images → detect → Evaluación. Inspector on the right; Deploy publishes to the Station."
            height={634}
            src="/projects/rely-v2/recipe-flow.png"
            width={1024}
          />
          <CaseStudyFigure
            alt="Overlays settings with label corner, dashed ROI, human vs model, and a preview of detection boxes"
            caption="Overlay language: label corner, dashed ROI, human vs model. Same picture on the floor and in config."
            height={634}
            src="/projects/rely-v2/overlays.png"
            width={1024}
          />
          <CaseStudyFigure
            alt="Station analytics layout editor with KPI widgets and a catalog to add first-pass, reject, and volume panels"
            caption="Analytics (proof): station layout of widgets — first-pass, reject, volume — added from a catalog, not a fixed dashboard."
            height={634}
            src="/projects/rely-v2/analytics.png"
            width={1024}
          />
        </section>
      </article>
    </div>
  );
}
