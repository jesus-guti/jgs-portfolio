import { SiteHeader } from "../components/site-header";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1080px] border-x border-b border-border-general">
      <SiteHeader />
      <article className="mx-auto max-w-[640px] px-6 py-12 md:px-container-px">
        <h1 className="text-heading-display font-bold text-text-strong">
          About
        </h1>
        <p className="mt-2 text-caption text-text-weak">
          Cantabria, Suances
        </p>
        <div className="mt-8 flex max-w-[34rem] flex-col gap-5 text-[15px] leading-[1.7] text-text-default">
          <p>
            I am a senior frontend engineer and interface designer who loves
            building digital stuff that makes sense. My background is rooted in
            the startup ecosystem, where being resourceful and agile isn&rsquo;t
            an option&mdash;it&rsquo;s the core of the job.
          </p>
          <p>
            I&rsquo;m a generalist at heart who decided to specialize in the
            frontend. Because of that, I don&rsquo;t just &ldquo;paint
            screens&rdquo;; I understand the APIs, the architecture, and the
            technical trade-offs behind every user interaction.
          </p>
          <p>
            When I&rsquo;m not tweaking Tailwind tokens or refining layouts,
            I&rsquo;m usually thinking about product strategy or disconnected,
            working with my hands on physical engineering and high-end
            woodworking projects.
          </p>
        </div>
      </article>
    </div>
  );
}
