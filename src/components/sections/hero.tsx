import React from 'react';
import Image from 'next/image';

/**
 * Hero Section component for Brittalent.
 * Features a dynamic mesh gradient background with a high-impact headline,
 * descriptive text, CTA button, and compliance certification marks.
 */
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[900px] w-full overflow-hidden flex flex-col justify-end pb-[120px]">
      {/* Background Layer: Mesh Gradient / Video */}
      <div className="absolute top-[80px] inset-x-0 bottom-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/6981490c51c1e151d4cb9219_2F6983902256e7c4da0df2ff8-16.jpg"
        >
            <source
              src="https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219%2F6983902256e7c4da0df2ff82_orange-gradient_mp4.mp4"
              type="video/mp4"
            />
        </video>
        {/* Fallback Mesh Gradient if video fails */}
        <div className="mesh-gradient absolute inset-0 mix-blend-overlay opacity-40"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-[1280px] mx-auto">
          {/* Backed By Label */}
          <div className="mb-8 opacity-90">
            <span className="text-white font-display text-[14px] font-medium tracking-wider uppercase flex items-center gap-2">
              Backed by <span className="italic font-bold">a16z / speedrun</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white font-display text-[88px] leading-[1.05] font-normal tracking-[-0.02em] max-w-[800px] mb-12">
            The AI Compliance<br />Firewall
          </h1>

          {/* CTA Button */}
          <div className="mb-24">
            <a
              href="#demo"
              className="inline-flex items-center justify-center bg-white text-[#121212] font-display text-[14px] font-medium py-4 px-8 rounded-[4px] tracking-wider transition-transform hover:scale-105 active:scale-95 uppercase"
            >
              Book a call
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
            {/* Description Text */}
            <p className="text-white/90 font-display text-[20px] leading-[1.5] max-w-[560px]">
              Brittalent enforces SEC, FINRA, and firm policies on every message in real-time. 
              Your team gets instant feedback. Issues get fixed at the original source. 
              Everyone moves faster.
            </p>

            {/* Certification / Compliance Logos */}
            <div className="flex items-center gap-6 pb-2">
              <div className="flex flex-col items-center">
                <div className="w-[64px] h-[64px] border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-[10px] font-mono leading-none text-center">AICPA</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[64px] h-[64px] border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-[10px] font-mono leading-none text-center">ISO 27001</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[64px] h-[64px] border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-[10px] font-mono leading-none text-center">GDPR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Play Indicator Button */}
      <div className="absolute bottom-12 right-12 md:right-24 z-20">
        <button className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 7L1 12.1962L1 1.80385L11 7Z" fill="#121212"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;