import Link from "next/link";
import { Mountains } from "@phosphor-icons/react/dist/ssr";
import type { JSX } from "react";

import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

import { LanguageToggle } from "./language-toggle";

export function SiteHeader({
  locale,
  nav,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
}): JSX.Element {
  return (
    <header className="flex items-center justify-between border-b border-border-general px-6 py-5 md:px-container-px">
      <Link
        className="flex items-center gap-2 text-body font-medium text-text-strong"
        href={localePath(locale)}
      >
        <Mountains size={18} weight="fill" />
        Jesús Gutiérrez Siliceo
      </Link>
      <nav className="flex items-center gap-5 text-caption text-text-weak">
        <Link
          className="transition-colors hover:text-text-strong"
          href={localePath(locale)}
        >
          {nav.work}
        </Link>
        <Link
          className="transition-colors hover:text-text-strong"
          href={localePath(locale, "/about")}
        >
          {nav.about}
        </Link>
        <LanguageToggle locale={locale} />
      </nav>
    </header>
  );
}
