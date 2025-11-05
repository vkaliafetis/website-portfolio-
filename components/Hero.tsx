"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

/**
 * Hero section featuring name, tagline and a call‑to‑action. The
 * background and elements translate subtly on scroll to create a
 * parallax effect. A data-code-id attribute is added for the
 * Code‑Reveal inspector.
 */
export default function Hero() {
  const { scrollY } = useScroll();
  // Move content up slightly as the user scrolls
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <section id="hero" data-code-id="hero-section" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
      <motion.div style={{ y }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "var(--space-md)" }}>Vangelis (Van) Kaliafetis</h1>
        <p style={{ fontSize: "1.125rem", color: "var(--color-muted)", marginBottom: "var(--space-lg)" }}>
          I like difficult problems and simple solutions. I am early in my coding journey and obsessed with learning by building.
        </p>
        <Link href="#contact">
          <button>Get in touch</button>
        </Link>
      </motion.div>
    </section>
  );
}