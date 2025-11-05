"use client";

import React from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import CodeModeToggle from "@/components/CodeModeToggle";

/**
 * The global site header containing navigation links and controls. It
 * remains at the top of the page and collapses on smaller screens into
 * a minimal bar. All anchor links correspond to sections on the page.
 */
export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(8px)",
        // was light: rgba(255,255,255,0.6)
        backgroundColor: "rgba(13,13,13,0.6)",
        borderBottom: "1px solid rgba(213,184,146,0.25)",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--space-sm) var(--space-md)",
          maxWidth: "1000px",
          margin: "0 auto",
          gap: "var(--space-md)",
        }}
      >
        <nav aria-label="Primary">
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "2.5rem", // more horizontal spacing, text-only look
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link href="#hero" style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
                About
              </Link>
            </li>
            <li>
              <Link href="#experience" style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="#interests" style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Interests
              </Link>
            </li>
            <li>
              <Link href="#contact" style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
          {/* Only the code mode toggle lives in the header. Theme toggle is in the footer. */}
          <CodeModeToggle />
        </div>
      </div>
    </header>
  );
}
