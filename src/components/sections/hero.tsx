"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedHeading from '@/components/ui/animated-heading';
import RevealText from '@/components/ui/reveal-text';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-[#F9F4EB] pt-32 pb-20 px-6 md:px-12 lg:px-24 flex items-center overflow-hidden">

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start relative z-10">

        {/* ── LEFT SIDE: TEXT ── grid items-start: the right image column already fills the
            full row height, so top-aligning the row just brings this shorter column's top
            up to meet the right column's top — no separate offset needed on either side. */}
        <div className="flex flex-col items-start z-10 lg:pr-10">
          
          <div className="text-[#2E1C3B] text-[36px] sm:text-[46px] lg:text-[56px] xl:text-[64px] leading-[1.05] tracking-tight uppercase flex flex-col items-start" style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}>
            <AnimatedHeading 
              as="span"
              trigger="mount"
              lines={["ELEVATE YOUR", "DAY WITH OUR", "UNMATCHED DOG"]}
              className="block"
            />
            <AnimatedHeading 
              as="span"
              trigger="mount"
              lines={["WALKS."]}
              className="block"
            />
          </div>

          <RevealText 
            as="p" 
            trigger="mount" 
            delay={0.4} 
            className="text-[#2E1C3B]/80 text-[16px] md:text-[18px] leading-[1.6] font-medium max-w-[480px] mt-8"
          >
            Discover the ultimate combination of fun and reliability with our trusted daily adventures. Perfect for any pup, our walks are designed to enhance joyful moments while providing balance to your busy life.
          </RevealText>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-[#2E1C3B] text-[#F9F4EB] px-8 py-4 rounded-xl text-[16px] font-bold tracking-wide hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
            >
              Schedule a Walk
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT SIDE: IMAGES ── */}
        <div className="relative w-full h-[500px] lg:h-[700px] flex justify-end items-center mt-12 lg:mt-0">
          
          {/* Main Large Image - Arched / Pill */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[75%] h-[95%] lg:h-[100%] rounded-[200px] overflow-hidden border-[8px] lg:border-[16px] border-[#2E1C3B] z-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=1000&h=1300&fit=crop&q=80"
              alt="Happy dog running outdoors"
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
          {/* Small Overlapping Image - Arched / Pill */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute left-0 bottom-[10%] w-[45%] h-[55%] rounded-[150px] overflow-hidden border-[8px] lg:border-[16px] border-[#2E1C3B] z-10"
          >
            <Image 
              src="/contact-bg.jpg" 
              alt="Cute corgi outdoors" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
