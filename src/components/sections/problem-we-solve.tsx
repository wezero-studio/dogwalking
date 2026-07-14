"use client";

import React from 'react';
import AnimatedHeading from '@/components/ui/animated-heading';

// Paw shape container
const PawSticker = ({
  mark,
  children,
  color,
  textColor = "#3d3024",
  className = "",
}: {
  mark: string;
  children: React.ReactNode;
  color: string;
  textColor?: string;
  className?: string;
}) => (
  <div
    className={`relative flex flex-col items-center justify-center w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] transition-transform duration-300 hover:scale-105 ${className}`}
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
  </div>
);

// Ticket border for the button
function getTicketBorder(fill: string, stroke: string) {
  const f = encodeURIComponent(fill);
  const s = encodeURIComponent(stroke);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><rect x='4' y='4' width='112' height='112' rx='24' ry='24' fill='${f}' stroke='${s}' stroke-width='4'/><rect x='11' y='11' width='98' height='98' rx='18' ry='18' fill='none' stroke='${s}' stroke-width='2'/><rect x='16' y='16' width='88' height='88' rx='14' ry='14' fill='none' stroke='${s}' stroke-width='1.5'/></svg>`;
  return `url("data:image/svg+xml;utf8,${svg}")`;
}

const ProblemWeSolve = () => {
  return (
    <section id="what-we-do" className="relative bg-[#C8F560] pt-24 md:pt-32 pb-32 overflow-hidden text-center font-sans">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3d3024 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-8 md:px-12 flex flex-col items-center">

        <div className="flex flex-col lg:flex-row justify-center items-center relative w-full mb-10">

          {/* Left Paw Sticker */}
          <PawSticker
            mark="?!"
            color="#A3D8FF"
            className="lg:absolute lg:left-[-13%] lg:top-[-10px] -rotate-6 mb-8 lg:mb-0 z-30"
          >
            Is your dog<br />staring at<br />the leash?
          </PawSticker>

          {/* Center Text */}
          <div className="z-20 my-10 lg:my-0 flex flex-col items-center px-4">
            <AnimatedHeading
              as="h2"
              text="WE WALK"
              trigger="inView"
              className="text-[72px] sm:text-[96px] md:text-[120px] lg:text-[150px] xl:text-[170px] leading-[0.88] font-normal uppercase m-0 tracking-tight text-[#3d3024]"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
            />
            <AnimatedHeading
              as="h2"
              text="YOUR DOGS"
              trigger="inView"
              className="text-[72px] sm:text-[96px] md:text-[120px] lg:text-[150px] xl:text-[170px] leading-[0.88] font-normal uppercase m-0 tracking-tight text-[#3d3024]"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
            />
            <AnimatedHeading
              as="h2"
              text="FOR YOU"
              trigger="inView"
              className="text-[72px] sm:text-[96px] md:text-[120px] lg:text-[150px] xl:text-[170px] leading-[0.88] font-normal uppercase m-0 tracking-tight text-[#3d3024]"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
            />
          </div>

          {/* Right Paw Sticker */}
          <PawSticker
            mark="..."
            color="#FCD34D"
            className="lg:absolute lg:right-[-13%] lg:top-[150px] rotate-3 mt-8 lg:mt-0 z-30"
          >
            Too busy<br />to give them<br />a long walk?
          </PawSticker>

        </div>

        {/* Down Arrow + CTA */}
        <div className="flex flex-col items-center mt-2 lg:mt-4 z-20">
          <div className="mb-2">
            <svg width="60" height="72" viewBox="0 0 80 90" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M40,6 C78,30 2,58 40,80" stroke="#3d3024" strokeWidth="4" />
              <path d="M23,65 L38,80 L53,65" stroke="#3d3024" strokeWidth="4" />
            </svg>
          </div>

          {/* Ticket-border BOOK A WALK button */}
          <div
            className="cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:brightness-105"
            style={{
              border: '28px solid transparent',
              borderImageSource: getTicketBorder('#F87171', '#3d3024'),
              borderImageSlice: '28 fill',
              borderImageRepeat: 'stretch',
              filter: 'drop-shadow(5px 5px 0 #3d3024)',
            }}
          >
            <a
              href="#contact"
              className="flex items-center gap-3 text-[22px] md:text-[26px] font-bold uppercase tracking-wide text-[#3d3024]"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
            >
              BOOK A WALK
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemWeSolve;
