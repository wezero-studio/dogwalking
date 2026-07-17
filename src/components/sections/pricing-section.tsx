"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/animated-heading";

const PricingSection = () => {
  return (
    <section id="pricing" className="relative bg-[#F9F4EB] py-32 px-6 md:px-12 min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFB085] rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A3D6] rounded-full blur-[150px] opacity-20 translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <motion.div
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-[1000px] flex flex-col items-center"
      >
        {/* Heading */}
        <AnimatedHeading
          as="h2"
          trigger="inView"
          lines={["CLEAR PRICING,", "NO SURPRISES."]}
          className="text-[#2E1C3B] text-[60px] md:text-[90px] lg:text-[110px] leading-[0.85] uppercase mb-20 text-center tracking-tight"
          style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
        />

        {/* Pricing Rows */}
        <div className="w-full flex flex-col gap-10">
          
          {/* Row 1 */}
          <motion.div
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center md:items-baseline justify-between border-b-[4px] border-[#2E1C3B]/10 pb-8 group"
          >
            <span
              className="text-[#FF5722] text-[80px] md:text-[100px] leading-[0.8] tracking-tight mb-4 md:mb-0 transition-transform group-hover:scale-110 group-hover:rotate-[-2deg]"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
            >
              £15
            </span>

            <div className="flex-grow border-b-[6px] border-dotted border-[#2E1C3B] mx-10 opacity-15 mb-6 hidden md:block transition-opacity group-hover:opacity-40"></div>

            <AnimatedHeading
              as="h3"
              trigger="inView"
              text="One hour dog walk"
              className="text-[#2E1C3B] text-[32px] md:text-[48px] font-medium leading-none text-center md:text-right"
              style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
            />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center md:items-baseline justify-between border-b-[4px] border-[#2E1C3B]/10 pb-8 group"
          >
            <span
              className="text-[#FF5722] text-[80px] md:text-[100px] leading-[0.8] tracking-tight mb-4 md:mb-0 transition-transform group-hover:scale-110 group-hover:rotate-[-2deg]"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
            >
              £9
            </span>

            <div className="flex-grow border-b-[6px] border-dotted border-[#2E1C3B] mx-10 opacity-15 mb-6 hidden md:block transition-opacity group-hover:opacity-40"></div>

            <AnimatedHeading
              as="h3"
              trigger="inView"
              text="30 minute dog walk"
              className="text-[#2E1C3B] text-[32px] md:text-[48px] font-medium leading-none text-center md:text-right"
              style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
