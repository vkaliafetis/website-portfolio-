"use client";

import React, { useState } from "react";
import styles from "./ThoughtOrb.module.css";

export default function ThoughtOrb() {
  const [tilt, setTilt] = useState({ rx: 12, ry: -8 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // inside element
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // map mouse to rotation, keep it small so it stays elegant
    const ry = ((x - midX) / midX) * 10; // left/right
    const rx = -((y - midY) / midY) * 10; // up/down

    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 12, ry: -8 }); // go back to a nice base angle
  };

  return (
    <div
      className={styles.wrapper}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={styles.orb}
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        }}
      >
        <div className={styles.core} />
        <div className={styles.ring} />
        <div className={styles.glow} />
      </div>
      <div className={styles.shadow} />
    </div>
  );
}
