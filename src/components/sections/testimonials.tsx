"use client";

import React, { useRef } from "react";
import { type MotionValue } from "framer-motion";
import AnimatedHeading from "@/components/ui/animated-heading";

const reviews = [
  {
    title: "Perfect way to unwind",
    text: "I was honestly a bit skeptical at first, but this completely changed my mind. The effect is smooth and relaxing without feeling overwhelming.",
    name: "Tina A",
  },
  {
    title: "My new favorite treat",
    text: "These are amazing. The flavor is actually really good. I take one after work and it just melts the stress away. Will definitely be ordering again.",
    name: "Sara M",
  },
  {
    title: "Subtle, relaxing, and delicious",
    text: "These taste great and give a calm, happy feeling without being too intense. Perfect for a chill night at home or a weekend escape.",
    name: "Nina K",
  },
  {
    title: "Exactly what I needed",
    text: "I’ve tried so many different things and this is by far the best. It’s exactly the kind of relaxation I look for after a long and hectic day.",
    name: "James D",
  },
  {
    title: "Highly recommend!",
    text: "So impressed with the quality and the feeling it gives. I bring them to every get-together now and everyone always asks where they are from.",
    name: "Elena R",
  },
];

const Star = () => (
  <svg className="w-5 h-5 text-[#2E1C3B] fill-current" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Testimonials = ({ bgColor }: { bgColor?: MotionValue<string> }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="relative w-full pt-32 pb-32 bg-[#F9F4EB] overflow-hidden">
      {/* Inject Google Font for the Joyrush style */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap');
        .joyrush-font {
          font-family: 'Fraunces', serif;
        }
      `}} />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Heading */}
        <AnimatedHeading
          as="h2"
          trigger="inView"
          lines={["DON'T TAKE OUR", "WORD FOR IT"]}
          className="text-[#2E1C3B] text-[40px] md:text-[64px] lg:text-[80px] leading-[0.95] text-center max-w-[900px] uppercase mb-12"
          style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
        />

        {/* Carousel Controls */}
        <div className="flex gap-4 mb-12">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border-[1.5px] border-[#2E1C3B] flex items-center justify-center text-[#2E1C3B] hover:bg-[#2E1C3B] hover:text-[#F9F4EB] transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border-[1.5px] border-[#2E1C3B] flex items-center justify-center text-[#2E1C3B] hover:bg-[#2E1C3B] hover:text-[#F9F4EB] transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Track */}
        <div 
          ref={scrollRef}
          className="w-full flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((review, i) => (
            <div 
              key={i}
              className="relative flex-shrink-0 w-[300px] md:w-[380px] bg-[#F9F4EB] border-[1.5px] border-[#2E1C3B] rounded-3xl p-8 flex flex-col justify-between snap-start"
            >
              <div className="flex flex-col gap-6">
                <div className="flex gap-1">
                  <Star /><Star /><Star /><Star /><Star />
                </div>
                <h3
                  className="text-[#2E1C3B] text-[24px] md:text-[28px] leading-tight font-medium"
                  style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
                >
                  {review.title}
                </h3>
                <p className="text-[#2E1C3B] text-[15px] leading-[1.6] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {review.text}
                </p>
              </div>

              <div className="mt-12 pt-6 border-t border-[#2E1C3B]/20 flex justify-between items-end">
                <span className="joyrush-font text-[#2E1C3B] text-[18px] md:text-[20px] font-medium">
                  {review.name}
                </span>
                
                {/* Mock icons on the last card to match the reference style */}
                {i === reviews.length - 1 && (
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full border-[1.5px] border-[#FF5722] flex items-center justify-center text-[#FF5722]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full border-[1.5px] border-[#FF5722] flex items-center justify-center text-[#FF5722]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
