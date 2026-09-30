"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, type JSX } from "react";

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
  const pathname = usePathname();
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const itemClass =
    "px-4 py-2.5 text-caption text-text-default transition-colors hover:text-text-strong";

  return (
    <div className="relative" ref={rootRef}>
      <button
        aria-controls={menuId}
        aria-expanded={open}
        className="text-caption text-text-weak transition-colors hover:text-text-strong"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {nav.menu}
      </button>
      {open ? (
        <div
          className="absolute right-0 top-full z-20 mt-3 flex min-w-40 flex-col border border-border-general bg-surface-root py-1"
          id={menuId}
        >
          <Link className={itemClass} href={localePath(locale)}>
            {nav.work}
          </Link>
          <Link className={itemClass} href={localePath(locale, "/about")}>
            {nav.about}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
