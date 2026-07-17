"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedHeading from "@/components/ui/animated-heading";
import RevealText from "@/components/ui/reveal-text";

const services = [
  {
    label: "Dog Walking",
    desc: "Daily walks tailored to your dog's breed, energy, and personality. Solo or group walks available — rain or shine.",
  },
  {
    label: "Dog Training",
    desc: "From basic obedience to advanced tricks. We help your dog become the best version of themselves using positive reinforcement.",
  },
  {
    label: "Dog Grooming",
    desc: "From baths to nail trims and full breed cuts. We keep your pup looking and smelling their absolute best.",
  },
  {
    label: "Breakfast & Care",
    desc: "Morning feeding, medicine, and a little love. Perfect for pet parents heading to early meetings or long shifts.",
  },
];

const StatsSection = () => {
  return (
    <section id="stats" className="relative min-h-[160vh] flex flex-col justify-between overflow-hidden">
      {/* Inject Google Font for the Joyrush style if not already loaded globally */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap');
        .joyrush-font {
          font-family: 'Fraunces', serif;
        }
      `}} />

      {/* ── Background Image & Gradient Overlay ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services-bg.jpg"
          alt="Dogs and owners at the park"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ── Top Content: Headings ── */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-32 pb-16 px-6 text-center">
        <AnimatedHeading
          as="h2"
          trigger="inView"
          lines={["YOUR DAY IS HECTIC.", "YOUR DOG'S SHOULDN'T BE."]}
          className="text-white text-[34px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[0.95] uppercase max-w-[1200px]"
          style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700, textShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
        />

        <RevealText
          as="p"
          trigger="inView"
          delay={0.2}
          className="joyrush-font mt-8 text-white text-[18px] sm:text-[22px] max-w-[600px] leading-relaxed font-medium opacity-90"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
        >
          Our company is crafted to turn those busy work days into joyful harmony and total balance for your pets.
        </RevealText>
      </div>

      {/* ── Bottom Content: Service Cards ── */}
      <div className="relative z-10 w-full px-6 md:px-12 pb-16 mt-auto max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#F9F4EB] rounded-[32px] border-[5px] border-[#FF5722] p-8 flex flex-col justify-between h-[320px] transition-transform hover:-translate-y-2 shadow-xl cursor-pointer"
            >
              {/* Card Title */}
              <h3
                className="text-[#2E1C3B] text-[28px] md:text-[32px] leading-tight"
                style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
              >
                {service.label}
              </h3>
              
              {/* Card Description */}
              <div className="flex flex-col gap-4 mt-auto">
                <p 
                  className="text-[#2E1C3B] text-[15px] sm:text-[16px] leading-[1.6] font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {service.desc}
                </p>
                
                {/* Decorative Bottom Right Arrow */}
                <div className="flex justify-end mt-2">
                  <div className="w-12 h-12 rounded-full bg-[#FF5722] flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-md">
                    <svg className="w-6 h-6 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
