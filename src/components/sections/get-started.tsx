"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import AnimatedHeading from "@/components/ui/animated-heading";
import RevealText from "@/components/ui/reveal-text";

interface Step {
  label: string;
  desc: string;
  img: string;
  leftVw: number;
  rotate: number;
}

const STEPS: Step[] = [
  {
    label: "Book a Meet & Greet",
    desc: "Tell us about your pup and book a free intro call.",
    img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=650&fit=crop&q=80",
    leftVw: 70,
    rotate: -6,
  },
  {
    label: "Meet Your Walker",
    desc: "We match you with a vetted local walker who's the right fit.",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=650&fit=crop&q=80",
    leftVw: 6,
    rotate: 5,
  },
  {
    label: "Schedule Your Walks",
    desc: "Pick a routine that suits your dog — daily, weekly, whatever works.",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=650&fit=crop&q=80",
    leftVw: 70,
    rotate: -4,
  },
  {
    label: "Get Daily Updates",
    desc: "GPS tracking and photo updates after every single walk.",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=650&fit=crop&q=80",
    leftVw: 12,
    rotate: 6,
  },
];

// ── Same core mechanic as the reference (pinned section + linearly rising,
// staggered, scrub-linked cards clipped by an overflow-hidden viewport) — just
// rebuilt on this project's existing framer-motion + Lenis pattern (the same
// one already proven smooth in the Services section) instead of introducing
// GSAP ScrollTrigger with no Lenis wiring, which would risk desynced/janky pin.
const STAGGER = 340; // px between each card's starting offset below the section — enough gap that consecutive cards never feel stacked on top of each other
const CARD_W = 300;
const CARD_H = 400;
const TOTAL_GAP = (STEPS.length - 1) * STAGGER;
const EXTRA_PX = TOTAL_GAP + CARD_H + 300; // extra scroll distance beyond one viewport needed for the full cascade

const StepCard = ({
  step,
  index,
  sectionProgress,
}: {
  step: Step;
  index: number;
  sectionProgress: MotionValue<number>;
}) => {
  const startOffset = index * STAGGER;
  // top = 100% (bottom of the pinned viewport) + this card's stagger offset,
  // easing up to fully clear the top of the viewport by the end of the pin —
  // identical formula to the reference, just expressed as a calc() string.
  const top = useTransform(
    sectionProgress,
    (p) => `calc(${100 - p * 100}% + ${startOffset - p * EXTRA_PX}px)`
  );

  return (
    <motion.div
      className="absolute rounded-[20px] overflow-hidden border-[3px] border-[#C8F560] shadow-[0_16px_48px_rgba(0,0,0,0.45)] z-10"
      style={{ left: `${step.leftVw}vw`, top, width: CARD_W, height: CARD_H, rotate: step.rotate }}
    >
      <img src={step.img} alt={step.label} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span
          className="block text-[11px] font-bold uppercase tracking-[0.15em] text-white/80 mb-1"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Step {index + 1}
        </span>
        <h3
          className="text-[22px] leading-tight uppercase text-white m-0"
          style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
        >
          {step.label}
        </h3>
        <p className="text-[13px] leading-snug text-white/90 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
};

const GetStarted = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  return (
    <section id="how-it-works" className="relative bg-[#FFF4B3]">

      {/* ── Desktop: pinned rising-cards cascade ── */}
      <div ref={sectionRef} className="hidden lg:block relative" style={{ height: `calc(100vh + ${EXTRA_PX}px)` }}>
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">


          {/* Pinned center heading */}
          <div className="relative z-20 text-center px-6 pointer-events-none">
            <div
              className="flex items-center justify-center gap-3 text-[13px] font-bold tracking-[0.15em] uppercase text-[#1a1208]/70 mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a1208]/70" />
              How It Works
            </div>
            <AnimatedHeading
              as="h2"
              trigger="inView"
              lines={[
                { text: "Walkies Made", className: "text-[#1a1208]" },
                { text: "Perfectly", style: { color: "#FF5722", WebkitTextStroke: "2px #FF5722" } },
                { text: "Simple", style: { color: "transparent", WebkitTextStroke: "3px #1a1208" } },
              ]}
              className="uppercase leading-[0.9] m-0"
              style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700, fontSize: "clamp(56px, 9vw, 132px)" }}
            />
            <RevealText
              as="p"
              trigger="inView"
              delay={0.2}
              className="mt-6 text-[16px] md:text-[18px] text-[#1a1208]/75 max-w-[480px] mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              From your first booking to your dog&apos;s happiest walk yet — here&apos;s exactly how it works.
            </RevealText>
          </div>

          {STEPS.map((step, i) => (
            <StepCard key={step.label} step={step} index={i} sectionProgress={scrollYProgress} />
          ))}
        </div>
      </div>

      {/* ── Mobile / tablet: simple static stack, no scroll-jacking ── */}
      <div className="lg:hidden px-6 py-20 flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-3 text-[13px] font-bold tracking-[0.15em] uppercase text-[#1a1208]/70 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#1a1208]/70" />
          How It Works
        </div>
        <AnimatedHeading
          as="h2"
          trigger="inView"
          lines={[
            { text: "Walkies Made", className: "text-[#1a1208]" },
            { text: "Perfectly", style: { color: "#FF5722", WebkitTextStroke: "2px #FF5722" } },
            { text: "Simple", style: { color: "transparent", WebkitTextStroke: "2px #1a1208" } },
          ]}
          className="uppercase leading-[0.9] m-0 text-[56px] sm:text-[76px]"
          style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
        />
        <RevealText
          as="p"
          trigger="inView"
          delay={0.2}
          className="mt-6 text-[16px] text-[#1a1208]/75 max-w-[440px] leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          From your first booking to your dog&apos;s happiest walk yet — here&apos;s exactly how it works.
        </RevealText>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 w-full max-w-[600px]">
          {STEPS.map((step, i) => (
            <div key={step.label} className="relative rounded-[20px] overflow-hidden border-[3px] border-[#C8F560] shadow-[0_10px_30px_rgba(0,0,0,0.35)] aspect-[3/4]">
              <img src={step.img} alt={step.label} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/80 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Step {i + 1}
                </span>
                <h3 className="text-[18px] leading-tight uppercase text-white m-0" style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}>
                  {step.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default GetStarted;
