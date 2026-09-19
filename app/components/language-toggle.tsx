"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { JSX } from "react";

import { locales, localePath, stripLocalePrefix, type Locale } from "@/lib/i18n/config";

const flags: Record<Locale, { label: string; flag: string }> = {
  en: { label: "English", flag: "🇺🇸" },
  es: { label: "Español", flag: "🇪🇸" },
};

export function LanguageToggle({ locale }: { locale: Locale }): JSX.Element {
  const pathname = usePathname();
  const pathWithoutLocale = stripLocalePrefix(pathname);

  return (
    <div
      aria-label="Language"
      className="flex items-center gap-0.5 rounded border border-border-general p-0.5"
      role="group"
    >
      {locales.map((option) => {
        const active = option === locale;
        return (
          <Link
            aria-current={active ? "true" : undefined}
            aria-label={flags[option].label}
            className={
              active
                ? "flex size-7 items-center justify-center rounded-sm bg-border-special text-[15px] leading-none"
                : "flex size-7 items-center justify-center rounded-sm text-[15px] leading-none opacity-55 transition-opacity hover:opacity-100"
            }
            href={localePath(option, pathWithoutLocale)}
            hrefLang={option}
            key={option}
            title={flags[option].label}
          >
            <span aria-hidden="true">{flags[option].flag}</span>
          </Link>
        );
      })}
    </div>
  );
}
