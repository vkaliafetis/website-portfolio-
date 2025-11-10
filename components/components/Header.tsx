"use client";

import React from "react";
import Link from "next/link";

/**
 * Clean minimalist header with evenly spaced section links.
 * No background lines, no boxes, no buttons.
 */
export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "transparent",
        backdropFilter: "blur(8px)",
        padding: "1rem 2rem",
      }}
    >
      <nav
        aria-label="Primary"
        style={{
          display: "flex",
          justifyContent: "space-evenly", // evenly spread across banner
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Link
          href="#hero"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Home
        </Link>
        <Link
          href="#about"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          About
        </Link>
        <Link
          href="#experience"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Experience
        </Link>
        <Link
          href="#interests"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Interests
        </Link>
        <Link
          href="#contact"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
