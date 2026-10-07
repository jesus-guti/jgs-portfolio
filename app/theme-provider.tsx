"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type ColorTheme = "light" | "dark";

const STORAGE_KEY = "color-theme";

type Listener = () => void;

let memoryTheme: ColorTheme | null = null;
const listeners = new Set<Listener>();

function getPreferredTheme(): ColorTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function readTheme(): ColorTheme {
  if (memoryTheme) return memoryTheme;
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    memoryTheme = stored;
    return stored;
  }
  memoryTheme = getPreferredTheme();
  return memoryTheme;
}

function writeTheme(theme: ColorTheme) {
  memoryTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
  listeners.forEach((listener) => listener());
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const ThemeContext = createContext<{
  theme: ColorTheme;
  toggle: () => void;
  setTheme: (theme: ColorTheme) => void;
}>({
  theme: "light",
  toggle: () => {},
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore<ColorTheme>(
    subscribe,
    readTheme,
    (): ColorTheme => "light",
  );

  const setTheme = useCallback((next: ColorTheme) => {
    writeTheme(next);
  }, []);

  const toggle = useCallback(() => {
    writeTheme(readTheme() === "light" ? "dark" : "light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
