"use client";

import React from "react";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * Footer displays social links, copyright notice and the theme toggle. It
 * keeps content centred and simple. Adjust the links to point to
 * real profiles when available.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "var(--space-lg) var(--space-md)",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "var(--space-sm)" }}>
        <a href="https://github.com/vkaliafetis" target="_blank" rel="noopener noreferrer" style={{ marginRight: "var(--space-md)" }}>
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: "var(--space-md)" }}>
          LinkedIn
        </a>
        <a href="mailto:hello@vankaliafetis.com">Email</a>
      </div>
      <div style={{ marginBottom: "var(--space-sm)" }}>
        © {currentYear} Vangelis (Van) Kaliafetis
      </div>
      <ThemeToggle />
    </footer>
  );
}