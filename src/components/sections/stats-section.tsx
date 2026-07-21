"use client";

import React from "react";
import Image from "next/image";
import AnimatedHeading from "@/components/ui/animated-heading";
import RevealText from "@/components/ui/reveal-text";

const StatsSection = () => {
  return (
    <section id="stats" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* ── Background Image & Gradient Overlay ── */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image
          src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop"
          alt="Dogs and owners at the park"
          fill
          className="hidden md:block object-cover object-center"
          sizes="100vw"
        />
        {/* Mobile Vertical Image */}
        <Image
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop"
          alt="Vertical dog looking up"
          fill
          className="block md:hidden object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ── Content: centered over the background photo ── */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center">
        <AnimatedHeading
          as="h2"
          trigger="inView"
          lines={["YOUR DAY IS HECTIC.", "YOUR DOG'S SHOULDN'T BE."]}
          className="text-white text-[34px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[0.95] uppercase max-w-[1200px]"
          style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700, textShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
        />

        <RevealText
          as="p"
          trigger="inView"
          delay={0.2}
          className="mt-8 text-white text-[18px] sm:text-[22px] max-w-[600px] leading-relaxed font-medium opacity-90"
          style={{ fontFamily: "'Inter', sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
        >
          Our company is built with the sole purpose of helping you balance your work life with your dog&apos;s life.
        </RevealText>
      </div>
    </section>
  );
};

export default StatsSection;
