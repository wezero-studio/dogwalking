import React from 'react';
import { Mail } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section className="relative w-full px-4 md:px-8 py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Main CTA Card */}
        <div 
          className="relative rounded-[12px] p-8 md:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
          style={{
            background: 'linear-gradient(101deg, #1A49E8 0%, #3B82F6 45%, #9333EA 100%)',
          }}
        >
          {/* Content Left */}
          <div className="relative z-10 flex-1 max-w-[600px]">
            <div className="mb-6">
              <span className="text-white/80 font-mono text-[11px] uppercase tracking-widest">
                30 MINUTES. YOUR CONTENT. LIVE RESULTS.
              </span>
            </div>
            
            <h2 className="text-white text-[42px] md:text-[56px] leading-[1.1] font-normal tracking-[-0.01em] mb-6">
              See Brittalent On Your Communications
            </h2>
            
            <p className="text-white/80 text-[18px] mb-10 max-w-[480px]">
              Run your real communications through Brittalent. Watch issues get caught and fixed at the source. See your team finally unblocked.
            </p>

            {/* Email Form */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 max-w-[460px]">
              <div className="relative flex-1 group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  placeholder="Work email"
                  className="w-full h-[54px] bg-black/20 border border-white/20 rounded-md pl-12 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 focus:bg-black/30 transition-all font-sans text-[16px]"
                />
              </div>
              <button className="h-[54px] px-8 bg-white text-[#121212] font-medium text-[14px] uppercase tracking-wide rounded-md hover:bg-opacity-90 transition-colors whitespace-nowrap">
                BOOK A CALL
              </button>
            </div>

            <div className="mt-8">
              <p className="text-white/60 font-mono text-[11px] uppercase tracking-wider">
                30 MIN — NO PREP — YOUR DATA NEVER STORED — RESPONSE IN 2 HOURS
              </p>
            </div>
          </div>

          {/* Testimonial Right */}
          <div className="relative z-10 flex-1 w-full max-w-[440px]">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[12px] p-8 shadow-2xl">
              <div className="mb-6">
                <p className="text-white text-[20px] leading-[1.6] font-normal italic">
                  “Our team moves faster because they know exactly what&apos;s compliant. And our compliance team finally focuses on real work, not chasing down emails.”
                </p>
              </div>
              
              <div className="flex flex-col gap-1 border-t border-white/10 pt-6">
                <span className="text-white font-medium text-[16px]">HEAD OF COMPLIANCE</span>
                <span className="text-white/60 text-[14px]">Large Broker-Dealer</span>
              </div>
            </div>
          </div>

          {/* Background Decorative Blur */}
          <div 
            className="absolute top-0 right-0 w-[500px] h-full opacity-30 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;