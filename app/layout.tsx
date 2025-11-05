import "../globals.css";
import React from "react";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/lib/ThemeContext";
import CodeInspector from "@/components/CodeInspector";
// Import the Next.js specific Analytics component. See Vercel docs: https://vercel.com/docs/analytics/quickstart
import { Analytics } from "@vercel/analytics/react";
import LoadingOverlay from "@/components/LoadingOverlay";

export const metadata: Metadata = {
  title: "Vangelis (Van) Kaliafetis – Portfolio",
  description:
    "Portfolio of Vangelis (Van) Kaliafetis – early-career full-stack engineer and designer.",
  openGraph: {
    title: "Vangelis (Van) Kaliafetis – Portfolio",
    description:
      "Personal portfolio showcasing projects, experience and interests of Vangelis (Van) Kaliafetis.",
    url: "https://van-portfolio.vercel.app",
    siteName: "Vangelis (Van) Kaliafetis",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Vangelis (Van) Kaliafetis – portfolio preview"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vangelis (Van) Kaliafetis",
    description: "The portfolio of Vangelis (Van) Kaliafetis.",
    images: ["/social-preview.png"]
  },
  other: {
    "theme-color": "#3b82f6"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b82f6"
};

/**
 * Root layout wraps all pages. It includes the ThemeProvider to handle
 * light/dark and Code-Reveal modes, and injects global Analytics. The
 * `CodeInspector` is always mounted but does nothing when Code-Reveal
 * is disabled.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LoadingOverlay />
          {children}
          {/* Inspector overlays code snippets when elements are hovered */}
          <CodeInspector />
        </ThemeProvider>
        {/* Vercel analytics for traffic insights */}
        <Analytics />
      </body>
    </html>
  );
}
