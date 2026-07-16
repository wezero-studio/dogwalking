"use client";
import React from 'react';
import { motion, type MotionValue } from 'framer-motion';

interface HeroSectionProps {
  /** Shared scroll-driven background color (see page.tsx) — falls back to the static yellow if not provided. */
  bgColor?: MotionValue<string>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ bgColor }) => {
  // The 3D dog model lives entirely in page.tsx now (starts below the fold, only enters as you
  // scroll toward "what we do") — the hero itself renders no model, just its own decorative tray.

  return (
    <motion.section
      id="hero"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen overflow-visible lg:overflow-hidden flex flex-col"
      style={{ backgroundColor: bgColor ?? "#FCD34D" }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-tray {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .tray-float { animation: float-tray 4s ease-in-out infinite; }
      `}} />

      {/* ─── MAIN HERO BODY (fills screen minus ticker) ─── */}
      <div className="flex-1 flex flex-col lg:flex-row items-center lg:justify-between px-6 sm:px-10 md:px-16 xl:px-24 gap-10 lg:gap-4 pt-28 lg:pt-16 pb-12 lg:pb-0 min-h-0 relative">

        {/* ── Scattered sparkle diamonds (floating, not attached to any element) — desktop only, purely decorative ── */}
        {/* Sparkle 1 — top center-left */}
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0, duration: 0.4 }}
          className="hidden lg:block absolute top-[12%] left-[38%] z-30 pointer-events-none">
          <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
            <path d="M20 2 C20 2 22 14 32 20 C22 26 20 38 20 38 C20 38 18 26 8 20 C18 14 20 2 20 2Z" fill="white" stroke="#1a1208" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        {/* Sparkle 2 — top right (near heading) */}
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1, duration: 0.4 }}
          className="hidden lg:block absolute top-[22%] right-[6%] z-30 pointer-events-none">
          <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
            <path d="M20 2 C20 2 22 14 32 20 C22 26 20 38 20 38 C20 38 18 26 8 20 C18 14 20 2 20 2Z" fill="white" stroke="#1a1208" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        {/* Sparkle 3 — bottom left near burst */}
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.4 }}
          className="hidden lg:block absolute bottom-[14%] left-[18%] z-30 pointer-events-none">
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
            <path d="M20 2 C20 2 22 14 32 20 C22 26 20 38 20 38 C20 38 18 26 8 20 C18 14 20 2 20 2Z" fill="white" stroke="#1a1208" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        {/* Sparkle 4 — mid-right */}
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3, duration: 0.4 }}
          className="hidden lg:block absolute top-[55%] right-[3%] z-30 pointer-events-none">
          <svg width="16" height="16" viewBox="0 0 40 40" fill="none">
            <path d="M20 2 C20 2 22 14 32 20 C22 26 20 38 20 38 C20 38 18 26 8 20 C18 14 20 2 20 2Z" fill="white" stroke="#1a1208" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        {/* ── LEFT: Comic-book blob burst (desktop only — decorative flourish) ── */}
        <div className="hidden lg:flex w-[28%] flex-shrink-0 items-center justify-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
            className="relative w-[360px] h-[360px] xl:w-[420px] xl:h-[420px] -mt-48 flex items-center justify-center"
          >
            {/* Comic BOOM burst — traced image asset, static (no rotation) */}
            <img
              src="/spikeboom.png"
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
              style={{ filter: 'drop-shadow(4px 4px 0 #1a1208)' }}
            />

            {/* Burst Text — stays readable */}
            <div className="relative z-10 text-center flex flex-col items-center mt-8">
              <span className="block text-[9px] font-bold tracking-[0.15em] text-[#EF4444] uppercase mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                London&apos;s No.1
              </span>
              <span className="block text-[26px] xl:text-[30px] leading-[1.0] text-[#EF4444] uppercase" style={{ fontFamily: "'Luckiest Guy', sans-serif" }}>
                DOG<br />WALK<br />SET
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── CENTER: Circle + Tray extending out ── */}
        <div className="order-2 lg:order-none flex-1 flex items-center justify-center relative min-h-0 w-full">
          <motion.div
            className="tray-float relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {/* The large background circle */}
            <div
              className="relative"
              style={{ width: 'min(46vw, 460px)', height: 'min(46vw, 460px)' }}
            >
              <div className="absolute inset-0 rounded-full bg-[#60A5FA] border-[2px] border-[#1a1208]" />

              {/* Tray — positioned so it protrudes below the circle */}
              <div
                className="absolute left-1/2 -translate-x-1/2 z-10"
                style={{ bottom: '-18%', width: '115%' }}
              >
                {/* Tray top face (isometric feel — flat ellipse) */}
                <svg viewBox="0 0 320 100" className="w-full" style={{ overflow: 'visible' }}>
                  {/* Shadow */}
                  <ellipse cx="160" cy="94" rx="140" ry="18" fill="rgba(0,0,0,0.15)" />
                  {/* Tray body — rounded rect */}
                  <rect x="10" y="14" width="300" height="60" rx="18" fill="#2563EB" stroke="#1a1208" strokeWidth="2.5"/>
                  {/* Tray inner highlight */}
                  <rect x="20" y="22" width="280" height="44" rx="12" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.7"/>
                  {/* Tray front face / thickness */}
                  <rect x="10" y="64" width="300" height="20" rx="0" fill="#1D4ED8" stroke="#1a1208" strokeWidth="2.5"/>
                  <rect x="10" y="68" width="300" height="16" rx="0" fill="#1E40AF"/>

                  {/* Small items on tray — decorative placeholders for the dog model */}
                  {/* Platform block left */}
                  <rect x="40" y="4" width="52" height="30" rx="8" fill="#34D399" stroke="#1a1208" strokeWidth="2"/>
                  <rect x="40" y="24" width="52" height="10" rx="2" fill="#059669" stroke="#1a1208" strokeWidth="1.5"/>
                  {/* Platform block right */}
                  <rect x="226" y="8" width="44" height="26" rx="8" fill="#A78BFA" stroke="#1a1208" strokeWidth="2"/>
                  <rect x="226" y="24" width="44" height="10" rx="2" fill="#7C3AED" stroke="#1a1208" strokeWidth="1.5"/>
                  {/* Center stage (where dog will stand) */}
                  <ellipse cx="160" cy="28" rx="30" ry="10" fill="#93C5FD" stroke="#1a1208" strokeWidth="1.5"/>
                </svg>

                {/* Zero-size marker at the exact top of the center stage ellipse (cy-ry = 18/100 of tray SVG height) — page.tsx reads this to start the dog model right on the tray */}
                <div id="dog-anchor" className="absolute left-1/2" style={{ top: '18%', transform: 'translateX(-50%)', width: 0, height: 0 }} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── TEXT + CONTROLS (right column on desktop, first/top on mobile) ── */}
        <div className="order-1 lg:order-none flex w-full lg:w-[28%] flex-shrink-0 flex-col justify-center items-center lg:items-start text-center lg:text-left gap-5 lg:gap-6">

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-[36px] sm:text-[44px] md:text-[48px] lg:text-[40px] xl:text-[52px] leading-[0.92] text-[#1a1208] uppercase"
            style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
          >
            WALKS SO<br />GOOD,<br />TAILS<br />CAN&apos;T STOP
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex flex-col sm:flex-row lg:flex-row gap-3 sm:gap-5 text-[#1a1208] text-[14px] lg:text-[13px] xl:text-[14px] leading-relaxed font-medium max-w-[420px] lg:max-w-[340px]"
          >
            <p className="flex-1">
              Tail-wagging walks through London&apos;s best parks, every single day.
            </p>
            <p className="flex-1">
              Served with love by your dog&apos;s new favourite humans.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.95 }}
            className="mt-2 mb-2 lg:mb-0"
          >
            <a
              href="#contact"
              className="flex items-center gap-3 pl-6 pr-3 h-12 bg-white border-[1.5px] border-[#1a1208] rounded-xl text-[15px] font-bold uppercase tracking-wide text-[#1a1208] hover:bg-[#1a1208] hover:text-white transition-colors group"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
            >
              Schedule a Walk
              <span className="w-8 h-8 rounded-lg bg-[#1a1208] group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors">
                <svg className="w-4 h-4 text-white group-hover:text-[#1a1208]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="hidden lg:flex absolute bottom-20 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-[#1a1208]"
      >
        <svg className="w-7 h-7 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 10l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>

    </motion.section>
  );
};

export default HeroSection;
