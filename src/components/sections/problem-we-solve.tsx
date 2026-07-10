"use client";

import React from 'react';
import AnimatedHeading from '@/components/ui/animated-heading';
import RevealText from '@/components/ui/reveal-text';

const ProblemWeSolve = () => {
  return (
    <section id="what-we-do" className="bg-[#ffffff] text-[#000000] py-24 font-sans">
      <div className="container mx-auto px-6 max-w-[1280px]">
        
        {/* Eyebrow & Large Text */}
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex items-center gap-3 text-[13px] font-semibold tracking-[0.05em] uppercase text-[#1a1a1a] lg:-ml-2">
            <span className="w-1.5 h-1.5 bg-[#1e3a8a] rounded-full"></span>
            What We Do — The Problem We Solve
          </div>
          
          <AnimatedHeading
            as="h2"
            trigger="inView"
            text="Some markets have jobs. Some markets have the people to fill them. Rarely do the two meet."
            className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-normal tracking-[-0.02em] max-w-[100%] lg:max-w-[95%] lg:-ml-2 font-display"
          />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column (Empty as in ref pic) */}
          <div className="hidden lg:block"></div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-10">
            {/* Gray Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="#" className="group bg-[#f1f5f9] text-[#0f172a] p-6 rounded-[4px] flex justify-between items-end min-h-[140px] transition-colors duration-300 hover:bg-[#e2e8f0] hover:text-[#1e3a8a]">
                <span className="text-[17px] font-medium">Our Story</span>
                <svg className="w-6 h-6 text-[#475569] group-hover:text-[#1e3a8a] transition-all duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
              <a href="#" className="group bg-[#f1f5f9] text-[#0f172a] p-6 rounded-[4px] flex justify-between items-end min-h-[140px] transition-colors duration-300 hover:bg-[#e2e8f0] hover:text-[#1e3a8a]">
                <span className="text-[17px] font-medium">Our Solutions</span>
                <svg className="w-6 h-6 text-[#475569] group-hover:text-[#1e3a8a] transition-all duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Body Text */}
            <div className="text-[17px] leading-[1.6] text-[#1a1a1a] font-normal space-y-6 lg:max-w-[90%]">
              <RevealText as="p">
                Brit Talent exists to close that gap. We identify unsaturated markets — industries and roles where companies are struggling to find the right skills locally — and we connect them with qualified talent from outside the UK, primarily from Pakistan.
              </RevealText>
              <RevealText as="p" delay={0.1}>
                We handle the hard part: sourcing, vetting, sponsorship, and relocation. Companies get the people they need. Skilled professionals get access to opportunities they&apos;d otherwise never reach.
              </RevealText>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemWeSolve;
