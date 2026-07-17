"use client";

import React from "react";
import { motion, type MotionValue } from "framer-motion";
import Image from "next/image";
import AnimatedHeading from "@/components/ui/animated-heading";

interface ContactSectionProps {
  /** Ignoring bgColor prop since this section now uses a static image background */
  bgColor?: MotionValue<string>;
}

const ContactSection = ({ bgColor }: ContactSectionProps) => {
  return (
    <section id="contact" className="relative w-full min-h-screen flex items-start pt-32 md:pt-40 overflow-hidden">
      {/* Inject Google Font for the Joyrush style */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap');
        .joyrush-font {
          font-family: 'Fraunces', serif;
        }
      `}} />

      {/* ── Background Image & Gradient ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact-bg.jpg"
          alt="Happy dog outdoors"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle gradient to ensure the white text pops against the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
      </div>

      {/* ── Content (Left Aligned) ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-start pt-20">
        
        <AnimatedHeading
          as="h2"
          trigger="inView"
          lines={["JOYFUL", "WALKS", "LOADING"]}
          className="text-white text-[48px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[0.9] uppercase max-w-[900px] tracking-tight"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.2)", fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4 mt-8 md:mt-10"
        >
          {/* Main Button */}
          <a 
            href="#" 
            className="joyrush-font flex items-center justify-center bg-white text-[#2E1C3B] px-8 md:px-12 py-4 rounded-full text-[16px] md:text-[18px] font-bold tracking-[0.05em] uppercase hover:scale-105 transition-transform shadow-lg"
          >
            Get Started
          </a>

          {/* Arrow Button */}
          <a 
            href="#" 
            className="flex items-center justify-center bg-white text-[#2E1C3B] w-[54px] h-[54px] md:w-[60px] md:h-[60px] rounded-full hover:scale-110 transition-transform shadow-lg group"
            aria-label="Get Started Arrow"
          >
            <svg 
              className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
