"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * About section describing Van in a few sentences followed by key facts.
 * Data attributes mark the container for the Code‑Reveal inspector.
 */
export default function About() {
  return (
    <section id="about" data-code-id="about-section">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        Hello, I am Van. I enjoy designing simple things that do difficult jobs. I am early in my coding journey, so I built this site as proof — a clean experience for you, and a code‑reveal layer for the curious. If you are hiring for someone who learns fast and ships carefully, I would love to talk.
      </motion.p>
      <motion.ul
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-sm)" }}
      >
        <li>📍 Based in the UK</li>
        <li>🎨 Enjoys thoughtful design</li>
        <li>💻 Learning web development</li>
        <li>🔍 Detail‑oriented</li>
      </motion.ul>
    </section>
  );
}