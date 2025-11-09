"use client";

import React, { useState } from "react";
import styles from "./ThoughtOrb.module.css";

export default function ThoughtOrb() {
  const [tilt, setTilt] = useState({ rx: 10, ry: -6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const ry = ((x - midX) / midX) * 10; // left/right
    const rx = -((y - midY) / midY) * 10; // up/down

    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 10, ry: -6 });
  };

  return (
    <div
      className={styles.wrapper}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ambient glow behind */}
      <div className={styles.ambient} />

      {/* the part that actually tilts with the mouse */}
      <div
        className={styles.tiltLayer}
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        }}
      >
        <div className={styles.orb}>
          <div className={styles.core} />
          <div className={styles.ring} />
          <div className={styles.glow} />
        </div>
      </div>

      {/* shadow on the ground */}
      <div className={styles.shadow} />
    </div>
  );
}
