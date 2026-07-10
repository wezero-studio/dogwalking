"use client";

import React from "react";
import AnimatedHeading from "@/components/ui/animated-heading";
import RevealText from "@/components/ui/reveal-text";

const regions = [
  {
    label: "Source Market",
    flag: "🇵🇰",
    name: "Pakistan",
    note: "Primary focus — where we source qualified talent",
    highlight: true,
  },
  {
    label: "United Kingdom",
    flag: "🇬🇧",
    name: "United Kingdom",
    note: "Primary placement market",
    highlight: false,
  },
  {
    label: "Scandinavia",
    flag: "🇩🇰🇸🇪🇳🇴",
    name: "Scandinavia",
    note: "Denmark · Sweden · Norway",
    highlight: false,
  },
  {
    label: "Western Europe",
    flag: "🇫🇷🇪🇸🇮🇹",
    name: "Western Europe",
    note: "France · Spain · Italy",
    highlight: false,
  },
  {
    label: "Central Europe",
    flag: "🇩🇪",
    name: "Germany",
    note: "Central Europe",
    highlight: false,
  },
];

const OurReach = () => {
  return (
    <section id="where-we-source" className="bg-white text-[#0f172a] py-24 font-sans">
      <div className="w-full mx-auto px-6 md:px-16 lg:px-24">

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-10 text-[13px] font-semibold tracking-[0.06em] uppercase text-[#1e3a8a]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]"></span>
          Where We Source &amp; Place
        </div>

        {/* Two-col heading + body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 mb-20">
          <div>
            <AnimatedHeading
              as="h2"
              trigger="inView"
              text="Our Reach"
              className="text-[40px] md:text-[52px] lg:text-[60px] font-normal leading-[1.1] tracking-[-0.02em] font-display"
            />
          </div>
          <div className="flex items-end">
            <RevealText as="p" className="text-[17px] leading-[1.7] text-[#475569] max-w-lg">
              We&apos;re based in the United Kingdom and source talent primarily from Pakistan — placing skilled professionals into companies across the UK and into select European markets where the opportunity fits.
            </RevealText>
          </div>
        </div>

        {/* Region cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e2e8f0]">
          {regions.map((r) => (
            <div
              key={r.label}
              className={`flex flex-col justify-between p-8 min-h-[280px] transition-colors duration-200 ${
                r.highlight
                  ? "bg-[#f1f5f9] text-[#0f172a]"
                  : "bg-white text-[#0f172a] hover:bg-[#f8faff]"
              }`}
            >
              {/* Top: flags */}
              <div className="text-[32px] leading-none mb-6 tracking-wide">{r.flag}</div>

              {/* Bottom: name + note */}
              <div className="flex flex-col gap-1">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${
                    r.highlight ? "text-[#64748b]" : "text-[#94a3b8]"
                  }`}
                >
                  {r.label}
                </span>
                <span
                  className={`text-[18px] font-medium leading-snug ${
                    r.highlight ? "text-[#0f172a]" : "text-[#0f172a]"
                  }`}
                >
                  {r.name}
                </span>
                <span
                  className={`text-[13px] leading-snug mt-0.5 ${
                    r.highlight ? "text-[#475569]" : "text-[#64748b]"
                  }`}
                >
                  {r.note}
                </span>
              </div>
            </div>
          ))}

          {/* Empty filler card to complete the grid evenly */}
          <div className="bg-[#f8faff] p-8 min-h-[200px] hidden lg:flex flex-col justify-end">
            <p className="text-[13px] text-[#94a3b8] leading-[1.6] max-w-[200px]">
              Additional markets considered on a case-by-case basis.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurReach;
