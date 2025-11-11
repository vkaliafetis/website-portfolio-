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
      audio.play().catch(() => {});
    }
  }, []);

  return (
    <>
      {/* make background breathing MUCH more obvious */}
      <style jsx global>{`
        body {
          background: radial-gradient(circle at 50% 50%, #0d0d0d 0%, #010101 55%, #000 100%);
          animation: ambientShift 14s ease-in-out infinite;
        }
        @keyframes ambientShift {
          0% {
            background: radial-gradient(circle at 50% 50%, #0d0d0d 0%, #010101 55%, #000 100%);
          }
          50% {
            background: radial-gradient(circle at 60% 40%, #1a1410 0%, #050505 60%, #000 100%);
          }
          100% {
            background: radial-gradient(circle at 50% 50%, #0d0d0d 0%, #010101 55%, #000 100%);
          }
        }
        .hero-particles {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(255, 236, 209, 0.35) 1.5px, transparent 0),
            radial-gradient(circle, rgba(255, 236, 209, 0.18) 1.5px, transparent 0);
          background-size: 160px 160px, 230px 230px;
          background-position: 0 0, 50px 80px;
          animation: particleDrift 24s linear infinite;
          opacity: 0.4;
          pointer-events: none;
        }
        @keyframes particleDrift {
          0% {
            background-position: 0 0, 50px 80px;
          }
          100% {
            background-position: 260px 180px, 180px 280px;
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
          minHeight: "85vh",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* particles */}
        <div className="hero-particles" />

        {/* vignette behind hero so center pops */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* hidden audio */}
        <audio
          ref={audioRef}
          src="/ambient-intro.mp3"
          preload="auto"
          style={{ display: "none" }}
        />

        {/* orb */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          style={{ marginBottom: "2.8rem" }}
        >
          <ThoughtOrb />
        </motion.div>

        {/* text */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ letterSpacing: "0.28em", opacity: 0 }}
            animate={{ letterSpacing: "0.05em", opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.9, ease: "easeOut" }}
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4.1rem)",
              marginBottom: "1rem",
            }}
          >
            Vangelis (Van) Kaliafetis
          </motion.h1>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-muted)",
              marginBottom: "1.8rem",
              maxWidth: "640px",
            }}
          >
            I like difficult problems and simple solutions. I am early in my
            coding journey and obsessed with learning by building.
          </p>

          <Link href="#contact">
            <button style={{ transform: "translateZ(0)" }}>Get in touch</button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
