"use client";

import React from "react";
import { useTheme } from "@/lib/ThemeContext";

/**
 * A button that toggles between light and dark themes. Uses emojis
 * instead of an icon library to minimise dependencies.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "light" ? "Switch to dark theme" : "Switch to light theme";
  const symbol = theme === "light" ? "🌞" : "🌜";
  return (
    <button onClick={toggleTheme} aria-label={label} title={label} style={{ fontSize: "1.2rem", background: "none", border: "none", padding: 0 }}>
      {symbol}
    </button>
  );
}