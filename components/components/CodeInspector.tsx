"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/ThemeContext";
import codeMap from "@/lib/codeMap";

interface TooltipContent {
  file: string;
  code: string;
}

/**
 * CodeInspector renders a floating tooltip with syntax‑highlighted source code
 * when the user hovers over elements with a `data-code-id` attribute.
 * It attaches global pointer listeners when Code‑Reveal mode is active.
 */
export default function CodeInspector() {
  const { codeMode } = useTheme();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<{ id: string; x: number; y: number } | null>(null);
  const [previousEl, setPreviousEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!codeMode) {
      // Clean up highlights when leaving code mode
      if (previousEl) {
        previousEl.removeAttribute("data-code-highlight");
        setPreviousEl(null);
      }
      setHovered(null);
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const target = (event.target as HTMLElement) ?? null;
      const el = target?.closest<HTMLElement>("[data-code-id]");
      if (el) {
        const id = el.getAttribute("data-code-id") as string;
        // Position tooltip near cursor
        const x = event.clientX + 16;
        const y = event.clientY + 16;
        setHovered({ id, x, y });
        // Highlight element
        if (previousEl && previousEl !== el) {
          previousEl.removeAttribute("data-code-highlight");
        }
        el.setAttribute("data-code-highlight", "true");
        setPreviousEl(el);
      } else {
        if (previousEl) {
          previousEl.removeAttribute("data-code-highlight");
          setPreviousEl(null);
        }
        setHovered(null);
      }
    };

    document.addEventListener("pointermove", handlePointerMove);
    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      // Remove highlight from last element
      if (previousEl) previousEl.removeAttribute("data-code-highlight");
    };
  }, [codeMode, previousEl]);

  if (!codeMode || !hovered) return null;

  const { id, x, y } = hovered;
  const info: TooltipContent | undefined = codeMap[id];
  if (!info) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(info.code.trim());
  };

  return (
    <div
      ref={tooltipRef}
      className={`code-tooltip visible`}
      style={{ top: y, left: x }}
    >
      <div className="file-label">{info.file}</div>
      {/* Display up to the first 12 lines of the snippet as plain text. */}
      <pre style={{ margin: 0, background: "transparent", fontFamily: "var(--font-mono)", whiteSpace: "pre-wrap" }}>
        {info.code
          .trim()
          .split('\n')
          .slice(0, 12)
          .join('\n')}
      </pre>
      <button onClick={handleCopy} aria-label="Copy code to clipboard">Copy</button>
    </div>
  );
}