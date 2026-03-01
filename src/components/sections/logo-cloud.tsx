"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LogoCloud = () => {
  const logos = [
    {
      name: 'Nike',
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
      width: 90,
      height: 32,
    },
    {
      name: 'Adidas',
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
      width: 100,
      height: 32,
    },
    {
      name: 'Microsoft',
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
      width: 120,
      height: 30,
    },
    {
      name: 'Strava',
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Strava_Logo.svg',
      width: 110,
      height: 32,
    },
    {
      name: 'Under Armour',
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Under_armour_logo.svg',
      width: 120,
      height: 30,
    },
    {
      name: 'Google',
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      width: 100,
      height: 32,
    },
  ];

  // Doubling for seamless infinite marquee effect
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-[#F5F5F5] py-[80px] overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="font-typewriter text-[18px] text-[#121212] font-medium tracking-normal mb-10"
        >
          Trusted by Industry Leaders
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full flex overflow-hidden group"
      >
        <div className="flex animate-[marquee_20s_linear_infinite] space-x-12 items-center min-w-full">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 bg-white/60 backdrop-blur-sm px-10 py-6 rounded-[8px] border border-[#E6E6E6] flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#D1D1D1] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 min-w-[200px]"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
                className="object-contain h-8 w-auto"
                priority={index < 8}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default LogoCloud;