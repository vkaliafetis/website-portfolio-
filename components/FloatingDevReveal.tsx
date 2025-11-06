"use client";

import React, { useState } from "react";
import { useTheme } from "@/lib/ThemeContext";

export default function FloatingDevReveal() {
  const { codeMode, toggleCodeMode } = useTheme();
  const [hover, setHover] = useState(false);

  // when we're in normal mode -> show dev preview
  // when we're in dev mode -> show normal (beige) preview
  const showingDevPreview = !codeMode;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 2000,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "56px",
          height: "56px",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          // single click toggles mode
          toggleCodeMode();
        }}
      >
        {/* BIGGER orb */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "999px",
            background: codeMode ? "rgba(213,184,146,1)" : "rgba(213,184,146,0.7)",
            border: "1px solid rgba(213,184,146,0.55)",
            boxShadow: "0 0 26px rgba(213,184,146,0.55)",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
            transition: "transform 0.28s ease",
            transform: hover ? "rotate(16deg) scale(1.04)" : "rotate(0deg) scale(1)",
          }}
          title="Developer tools"
        >
          <span
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, SFMono-Regular",
              fontSize: "1.15rem",
              fontWeight: 700,
              color: "#0d0d0d",
            }}
          >
            {"{}"}
          </span>
        </div>

        {/* PREVIEW WINDOW */}
        <div
          style={{
            position: "absolute",
            bottom: "64px",
            right: 0,
            width: "240px",
            height: "150px",
            background: showingDevPreview
              ? "rgba(2,17,27,0.95)" // dev look
              : "rgba(13,13,13,0.9)", // normal look
            border: showingDevPreview
              ? "1px solid rgba(0,188,212,0.25)"
              : "1px solid rgba(213,184,146,0.25)", // beige accent for normal preview
            borderRadius: "1rem",
            overflow: "hidden",
            backdropFilter: "blur(10px)",
            boxShadow: "0 14px 30px rgba(0,0,0,0.45)",
            clipPath: hover
              ? "circle(160% at 90% 110%)"
              : "circle(0% at 90% 110%)",
            transition: "clip-path 0.45s ease-out",
            pointerEvents: "none",
          }}
        >
          {/* top bar */}
          <div
            style={{
              height: "32px",
              background: showingDevPreview
                ? "rgba(2, 40, 55, 0.85)"
                : "rgba(25, 25, 25, 0.75)",
              borderBottom: showingDevPreview
                ? "1px solid rgba(0, 188, 212, 0.12)"
                : "1px solid rgba(213, 184, 146, 0.12)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0 0.65rem",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "999px",
                background: showingDevPreview ? "#00bcd4" : "#d5b892", // beige dot for normal preview
              }}
            />
            <span
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(243,243,243,0.85)",
              }}
            >
              {showingDevPreview ? "DEV MODE PREVIEW" : "NORMAL MODE PREVIEW"}
            </span>
          </div>

          {/* inner content */}
          <div
            style={{
              padding: "0.6rem 0.7rem 0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.45rem",
            }}
          >
            {/* title bar */}
            <div
              style={{
                height: "11px",
                width: "72%",
                background: showingDevPreview
                  ? "rgba(0,188,212,0.1)"
                  : "rgba(213,184,146,0.15)", // beige accent
                border: showingDevPreview
                  ? "1px solid rgba(0,188,212,0.25)"
                  : "1px solid rgba(213,184,146,0.35)",
                borderRadius: "999px",
                transform: hover ? "translateX(0)" : "translateX(18px)",
                opacity: hover ? 1 : 0,
                transition: "all 0.35s ease",
              }}
            />

            {/* subtitle */}
            <div
              style={{
                height: "6px",
                width: "48%",
                background: showingDevPreview
                  ? "rgba(218,247,255,0.12)"
                  : "rgba(243,243,243,0.08)",
                borderRadius: "999px",
                transform: hover ? "translateX(0)" : "translateX(14px)",
                opacity: hover ? 1 : 0,
                transition: "all 0.35s ease 0.05s",
              }}
            />

            {/* grid / body */}
            <div
              style={{
                flex: 1,
                border: showingDevPreview
                  ? "1px solid rgba(0,188,212,0.12)"
                  : "1px solid rgba(213,184,146,0.12)",
                borderRadius: "0.6rem",
                background: showingDevPreview
                  ? "repeating-linear-gradient(90deg, rgba(0,188,212,0.03) 0, rgba(0,188,212,0.03) 1px, rgba(2,17,27,0) 1px, rgba(2,17,27,0) 6px)"
                  : "linear-gradient(180deg, rgba(21,21,21,0.4), rgba(13,13,13,0.05))",
                transform: hover ? "translateY(0)" : "translateY(10px)",
                opacity: hover ? 1 : 0,
                transition: "all 0.35s ease 0.08s",
              }}
            />

            {/* hint */}
            <div
              style={{
                fontSize: "0.52rem",
                color: "rgba(243,243,243,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.13em",
                transform: hover ? "translateY(0)" : "translateY(8px)",
                opacity: hover ? 1 : 0,
                transition: "all 0.35s ease 0.12s",
              }}
            >
              {showingDevPreview ? "click to enter dev" : "click to go back"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
