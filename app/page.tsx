import Image from "next/image";
import {
    GithubLogo,
    LinkedinLogo,
    Envelope,
    Mountains,
} from "@phosphor-icons/react/dist/ssr";
import { ProjectCard } from "./components/project-card";
import { Ruler } from "./components/ruler";
import { SectionIntersection } from "./components/section-intersection";
import { GridBackground } from "./components/grid-background";
import { Button } from "./components/button";
import { cn } from "@/lib/utils";

const projects = [
    {
        slug: "rely-v2",
        name: "rely v2",
        year: "2025",
        stack: ["Next.js", "Go", "WebSockets", "Tailwind v4"],
        description:
            "Refactor of the factory-floor production interface. Multi-tenant, no-code flow engine, touch-first UI for industrial environments.",
        status: "production" as const,
    },
    {
        slug: "safe",
        name: "Safe",
        year: "2023",
        stack: ["React", "WebRTC", "Multi-tenant", "Tailwind"],
        description:
            "Workplace safety monitoring with AI-powered cameras. Real-time multi-camera feeds, tunnel-based private network access.",
        status: "production" as const,
    },
    {
        slug: "sorolla",
        name: "Sorolla",
        year: "2023",
        stack: ["React", "TypeScript", "npm", "TurboRepo"],
        description:
            "Open-source React component library for image and video annotation. Bounding box, segmentation, and oriented bounding box support.",
        status: "open source" as const,
    },
    {
        slug: "loadzone",
        name: "Loadzone",
        year: "2025",
        stack: ["Next.js", "Supabase", "Tailwind"],
        description:
            "SaaS for youth football academies. Training load logging and wellness tracking for small clubs and lower-division teams.",
        status: "in progress" as const,
    },
];

const oneWeekProjects = [
    {
        year: "2024",
        name: "Landing page corporativa",
        description: "Design system + Storybook. Component library for a B2B SaaS landing.",
        stack: "Storybook, Tailwind",
        duration: "5 days",
    },
    {
        year: "2024",
        name: "Egg grading vision system",
        description: "Automated quality inspection for an egg production line using computer vision.",
        stack: "Python, OpenCV",
        duration: "7 days",
    },
    {
        year: "2024",
        name: "Racing exercise tracker",
        description: "Pose estimation model to track and analyze squat form for a racing team.",
        stack: "Python, MediaPipe",
        duration: "6 days",
    },
    {
        year: "2023",
        name: "Internal dashboard",
        description: "Data visualization tool for operations team to monitor model performance metrics.",
        stack: "Next.js, Recharts",
        duration: "5 days",
    },
];

export default function Home() {
    return (
        <div className="mx-auto max-w-[1080px] border-x border-b border-border-general">
            <header className="flex items-center border-b border-border-general py-8 px-6 md:px-container-px">
                <span className="flex items-center gap-2 text-body font-medium text-text-strong">
                    <Mountains weight="fill" size={18} />
                    Jesús Gutiérrez Siliceo
                </span>
            </header>

            <section className="relative border-b border-border-general py-section-py px-6 md:px-container-px">
                {/* Grid background */}
                <GridBackground gridSize={20} fadeIntensity={30} />

                {/* Rulers - positioned at padding edge, ticks extend outward */}
                <div className="absolute -left-4 top-0 bottom-0 hidden md:block">
                    <Ruler orientation="vertical" length={100} tickInterval={2} majorTickInterval={10} tickDirection="left" />
                </div>
                <div className="absolute -right-4 top-0 bottom-0 hidden md:block">
                    <Ruler orientation="vertical" length={100} tickInterval={2} majorTickInterval={10} tickDirection="right" />
                </div>

                {/* Section intersection details */}
                <SectionIntersection position="top-left" className="hidden md:block" />
                <SectionIntersection position="top-right" className="hidden md:block" />
                <SectionIntersection position="bottom-left" className="hidden md:block" />
                <SectionIntersection position="bottom-right" className="hidden md:block" />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="flex flex-col items-center gap-1">
                        <Image
                            src="/jesus-profile.jpeg"
                            alt="Jesús Gutiérrez"
                            width={80}
                            height={80}
                            className="mb-3 rounded-full object-cover border-2 border-text-weak"
                        />
                        <h1 className="text-heading-display font-bold text-text-strong">
                            Jesús Gutiérrez Siliceo
                        </h1>
                        <p className="text-body text-text-default">
                            Frontend &amp; Product Engineering
                        </p>
                        <p className="text-caption text-text-weak">
                            Based in Cantabria, Suances
                        </p>
                    </div>

                    <div className="mt-16 flex max-w-[640px] flex-col gap-4 text-body text-text-default">
                        <p>
                            I am a senior frontend engineer and interface
                            designer who loves building digital stuff that makes
                            sense. My background is rooted in the startup
                            ecosystem, where being resourceful and agile
                            isn&rsquo;t an option&mdash;it&rsquo;s the core of
                            the job.
                        </p>
                        <p>
                            I&rsquo;m a generalist at heart who decided to
                            specialize in the frontend. Because of that, I
                            don&rsquo;t just &ldquo;paint screens&rdquo;; I
                            understand the APIs, the architecture, and the
                            technical trade-offs behind every user interaction.
                        </p>
                        <p>
                            When I&rsquo;m not tweaking Tailwind tokens or
                            refining layouts, I&rsquo;m usually thinking about
                            product strategy or disconnected, working with my
                            hands on physical engineering and high-end
                            woodworking projects.
                        </p>
            </div>


                    <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                        <Button
                            href="https://github.com/jesus-guti"
                            variant="neutral"
                            size="md"
                        >
                            <GithubLogo weight="regular" size={20} />
                            <span>GitHub</span>
                        </Button>
                        <Button
                            href="https://www.linkedin.com/in/jesús-gutiérrez-siliceo-52108524a"
                            variant="neutral"
                            size="md"
                        >
                            <LinkedinLogo weight="regular" size={20} />
                            <span>LinkedIn</span>
                        </Button>
                        <Button
                            href="mailto:jesusgutierrezsiliceo@gmail.com"
                            variant="neutral"
                            size="md"
                        >
                            <Envelope weight="regular" size={20} />
                            <span>Email</span>
                        </Button>
                    </div>
                </div>
            </section>
              {/* Diagonal stripe pattern */}
              <div
                className={cn(
                  "absolute w-[1080px] h-4",
                  "[background-image:repeating-linear-gradient(45deg,transparent,transparent_2px,var(--color-border-special)_2px,var(--color-border-special)_4px)]"
                )}
              />

            <section className="relative border-b border-border-general py-section-py px-6 md:px-container-px overflow-hidden">
                {/* Section intersection details */}
                <SectionIntersection position="top-left" className="hidden md:block" />
                <SectionIntersection position="top-right" className="hidden md:block" />
                <SectionIntersection position="bottom-left" className="hidden md:block" />
                <SectionIntersection position="bottom-right" className="hidden md:block" />

                <h2 className="relative z-10 mb-8 text-heading-section font-semibold text-text-strong">
                    Projects
                </h2>
                <div className="relative z-10 grid gap-5 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} {...project} />
                    ))}
                </div>
            </section>

            <section className="relative py-section-py px-6 md:px-container-px overflow-hidden">
                {/* Section intersection details */}
                <SectionIntersection position="top-left" className="hidden md:block" />
                <SectionIntersection position="top-right" className="hidden md:block" />

                <h2 className="relative z-10 mb-6 text-heading-section font-semibold text-text-strong">
                    1-Week Projects
                </h2>
                <p className="relative z-10 mb-8 text-body text-text-weak">
                    Short consulting engagements and side experiments, shipped in roughly one week.
                </p>
                <div className="relative z-10 flex flex-col gap-4">
                    {oneWeekProjects.map((project, i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-1 border-b border-border-special pb-4 last:border-b-0 last:pb-0 md:flex-row md:items-baseline md:gap-4"
                        >
                            <span className="shrink-0 font-mono text-caption text-text-weak">
                                {project.year}
                            </span>
                            <div className="flex-1">
                                <span className="text-body font-medium text-text-strong">
                                    {project.name}
                                </span>
                                <span className="text-body text-text-default">
                                    {" "}— {project.description}
                                </span>
                            </div>
                            <div className="flex shrink-0 items-center gap-3 text-caption text-text-weak">
                                <span className="font-mono">{project.stack}</span>
                                <span className="text-text-weaker">·</span>
                                <span className="font-mono">{project.duration}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
