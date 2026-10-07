"use client";

import Link from "next/link";
import { useId, useRef, useState, type JSX } from "react";

import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export function SiteMenu({
  locale,
  nav,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  const close = () => setOpen(false);

  const itemClass =
    "inline-flex min-h-11 items-center px-4 text-caption text-text-default transition-[color] duration-[120ms] ease hover:text-accent";

  return (
    <div
      className="relative"
      ref={rootRef}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node)) {
          close();
        }
      }}
    >
      <button
        aria-controls={menuId}
        aria-expanded={open}
        className="inline-flex h-11 items-center px-2 text-caption text-text-weak transition-[color,transform] duration-150 ease-[var(--ease-out)] hover:text-accent active:scale-[0.97]"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {nav.menu}
      </button>
      {open ? (
        <div
          className="absolute right-0 top-full z-20 mt-2 flex min-w-40 flex-col border border-border-general bg-surface-root py-1"
          id={menuId}
        >
          <Link className={itemClass} href={localePath(locale)} onClick={close}>
            {nav.work}
          </Link>
          <Link
            className={itemClass}
            href={localePath(locale, "/about")}
            onClick={close}
          >
            {nav.about}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
