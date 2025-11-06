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
      {/* orb + hover preview trigger */}
      <div
        style={{
          position: "relative",
          width: "40px",
          height: "40px",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setOpen((p) => !p)}
      >
        {/* base orb (normal mode) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "999px",
            background: codeMode ? "rgba(213,184,146,1)" : "rgba(213,184,146,0.6)",
            border: "1px solid rgba(213,184,146,0.4)",
            boxShadow: "0 0 20px rgba(213,184,146,0.5)",
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

        {/* HOVER PREVIEW: circular reveal with mini dev-mode UI */}
        <div
          style={{
            position: "absolute",
            bottom: "46px",
            right: "-30px",
            width: "180px",
            height: "130px",
            background: "rgba(2, 17, 27, 0.95)",
            border: "1px solid rgba(0, 188, 212, 0.25)",
            borderRadius: "0.9rem",
            overflow: "hidden",
            backdropFilter: "blur(6px)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
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
              background: "rgba(2, 40, 55, 0.7)",
              borderBottom: "1px solid rgba(0, 188, 212, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0 0.5rem",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "999px",
                background: "#00bcd4",
                opacity: 0.9,
              }}
            />
            <span
              style={{
                fontSize: "0.55rem",
                color: "rgba(218,247,255,0.7)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Dev layout
            </span>
          </div>
          {/* fake dev content */}
          <div
            style={{
              padding: "0.5rem 0.6rem 0.4rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.35rem",
            }}
          >
            <div
              style={{
                height: "10px",
                width: "70%",
                background: "rgba(0,188,212,0.09)",
                border: "1px solid rgba(0,188,212,0.32)",
                borderRadius: "999px",
              }}
            />
            <div
              style={{
                height: "6px",
                width: "50%",
                background: "rgba(218,247,255,0.12)",
                borderRadius: "999px",
              }}
            />
            <div
              style={{
                height: "40px",
                border: "1px solid rgba(0,188,212,0.09)",
                borderRadius: "0.5rem",
                background:
                  "repeating-linear-gradient(90deg, rgba(0,188,212,0.04) 0, rgba(0,188,212,0.04) 1px, rgba(2,17,27,0) 1px, rgba(2,17,27,0) 5px)",
              }}
            />
            <div
              style={{
                fontSize: "0.5rem",
                color: "rgba(218,247,255,0.35)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Preview only — click to enable
            </div>
          </div>
        </div>
      </div>

      {/* CLICK PANEL (actual toggle) */}
      <div
        style={{
          position: "absolute",
          bottom: "2.9rem",
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
