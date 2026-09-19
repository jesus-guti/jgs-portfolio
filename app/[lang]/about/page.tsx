import { SiteHeader } from "../../components/site-header";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { requireLocale } from "@/lib/i18n/require-locale";

export default async function AboutPage({
  params,
}: PageProps<"/[lang]/about">) {
  const locale = await requireLocale(params);
  const dict = await getDictionary(locale);

  return (
    <div className="mx-auto max-w-[1080px] border-x border-b border-border-general">
      <SiteHeader locale={locale} nav={dict.nav} />
      <article className="mx-auto max-w-[640px] px-6 py-12 md:px-container-px">
        <h1 className="text-heading-display font-bold text-text-strong">
          {dict.about.title}
        </h1>
        <p className="mt-2 text-caption text-text-weak">
          {dict.about.location}
        </p>
        <div className="mt-8 flex max-w-[34rem] flex-col gap-5 text-[15px] leading-[1.7] text-text-default">
          {dict.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
