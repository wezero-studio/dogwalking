"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Hero Section component for Brittalent.
 * Features a dynamic mesh gradient background with a high-impact headline,
 * descriptive text, CTA button, and compliance certification marks.
 */
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[900px] w-full overflow-hidden flex flex-col justify-end pb-[240px] md:pb-[120px]">
      {/* Background Layer: Mesh Gradient / Video */}
      <div className="absolute top-0 md:top-[80px] inset-x-0 md:inset-x-16 bottom-0 z-0 overflow-hidden md:rounded-2xl">
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

      <div className="container relative z-10 px-6 sm:px-8 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          {/* Backed By Label */}
          <div className="mb-8 opacity-90">
            <span className="text-white font-display text-[14px] font-medium tracking-wider uppercase flex items-center gap-2">
              Backed by <span className="italic font-bold">Y Combinator / Techstars</span>
            </span>
          </div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white font-display text-[42px] sm:text-[52px] md:text-[88px] leading-[1.05] font-normal tracking-[-0.02em] max-w-[800px] mb-8 md:mb-12"
          >
            Guaranteed<br />Appointments.
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16 md:mb-24"
          >
            <a
              href="#demo"
              className="inline-flex items-center justify-center bg-white text-[#121212] font-display text-[14px] font-medium py-4 px-8 rounded-[4px] tracking-wider transition-transform hover:scale-105 active:scale-95 uppercase"
            >
              Book a call
            </a>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-white/90 font-display text-[16px] md:text-[20px] leading-[1.5] md:max-w-[560px]"
            >
              Brittalent connects B2B companies with decision-makers who are ready to buy.
              We don't chase leads — we deliver booked calls, qualified pipelines, and
              predictable revenue growth.
            </motion.p>

            {/* Certification / Compliance Logos */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-6 pb-2"
            >
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
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;