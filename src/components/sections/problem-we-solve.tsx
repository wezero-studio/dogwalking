"use client";

import React from 'react';
import { motion, type MotionValue } from 'framer-motion';
import AnimatedHeading from '@/components/ui/animated-heading';

// Paw shape container — gently "breathes" (a small scale pulse) on a loop, each paw offset
// so they alternate right-then-left rather than pulsing in unison.
const PawSticker = ({
  mark,
  children,
  color,
  textColor = "#3d3024",
  className = "",
  breatheDelay = 0,
}: {
  mark: string;
  children: React.ReactNode;
  color: string;
  textColor?: string;
  className?: string;
  breatheDelay?: number;
}) => (
  <motion.div
    animate={{ scale: [1, 1.06, 1] }}
    transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.2, delay: breatheDelay, ease: "easeInOut" }}
    whileHover={{ scale: 1.08 }}
    className={`relative flex flex-col items-center justify-center w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] ${className}`}
  >
    {/* Background SVG Paw */}
    <svg 
      viewBox="0 0 100 100" 
      className="absolute inset-0 w-full h-full drop-shadow-[6px_6px_0_rgba(61,48,36,1)]" 
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill={color} stroke="#3d3024" strokeWidth="2.5" strokeLinejoin="round">
        {/* Toes */}
        <ellipse cx="50" cy="16" rx="11" ry="14"/>
        <ellipse cx="23" cy="32" rx="9" ry="12" transform="rotate(-20 23 32)" />
        <ellipse cx="77" cy="32" rx="9" ry="12" transform="rotate(20 77 32)" />
        {/* Main pad - flattened top so it's already wide where the text starts */}
        <path d="M10,72 C10,52 27,43 50,43 C73,43 90,52 90,72 C90,93 71,99 50,99 C29,99 10,93 10,72 Z"/>
      </g>
    </svg>

    {/* Content positioned absolutely inside the main pad's bounding box */}
    <div className="absolute top-[45%] bottom-[5%] left-[12%] right-[12%] z-10 flex flex-col items-center justify-center text-center">
      <p
        className="font-bold text-[16px] sm:text-[18px] leading-snug tracking-tight mb-1"
        style={{ color: textColor, fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </p>
      <span
        className="text-4xl sm:text-5xl font-bold leading-none"
        style={{ fontFamily: "'Luckiest Guy', sans-serif", color: textColor }}
      >
        {mark}
      </span>
    </div>
  </motion.div>
);

interface ProblemWeSolveProps {
  /** Shared scroll-driven background color (see page.tsx) — keeps this section in sync with the hero, no seam at the boundary. */
  bgColor?: MotionValue<string>;
}

const ProblemWeSolve = ({ bgColor }: ProblemWeSolveProps) => {
  return (
    <motion.section id="what-we-do" style={{ backgroundColor: bgColor ?? "#4ADE80" }} className="relative pt-24 md:pt-32 pb-32 overflow-hidden font-sans">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3d3024 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-8 md:px-12">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 w-full">

          {/* Left: Heading text */}
          <div className="z-20 flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[42%] lg:flex-shrink-0 lg:-ml-16 xl:-ml-24">
            <AnimatedHeading
              as="h2"
              text="WE WALK"
              trigger="inView"
              className="text-[56px] sm:text-[72px] md:text-[88px] lg:text-[86px] xl:text-[100px] leading-[0.88] font-normal uppercase m-0 tracking-tight text-[#3d3024]"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
            />
            <AnimatedHeading
              as="h2"
              text="YOUR DOGS"
              trigger="inView"
              className="text-[56px] sm:text-[72px] md:text-[88px] lg:text-[86px] xl:text-[100px] leading-[0.88] font-normal uppercase m-0 tracking-tight text-[#3d3024]"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
            />
            <AnimatedHeading
              as="h2"
              text="FOR YOU"
              trigger="inView"
              className="text-[56px] sm:text-[72px] md:text-[88px] lg:text-[86px] xl:text-[100px] leading-[0.88] font-normal uppercase m-0 tracking-tight text-[#3d3024]"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
            />
          </div>

          {/* Center: reserved space — the 3D dog crossing in from the hero (rendered as a shared overlay in page.tsx) sits here */}
          <div className="hidden lg:block w-[300px] flex-shrink-0" aria-hidden="true" />

          {/* Right: both paw stickers, grouped together */}
          <div className="flex flex-col items-center gap-10 lg:w-[32%] lg:flex-shrink-0 z-30">
            <PawSticker
              mark="?!"
              color="#A3D8FF"
              breatheDelay={1.2}
              className="-rotate-12 lg:ml-24 xl:ml-32"
            >
              Is your dog<br />staring at<br />the leash?
            </PawSticker>

            <PawSticker
              mark="..."
              color="#FCD34D"
              className="rotate-[9deg] lg:-ml-16 xl:-ml-24"
            >
              Too busy<br />to give them<br />a long walk?
            </PawSticker>
          </div>

        </div>

      </div>
    </motion.section>
  );
};

export default ProblemWeSolve;
