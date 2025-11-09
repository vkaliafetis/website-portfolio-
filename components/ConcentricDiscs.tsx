"use client";

import React from "react";
import styles from "./ConcentricDiscs.module.css";

export default function ConcentricDiscs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.floater}>
        <div className={`${styles.disc} ${styles.disc1}`} />
        <div className={`${styles.disc} ${styles.disc2}`} />
        <div className={`${styles.disc} ${styles.disc3}`} />
      </div>
    </div>
  );
}
