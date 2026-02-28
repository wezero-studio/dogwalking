"use client";

import React from 'react';
import Image from 'next/image';

const LogoCloud = () => {
  const logos = [
    {
      name: 'Microsoft',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/6984e4b02ef70a3378fb669c_Microsoft_logo__2012_-6.avif',
      width: 120,
      height: 25,
    },
    {
      name: 'Raymond James',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/6984e4b0e31a385443d1dac3_Mask_20group-7.avif',
      width: 130,
      height: 30,
    },
    {
      name: 'Goldman Sachs',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/6984e4b0c6ee26f63cbd82a0_goldman-sachs-2-8.avif',
      width: 110,
      height: 35,
    },
    {
      name: 'IBM',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/svgs/69850876bf88c52505917c3e_ibm-4.svg',
      width: 80,
      height: 32,
    },
    {
      name: 'Google',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/6984e4b05ba88fef9658ee3f_Google_2015_logo-5.avif',
      width: 100,
      height: 32,
    },
  ];

  // Doubling for seamless infinite marquee effect
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-[#F5F5F5] py-[80px] overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="font-mono text-[14px] text-[#7D7D7D] font-medium tracking-normal mb-10">
          Built by AI leaders from
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-[marquee_40s_linear_infinite] space-x-12 items-center min-w-full">
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
      </div>

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