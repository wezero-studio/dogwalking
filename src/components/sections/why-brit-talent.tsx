"use client";

import React from "react";
import AnimatedHeading from "@/components/ui/animated-heading";
import RevealText from "@/components/ui/reveal-text";

const columns = [
  {
    heading: "Trusted, Vetted Walkers Only",
    body: "Every walker on our team is DBS checked, insured, and trained in pet first aid. Your pup is always in safe hands.",
    color: "#F9A8D4",
    rotation: "rotate-[2deg]",
  },
  {
    heading: "Flexible Schedules, Zero Hassle",
    body: "Book daily, weekly, or on-demand. We work around your life — not the other way around.",
    color: "#FCD34D",
    rotation: "-rotate-[2deg]",
  },
  {
    heading: "Real-Time Updates After Every Walk",
    body: "We send a photo and a quick note after each outing, so you always know your dog had a great time.",
    color: "#F8F9FA",
    rotation: "rotate-[1.5deg]",
  },
];

const WhyBritTalent = () => {
  return (
    <section className="bg-[#A3D8FF] pt-24 pb-32 font-sans overflow-hidden">
      {/* Heading placed normally at the top */}
      <div className="w-full mx-auto px-6 md:px-16 lg:px-24 mb-16 max-w-[1400px]">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 text-[13px] font-bold tracking-[0.08em] uppercase text-[#3d3024] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3d3024]"></span>
          Why Choose Us
        </div>

        {/* Section heading */}
        <AnimatedHeading
          as="h2"
          text="Why Dog Owners Love Us"
          trigger="inView"
          className="text-[#3d3024] text-[48px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[0.9] font-bold uppercase m-0 tracking-wide"
          style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
        />
      </div>

      {/* Horizontal overlapping tilted bars */}
      <div className="flex flex-col relative w-[110vw] -ml-[5vw]">
        {columns.map((col, i) => (
          <div
            key={i}
            className={`relative py-7 md:py-9 flex items-center justify-center transition-transform hover:scale-[1.01] duration-300 border-y-[2px] border-[#3d3024] ${col.rotation}`}
            style={{ 
              backgroundColor: col.color, 
              zIndex: i * 10 + 10,
              marginTop: i === 0 ? "0" : "-0.5vw",
            }}
          >
            {/* Inner line outlines (top and bottom) */}
            <div className="absolute top-[4px] md:top-[6px] left-0 right-0 h-[1.5px] md:h-[2px] bg-[#3d3024] opacity-80"></div>
            <div className="absolute bottom-[4px] md:bottom-[6px] left-0 right-0 h-[1.5px] md:h-[2px] bg-[#3d3024] opacity-80"></div>

            <RevealText as="div" trigger="inView" delay={i * 0.1}>
              <div className="max-w-[1200px] w-full mx-auto px-8 md:px-16 text-center flex flex-col items-center">
                <h3 
                  className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold uppercase leading-[1.0] tracking-wide m-0"
                  style={{ color: "#3d3024", fontFamily: "'Luckiest Guy', sans-serif" }}
                >
                  {col.heading}
                </h3>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium mt-1 md:mt-2 max-w-3xl leading-[1.5]" style={{ color: "#3d3024" }}>
                  {col.body}
                </p>
              </div>
            </RevealText>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBritTalent;
