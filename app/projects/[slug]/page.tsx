import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";

type ProjectStatus = "production" | "in progress" | "open source";

interface CaseStudy {
  slug: string;
  name: string;
  role: string;
  stack: string[];
  year: string;
  status: ProjectStatus;
  problem: string;
  decisions: { title: string; content: string }[];
  result: string;
}

const caseStudies: Record<string, CaseStudy> = {
  "rely-v2": {
    slug: "rely-v2",
    name: "rely v2",
    role: "Frontend Lead & Product Designer",
    stack: ["Next.js", "Go", "WebSockets", "Tailwind v4", "TurboRepo"],
    year: "2025",
    status: "production",
    problem:
      "Lorem ipsum placeholder. The original rely interface, built 4 years ago in vanilla React, needed a complete architectural overhaul to support multi-tenant, multi-site deployments with real-time flow execution.",
    decisions: [
      {
        title: "WebSockets over polling",
        content:
          "Lorem ipsum placeholder. Real-time flow execution in factory environments requires sub-100ms feedback loops that HTTP polling cannot provide.",
      },
      {
        title: "Touch-first UI components",
        content:
          "Lorem ipsum placeholder. Factory workers operate with gloves on industrial touchscreens, requiring oversized hit targets and simplified navigation patterns.",
      },
      {
        title: "Hub/agent architecture",
        content:
          "Lorem ipsum placeholder. Multi-site hardware control requires a distributed architecture where a central hub coordinates multiple edge agents.",
      },
    ],
    result:
      "Lorem ipsum placeholder. Deployed in multiple factories, serving multi-tenant organizations with real-time monitoring and no-code flow programming.",
  },
  safe: {
    slug: "safe",
    name: "Safe",
    role: "Frontend Lead & Product Designer",
    stack: ["React", "WebRTC", "Multi-tenant", "Tailwind"],
    year: "2023",
    status: "production",
    problem:
      "Lorem ipsum placeholder. Workplace safety monitoring in factories required a unified interface to manage multiple AI-powered cameras across private networks.",
    decisions: [
      {
        title: "Tunnel-based network access",
        content:
          "Lorem ipsum placeholder. Factory cameras operate on private networks that cannot be directly accessed from the cloud, requiring secure tunnel infrastructure.",
      },
      {
        title: "Multi-camera real-time monitoring",
        content:
          "Lorem ipsum placeholder. Safety officers need to monitor multiple camera feeds simultaneously with low-latency video streaming.",
      },
      {
        title: "Event-driven reporting",
        content:
          "Lorem ipsum placeholder. Safety incidents trigger automated reports and audit trails that must be queryable across time ranges and camera locations.",
      },
    ],
    result:
      "Lorem ipsum placeholder. Deployed across multiple factory installations with real-time multi-camera monitoring and automated safety reporting.",
  },
  sorolla: {
    slug: "sorolla",
    name: "Sorolla",
    role: "Creator & Maintainer",
    stack: ["React", "TypeScript", "npm", "TurboRepo"],
    year: "2023",
    status: "open source",
    problem:
      "Lorem ipsum placeholder. Multiple internal products required image and video annotation capabilities, but existing solutions were either too heavy or didn't support our specific annotation types.",
    decisions: [
      {
        title: "Monorepo with TurboRepo",
        content:
          "Lorem ipsum placeholder. Centralizing shared packages in a monorepo simplifies versioning and cross-package development workflows.",
      },
      {
        title: "Publishing to npm",
        content:
          "Lorem ipsum placeholder. Making the library publicly available on npm enables reuse across projects and contributes to the open-source ecosystem.",
      },
      {
        title: "Multi-annotation API",
        content:
          "Lorem ipsum placeholder. Supporting bounding box, segmentation, and oriented bounding box in a single component API requires careful abstraction design.",
      },
    ],
    result:
      "Lorem ipsum placeholder. Published on npm and used across multiple internal products for image and video annotation workflows.",
  },
  loadzone: {
    slug: "loadzone",
    name: "Loadzone",
    role: "Solo Developer & Product Designer",
    stack: ["Next.js", "Supabase", "Tailwind"],
    year: "2025",
    status: "in progress",
    problem:
      "Lorem ipsum placeholder. Small football clubs and lower-division academies lack affordable tools to track training load and player wellness across teams.",
    decisions: [
      {
        title: "Simple UX for non-technical users",
        content:
          "Lorem ipsum placeholder. Coaches and young players need an interface that requires zero training to log daily wellness and training sessions.",
      },
      {
        title: "Lightweight architecture",
        content:
          "Lorem ipsum placeholder. As a solo project, the architecture must be simple enough to maintain without a team while still supporting growth.",
      },
      {
        title: "Wellness + training in one dashboard",
        content:
          "Lorem ipsum placeholder. Combining subjective wellness reports with objective training load metrics gives coaches a holistic view of player readiness.",
      },
    ],
    result:
      "Lorem ipsum placeholder. In production with real users from youth football academies, actively being developed with new features.",
  },
};

const statusStyles: Record<ProjectStatus, string> = {
  production: "border-green-800/50 text-green-400",
  "in progress": "border-amber-800/50 text-amber-400",
  "open source": "border-blue-800/50 text-blue-400",
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-[1080px] border-x border-b border-border-general">
      <header className="flex items-center border-b border-border-general py-8 px-6 md:px-container-px">
        <Link
          href="/"
          className="flex items-center gap-2 text-body text-text-default transition-colors hover:text-text-strong"
        >
          <ArrowLeft weight="regular" size={16} />
          <span>Projects</span>
        </Link>
      </header>

      <article className="mx-auto max-w-[720px] py-section-py px-6 md:px-container-px">
        <div className="mb-12">
          <h1 className="text-heading-display font-bold text-text-strong">
            {study.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-caption text-text-weak">
            <span>{study.role}</span>
            <span className="text-text-weaker">·</span>
            <span className="font-mono">{study.year}</span>
            <span className="text-text-weaker">·</span>
            <span
              className={`rounded border px-2 py-0.5 font-mono text-[11px] ${statusStyles[study.status]}`}
            >
              {study.status}
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {study.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border-special px-1.5 py-0.5 font-mono text-[11px] text-text-weak"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <h2 className="mb-4 text-heading-section font-semibold text-text-strong">
            Problem
          </h2>
          <p className="text-body text-text-default">{study.problem}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-heading-section font-semibold text-text-strong">
            Decisions
          </h2>
          <div className="flex flex-col gap-6">
            {study.decisions.map((decision, i) => (
              <div key={i}>
                <h3 className="mb-2 text-body font-semibold text-text-strong">
                  {i + 1}. {decision.title}
                </h3>
                <p className="text-body text-text-default">{decision.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-heading-section font-semibold text-text-strong">
            Result
          </h2>
          <p className="text-body text-text-default">{study.result}</p>
        </section>
      </article>
    </div>
  );
}
