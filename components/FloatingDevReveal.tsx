"use client";

import React, { useState } from "react";
import { useTheme } from "@/lib/ThemeContext";

export default function FloatingDevReveal() {
  const { codeMode, toggleCodeMode } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 2000,
      }}
    >
      {/* the orb */}
      <div
        onClick={() => setOpen((p) => !p)}
        style={{
          width: "14px",
          height: "14px",
          borderRadius: "999px",
          background: codeMode ? "rgba(213,184,146,1)" : "rgba(213,184,146,0.4)",
          boxShadow: "0 0 18px rgba(213,184,146,0.55)",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
      ></div>

      {/* expanding panel */}
      <div
        style={{
          position: "absolute",
          bottom: "1.8rem",
          right: "0",
          background: "rgba(5,5,5,0.9)",
          border: "1px solid rgba(213,184,146,0.25)",
          borderRadius: "1rem",
          padding: open ? "0.9rem 1rem 0.8rem 1rem" : "0",
          minWidth: open ? "180px" : "0",
          overflow: "hidden",
          backdropFilter: "blur(12px)",
          transform: open ? "translateY(0)" : "translateY(12px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "all 0.35s ease",
        }}
      >
        <p
          style={{
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(243,243,242,0.45)",
            marginBottom: "0.45rem",
          }}
        >
          developer tools
        </p>
        <button
          onClick={toggleCodeMode}
          style={{
            width: "100%",
            background: codeMode ? "rgba(213,184,146,0.18)" : "transparent",
            border: "1px solid rgba(213,184,146,0.35)",
            borderRadius: "999px",
            color: "#f3f3f2",
            fontSize: "0.7rem",
            padding: "0.35rem 0.6rem",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "ui-monospace, SFMono-Regular, SFMono-Regular" }}>
            {"</>"}
          </span>
          <span>{codeMode ? "Code on" : "Code mode"}</span>
        </button>
        <p
          style={{
            marginTop: "0.4rem",
            fontSize: "0.55rem",
            color: "rgba(243,243,242,0.35)",
          }}
        >
          Ctrl + \ to toggle
        </p>
      </div>
    </div>
  );
}
