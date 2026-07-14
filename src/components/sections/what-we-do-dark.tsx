"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, easeOut } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Send an Inquiry",
    body: "Ready to get started? Reach out via our website, phone, or email. Let us know about your pet, the services you need, and your general availability so we can match you with the perfect care.",
    bg: "#FCD34D", // Yellow
    fg: "#3d3024",
  },
  {
    id: "02",
    title: "Meet & Greet",
    body: "Book a virtual consult to chat about your pet's routine and needs. Your first booked service acts as an in-person evaluation to ensure it's a great match all around.",
    bg: "#4ADE80", // Green
    fg: "#3d3024",
  },
  {
    id: "03",
    title: "Complete Profile Online",
    body: "Create your Time To Pet account to easily fill out your pet's profile, review policies, and set up payment info all in one secure spot.",
    bg: "#F87171", // Red
    fg: "#3d3024",
  },
  {
    id: "04",
    title: "Schedule Walks",
    body: "With an active profile and up-to-date vaccinations, you can start booking services. After every walk, you'll receive a detailed report with photos and GPS tracking!",
    bg: "#FB923C", // Brighter Orange
    fg: "#3d3024",
  }
];

function getTicketBorder(fill: string, stroke: string) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><path fill='${encodeURIComponent(fill)}' d='M 30 5 L 90 5 A 25 25 0 0 0 115 30 L 115 90 A 25 25 0 0 0 90 115 L 30 115 A 25 25 0 0 0 5 90 L 5 30 A 25 25 0 0 0 30 5 Z'/><path id='b' fill='none' stroke='${encodeURIComponent(stroke)}' stroke-width='3' d='M 30 5 L 90 5 A 25 25 0 0 0 115 30 L 115 90 A 25 25 0 0 0 90 115 L 30 115 A 25 25 0 0 0 5 90 L 5 30 A 25 25 0 0 0 30 5 Z'/><use href='%23b' transform='translate(60,60) scale(0.91) translate(-60,-60)' stroke-width='2'/><use href='%23b' transform='translate(60,60) scale(0.86) translate(-60,-60)' stroke-width='1'/></svg>`;
  return `url("data:image/svg+xml;utf8,${svg}")`;
}

// ─── Each card is its own component so hooks are always called consistently ───
function StepCard({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof steps)[0];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const n = total;
  const seg = 1 / n;

  const overlapFrac = 0.45;
  const overlap = seg * overlapFrac;

  const segStart = index * seg;
  const segEnd = (index + 1) * seg;

  const entryStart = index === 0 ? 0 : segStart - overlap;
  const entryEnd   = index === 0 ? overlap : segStart + overlap;

  const exitStart = index === n - 1 ? 1 : segEnd - overlap;
  const exitEnd   = index === n - 1 ? 1 : segEnd + overlap;

  // ── SCALE ──────────────────────────────────────────────────────────────────
  const scaleInput =
    index === n - 1
      ? [entryStart, entryEnd, 1]
      : [entryStart, entryEnd, exitStart, exitEnd];

  const scaleOutput =
    index === n - 1
      ? [0.8, 1, 1]
      : [0.8, 1, 1, 0.8];

  const scale = useTransform(progress, scaleInput, scaleOutput, { ease: easeOut });

  // ── BRIGHTNESS ─────────────────────────────────────────────────────────────
  const brightnessInput =
    index === n - 1
      ? [entryStart, entryEnd, 1]
      : [entryStart, entryEnd, exitStart, exitEnd];

  const brightnessOutput =
    index === n - 1
      ? [0.8, 1, 1]
      : [0.8, 1, 1, 0.35];

  const brightness = useTransform(progress, brightnessInput, brightnessOutput, { ease: easeOut });

  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  // ── RISE ───────────────────────────────────────────────────────────────────
  const y = useTransform(
    progress,
    index === 0 ? [0, 1] : [entryStart, entryEnd],
    index === 0 ? ["0%", "0%"] : ["105%", "0%"],
    { ease: easeOut }
  );

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        style={{ scale, filter, y }}
        className="w-full h-full max-h-[92vh] will-change-transform flex"
      >
        {/* Card inner with dynamically generated ticket outline */}
        <div
          className="w-full h-full p-6 md:p-14 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 relative overflow-hidden"
          style={{ 
            border: '35px solid transparent',
            borderImageSource: getTicketBorder(step.bg, step.fg),
            borderImageSlice: '35 fill',
            borderImageRepeat: 'stretch',
            backgroundColor: 'transparent'
          }}
        >

          {/* Left: Heading, title, body */}
          <div className="flex flex-col gap-6 md:gap-10 md:w-1/2 z-10 h-full justify-center">
            
            <div className="flex items-center gap-3 text-[14px] md:text-[16px] font-bold tracking-[0.08em] uppercase" style={{ color: step.fg }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: step.fg }} />
              How to Get Started
            </div>

            <h3
              className="text-[44px] sm:text-[56px] md:text-[64px] lg:text-[80px] font-bold leading-[0.95] uppercase tracking-wide m-0"
              style={{ color: step.fg, fontFamily: "'Luckiest Guy', sans-serif" }}
            >
              {step.title}
            </h3>

            <p
              className="text-[17px] md:text-[20px] lg:text-[22px] leading-[1.6] font-medium max-w-lg"
              style={{ color: step.fg }}
            >
              {step.body}
            </p>
            
            {/* CTA Box in the last row */}
            {index === steps.length - 1 && (
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 mt-4 px-8 py-4 rounded-full text-[16px] md:text-[18px] font-bold border-[3px] transition-all duration-300 hover:scale-105"
                style={{ borderColor: step.fg, color: step.fg }}
              >
                Start a Conversation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
            )}
          </div>

          {/* Right: Giant circled number */}
          <div className="md:w-1/2 z-10 flex justify-center md:justify-end items-center shrink-0">
             <div 
               className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[320px] lg:h-[320px] rounded-full border-[6px] md:border-[10px] flex items-center justify-center shrink-0 shadow-lg" 
               style={{ borderColor: step.fg }}
             >
                <span className="text-[90px] sm:text-[120px] md:text-[140px] lg:text-[200px] font-bold leading-none mt-4 md:mt-8 tracking-tighter" style={{ color: step.fg, fontFamily: "'Luckiest Guy', sans-serif" }}>
                  {step.id}
                </span>
             </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
const WhatWeDoDark = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Give enough scroll distance per card to make the grow/rise feel slow.
  const totalHeight = `${steps.length * 170}vh`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="how-it-works" className="relative bg-[#A3D8FF]">
      {/* The entire section pins together */}
      <div ref={containerRef} className="relative" style={{ height: totalHeight }}>
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

          {/* Card stage — fills screen */}
          <div className="relative w-full h-[95vh] mx-auto max-w-[1600px] px-4 md:px-12 lg:px-16">
            {steps.map((step, i) => (
              <StepCard
                key={step.id}
                step={step}
                index={i}
                total={steps.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDoDark;
