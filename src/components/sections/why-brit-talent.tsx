"use client";

import React from "react";
import AnimatedHeading from "@/components/ui/animated-heading";
import RevealText from "@/components/ui/reveal-text";

const columns = [
  {
    number: "01",
    heading: "We Specialise in the Hard-to-Fill",
    body: "We don't compete for the same local talent pool everyone else is fishing in. We go where the skills actually are.",
  },
  {
    number: "02",
    heading: "We Handle the Whole Process",
    body: "Sourcing, vetting, sponsorship, relocation — one point of contact, not five different agencies.",
  },
  {
    number: "03",
    heading: "Compliant, End-to-End Sponsorship",
    body: "We manage UK sponsorship properly, so you get a hire who's set up to work legally and stay long-term.",
  },
];

const WhyBritTalent = () => {
  return (
    <section className="bg-white text-[#0f172a] py-24 font-sans">
      <div className="w-full mx-auto px-6 md:px-16 lg:px-24">

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-10 text-[13px] font-semibold tracking-[0.06em] uppercase text-[#1e3a8a]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]"></span>
          Why Brit Talent
        </div>

        {/* Section heading */}
        <div className="mb-14">
          <AnimatedHeading
            as="h2"
            trigger="inView"
            text="Why Companies Work With Us"
            className="text-[40px] md:text-[52px] lg:text-[60px] font-normal leading-[1.1] tracking-[-0.02em] font-display"
          />
        </div>

        {/* Three-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col) => (
            <div
              key={col.number}
              className="group flex flex-col justify-between bg-[#f1f5f9] rounded-[8px] p-8 md:p-10 min-h-[500px] hover:bg-[#e9eef4] transition-colors duration-300"
            >
              {/* Big serif number at top — like ref */}
              <div className="text-[100px] md:text-[130px] font-serif leading-none tracking-tight text-[#0f172a] -mt-4 md:-mt-6 mb-6">
                {col.number}
              </div>

              {/* Heading + body pinned to bottom */}
              <div className="flex flex-col gap-4">
                <div className="h-px w-full bg-[#cbd5e1]" />
                <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.3] text-[#0f172a]">
                  {col.heading}
                </h3>
                <RevealText as="p" className="text-[15px] leading-[1.7] text-[#475569]">
                  {col.body}
                </RevealText>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyBritTalent;
