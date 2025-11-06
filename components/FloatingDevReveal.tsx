"use client";

import React, { useState } from "react";
import { useTheme } from "@/lib/ThemeContext";

export default function FloatingDevReveal() {
  const { codeMode, toggleCodeMode } = useTheme();
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
      <div
        style={{
          position: "relative",
          width: "48px",
          height: "48px",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          // single click toggles dev mode
          toggleCodeMode();
        }}
      >
        {/* BIGGER orb */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "999px",
            background: codeMode ? "rgba(213,184,146,1)" : "rgba(213,184,146,0.65)",
            border: "1px solid rgba(213,184,146,0.5)",
            boxShadow: "0 0 25px rgba(213,184,146,0.55)",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
            transition: "transform 0.25s ease",
            transform: hover ? "rotate(16deg) scale(1.03)" : "rotate(0deg) scale(1)",
          }}
          title="Developer tools"
        >
          <span
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, SFMono-Regular",
              fontSize: "1rem",
              fontWeight: 700,
              color: "#0d0d0d",
            }}
          >
            {"{}"}
          </span>
        </div>

        {/* PREVIEW WINDOW (rectangular, moved inward) */}
        <div
          style={{
            position: "absolute",
            bottom: "56px",
            right: 0, // moves it inwards toward the page, not off-screen
            width: "210px",
            height: "135px",
            background: "rgba(2,17,27,0.95)",
            border: "1px solid rgba(0,188,212,0.25)",
            borderRadius: "1rem",
            overflow: "hidden",
            backdropFilter: "blur(10px)",
            boxShadow: "0 14px 30px rgba(0,0,0,0.45)",
            clipPath: hover
              ? "circle(150% at 90% 105%)"
              : "circle(0% at 90% 105%)",
            transition: "clip-path 0.4s ease-out",
            pointerEvents: "none",
          }}
        >
          {/* top bar */}
          <div
            style={{
              height: "30px",
              background: "rgba(2, 40, 55, 0.8)",
              borderBottom: "1px solid rgba(0, 188, 212, 0.12)",
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
                background: "#00bcd4",
              }}
            />
            <span
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(218,247,255,0.85)",
              }}
            >
              DEV MODE PREVIEW
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
                width: "70%",
                background: "rgba(0,188,212,0.1)",
                border: "1px solid rgba(0,188,212,0.25)",
                borderRadius: "999px",
                transform: hover ? "translateX(0)" : "translateX(14px)",
                opacity: hover ? 1 : 0,
                transition: "all 0.35s ease",
              }}
            />

            {/* subtitle */}
            <div
              style={{
                height: "6px",
                width: "45%",
                background: "rgba(218,247,255,0.12)",
                borderRadius: "999px",
                transform: hover ? "translateX(0)" : "translateX(14px)",
                opacity: hover ? 1 : 0,
                transition: "all 0.35s ease 0.05s",
              }}
            />

            {/* grid area */}
            <div
              style={{
                flex: 1,
                border: "1px solid rgba(0,188,212,0.12)",
                borderRadius: "0.6rem",
                background:
                  "repeating-linear-gradient(90deg, rgba(0,188,212,0.03) 0, rgba(0,188,212,0.03) 1px, rgba(2,17,27,0) 1px, rgba(2,17,27,0) 6px)",
                transform: hover ? "translateY(0)" : "translateY(8px)",
                opacity: hover ? 1 : 0,
                transition: "all 0.35s ease 0.08s",
              }}
            />

            {/* hint */}
            <div
              style={{
                fontSize: "0.52rem",
                color: "rgba(218,247,255,0.35)",
                textTransform: "uppercase",
                letterSpacing: "0.13em",
                transform: hover ? "translateY(0)" : "translateY(6px)",
                opacity: hover ? 1 : 0,
                transition: "all 0.35s ease 0.12s",
              }}
            >
              click to toggle code
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
