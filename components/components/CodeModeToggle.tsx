"use client";

import React, { useEffect } from "react";
import { useTheme } from "@/lib/ThemeContext";

/**
 * A button that toggles the Code-Reveal mode, which switches the theme
 * to the industrial/blueprint look and activates code tooltips on
 * hover. It also listens to the Ctrl/Cmd + \ keyboard shortcut.
 */
export default function CodeModeToggle() {
  const { codeMode, toggleCodeMode } = useTheme();
  const label = codeMode ? "Disable code reveal" : "Enable code reveal";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Use Ctrl or Cmd + backslash to toggle code mode
      if ((event.metaKey || event.ctrlKey) && event.key === "\\") {
        event.preventDefault();
        toggleCodeMode();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleCodeMode]);

  return (
    <button
      onClick={toggleCodeMode}
      aria-label={label}
      title={label}
      style={{
        background: codeMode ? "rgba(213,184,146,0.25)" : "rgba(213,184,146,0.12)",
        border: "1px solid rgba(213,184,146,0.45)",
        borderRadius: "9999px",
        padding: "0.35rem 0.95rem",
        color: "#f3f3f2",
        fontSize: "0.65rem",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
      }}
    >
      <span style={{ fontFamily: "var(--font-mono)" }}>{codeMode ? "</>" : "< >"}</span>
      <span>{codeMode ? "Code on" : "Code mode"}</span>
    </button>
  );
}
