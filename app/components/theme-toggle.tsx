"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import type { JSX } from "react";

import { useTheme } from "../theme-provider";

export function ThemeToggle(): JSX.Element {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-11 w-11 items-center justify-center text-text-weak transition-[color,transform] duration-150 ease-[var(--ease-out)] hover:text-accent active:scale-[0.97]"
      onClick={toggle}
      type="button"
    >
      {isDark ? (
        <Sun aria-hidden size={18} weight="regular" />
      ) : (
        <Moon aria-hidden size={18} weight="regular" />
      )}
    </button>
  );
}
