"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { JSX } from "react";

import { locales, localePath, stripLocalePrefix, type Locale } from "@/lib/i18n/config";

const labels: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export function LanguageToggle({ locale }: { locale: Locale }): JSX.Element {
  const pathname = usePathname();
  const pathWithoutLocale = stripLocalePrefix(pathname);

  return (
    <div
      aria-label="Language"
      className="flex items-center gap-1"
      role="group"
    >
      {locales.map((option) => {
        const active = option === locale;
        return (
          <Link
            aria-current={active ? "true" : undefined}
            aria-label={labels[option]}
            className={
              active
                ? "font-mono text-caption text-text-strong"
                : "font-mono text-caption text-text-weaker transition-colors hover:text-text-strong"
            }
            href={localePath(option, pathWithoutLocale)}
            hrefLang={option}
            key={option}
            title={labels[option]}
          >
            {option}
          </Link>
        );
      })}
    </div>
  );
}
