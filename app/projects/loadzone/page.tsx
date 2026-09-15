import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import type { JSX } from "react";

import { SiteHeader } from "../../components/site-header";
import {
  CaseStudyFigure,
  CaseStudyPhoneFigure,
} from "./case-study-figure";
import { StreakCromoPhone } from "./streak-cromo-phone";

const decisions: { title: string; content: string }[] = [
  {
    title: "Wellness and load at a glance",
    content:
      "Coordinators need the squad in one operational scan before and after the Session: recovery, energy, soreness, sleep hours, sleep quality, then POST RPE. Missing DailyEntry stays a dash — the table does not invent completeness. Color is a triage signal, not a FIFA dump. This surface is not the Streak Cromo.",
  },
  {
    title: "One question at a time",
    content:
      "Check-in is not a clipboard. PRE and POST are separate moments on the Session, but each form is one WellnessMetric at a time: large type, a thumb-sized slider, labels at the ends, a count of what is still missing. Identity (the Cromo) sits after the fill, not as a second questionnaire.",
  },
  {
    title: "Exercises that actually build Sessions",
    content:
      "Staff do not author a Session from a blank page. An Exercise is a drill with duration, pitch size, player count, then a short tactical classification. Creating one is a form with defaults and dropdowns. Placing Exercises on a Session is how the week becomes real.",
  },
];

export default function LoadzoneCaseStudyPage(): JSX.Element {
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
            Personal product
          </p>
          <h1 className="mt-1 text-heading-display font-bold text-text-strong">
            Loadzone
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-caption text-text-weak">
            <span>Solo Developer &amp; Product Designer</span>
            <span className="text-text-weaker">·</span>
            <span className="font-mono">2025</span>
            <span className="text-text-weaker">·</span>
            <span className="rounded border border-green-800/50 px-2 py-0.5 font-mono text-[11px] text-green-400">
              production
            </span>
          </div>
          <p className="mt-5 text-body text-text-default">
            One club, two products — an operational staff scan of wellness and
            load, and a player check-in that is one question at a time. The
            Streak Cromo is the identity that grows with that habit.
          </p>
        </header>

        <StreakCromoPhone />
        <p className="mb-12 mt-3 text-center text-caption text-text-weak">
          Streak Cromo in the player phone. Tilt it. Material names stay off the
          card; the foil is the reward.
        </p>

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

        <section>
          <h2 className="mb-4 text-heading-section font-semibold text-text-strong">
            Proof
          </h2>
          <CaseStudyFigure
            alt="Loadzone staff Wellness dashboard with sidebar, team selector, and PRE/POST table"
            caption="Staff Wellness shell. Operation nav, team and season context, PRE/POST columns — a laptop scan, not a phone."
            height={640}
            src="/projects/loadzone/staff-wellness-shell.png"
            width={1024}
          />
          <CaseStudyFigure
            alt="Close-up of the staff Wellness table showing recovery, energy, soreness, sleep, quality, and RPE"
            caption="PRE (recovery, energy, soreness, sleep, quality) and POST RPE. Empty cells stay empty. Color is triage."
            height={312}
            src="/projects/loadzone/staff-wellness-table.png"
            width={1024}
          />
          <CaseStudyPhoneFigure
            alt="Player check-in screen with a recovery slider question and pre/post session status"
            caption="Player form: one question (recovery), press or slide, ends labelled. Missing answers stay honest on the button."
            height={1024}
            src="/projects/loadzone/player-check-in-form.png"
            width={577}
          />
          <CaseStudyFigure
            alt="Staff form to create an exercise with space, duration, players, and tactical classification dropdowns"
            caption="Create Exercise: configuration then classification. Dropdowns over free text so a Session can be built without a manual."
            height={987}
            src="/projects/loadzone/staff-exercise-form.png"
            width={1024}
          />
          <CaseStudyFigure
            alt="Staff injuries view with a player figure, numbered body markers, and open closed history lists"
            caption="Injuries (proof): front/back body map, then open, closed, and history."
            height={967}
            src="/projects/loadzone/staff-injuries.png"
            width={1024}
          />
          <CaseStudyFigure
            alt="Staff settings sidebar with Primeros pasos checklist at four of five steps"
            caption="Primeros pasos (proof): five Club facts, progress 4/5, minimize and dismiss. Not a blocker on Wellness."
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
