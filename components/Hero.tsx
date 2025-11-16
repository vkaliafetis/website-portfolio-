"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ThoughtOrb from "@/components/ThoughtOrb";

/**
 * Hero section featuring name, tagline and a call-to-action.
 * - Orb above the text
 * - Slight parallax on scroll
 * - Particles layer via .hero-particles
 */
export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <section
      id="hero"
      data-code-id="hero-section"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* background particles overlay */}
      <div className="hero-particles" />

      {/* Orb / focal visual */}
      <div style={{ marginBottom: "2.5rem", position: "relative", zIndex: 1 }}>
        <ThoughtOrb />
      </div>

      {/* Text block with slight parallax on scroll */}
      <motion.div style={{ y, position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            marginBottom: "var(--space-md)",
          }}
        >
          Vangelis (Van) Kaliafetis
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--color-muted)",
            marginBottom: "var(--space-lg)",
            maxWidth: "640px",
          }}
        >
          I like difficult problems and simple solutions. I am early in my
          coding journey and obsessed with learning by building.
        </p>

        <Link href="#contact">
          <button>Get in touch</button>
        </Link>
      </motion.div>
    </section>
  );
}
