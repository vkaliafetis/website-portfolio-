"use client";

import React from "react";
import { motion } from "framer-motion";

interface Item {
  title: string;
  period: string;
  description: string;
}

const experiences: Item[] = [
  {
    period: "2025 – Present",
    title: "Building this portfolio",
    description:
      "Experimenting with Next.js, server actions and interactive design. Learning by doing and shipping carefully."
  },
  {
    period: "2024",
    title: "Watch & product design project",
    description:
      "Applied mechanical engineering principles to design a modern watch, balancing form and function."
  },
  {
    period: "2023",
    title: "Began coding journey",
    description:
      "Started self‑teaching web development, exploring HTML, CSS, JavaScript and design fundamentals."
  }
];

/**
 * Experience timeline section. Each item fades in as it enters the viewport.
 */
export default function Experience() {
  return (
    <section id="experience" data-code-id="experience-section">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Experience
      </motion.h2>
      <div style={{ position: "relative", marginTop: "var(--space-lg)" }}>
        {/* Vertical line */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "12px",
            width: "2px",
            backgroundColor: "var(--color-border)",
          }}
        />
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {experiences.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              style={{ position: "relative", marginLeft: "2rem", marginBottom: "var(--space-lg)" }}
            >
              {/* Bullet marker */}
              <span
                style={{
                  position: "absolute",
                  left: "-2.1rem",
                  top: 4,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "var(--color-accent)",
                }}
              />
              <div style={{ fontSize: "0.875rem", color: "var(--color-muted)" }}>{item.period}</div>
              <h3 style={{ margin: 0, fontSize: "1.25rem" }}>{item.title}</h3>
              <p style={{ marginTop: "var(--space-xs)", maxWidth: "50ch" }}>{item.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}