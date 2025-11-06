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
      {/* orb + hover/preview trigger */}
      <div
        style={{
          position: "relative",
          width: "40px",
          height: "40px",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          // single-click toggle
          toggleCodeMode();
        }}
      >
        {/* base orb */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "999px",
            background: codeMode ? "rgba(213,184,146,1)" : "rgba(213,184,146,0.6)",
            border: "1px solid rgba(213,184,146,0.4)",
            boxShadow: "0 0 20px rgba(213,184,146,0.4)",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
            transition: "transform 0.25s ease",
            transform: hover ? "rotate(14deg)" : "rotate(0deg)",
          }}
          title="Developer tools"
        >
          <span
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, SFMono-Regular",
              fontSize: "0.75rem",
              color: "#0d0d0d",
              fontWeight: 600,
            }}
          >
            {"{}"}
          </span>
        </div>

        {/* circular dev preview window */}
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            right: "-95px", // moved inward so it doesn't touch screen edge
            width: "190px",
            height: "190px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle at 30% 30%, rgba(2,17,27,1), rgba(2,17,27,0.25))",
            border: "1px solid rgba(0,188,212,0.25)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
            overflow: "hidden",
            clipPath: hover
              ? "circle(140% at 75% 120%)"
              : "circle(0% at 75% 120%)",
            transition: "clip-path 0.4s ease-out",
            pointerEvents: "none",
            backdropFilter: "blur(4px)",
          }}
        >
          {/* top label */}
          <div
            style={{
              height: "32px",
              background: "rgba(2, 40, 55, 0.85)",
              borderBottom: "1px solid rgba(0, 188, 212, 0.08)",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0 0.6rem",
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
                fontSize: "0.58rem",
                color: "rgba(218,247,255,0.8)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              DEV MODE PREVIEW
            </span>
          </div>

          {/* content */}
          <div
            style={{
              padding: "0.6rem 0.6rem 0.4rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
            }}
          >
            {/* fake hero bar */}
            <div
              style={{
                height: "11px",
                width: "78%",
                background: "rgba(0,188,212,0.09)",
                border: "1px solid rgba(0,188,212,0.24)",
                borderRadius: "999px",
              }}
            />
            {/* subtitle */}
            <div
              style={{
                height: "6px",
                width: "50%",
                background: "rgba(218,247,255,0.1)",
                borderRadius: "999px",
              }}
            />
            {/* grid box */}
            <div
              style={{
                flex: 1,
                border: "1px solid rgba(0,188,212,0.08)",
                borderRadius: "0.5rem",
                background:
                  "repeating-linear-gradient(90deg, rgba(0,188,212,0.03) 0, rgba(0,188,212,0.03) 1px, rgba(2,17,27,0) 1px, rgba(2,17,27,0) 5px)",
              }}
            />
            {/* hint */}
            <div
              style={{
                fontSize: "0.5rem",
                color: "rgba(218,247,255,0.35)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
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
