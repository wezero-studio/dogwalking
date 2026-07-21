"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedHeading from '@/components/ui/animated-heading';
import RevealText from '@/components/ui/reveal-text';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center overflow-hidden">

      {/* ── Full-screen Background Image ── */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop"
          alt="Happy dogs running"
          fill
          priority
          className="hidden md:block object-cover object-center"
          sizes="100vw"
        />
        {/* Mobile Vertical Image */}
        <Image
          src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&auto=format&fit=crop"
          alt="Happy dog vertical"
          fill
          priority
          className="block md:hidden object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient: stronger on left so text pops, fades out to the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full px-6 md:px-8 lg:px-8 pt-24 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">

        {/* Left: Main Heading */}
        <div className="flex flex-col items-start lg:self-start lg:-mt-8">
          <AnimatedHeading
            as="h1"
            trigger="mount"
            lines={["ELEVATE YOUR", "DAY WITH OUR", "UNMATCHED DOG", "WALKS."]}
            className="text-white text-[34px] sm:text-[44px] md:text-[58px] lg:text-[66px] leading-[0.95] uppercase tracking-tight"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.25)", fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 mt-10"
          >
            <a
              href="#booking"
              className="flex items-center justify-center bg-white text-[#1B3B2C] px-10 py-4 rounded-full text-[15px] font-bold tracking-[0.05em] uppercase hover:scale-105 transition-transform"
              style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
            >
              Get Started
            </a>
            <a
              href="#booking"
              className="flex items-center justify-center bg-white text-[#1B3B2C] w-[54px] h-[54px] rounded-full hover:scale-110 transition-transform group"
              aria-label="Get Started"
            >
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right: Subtext */}
        <RevealText
          as="p"
          trigger="mount"
          delay={0.4}
          className="text-white/90 text-[16px] md:text-[18px] leading-[1.6] font-medium max-w-[380px] lg:pt-64 lg:-mr-16"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Discover the ultimate combination of fun and reliability with our trusted daily adventures.
        </RevealText>

      </div>
    </section>
  );
};

export default HeroSection;
