"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/animated-heading";

const BookingSection = () => {
  return (
    <section
      id="booking"
      className="relative bg-[#FFF4B3] py-28 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Soft background texture blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#2E1C3B]/[0.04] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] rounded-full bg-[#2E1C3B]/[0.04] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-[880px] flex flex-col items-center"
      >
        {/* Label pill */}
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-[#FF5722] text-white text-[12px] font-bold uppercase tracking-[0.14em] px-5 py-2 rounded-full mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="w-2 h-2 rounded-full bg-white inline-block animate-pulse" />
          Book Your Walk
        </motion.span>

        {/* Heading */}
        <AnimatedHeading
          as="h2"
          trigger="inView"
          lines={["SCHEDULE YOUR", "PERFECT WALK."]}
          className="text-[#2E1C3B] text-[38px] sm:text-[50px] md:text-[68px] lg:text-[80px] leading-[0.92] uppercase mb-6 text-center tracking-tight"
          style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[#2E1C3B] text-[16px] md:text-[18px] mb-14 max-w-[520px] leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Pick a time that works for you and your pup. We can&apos;t wait to meet you both!
        </motion.p>

        {/* Embedded Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full bg-transparent rounded-[24px] overflow-hidden border border-[#2E1C3B]"
          style={{ height: '700px' }}
        >
          <iframe
            src="https://cal.eu/12345678910/30min"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            title="Schedule a walk"
            allowFullScreen
          />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default BookingSection;
