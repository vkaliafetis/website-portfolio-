import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * The main page composes all sections of the portfolio. Each section is
 * delineated by its own component for clarity and maintainability.
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}