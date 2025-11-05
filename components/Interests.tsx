"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  { icon: "⚙️", label: "Engineering" },
  { icon: "⌚", label: "Watches" },
  { icon: "📷", label: "Photography" },
  { icon: "🏋️", label: "Fitness" },
];

/**
 * Interests section showing a grid of hobbies with simple animations.
 */
export default function Interests() {
  return (
    <section id="interests" data-code-id="interests-section">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Interests
      </motion.h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "var(--space-lg)",
          marginTop: "var(--space-lg)",
        }}
      >
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--space-md)",
              border: `1px solid var(--color-border)`,
              borderRadius: "var(--radius-md)",
              backgroundColor: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(4px)",
            }}
          >
            <span style={{ fontSize: "2rem", marginBottom: "var(--space-sm)" }}>{item.icon}</span>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}