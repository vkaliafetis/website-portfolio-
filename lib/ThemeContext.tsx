"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

interface ThemeContextValue {
  theme: ThemeMode;
  codeMode: boolean;
  toggleTheme: () => void;
  toggleCodeMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * ThemeProvider supplies the current theme and codemode to all
 * descendants. It also persists the choice in localStorage.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // changed from "light" to "dark" so the site opens in dark mode
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [codeMode, setCodeMode] = useState(false);

  // Load theme preferences from localStorage on mount
  useEffect(() => {
    const storedTheme = window.localStorage.getItem("van-theme") as ThemeMode | null;
    const storedCode = window.localStorage.getItem("van-code-mode");
    if (storedTheme) {
      setTheme(storedTheme);
    }
    if (storedCode === "on") setCodeMode(true);
  }, []);

  // Persist changes to localStorage and update html attributes
  useEffect(() => {
    window.localStorage.setItem("van-theme", theme);
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("van-code-mode", codeMode ? "on" : "off");
    const html = document.documentElement;
    html.setAttribute("data-codemode", codeMode ? "on" : "off");
  }, [codeMode]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const toggleCodeMode = () => setCodeMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, codeMode, toggleTheme, toggleCodeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context values. Throws if used outside of provider.
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
