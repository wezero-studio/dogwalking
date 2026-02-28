"use client";

import React from 'react';
import Image from 'next/image';

const ComplaintLook = () => {
  const cards = [
    {
      title: "Checked Before Send",
      description: "Your team sends thousands of messages every week. With Brittalent, every one is checked before it reaches clients. Not reviewed days later. Every message. In real-time.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/69852a8bcf31ec098f29802a_image_20440-13.avif",
      alt: "Dashboard showing real-time message checks"
    },
    {
      title: "Policies That Enforce Themselves",
      description: "Your compliance policies live right where your people write. SEC, FINRA, and firm policy. All active in Outlook, LinkedIn, and everywhere else. No gap between rules and reality.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/69852a8b979e8f951aec56c2_image_20441-14.avif",
      alt: "Interface showing compliance policies active in workflow"
    },
    {
      title: "AI With Guardrails Built In",
      description: "Teams draft with ChatGPT and Copilot. Brittalent checks every AI-generated message before it goes out. The AI writes fast. Brittalent keeps it compliant.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/69852a8b01ae940fccc07121_image_20442-15.avif",
      alt: "AI assistant interface with compliance guardrails"
    }
  ];

  return (
    <section className="bg-[#F5F5F5] py-[120px] overflow-hidden">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#1A1A1A] text-[40px] md:text-[56px] font-normal leading-[1.1] tracking-[-0.01em] mb-4 font-display">
            What Fast and Compliant Looks Like
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col">
              {/* Product Illustration Card */}
              <div className="glass-card rounded-[12px] bg-white aspect-[4/3] mb-8 overflow-hidden flex items-center justify-center p-0 transition-shadow duration-300 hover:shadow-xl border border-[#E6E6E6] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <div className="relative w-full h-full">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col px-1">
                <h5 className="text-[#1A1A1A] text-[20px] font-medium leading-[1.3] mb-4 font-display">
                  {card.title}
                </h5>
                <p className="text-[#7D7D7D] text-[16px] leading-[1.6] font-normal font-sans">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>
    </section>
  );
};

export default ComplaintLook;