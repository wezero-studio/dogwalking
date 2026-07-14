"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import RevealText from "@/components/ui/reveal-text";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full min-h-[75vh] bg-[#A3D8FF] overflow-hidden font-sans flex flex-col items-center justify-center py-24 md:py-32">
      {/* Decorative background elements (inspired by reference) */}
      
      {/* Overlapping squares (top left) */}
      <div className="absolute top-[15%] left-[5%] md:left-[10%] opacity-90 rotate-12 hidden sm:block">
        <div className="w-10 h-10 md:w-14 md:h-14 border-[3px] md:border-[4px] border-[#3d3024] absolute top-0 left-0"></div>
        <div className="w-10 h-10 md:w-14 md:h-14 border-[3px] md:border-[4px] border-[#3d3024] absolute top-2 left-2"></div>
      </div>
      
      {/* Zig zag line (top right) */}
      <svg className="absolute top-[10%] right-[2%] md:right-[5%] w-16 h-48 md:w-24 md:h-64 text-[#F87171] opacity-90 hidden sm:block" viewBox="0 0 100 300" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter">
        <polyline points="20,0 80,40 20,80 80,120 20,160 80,200 20,240 80,280" />
      </svg>

      {/* Circle (bottom left) */}
      <div className="absolute bottom-[10%] left-[15%] w-12 h-12 md:w-20 md:h-20 rounded-full border-[4px] md:border-[6px] border-[#4ADE80] opacity-90 hidden sm:block"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Giant Funky Heading */}
        <h2 
          ref={headingRef}
          className="text-[64px] sm:text-[90px] md:text-[120px] lg:text-[150px] leading-[0.9] font-bold uppercase tracking-wide flex flex-col items-center mb-16 md:mb-20"
          style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
        >
          <div className="flex flex-wrap justify-center overflow-hidden">
            <motion.span 
              initial={{ y: "-110%" }} animate={{ y: isHeadingInView ? "0%" : "-110%" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="px-2 block"
              style={{ 
                color: "#FCD34D", 
                WebkitTextStroke: "2px #3d3024",
                textShadow: "6px 6px 0px #3d3024"
              }}
            >
              Ready to book
            </motion.span>
          </div>
          <div className="flex flex-wrap justify-center mt-2 md:mt-4 overflow-hidden">
            <motion.span 
              initial={{ y: "-110%" }} animate={{ y: isHeadingInView ? "0%" : "-110%" }} transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="px-2 block"
              style={{ 
                color: "#FFFFFF", 
                WebkitTextStroke: "2px #3d3024",
                textShadow: "6px 6px 0px #3d3024"
              }}
            >
              your first walk?
            </motion.span>
          </div>
        </h2>

        {/* Input area */}
        <RevealText as="div" trigger="inView" delay={0.2} className="relative w-full max-w-[700px] mt-4 md:mt-8">
          
          {/* Triangle pointing up from input box */}
          <div className="absolute -top-[28px] left-[55%] md:left-[60%] z-0 hidden sm:block">
             <svg width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L40 30H4Z" fill="#F8F9FA" stroke="#3d3024" strokeWidth="4" strokeLinejoin="miter"/>
             </svg>
          </div>

          {/* Label tag */}
          <div className="absolute -top-[16px] md:-top-[20px] left-[20px] md:left-[40px] z-20 bg-white border-[3px] md:border-[4px] border-[#3d3024] px-4 md:px-5 py-1.5 shadow-[4px_4px_0_#3d3024]">
            <span className="text-[12px] md:text-[15px] font-bold text-[#3d3024] tracking-widest uppercase">
              Your Email — We&apos;ll Be In Touch
            </span>
          </div>

          {/* Form */}
          {submitted ? (
             <div className="w-full bg-white border-[4px] md:border-[6px] border-[#3d3024] shadow-[8px_8px_0_#3d3024] p-8 md:p-12 flex items-center justify-center">
                <span className="text-[32px] md:text-[44px] font-bold text-[#3d3024] uppercase tracking-wide" style={{ fontFamily: "'Luckiest Guy', sans-serif" }}>
                  Your first walk is coming!
                </span>
             </div>
          ) : (
             <form onSubmit={handleSubmit} className="relative z-10 flex items-center w-full bg-white border-[4px] md:border-[6px] border-[#3d3024] shadow-[8px_8px_0_#3d3024] hover:shadow-[12px_12px_0_#3d3024] transition-shadow duration-300">
               <input 
                 type="email" 
                 required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="hello@youremail.com"
                 className="flex-1 w-full bg-transparent px-6 md:px-10 py-5 md:py-8 text-[20px] md:text-[28px] font-medium text-[#3d3024] placeholder:text-[#3d3024]/30 focus:outline-none"
               />
               <button type="submit" className="px-6 md:px-10 text-[#3d3024] hover:scale-110 transition-transform duration-200">
                 <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                 </svg>
               </button>
             </form>
          )}
        </RevealText>
      </div>
    </section>
  );
};

export default ContactSection;
