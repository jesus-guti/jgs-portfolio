import {
    GithubLogo,
    LinkedinLogo,
    Envelope,
} from "@phosphor-icons/react/dist/ssr";

export default function Home() {
    return (
        <div className="mx-auto max-w-[1080px] border-x border-b border-border-general">
            <header className="flex items-center justify-between border-b border-border-general py-8 px-container-px">
                <span className="text-body font-medium text-text-strong">
                    Jesús Gutiérrez Siliceo
                </span>
                <nav className="flex items-center gap-6" />
            </header>

            <section className="py-section-py px-container-px">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center gap-1">
                        <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-text-weaker">
                            <span className="font-sans text-sm font-medium text-text-strong">
                                JG
                            </span>
                        </div>
                        <h1 className="text-heading-section font-bold text-text-strong">
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

                    <div className="mt-12 flex items-center gap-6 text-body text-text-default">
                        <a
                            href="https://github.com/jesus-guti"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition-colors hover:text-text-strong"
                        >
                            <GithubLogo
                                weight="regular"
                                size={16}
                                className="shrink-0"
                            />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jesús-gutiérrez-siliceo-52108524a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition-colors hover:text-text-strong"
                        >
                            <LinkedinLogo
                                weight="regular"
                                size={16}
                                className="shrink-0"
                            />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="mailto:jesusgutierrezsiliceo@gmail.com"
                            className="flex items-center gap-2 transition-colors hover:text-text-strong"
                        >
                            <Envelope
                                weight="regular"
                                size={16}
                                className="shrink-0"
                            />
                            <span>Email</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
