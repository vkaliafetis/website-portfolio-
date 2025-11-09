"use client";

import React, { useEffect, useState } from "react";
import styles from "./ThoughtOrb.module.css";

export default function ThoughtOrb() {
  // rotation from mouse
  const [tilt, setTilt] = useState({ rx: 10, ry: -6 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // get viewport center
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const cx = vw / 2;
      const cy = vh / 2;

      // distance from center (-1 to 1)
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      // map to small rotation
      const ry = dx * 12; // left-right
      const rx = dy * -10; // up-down
      setTilt({ rx, ry });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* global ambient glow */}
      <div className={styles.ambient} />

      {/* mouse-reactive layer */}
      <div
        className={styles.tiltLayer}
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        }}
      >
        {/* floating orb itself */}
        <div className={styles.orb}>
          {/* deep inner core */}
          <div className={styles.core} />
          {/* inner pulse layer */}
          <div className={styles.innerGlow} />
          {/* orbiting ring */}
          <div className={styles.ring} />
          {/* small highlight */}
          <div className={styles.glow} />
        </div>
      </div>

      {/* ground shadow */}
      <div className={styles.shadow} />
    </div>
  );
}
