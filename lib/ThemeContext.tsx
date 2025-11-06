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

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // default: dark site, NORMAL mode
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [codeMode, setCodeMode] = useState(false);

  // load only THEME from storage, but FORCE code mode OFF on load
  useEffect(() => {
    const storedTheme = window.localStorage.getItem("van-theme") as ThemeMode | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
    // make sure we start in normal mode
    window.localStorage.setItem("van-code-mode", "off");
  }, []);

  // keep theme in sync
  useEffect(() => {
    window.localStorage.setItem("van-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // keep code mode in sync
  useEffect(() => {
    window.localStorage.setItem("van-code-mode", codeMode ? "on" : "off");
    document.documentElement.setAttribute("data-codemode", codeMode ? "on" : "off");
  }, [codeMode]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const toggleCodeMode = () => setCodeMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, codeMode, toggleTheme, toggleCodeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
