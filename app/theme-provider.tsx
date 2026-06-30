"use client";

import { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

type Theme = "ibm" | "apple";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "apple", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

function getStoredTheme(): Theme {
  const stored = localStorage.getItem("theme");
  return stored === "ibm" || stored === "apple" ? stored : "apple";
}

function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const storedTheme = useSyncExternalStore<Theme>(
    subscribeToStorage,
    getStoredTheme,
    () => "apple"
  );

  const [theme, setTheme] = useState<Theme>(storedTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === "ibm" ? "apple" : "ibm"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
