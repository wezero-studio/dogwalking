"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const services = [
  {
    label: "Dog Walking",
    desc: "Daily walks tailored to your dog breed, energy, and personality. Solo or group walks available — rain or shine.",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&q=80",
    tag: "Most Popular",
  },
  {
    label: "Cat Sitting",
    desc: "In-home visits for your feline friends. We feed, play, and give them the love they deserve while you are away.",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&q=80",
    tag: "Our Fav",
  },
  {
    label: "Dog Grooming",
    desc: "From baths to nail trims and full breed cuts. We keep your pup looking and smelling their absolute best.",
    img: "https://images.unsplash.com/photo-1625316708582-7c38734be31d?w=400&h=400&fit=crop&q=80",
    tag: "Pamper Time",
  },
  {
    label: "Breakfast & Care",
    desc: "Morning feeding, medicine, and a little love. Perfect for pet parents heading to early meetings or long shifts.",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop&q=80",
    tag: "Rise & Shine",
  },
];

const StatsSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (rowRef.current) {
        setScrollDistance(rowRef.current.scrollWidth - window.innerWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 32,
    mass: 0.4,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section ref={targetRef} id="stats" className="relative h-[300vh] bg-[#C8F560]">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3d3024 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={rowRef}
          style={{ x, willChange: "transform" }}
          className="flex items-center gap-8 md:gap-12 px-8 md:px-24 w-max"
        >
          {/* 1. Intro Text Panel */}
          <div className="w-[85vw] md:w-[450px] flex-shrink-0 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-[13px] font-semibold tracking-[0.05em] uppercase text-[#2a5a00]">
              <span className="w-1.5 h-1.5 bg-[#2a5a00] rounded-full"></span>
              What We Offer
            </div>
            <h2
              className="text-[#1a3300] text-[70px] md:text-[90px] lg:text-[110px] leading-[0.9] font-normal uppercase m-0"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
            >
              OUR SERVICES
            </h2>
            <p className="text-[#2a4000] text-[18px] leading-[1.6] font-medium pr-8">
              Every pet is different. That is why we offer a full range of personalised services crafted around your dog routine, not ours.
            </p>
          </div>

          {/* 2. Service Cards */}
          {services.map((service, index) => (
            <div
              key={index}
              className="ticket-card w-[85vw] md:w-[420px] h-[480px] p-6 flex flex-col justify-between flex-shrink-0 relative group transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Arrow button */}
              <div className="absolute top-4 right-4 w-[50px] h-[50px] border-2 border-[#2a5a00] rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[#2a5a00] group-hover:text-[#C8F560] text-[#2a5a00] z-10">
                <svg
                  className="w-6 h-6 text-inherit -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </div>

              {/* Top: Tag + Title + Desc */}
              <div className="flex flex-col gap-3 mt-2">
                <span className="text-[11px] uppercase font-bold tracking-[0.12em] text-[#2a5a00] opacity-70">
                  {service.tag}
                </span>
                <h3 className="text-[26px] md:text-[28px] font-bold text-[#1a3300] uppercase tracking-wide border-b-2 border-[#2a5a00] pb-4 mb-1 pr-14 leading-tight">
                  {service.label}
                </h3>
                <p className="text-[#2a4000] text-[15px] leading-[1.55] font-medium max-w-[90%]">
                  {service.desc}
                </p>
              </div>

              {/* Bottom: Circular Image */}
              <div className="flex justify-end mt-auto">
                <div className="w-[130px] h-[130px] rounded-full border-4 border-[#2a5a00] overflow-hidden flex-shrink-0 shadow-md">
                  <img
                    src={service.img}
                    alt={service.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
