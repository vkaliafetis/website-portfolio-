"use client";

import React, { useEffect, useRef, useState } from "react";

const LoadingOverlay: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [showEnter, setShowEnter] = useState(false);
  const [hidden, setHidden] = useState(false);
  const originalOverflow = useRef<string>("");

  // smoother but quicker progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 30); // was 40ms, now a bit faster
    return () => clearInterval(interval);
  }, []);

  // shorter pause on 100%
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setShowEnter(true);
      }, 500); // was 900ms, now shorter
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // lock scroll while visible
  useEffect(() => {
    if (typeof document === "undefined") return;
    originalOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow.current;
    };
  }, []);

  // release scroll when hidden
  useEffect(() => {
    if (hidden && typeof document !== "undefined") {
      document.body.style.overflow = originalOverflow.current;
    }
  }, [hidden]);

  const handleEnter = () => {
    setHidden(true);
  };

  return (
    <div
      className={`loading-overlay ${hidden ? "loading-overlay--hide" : ""}`}
      aria-hidden={hidden}
    >
      <div className="loading-content">
        <div className="loading-logo">VK</div>

        <div className="loading-bar-wrap">
          <div
            className={`loading-bar ${showEnter ? "loading-bar--fade" : ""}`}
          >
            <div
              className="loading-bar__fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div
            className={`loading-percent ${
              showEnter ? "loading-bar--fade" : ""
            }`}
          >
            {progress}%
          </div>

          <button
            className={`enter-button ${showEnter ? "enter-button--show" : ""}`}
            onClick={handleEnter}
          >
            Click to enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
