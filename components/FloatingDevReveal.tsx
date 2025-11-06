"use client";

import React, { useState } from "react";
import { useTheme } from "@/lib/ThemeContext";

export default function FloatingDevReveal() {
  const { codeMode, toggleCodeMode } = useTheme();
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 2000,
      }}
    >
      {/* BUTTON AREA */}
      <div
        style={{
          position: "relative",
          width: "38px",
          height: "38px",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setOpen((p) => !p)}
      >
        {/* base orb (normal mode look) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "999px",
            background: codeMode ? "rgba(213,184,146,1)" : "rgba(213,184,146,0.55)",
            border: "1px solid rgba(213,184,146,0.35)",
            boxShadow: "0 0 22px rgba(213,184,146,0.55)",
            display: "grid",
            placeItems: "center",
            color: "#0d0d0d",
            fontSize: "0.6rem",
            fontWeight: 600,
            pointerEvents: "none",
          }}
        >
          {"</>"}
        </div>

        {/* DEV PREVIEW LAYER – circular reveal */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "999px",
            // "developer" look – darker, with beige lines
            background:
              "radial-gradient(circle at 30% 30%, rgba(3,3,3,1), rgba(3,3,3,0.4)), rgba(3,3,3,1)",
            border: "1px solid rgba(213,184,146,0.6)",
            display: "grid",
            placeItems: "center",
            color: "#f3f3f2",
            fontSize: "0.5rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            clipPath: hover ? "circle(120% at 50% 50%)" : "circle(0% at 50% 50%)",
            transition: "clip-path 0.28s ease-out",
            pointerEvents: "none",
          }}
        >
          Dev preview
        </div>
      </div>

      {/* DROPDOWN PANEL (click to open real control) */}
      <div
        style={{
          position: "absolute",
          bottom: "2.6rem",
          right: 0,
          background: "rgba(5,5,5,0.95)",
          border: "1px solid rgba(213,184,146,0.25)",
          borderRadius: "1rem",
          padding: open ? "0.9rem 1rem 0.7rem 1rem" : "0",
          minWidth: open ? "190px" : "0",
          overflow: "hidden",
          backdropFilter: "blur(12px)",
          transform: open ? "translateY(0)" : "translateY(12px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "all 0.3s ease",
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
          developer mode
        </p>
        <button
          onClick={toggleCodeMode}
          style={{
            width: "100%",
            background: codeMode ? "rgba(213,184,146,0.16)" : "transparent",
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
          <span style={{ fontFamily: "ui-monospace, SFMono-Regular" }}>
            {"</>"}
          </span>
          <span>{codeMode ? "Code on" : "Enable"}</span>
        </button>
        <p
          style={{
            marginTop: "0.4rem",
            fontSize: "0.55rem",
            color: "rgba(243,243,242,0.35)",
          }}
        >
          Ctrl + \ also works
        </p>
      </div>
    </div>
  );
}
