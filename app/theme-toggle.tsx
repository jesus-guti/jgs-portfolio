"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="fixed bottom-4 right-4 z-50 rounded-lg border border-border-general bg-surface-root px-3 py-2 text-caption text-text-weak transition-colors hover:text-text-default"
    >
      {theme === "ibm" ? "IBM Plex Mono" : "Apple System"}
    </button>
  );
}
