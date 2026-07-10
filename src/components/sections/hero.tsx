"use client";
import React from 'react';
import AnimatedHeading from '@/components/ui/animated-heading';
import RevealText from '@/components/ui/reveal-text';

/**
 * Hero Section component for Brittalent.
 * Features a dynamic mesh gradient background with a high-impact headline,
 * descriptive text, CTA button, and compliance certification marks.
 */
const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[900px] w-full overflow-hidden flex flex-col justify-between bg-white pt-32 pb-16 md:pt-40 md:pb-20">
      {/* Background Layer: Mesh Gradient / Video */}
      <div id="hero-bg" className="absolute top-2 left-2 right-2 bottom-2 md:top-4 md:left-4 md:right-4 md:bottom-4 lg:top-6 lg:left-6 lg:right-6 lg:bottom-6 z-0 overflow-hidden rounded-3xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover [filter:saturate(1.25)_contrast(1.08)]"
          poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/6981490c51c1e151d4cb9219_2F6983902256e7c4da0df2ff8-16.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/6981490c51c1e151d4cb9219%2F6983902256e7c4da0df2ff82_orange-gradient_mp4.mp4"
            type="video/mp4"
          />
        </video>
        {/* Metallic blue duotone — oscillating dark/light stops create steel shimmer; mix-blend-color recolors the liquid video motion */}
        <div
          className="absolute inset-0 mix-blend-color"
          style={{
            background:
              "linear-gradient(135deg, #071640 0%, #0d2d7a 12%, #4a7fc1 24%, #1a3f8f 36%, #6ba3d6 48%, #1c4da0 60%, #5598cc 72%, #0f2d72 84%, #3a6aad 100%)",
          }}
        ></div>
        {/* Metallic shimmer highlight — soft silver-blue streaks via overlay */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-40"
          style={{
            background:
              "linear-gradient(120deg, transparent 0%, transparent 30%, rgba(180,210,255,0.6) 45%, transparent 60%, rgba(140,185,255,0.3) 75%, transparent 100%)",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#071640]/25 mix-blend-multiply"></div>
      </div>

      {/* Top: Headline, pinned left */}
      <div className="container relative z-10 px-6 sm:px-8 md:px-12">
        <div className="max-w-[1280px] mx-auto -ml-1 md:-ml-3">
          <AnimatedHeading
            as="h1"
            lines={["Can't Find the Talent You", "Need? We Source It."]}
            trigger="mount"
            delay={0.2}
            className="text-white font-display text-[22px] sm:text-[40px] md:text-[72px] leading-[1.1] font-normal tracking-[-0.02em]"
          />
        </div>
      </div>

      {/* Bottom: Description + CTA, pinned right */}
      <div className="container relative z-10 px-6 sm:px-8 md:px-12 mb-10 md:mb-14">
        <div className="max-w-[1280px] mx-auto flex justify-end mr-0 md:-mr-3">
          <div className="flex flex-col items-start md:items-end gap-6 text-left md:text-right max-w-[540px]">
            <RevealText
              as="p"
              trigger="mount"
              delay={0.5}
              className="text-white/90 font-display text-[16px] md:text-[18px] leading-[1.6]"
            >
              Brit Talent finds, sponsors, and places skilled international talent into UK
              and European companies facing hiring gaps they can&apos;t fill locally.
            </RevealText>

            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#121212] font-display text-[14px] font-medium py-4 px-8 rounded-[4px] tracking-wider transition-transform hover:scale-105 active:scale-95 uppercase"
            >
              Get in Touch <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;