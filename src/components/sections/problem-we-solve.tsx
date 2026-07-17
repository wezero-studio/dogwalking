"use client";

import React from 'react';
import { motion, type MotionValue } from 'framer-motion';
import AnimatedHeading from '@/components/ui/animated-heading';
import RevealText from '@/components/ui/reveal-text';

// Paw shape using SVG. Toes are solid, pad uses clip-path over an image.
// Drop shadow and thick stroke give it a playful 3D "sticker" feel.
const PawImage = ({ src, className = "", breatheDelay = 0, clipId = "pawClip1", toeColor = "#C5A3D6" }: { src: string, className?: string, breatheDelay?: number, clipId?: string, toeColor?: string }) => (
  <motion.div
    animate={{ scale: [1, 1.03, 1] }}
    transition={{ duration: 4, repeat: Infinity, delay: breatheDelay, ease: "easeInOut" }}
    className={`relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] ${className}`}
  >
    <svg 
      viewBox="0 0 100 100" 
      className="absolute inset-0 w-full h-full drop-shadow-[7px_7px_0_rgba(46,28,59,1)]" 
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M10,72 C10,52 27,43 50,43 C73,43 90,52 90,72 C90,93 71,99 50,99 C29,99 10,93 10,72 Z" />
        </clipPath>
      </defs>
      
      {/* Group holding the stroke properties for toes and pad */}
      <g stroke="#2E1C3B" strokeWidth="3" strokeLinejoin="round">
        {/* Toes: solid lighter color so they contrast with the dark border/shadow */}
        <ellipse cx="50" cy="16" rx="11" ry="14" fill={toeColor} />
        <ellipse cx="23" cy="32" rx="9" ry="12" fill={toeColor} transform="rotate(-20 23 32)" />
        <ellipse cx="77" cy="32" rx="9" ry="12" fill={toeColor} transform="rotate(20 77 32)" />

        {/* Main pad: image masked by the pad path */}
        <image 
          href={src} 
          x="0" 
          y="40" 
          width="100" 
          height="60" 
          preserveAspectRatio="xMidYMid slice" 
          clipPath={`url(#${clipId})`} 
        />

        {/* Thick stroke border around the main pad */}
        <path 
          d="M10,72 C10,52 27,43 50,43 C73,43 90,52 90,72 C90,93 71,99 50,99 C29,99 10,93 10,72 Z" 
          fill="none" 
        />
      </g>
    </svg>
  </motion.div>
);

interface ProblemWeSolveProps {
  bgColor?: MotionValue<string>;
}

const ProblemWeSolve = ({ bgColor }: ProblemWeSolveProps) => {
  return (
    <section id="what-we-do" className="relative pt-32 md:pt-48 pb-48 min-h-[120vh] flex items-center overflow-hidden bg-[#F9F4EB]">
      {/* Inject Google Font for the Joyrush style (Fraunces is a great soft serif) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap');
        .joyrush-font {
          font-family: 'Fraunces', serif;
        }
      `}} />

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-4 w-full">
          
          {/* Left Paw Image */}
          <div className="lg:w-[25%] flex justify-center lg:justify-start flex-shrink-0">
            <PawImage 
              src="/paw-left-internet.jpg" 
              className="-rotate-6" 
              clipId="clipLeft"
              toeColor="#FFB085"
            />
          </div>

          {/* Center Text */}
          <div className="lg:w-[50%] flex flex-col items-center text-center z-10 px-4">
            <AnimatedHeading
              as="h2"
              trigger="inView"
              lines={["CLEAN, FUN, FEEL GOOD WALKS", "THAT ENHANCE JOYFUL MOMENTS"]}
              className="text-[#2E1C3B] text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px] leading-[1.1] tracking-tight uppercase"
              style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
            />
            <RevealText
              as="p"
              trigger="inView"
              delay={0.2}
              className="joyrush-font mt-8 text-[#2E1C3B] text-[18px] sm:text-[22px] leading-relaxed max-w-[600px] opacity-90 font-medium"
            >
              Too busy to give them a long walk? Is your dog staring at the leash? We’ve got you covered with our trusted daily adventures.
            </RevealText>
          </div>

          {/* Right Paw Image — Moved up using negative margin on desktop */}
          <div className="lg:w-[25%] flex justify-center lg:justify-end flex-shrink-0 lg:-mt-48">
            <PawImage 
              src="/paw-pic-2.png" 
              className="rotate-12" 
              breatheDelay={1.5} 
              clipId="clipRight"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemWeSolve;
