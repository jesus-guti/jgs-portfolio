import Link from "next/link";
import { Mountains } from "@phosphor-icons/react/dist/ssr";
import type { JSX } from "react";

export function SiteHeader(): JSX.Element {
  return (
    <header className="flex items-center justify-between border-b border-border-general px-6 py-5 md:px-container-px">
      <Link
        className="flex items-center gap-2 text-body font-medium text-text-strong"
        href="/"
      >
        <Mountains size={18} weight="fill" />
        Jesús Gutiérrez Siliceo
      </Link>
      <nav className="flex items-center gap-5 text-caption text-text-weak">
        <Link className="transition-colors hover:text-text-strong" href="/">
          Work
        </Link>
        <Link className="transition-colors hover:text-text-strong" href="/about">
          About
        </Link>
      </nav>
    </header>
  );
}
