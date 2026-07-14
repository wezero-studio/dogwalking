"use client";

import React from "react";
import RevealText from "@/components/ui/reveal-text";
import AnimatedHeading from "@/components/ui/animated-heading";

const SignRight = ({ text, color, textColor = "#3d3024", rotation = "-rotate-2" }: { text: string, color: string, textColor?: string, rotation?: string }) => (
  <div className={`relative w-[240px] sm:w-[280px] md:w-[320px] h-[55px] sm:h-[65px] md:h-[75px] group transition-transform duration-300 hover:scale-105 md:hover:${rotation} origin-center md:origin-left z-10`} style={{ filter: 'drop-shadow(5px 5px 0px #3d3024)' }}>
    <svg className="w-full h-full" viewBox="0 0 400 90" preserveAspectRatio="none">
      <path 
        d="M 20 4 L 340 4 L 392 45 L 340 86 L 20 86 A 16 16 0 0 1 4 70 L 4 20 A 16 16 0 0 1 20 4 Z" 
        fill={color} stroke="#3d3024" strokeWidth="6" strokeLinejoin="round"
      />
      <path 
        d="M 22 12 L 336 12 L 378 45 L 336 78 L 22 78 A 10 10 0 0 1 12 68 L 12 22 A 10 10 0 0 1 22 12 Z" 
        fill="none" stroke="#3d3024" strokeWidth="2.5" strokeLinejoin="round"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center pr-8 md:pr-12">
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mt-1" style={{ color: textColor, fontFamily: "'Luckiest Guy', sans-serif" }}>
        {text}
      </span>
    </div>
  </div>
);

const SignLeft = ({ text, color, textColor = "#3d3024", rotation = "rotate-2" }: { text: string, color: string, textColor?: string, rotation?: string }) => (
  <div className={`relative w-[240px] sm:w-[280px] md:w-[320px] h-[55px] sm:h-[65px] md:h-[75px] group transition-transform duration-300 hover:scale-105 md:hover:${rotation} origin-center md:origin-right z-10`} style={{ filter: 'drop-shadow(5px 5px 0px #3d3024)' }}>
    <svg className="w-full h-full" viewBox="0 0 400 90" preserveAspectRatio="none">
      <path 
        d="M 60 4 L 380 4 A 16 16 0 0 1 396 20 L 396 70 A 16 16 0 0 1 380 86 L 60 86 L 8 45 Z" 
        fill={color} stroke="#3d3024" strokeWidth="6" strokeLinejoin="round"
      />
      <path 
        d="M 64 12 L 378 12 A 10 10 0 0 1 388 22 L 388 68 A 10 10 0 0 1 378 78 L 64 78 L 22 45 Z" 
        fill="none" stroke="#3d3024" strokeWidth="2.5" strokeLinejoin="round"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center pl-8 md:pl-12">
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mt-1" style={{ color: textColor, fontFamily: "'Luckiest Guy', sans-serif" }}>
        {text}
      </span>
    </div>
  </div>
);

const OurReach = () => {
  return (
    <section id="where-we-source" className="relative bg-[#A3D8FF] text-[#3d3024] pt-40 pb-24 font-sans overflow-hidden">
      
      {/* Top Wave Divider - Fill matches StatsSection bg #C8F560 */}
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-none z-10">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[120px]"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-[#C8F560]"
          ></path>
        </svg>
      </div>
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12">

        {/* 3-Column Layout: Left Text, Center Signpost, Right Text */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-0 mt-8">
          
          {/* Left Column: Title */}
          <div className="w-full lg:w-1/4 flex flex-col pt-0 lg:pt-16 order-1 lg:order-none">
            <div className="flex items-center gap-3 text-[13px] font-semibold tracking-[0.05em] uppercase text-[#3d3024] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3d3024]"></span>
              Where We Walk
            </div>
            <AnimatedHeading
              as="h2"
              text="OUR COVERAGE"
              trigger="inView"
              className="text-[#3d3024] text-[50px] md:text-[68px] lg:text-[86px] xl:text-[94px] leading-[0.9] font-normal uppercase m-0 tracking-wide"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
            />
          </div>

          {/* Center Column: Signpost */}
          <div className="w-full lg:w-1/2 flex justify-center order-3 lg:order-none -mt-4 lg:-mt-12">
            <div className="relative flex flex-col items-center w-full max-w-[700px] pt-8 pb-10">
              
              {/* The Pole */}
              <div className="absolute top-0 -bottom-8 left-1/2 -translate-x-1/2 w-8 md:w-10 bg-[#7B4425] rounded-t-2xl rounded-b-sm border-[4px] border-[#3d3024] z-0" style={{ boxShadow: "inset -6px 0 0 rgba(0,0,0,0.15)" }}>
                {/* Pole detail dots */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#3d3024] rounded-full opacity-60"></div>
                <div className="absolute top-24 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#3d3024] rounded-full opacity-60"></div>
              </div>

              {/* Signs */}
              <div className="relative w-full h-[65px] sm:h-[75px] mb-8 flex justify-center lg:block">
                <div className="lg:absolute lg:left-1/2 lg:-ml-[35px] z-10">
                  <SignRight text="SHOREDITCH" color="#FCD34D" rotation="-rotate-3" />
                </div>
              </div>

              <div className="relative w-full h-[65px] sm:h-[75px] mb-8 flex justify-center lg:block">
                <div className="lg:absolute lg:right-1/2 lg:-mr-[35px] z-20">
                  <SignLeft text="HACKNEY" color="#4ADE80" rotation="rotate-2" />
                </div>
              </div>

              <div className="relative w-full h-[65px] sm:h-[75px] mb-8 flex justify-center lg:block">
                <div className="lg:absolute lg:left-1/2 lg:-ml-[25px] z-10">
                  <SignRight text="ISLINGTON" color="#F87171" rotation="-rotate-2" />
                </div>
              </div>

              <div className="relative w-full h-[65px] sm:h-[75px] mb-8 flex justify-center lg:block">
                <div className="lg:absolute lg:right-1/2 lg:-mr-[45px] z-20">
                  <SignLeft text="CAMDEN" color="#D97706" rotation="rotate-3" />
                </div>
              </div>

              <div className="relative w-full h-[65px] sm:h-[75px] mb-16 flex justify-center lg:block">
                <div className="lg:absolute lg:left-1/2 lg:-ml-[50px] z-10">
                  <SignRight text="PECKHAM" color="#FFFFFF" rotation="-rotate-1" />
                </div>
              </div>

              {/* Pole Base - moved lower by increasing mb on last sign and bottom-4 on pole */}
              {/* Pole Base */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-10 w-32 md:w-44 h-10 md:h-12 bg-[#7B4425] rounded-[100%] border-[4px] border-[#3d3024]" style={{ boxShadow: "inset 0 -6px 0 rgba(0,0,0,0.2), 0 6px 0 #3d3024" }}>
                <div className="absolute inset-1.5 border-2 border-[#3d3024] rounded-[100%] opacity-30"></div>
              </div>
              
              {/* Highly Defined Cute Puppy SVG */}
              <div className="absolute -bottom-7 sm:-bottom-8 md:-bottom-9 left-1/2 -translate-x-1/2 w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] z-20">
                <style>{`
                  @keyframes wag {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(12deg); }
                    75% { transform: rotate(-12deg); }
                  }
                  .wagging-tail {
                    animation: wag 0.25s ease-in-out infinite;
                    transform-origin: 70px 70px;
                  }
                `}</style>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 hover:scale-[1.10] origin-bottom"
                  style={{ filter: "drop-shadow(6px 6px 0px #3d3024)" }}
                >
                  {/* Tail */}
                  <path d="M 70 70 C 80 80, 90 60, 85 50 C 80 40, 70 60, 70 70 Z" fill="#7B4425" stroke="#3d3024" strokeWidth="4" strokeLinejoin="round" className="wagging-tail"/>
                  
                  {/* Body */}
                  <path d="M 25 85 C 25 60, 75 60, 75 85 Z" fill="#7B4425" stroke="#3d3024" strokeWidth="4" strokeLinejoin="round"/>
                  
                  {/* Front Legs */}
                  <path d="M 40 70 L 40 90 A 5 5 0 0 0 50 90 L 50 70" fill="#7B4425" stroke="#3d3024" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 50 70 L 50 90 A 5 5 0 0 0 60 90 L 60 70" fill="#7B4425" stroke="#3d3024" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>

                  {/* Ears (Back) */}
                  <path d="M 25 35 C 10 35, 10 65, 25 60 C 35 55, 30 35, 25 35 Z" fill="#7B4425" stroke="#3d3024" strokeWidth="4" strokeLinejoin="round"/>
                  <path d="M 75 35 C 90 35, 90 65, 75 60 C 65 55, 70 35, 75 35 Z" fill="#7B4425" stroke="#3d3024" strokeWidth="4" strokeLinejoin="round"/>

                  {/* Head */}
                  <circle cx="50" cy="40" r="22" fill="#7B4425" stroke="#3d3024" strokeWidth="4"/>
                  
                  {/* Inner Ear Flaps */}
                  <path d="M 25 40 C 15 45, 18 55, 25 55" fill="#FCD34D" stroke="#3d3024" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M 75 40 C 85 45, 82 55, 75 55" fill="#FCD34D" stroke="#3d3024" strokeWidth="3" strokeLinecap="round"/>

                  {/* Eyes */}
                  <ellipse cx="41" cy="35" rx="3.5" ry="5" fill="#3d3024"/>
                  <ellipse cx="59" cy="35" rx="3.5" ry="5" fill="#3d3024"/>
                  
                  {/* Eye Highlights */}
                  <circle cx="42" cy="33" r="1.5" fill="#ffffff"/>
                  <circle cx="60" cy="33" r="1.5" fill="#ffffff"/>

                  {/* Snout */}
                  <ellipse cx="50" cy="48" rx="14" ry="10" fill="#FCD34D" stroke="#3d3024" strokeWidth="4"/>
                  
                  {/* Nose */}
                  <ellipse cx="50" cy="44" rx="5" ry="3" fill="#3d3024"/>
                  
                  {/* Mouth */}
                  <path d="M 50 47 L 50 52 C 50 55, 45 55, 45 52" stroke="#3d3024" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M 50 52 C 50 55, 55 55, 55 52" stroke="#3d3024" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  
                  {/* Tongue */}
                  <path d="M 47 53 C 47 60, 53 60, 53 53 Z" fill="#F87171" stroke="#3d3024" strokeWidth="2.5" strokeLinejoin="round"/>
                </svg>
              </div>
              
            </div>
          </div>

          {/* Right Column: Paragraph */}
          <div className="w-full lg:w-1/4 flex flex-col justify-end pt-0 lg:pt-32 order-2 lg:order-none">
            <RevealText as="p" className="text-[18px] md:text-[20px] leading-[1.6] text-[#3d3024] font-medium">
              We cover key neighbourhoods across London — from Shoreditch to Peckham. If your street&apos;s on the map, your dog&apos;s covered. Not sure? Drop us a message and we&apos;ll let you know.
            </RevealText>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurReach;
