"use client";

import React from "react";
import AnimatedHeading from "@/components/ui/animated-heading";
import RevealText from "@/components/ui/reveal-text";

const WhatWeDoDark = () => {
  const rows = [
    {
      id: "01",
      title: "Tell us what you're struggling to fill",
      body: "Walk us through the roles, the skills, and the experience level you need — and where local hiring has already fallen short.",
    },
    {
      id: "02",
      title: "We source and vet candidates",
      body: "We draw from our talent network, primarily in Pakistan, screening for skill, experience, and readiness before anyone reaches your shortlist.",
    },
    {
      id: "03",
      title: "We manage sponsorship",
      body: "UK visa sponsorship handled end to end, compliantly, so your team isn't buried in paperwork or chasing Home Office requirements.",
    },
    {
      id: "04",
      title: "We handle relocation",
      body: "From travel to settling in, including onward placement across Europe where relevant, so your hire arrives ready to work.",
    },
    {
      id: "05",
      title: "You hire with confidence",
      body: "A vetted, sponsored, ready-to-work hire lands on your team, without the legwork, delays, or guesswork of doing it alone.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#121212] text-white py-24 font-sans">
      {/* Top Heading */}
      <div className="w-full mx-auto px-6 md:px-16 lg:px-24 mb-16">
        <AnimatedHeading
          as="h2"
          trigger="inView"
          text="How It Works"
          className="text-[40px] md:text-[56px] lg:text-[64px] font-normal leading-[1.1] tracking-[-0.02em] font-display max-w-3xl"
        />
      </div>

      {/* Rows */}
      <div className="flex flex-col">
        {rows.map((row, index) => (
          <div
            key={row.id}
            className="sticky top-0 bg-[#121212] border-t border-[#333333] mx-4 md:mx-8 lg:mx-12"
            style={{ zIndex: index + 1 }}
          >
            <div className="flex flex-col md:flex-row px-2 md:px-8 lg:px-12 py-6 lg:py-7 gap-8 lg:gap-16 relative items-center">
              {/* Col 1: Subheading & Box */}
              <div className="w-full md:w-1/3 flex flex-col justify-between lg:-ml-8">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white pr-4">
                  {row.title}
                </h3>

                {/* CTA Box in the last row */}
                {index === rows.length - 1 && (
                  <div className="mt-12 hidden md:flex items-end">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-between w-full max-w-[280px] p-5 border border-[#333333] bg-[#1a1a1a] hover:bg-[#222222] transition-colors rounded-[4px] group/btn text-[16px] font-medium"
                    >
                      <span>Start a Conversation</span>
                      <svg
                        className="w-5 h-5 ml-4 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>

              {/* Col 2: Body Text */}
              <div className="w-full md:w-1/3 flex items-center">
                <RevealText as="p" className="text-[16px] leading-[1.7] text-white font-medium max-w-md">
                  {row.body}
                </RevealText>
              </div>

              {/* Col 3: Huge Number */}
              <div className="w-full md:w-1/3 flex justify-end items-center lg:-mr-8 overflow-hidden">
                <span className="text-[110px] sm:text-[150px] md:text-[220px] lg:text-[320px] font-serif leading-none tracking-tighter text-white">
                  {row.id}
                </span>
              </div>

              {/* Mobile CTA Box */}
              {index === rows.length - 1 && (
                <div className="mt-8 md:hidden w-full">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-between w-full p-5 border border-[#333333] bg-[#1a1a1a] hover:bg-[#222222] transition-colors rounded-[4px] group/btn text-[16px] font-medium"
                  >
                    <span>Start a Conversation</span>
                    <svg
                      className="w-5 h-5 ml-4 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
        <div
          className="relative bg-[#121212] border-t border-[#333333] mx-4 md:mx-8 lg:mx-12"
          style={{ zIndex: rows.length + 1 }}
        ></div>
      </div>
    </section>
  );
};

export default WhatWeDoDark;
