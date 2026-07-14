"use client";
import React from 'react';
import { motion } from 'framer-motion';
import RevealText from '@/components/ui/reveal-text';

// Rect-based ticket border — works correctly on ANY aspect ratio (no distortion)
function getTicketBorder(fill: string, stroke: string) {
  const f = encodeURIComponent(fill);
  const s = encodeURIComponent(stroke);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><rect x='4' y='4' width='112' height='112' rx='24' ry='24' fill='${f}' stroke='${s}' stroke-width='4'/><rect x='11' y='11' width='98' height='98' rx='18' ry='18' fill='none' stroke='${s}' stroke-width='2'/><rect x='16' y='16' width='88' height='88' rx='14' ry='14' fill='none' stroke='${s}' stroke-width='1.5'/></svg>`;
  return `url("data:image/svg+xml;utf8,${svg}")`;
}

const PawIcon = () => (
  <svg width="18" height="18" viewBox="0 0 100 100" fill="#3d3024" style={{ flexShrink: 0 }}>
    <ellipse cx="50" cy="18" rx="11" ry="15"/>
    <ellipse cx="22" cy="36" rx="9" ry="12"/>
    <ellipse cx="78" cy="36" rx="9" ry="12"/>
    <ellipse cx="30" cy="53" rx="9" ry="12"/>
    <ellipse cx="70" cy="53" rx="9" ry="12"/>
    <path d="M50,42 C36,42 26,54 26,67 C26,80 36,90 50,90 C64,90 74,80 74,67 C74,54 64,42 50,42 Z"/>
  </svg>
);

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full flex flex-col overflow-hidden bg-[#A3D8FF]"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-icon {
          0%, 100% { transform: translateY(0px) rotate(-4deg); }
          50%        { transform: translateY(-12px) rotate(-4deg); }
        }
        @keyframes float-icon-2 {
          0%, 100% { transform: translateY(0px) rotate(6deg); }
          50%        { transform: translateY(-16px) rotate(6deg); }
        }
        .float-1 { animation: float-icon 3.5s ease-in-out infinite; }
        .float-2 { animation: float-icon-2 4.2s ease-in-out infinite; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 20s linear infinite; display: flex; }
      `}} />

      {/* ── MAIN CONTENT ── */}
      <div
        className="relative z-10 flex flex-col lg:flex-row items-stretch"
        style={{ minHeight: 'calc(115vh - 72px)', paddingTop: '5.5rem' }}
      >
        {/* ── LEFT: Typography ── */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-14 xl:px-20 py-12 lg:py-16 relative">

          {/* Floating Paw sticker #1 */}
          <div className="hidden lg:flex absolute top-16 right-4 xl:right-10 w-[72px] h-[72px] float-1 z-10">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[4px_4px_0_#3d3024]">
              <g fill="#4ADE80" stroke="#3d3024" strokeWidth="3" strokeLinejoin="round">
                <ellipse cx="50" cy="18" rx="11" ry="15"/>
                <ellipse cx="24" cy="34" rx="9" ry="12" transform="rotate(-20 24 34)" />
                <ellipse cx="76" cy="34" rx="9" ry="12" transform="rotate(20 76 34)" />
                <path d="M50,42 C24,42 12,62 12,78 C12,96 34,98 50,98 C66,98 88,96 88,78 C88,62 76,42 50,42 Z"/>
              </g>
            </svg>
          </div>

          {/* Floating Paw sticker #2 */}
          <div className="hidden lg:flex absolute top-40 right-28 xl:right-40 w-[60px] h-[60px] float-2 z-10">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[3px_3px_0_#3d3024]">
              <g fill="#FCD34D" stroke="#3d3024" strokeWidth="3" strokeLinejoin="round">
                <ellipse cx="50" cy="18" rx="11" ry="15"/>
                <ellipse cx="24" cy="34" rx="9" ry="12" transform="rotate(-20 24 34)" />
                <ellipse cx="76" cy="34" rx="9" ry="12" transform="rotate(20 76 34)" />
                <path d="M50,42 C24,42 12,62 12,78 C12,96 34,98 50,98 C66,98 88,96 88,78 C88,62 76,42 50,42 Z"/>
              </g>
            </svg>
          </div>

          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 text-[13px] font-bold tracking-[0.1em] uppercase text-[#3d3024] mb-8"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#3d3024]" />
            London&apos;s Favourite Dog Walkers
          </motion.div>

          {/* ── STACKED HEADLINE ── */}
          <div className="flex flex-col mb-10">
            {/* Line 1: plain */}
            <div className="overflow-hidden">
              <motion.div initial={{ y: '105%' }} animate={{ y: '0%' }} transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
                <span
                  className="block text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[6.5vw] xl:text-[6vw] leading-[1.0] font-extrabold uppercase text-[#3d3024]"
                  style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
                >
                  HAPPY DOGS,
                </span>
              </motion.div>
            </div>

            {/* Line 2: dark band */}
            <div className="overflow-hidden">
              <motion.div initial={{ y: '105%' }} animate={{ y: '0%' }} transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
                <div className="inline-block bg-[#3d3024] px-4 py-0 -mx-1" style={{ boxShadow: '5px 5px 0 #1a1208' }}>
                  <span
                    className="block text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[6.5vw] xl:text-[6vw] leading-[1.0] font-extrabold uppercase text-white"
                    style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
                  >
                    HAPPY OWNERS.
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Line 3: lime band */}
            <div className="overflow-hidden">
              <motion.div initial={{ y: '105%' }} animate={{ y: '0%' }} transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                <div
                  className="inline-block bg-[#C8F560] px-4 py-0 -mx-1 border-[4px] border-[#3d3024]"
                  style={{ boxShadow: '5px 5px 0 #3d3024' }}
                >
                  <span
                    className="block whitespace-nowrap text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[4.8vw] xl:text-[4.4vw] leading-[1.0] font-extrabold uppercase text-[#3d3024]"
                    style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
                  >
                    ACROSS LONDON.
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Description + CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
          >
            <RevealText
              as="p"
              trigger="mount"
              delay={0.65}
              className="text-[#3d3024] font-semibold text-[16px] lg:text-[17px] leading-[1.6] max-w-xs"
            >
              Professional walks, GPS tracking, and daily photo updates — your dog in safe hands.
            </RevealText>

            {/* ── TICKET-BORDER BUTTON (div wrapper for correct rendering) ── */}
            <div
              className="shrink-0 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:brightness-105"
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
                className="flex items-center gap-3 text-[20px] md:text-[22px] font-bold uppercase tracking-wide text-[#3d3024]"
                style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
              >
                Book a Walk
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Stats removed per request */}
        </div>

        {/* ── RIGHT: Photo ── */}
        <motion.div
          className="w-full lg:w-[44%] xl:w-[42%] relative flex-shrink-0 lg:mt-[1vh] lg:-ml-3"
          style={{ minHeight: '380px' }}
          initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[6px] bg-[#3d3024] z-20" />
          <div className="hidden lg:block absolute left-0 top-0 right-0 h-[6px] bg-[#3d3024] z-20" />
          <img
            src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Happy dog running outside"
            className="w-full h-full object-cover object-center"
            style={{ display: 'block' }}
          />
          {/* Photo badge */}
          <div
            className="absolute top-8 right-6 z-20 px-5 py-3"
            style={{
              border: '18px solid transparent',
              borderImageSource: getTicketBorder('#4ADE80', '#3d3024'),
              borderImageSlice: '18 fill',
              borderImageRepeat: 'stretch',
              filter: 'drop-shadow(4px 4px 0 #3d3024)',
              transform: 'rotate(3deg)',
            }}
          >
            <p className="text-[#3d3024] font-bold text-[13px] uppercase tracking-wide leading-snug text-center" style={{ fontFamily: "'Luckiest Guy', sans-serif" }}>
              GPS<br />Tracked<br />Walks
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── TICKER STRIP (green bg, SVG paw icons, no emojis) ── */}
      <div className="relative z-10 w-full bg-[#C8F560] border-t-[6px] border-[#3d3024] py-3 overflow-hidden flex-shrink-0">
        <div className="marquee-track whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-5 text-[18px] font-bold uppercase tracking-widest text-[#3d3024] px-8" style={{ fontFamily: "'Luckiest Guy', sans-serif" }}>
              <PawIcon /> Dog Walking
              <span className="mx-2 opacity-40">•</span>
              <PawIcon /> Cat Sitting
              <span className="mx-2 opacity-40">•</span>
              <PawIcon /> Pet Care
              <span className="mx-2 opacity-40">•</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
