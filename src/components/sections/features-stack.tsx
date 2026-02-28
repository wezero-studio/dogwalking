import React from 'react';
import Image from 'next/image';

const FeaturesStack = () => {
  return (
    <section className="bg-[#F5F5F5] py-[120px] overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-[60px]">
          <h2 className="text-[#1A1A1A] text-[56px] leading-[1.1] font-normal tracking-[-0.01em]">
            Real-Time Enforcement Layer
          </h2>
        </div>

        {/* Feature Blocks Stack */}
        <div className="flex flex-col gap-[120px]">
          
          {/* Feature 1: Configure Once */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
            <div className="order-2 lg:order-1 max-w-[480px]">
              <h3 className="text-[#1A1A1A] text-[28px] leading-[1.3] font-medium mb-4">
                Configure Once. Enforce Everywhere.
              </h3>
              <p className="text-[#7D7D7D] text-[16px] leading-[1.5] mb-8">
                Upload your firm policies on top of SEC rules and FINRA guidance. Brittalent turns them into live rules that run on every message, every channel, automatically. You set the standard. The system enforces it.
              </p>
              <a 
                href="/platform" 
                className="inline-block bg-[#121212] text-white text-[14px] font-medium px-6 py-3 rounded-[4px] uppercase tracking-wider hover:bg-black transition-colors"
              >
                LEARN MORE
              </a>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square lg:aspect-video flex items-center justify-center rounded-[12px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E24A3B]/10 via-[#F07E6E]/10 to-transparent blur-3xl opacity-50" />
              <div className="relative z-10 w-full flex justify-center">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/698a9a9489b318db90f91ecd_home-illu-1-9.png"
                  alt="Configure Once UI Illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-glass object-contain"
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Fix It Before (Reversed) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
            <div className="order-1 relative aspect-square lg:aspect-video flex items-center justify-center rounded-[12px] overflow-hidden bg-white/50 border border-[#E6E6E6]">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#1A73E8]/5 via-[#F07E6E]/5 to-transparent blur-3xl opacity-40" />
              <div className="relative z-10 w-full flex justify-center p-8">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/698a9a94735f622e057384f9_home-illu-2-10.png"
                  alt="Real-time issue detection mockup"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-glass object-contain"
                />
              </div>
            </div>
            <div className="order-2 max-w-[480px] lg:pl-12">
              <h3 className="text-[#1A1A1A] text-[28px] leading-[1.3] font-medium mb-4">
                Fix It Before It's a Problem
              </h3>
              <p className="text-[#7D7D7D] text-[16px] leading-[1.5] mb-8">
                Every outbound message is checked before it leaves. If there's an issue, your team sees it instantly and fixes it on the spot. Clean messages fly through. Problems never leave the building.
              </p>
              <a 
                href="/platform" 
                className="inline-block bg-[#121212] text-white text-[14px] font-medium px-6 py-3 rounded-[4px] uppercase tracking-wider hover:bg-black transition-colors"
              >
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Feature 3: Compliance Sees */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
            <div className="order-2 lg:order-1 max-w-[480px]">
              <h3 className="text-[#1A1A1A] text-[28px] leading-[1.3] font-medium mb-4">
                Compliance Sees What Matters
              </h3>
              <p className="text-[#7D7D7D] text-[16px] leading-[1.5] mb-8">
                Your compliance team sees real risks, patterns, and audit trails. Not noise. Issues get resolved at the source so compliance can focus on what actually needs attention.
              </p>
              <a 
                href="/platform" 
                className="inline-block bg-[#121212] text-white text-[14px] font-medium px-6 py-3 rounded-[4px] uppercase tracking-wider hover:bg-black transition-colors"
              >
                LEARN MORE
              </a>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square lg:aspect-video flex items-center justify-center rounded-[12px] overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-bl from-[#F07E6E]/10 via-[#E24A3B]/5 to-transparent blur-3xl opacity-50" />
              <div className="relative z-10 w-full flex justify-center">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/698a9a945f1f7b62177ac90c_home-illu-3-11.png"
                  alt="Compliance Command Center Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-glass object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Visual background grid - matches the design patterns */}
      <div 
        className="absolute inset-x-0 bottom-0 top-[40%] pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/6983a00ac891219169a2c859_main-grid-17.svg')`,
          backgroundSize: '1280px',
          backgroundPosition: 'center top'
        }}
      />
    </section>
  );
};

export default FeaturesStack;