import Link from "next/link";
import type { JSX } from "react";

import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

import { LanguageToggle } from "./language-toggle";
import { SiteMenu } from "./site-menu";
import { ThemeToggle } from "./theme-toggle";

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
        className="min-w-0 text-[15px] font-semibold text-text-strong transition-[color] duration-[120ms] ease hover:text-accent"
        href={localePath(locale)}
      >
        <span className="sm:hidden">Jesús Gutiérrez</span>
        <span className="hidden sm:inline">Jesús Gutiérrez Siliceo</span>
      </Link>
      <div className="flex shrink-0 items-center gap-1 sm:gap-3">
        <nav className="hidden items-center gap-5 sm:flex" aria-label="Primary">
          <Link
            className="inline-flex min-h-6 items-center text-caption text-text-weak transition-[color] duration-[120ms] ease hover:text-accent"
            href={localePath(locale)}
          >
            {nav.work}
          </Link>
          <Link
            className="inline-flex min-h-6 items-center text-caption text-text-weak transition-[color] duration-[120ms] ease hover:text-accent"
            href={localePath(locale, "/about")}
          >
            {nav.about}
          </Link>
        </nav>
        <div className="sm:hidden">
          <SiteMenu locale={locale} nav={nav} />
        </div>
        <LanguageToggle locale={locale} />
        <ThemeToggle />
      </div>
    </header>
  );
}
