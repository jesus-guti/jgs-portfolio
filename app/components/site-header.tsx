import Link from "next/link";
import { Mountains } from "@phosphor-icons/react/dist/ssr";
import type { JSX } from "react";

import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

import { LanguageToggle } from "./language-toggle";
import { SiteMenu } from "./site-menu";

export function SiteHeader({
  locale,
  nav,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
}): JSX.Element {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-border-general px-6 py-5 md:px-container-px">
      <Link
        className="flex min-w-0 items-center gap-2 text-body font-medium text-text-strong"
        href={localePath(locale)}
      >
        <Mountains className="shrink-0" size={18} weight="fill" />
        <span className="truncate">Jesús Gutiérrez Siliceo</span>
      </Link>
      <div className="flex shrink-0 items-center gap-5">
        <SiteMenu locale={locale} nav={nav} />
        <LanguageToggle locale={locale} />
      </div>
    </header>
  );
}
