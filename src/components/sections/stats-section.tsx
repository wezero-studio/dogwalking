"use client";

import React from "react";
import Image from "next/image";
import AnimatedHeading from "@/components/ui/animated-heading";

const StatsSection = () => {
  const stats = [
    {
      number: "1,200+",
      label: "Placements made",
    },
    {
      number: "98%",
      label: "Sponsorship success rate",
    },
    {
      number: "24",
      label: "Days average time-to-hire",
    },
    {
      number: "15",
      label: "Countries placed into",
    },
  ];

  return (
    <section id="stats" className="relative w-full py-24 min-h-[600px] flex items-center overflow-hidden">
      {/* Abstract Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img1.jpg"
          alt="Abstract blue wave background"
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1800px]">
        {/* Optional Heading */}
        <div className="mb-12 text-left">
          <AnimatedHeading
            as="h2"
            trigger="inView"
            text="Why Companies Trust Us"
            className="text-3xl md:text-4xl font-display text-white tracking-tight"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[4px] p-10 md:p-14 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex flex-col items-start justify-between min-h-[320px] md:min-h-[400px] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-left text-[32px] md:text-[42px] font-serif text-white leading-none tracking-tight">
                {stat.number}
              </div>
              <div className="w-full flex flex-col gap-4">
                <div className="w-full h-px bg-white/30"></div>
                <div className="text-left text-[16px] font-medium text-white/90 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-left">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white font-medium text-lg hover:text-white/80 transition-colors group"
          >
            See How We Can Fill Your Next Role
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
