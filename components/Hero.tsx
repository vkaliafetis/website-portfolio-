"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ThoughtOrb from "@/components/ThoughtOrb";

/**
 * Hero section featuring name, tagline and a call-to-action.
 * Now with:
 * - fade + rise on load
 * - micro-typography animation
 * - ambient particles
 * - intro sound (best-effort)
 */
export default function Hero() {
  const { scrollY } = useScroll();
  // parallax on scroll, like before
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // play ambient sound once on mount (browser may block until interaction)
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // try to play, ignore errors if browser blocks
      audio.volume = 0.25;
      audio.play().catch(() => {
        // ignore if autoplay is blocked
      });
    }
  }, []);

  return (
    <section
      id="hero"
      data-code-id="hero-section"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column", // allow stacking
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* ambient drifting particles */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.4,
        }}
      >
        <div className="hero-particles" />
      </div>

      {/* hidden audio element for intro tone */}
      <audio
        ref={audioRef}
        src="/ambient-intro.mp3"
        preload="auto"
        style={{ display: "none" }}
      />

      {/* orb at the top */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
        style={{ marginBottom: "2.5rem" }}
      >
        <ThoughtOrb />
      </motion.div>

      {/* main text block */}
      <motion.div
        style={{ y }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ letterSpacing: "0.35em" }}
          animate={{ letterSpacing: "0.05em" }}
          transition={{ delay: 0.45, duration: 1.0, ease: "easeOut" }}
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            marginBottom: "var(--space-md)",
          }}
        >
          Vangelis (Van) Kaliafetis
        </motion.h1>

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
