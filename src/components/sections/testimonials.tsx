"use client";

import React from "react";
import RevealText from "@/components/ui/reveal-text";
import AnimatedHeading from "@/components/ui/animated-heading";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative w-full bg-[#4ADE80] pt-40 pb-24 md:pb-32 overflow-hidden font-sans border-b-[6px] border-[#3d3024]">
      
      {/* Top Wave Divider - Fill matches WhyBritTalent bg #A3D8FF */}
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-none z-0">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[120px]"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-[#A3D8FF]"
          ></path>
        </svg>
      </div>

      {/* Background pattern - faint dog bones or simple shapes (optional, sticking to clean bright solid for now) */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3d3024 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-12 lg:gap-16">
        
        {/* Top: Text & Button */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[14px] md:text-[16px] font-bold tracking-[0.08em] uppercase text-[#3d3024] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3d3024]"></span>
              Testimonials
            </div>
            <AnimatedHeading
              as="h2"
              text="With over 100 5-star reviews on Google, don't just take our word for it!"
              trigger="inView"
              className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-[0.95] font-bold uppercase tracking-wide text-[#3d3024] m-0"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
            />
          </div>
          <a
            href="#"
            className="inline-flex shrink-0 items-center justify-center gap-3 px-8 py-4 bg-[#FCD34D] text-[#3d3024] text-[16px] md:text-[20px] font-bold uppercase tracking-wide border-[4px] border-[#3d3024] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_#3d3024] shadow-[4px_4px_0_#3d3024]"
            style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
          >
            Check out our reviews!
          </a>
        </div>

        {/* Bottom: Image and Quote Card Overlap */}
        <div className="relative mt-8 lg:mt-12 flex flex-col lg:flex-row items-center justify-center">
          
          {/* Image */}
          <div className="w-full lg:w-[45%] h-[400px] sm:h-[500px] lg:h-[600px] relative z-10 rounded-2xl border-[6px] border-[#3d3024] shadow-[8px_8px_0_#3d3024] overflow-hidden rotate-[-2deg] transition-transform duration-500 hover:rotate-0">
            <img 
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Dog trainer with dogs" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote Card */}
          <div className="w-full lg:w-[60%] bg-[#8B5CF6] p-8 md:p-12 lg:p-16 border-[6px] border-[#3d3024] shadow-[12px_12px_0_#3d3024] relative z-20 -mt-16 lg:mt-0 lg:-ml-20 rotate-[1deg]">
            
            {/* Decorative Quotes */}
            <div className="absolute top-6 left-6 opacity-20">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="#3d3024">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <RevealText as="blockquote" className="text-[24px] sm:text-[32px] md:text-[40px] leading-[1.2] font-bold text-white mb-8 relative z-10" style={{ textShadow: "2px 2px 0px #3d3024", WebkitTextStroke: "1px #3d3024" }}>
              &ldquo;Can&apos;t say enough great things about Dog Jogs. They are caring, responsive, capable, and provide excellent care. I recommend them to all.&rdquo;
            </RevealText>
            
            <RevealText as="cite" className="text-[18px] md:text-[22px] font-bold text-[#FCD34D] uppercase tracking-wider block" style={{ textShadow: "1px 1px 0px #3d3024" }}>
              — Shirley Featherstone
            </RevealText>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
