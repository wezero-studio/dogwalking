import React from 'react';

/**
 * Certifications Section
 * Clones the "Engineered For Regulated Institutions" section with compliance badges.
 * 
 * Design System:
 * - Background: #F5F5F5 (with global grid-pattern)
 * - Typography: Aeonik (Inter fallback)
 * - Colors: Primary #1A1A1A, Muted #7D7D7D, Button #121212
 */

const Certifications: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5F5F5] py-[120px] px-8">
      {/* Background Grid Pattern - Matches global style */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40 shrink-0" />

      {/* Content Container */}
      <div className="container relative z-10 mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          
          {/* Section Heading */}
          <h2 className="mb-12 max-w-[800px] text-[56px] font-normal leading-[1.1] tracking-[-0.01em] text-[#1A1A1A] font-display">
            Engineered For <br />
            Regulated Institutions
          </h2>

          {/* Compliance Badges Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {/* SOC 2 Badge */}
            <div className="flex flex-col items-center">
              <div className="w-[120px] h-[120px] rounded-full border border-[#E6E6E6] bg-white flex flex-col items-center justify-center p-4 shadow-glass transition-transform hover:scale-105 duration-300">
                <div className="text-[#1A1A1A] text-[18px] font-bold leading-tight">SOC 2</div>
                <div className="text-[#1A1A1A] text-[10px] font-medium tracking-wider uppercase mb-1">TYPE II</div>
                <div className="w-full h-[1px] bg-[#E6E6E6] my-2"></div>
                <div className="text-[#7D7D7D] text-[9px] uppercase tracking-tighter">Powered by</div>
                <div className="text-[#1A1A1A] text-[12px] font-bold">Vanta</div>
              </div>
            </div>

            {/* ISO 27001 Badge */}
            <div className="flex flex-col items-center">
              <div className="w-[120px] h-[120px] rounded-full border border-[#E6E6E6] bg-white flex flex-col items-center justify-center p-4 shadow-glass transition-transform hover:scale-105 duration-300">
                <div className="text-[#1A1A1A] text-[18px] font-bold leading-tight">ISO</div>
                <div className="text-[#1A1A1A] text-[16px] font-bold leading-tight uppercase mb-1">27001</div>
                <div className="w-full h-[1px] bg-[#E6E6E6] my-2"></div>
                <div className="text-[#7D7D7D] text-[9px] uppercase tracking-tighter">Powered by</div>
                <div className="text-[#1A1A1A] text-[12px] font-bold">Vanta</div>
              </div>
            </div>

            {/* GDPR Badge */}
            <div className="flex flex-col items-center">
              <div className="w-[120px] h-[120px] rounded-full border border-[#E6E6E6] bg-white flex flex-col items-center justify-center p-4 shadow-glass transition-transform hover:scale-105 duration-300">
                <div className="text-[#1A1A1A] text-[18px] font-bold leading-tight mb-1">GDPR</div>
                <div className="w-full h-[1px] bg-[#E6E6E6] my-2"></div>
                <div className="text-[#7D7D7D] text-[9px] uppercase tracking-tighter">Powered by</div>
                <div className="text-[#1A1A1A] text-[12px] font-bold">Vanta</div>
              </div>
            </div>
          </div>

          {/* Description Text */}
          <p className="max-w-[580px] text-[16px] leading-[1.6] text-[#7D7D7D] font-normal mb-10 px-4">
            Built for firms where the stakes are high. SOC 2 certified. <br className="hidden md:block" />
            SEC and FINRA rules encoded. Ready for whatever comes next.
          </p>

          {/* Trust Center CTA Button */}
          <a
            href="/trust"
            className="inline-block px-10 py-5 bg-[#121212] text-white text-[14px] font-medium tracking-[0.05em] uppercase rounded-[4px] shadow-lg transition-all hover:bg-black hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md"
          >
            View Trust Center
          </a>
        </div>
      </div>

      {/* Subtle border bottom for separation */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-[#E6E6E6]" />
    </section>
  );
};

export default Certifications;