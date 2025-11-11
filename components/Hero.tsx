"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ThoughtOrb from "@/components/ThoughtOrb";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // try to play intro sound once (optional)
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.25;
      audio.play().catch(() => {
        // autoplay blocked -> ignore
      });
    }
  }, []);

  return (
    <>
      {/* global styles we need for particles + breathing bg */}
      <style jsx global>{`
        body {
          background: radial-gradient(circle at 40% 60%, #0d0d0d, #030303);
          animation: ambientShift 20s ease-in-out infinite;
        }
        @keyframes ambientShift {
          0% {
            background: radial-gradient(circle at 40% 60%, #0d0d0d, #030303);
          }
          50% {
            background: radial-gradient(circle at 60% 40%, #101010, #040404);
          }
          100% {
            background: radial-gradient(circle at 40% 60%, #0d0d0d, #030303);
          }
        }
        .hero-particles {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(255, 236, 209, 0.22) 1.5px, transparent 0),
            radial-gradient(circle, rgba(255, 236, 209, 0.16) 1.5px, transparent 0);
          background-size: 180px 180px, 240px 240px;
          background-position: 0 0, 40px 60px;
          animation: particleDrift 30s linear infinite;
          opacity: 0.35;
          pointer-events: none;
        }
        @keyframes particleDrift {
          0% {
            background-position: 0 0, 40px 60px;
          }
          100% {
            background-position: 300px 200px, 200px 300px;
          }
        }
      `}</style>

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
        {/* drifting particles layer */}
        <div className="hero-particles" />

        {/* hidden audio (optional) */}
        <audio
          ref={audioRef}
          src="/ambient-intro.mp3"
          preload="auto"
          style={{ display: "none" }}
        />

        {/* orb */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: "2.5rem" }}
        >
          <ThoughtOrb />
        </motion.div>

        {/* text block */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ letterSpacing: "0.35em", opacity: 0 }}
            animate={{ letterSpacing: "0.05em", opacity: 1 }}
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
    </>
  );
}
