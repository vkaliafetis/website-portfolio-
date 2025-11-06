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
          // 1-click enable dev mode
          toggleCodeMode();
          setOpen(true);
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
            transition: "transform 0.3s ease",
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
            bottom: "48px",
            right: "-28px",
            width: "150px",
            height: "150px",
            borderRadius: "999px",
            background: "radial-gradient(circle at 30% 30%, rgba(2,17,27,1), rgba(2,17,27,0.2))",
            border: "1px solid rgba(0,188,212,0.3)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            overflow: "hidden",
            clipPath: hover
              ? "circle(140% at 85% 115%)"
              : "circle(0% at 85% 115%)",
            transition: "clip-path 0.25s ease-out",
            pointerEvents: "none",
          }}
        >
          {/* fake dev header */}
          <div
            style={{
              height: "26px",
              background: "rgba(2, 40, 55, 0.75)",
              borderBottom: "1px solid rgba(0, 188, 212, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0 0.5rem",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "999px",
                background: "#00bcd4",
              }}
            />
            <span
              style={{
                fontSize: "0.52rem",
                color: "rgba(218,247,255,0.7)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Dev view
            </span>
          </div>
          {/* fake page blocks */}
          <div
            style={{
              padding: "0.5rem 0.5rem 0.4rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.35rem",
            }}
          >
            <div
              style={{
                height: "10px",
                width: "65%",
                background: "rgba(0,188,212,0.08)",
                border: "1px solid rgba(0,188,212,0.28)",
                borderRadius: "999px",
              }}
            />
            <div
              style={{
                height: "6px",
                width: "40%",
                background: "rgba(218,247,255,0.12)",
                borderRadius: "999px",
              }}
            />
            <div
              style={{
                flex: 1,
                border: "1px solid rgba(0,188,212,0.08)",
                borderRadius: "0.5rem",
                background:
                  "repeating-linear-gradient(90deg, rgba(0,188,212,0.035) 0, rgba(0,188,212,0.035) 1px, rgba(2,17,27,0) 1px, rgba(2,17,27,0) 5px)",
              }}
            />
            <div
              style={{
                fontSize: "0.46rem",
                color: "rgba(218,247,255,0.35)",
                textTransform: "uppercase",
                letterSpacing: "0.13em",
              }}
            >
              preview from button
            </div>
          </div>
        </div>
      </div>

      {/* click panel (still shows, but click already enabled dev) */}
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
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
        <p
          style={{
            fontSize: "0.55rem",
            color: "rgba(243,243,242,0.35)",
          }}
        >
          Press Ctrl + \ to toggle again.
        </p>
      </div>
    </div>
  );
}
