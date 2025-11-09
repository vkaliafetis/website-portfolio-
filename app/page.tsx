"use client";

import React from "react";
import ConcentricDiscs from "@/components/ConcentricDiscs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* Floating concentric beige discs */}
      <ConcentricDiscs />

      {/* Your existing hero content */}
      <h1 className="text-4xl md:text-6xl font-semibold mt-8 tracking-tight">
        Vangelis (Van) Kaliafetis
      </h1>
      <p className="mt-4 text-lg text-neutral-400 max-w-xl">
        Full-stack engineer & designer exploring the intersection of
        engineering precision and creative design.
      </p>
    </main>
  );
}
