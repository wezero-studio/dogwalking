"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/animated-heading";
import RevealText from "@/components/ui/reveal-text";

const faqs = [
  {
    question: "What makes Our Company different?",
    answer: "We offer a truly bespoke approach to dog care, with services tailored to each dog's individual needs, routine, and personality. We ensure plenty of one-to-one attention, companionship, and care."
  },
  {
    question: "Are you insured and qualified?",
    answer: "Yes. We are fully insured, DBS checked, and canine first aid trained, giving you complete confidence that your dog is in safe and experienced hands."
  },
  {
    question: "How do you decide if a dog is suitable for group walks?",
    answer: "Every dog is assessed individually. Temperament, age, energy levels, recall, and compatibility with other dogs are all considered to ensure a safe and enjoyable experience for everyone."
  },
  {
    question: "What happens in bad weather?",
    answer: "Rain or shine, your dog still needs their exercise! We walk in all weather conditions, but in extreme heat or severe storms, we'll modify the routine for their safety and comfort."
  }
];

const qColors = ["#FF5722", "#8B5CF6", "#10B981", "#3B82F6"]; // Orange, Purple, Green, Blue

const FaqSection = () => {
  return (
    <section id="faqs" className="relative flex flex-col lg:flex-row w-full min-h-screen">
      {/* ── Left Side: Image ── */}
      <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen">
        <Image
          src="/faq-bg.jpg"
          alt="Happy dog on a walk"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* ── Right Side: FAQ Content ── */}
      <div className="w-full lg:w-1/2 bg-[#F9F4EB] p-10 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-center">
        
        <AnimatedHeading
          as="h2"
          trigger="inView"
          text="FAQs"
          className="text-[#2E1C3B] text-[60px] md:text-[80px] lg:text-[100px] leading-[0.8] mb-16 uppercase tracking-tight"
          style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
        />

        <div className="flex flex-col gap-12 w-full max-w-[600px]">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col group"
            >
              <AnimatedHeading
                as="h3"
                trigger="inView"
                text={faq.question}
                delay={i * 0.1}
                className="text-[24px] md:text-[28px] font-medium pb-4 border-b-[3px] border-[#2E1C3B]/20 mb-4 transition-colors group-hover:border-[#2E1C3B]/60 leading-tight"
                style={{ color: qColors[i % qColors.length], fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
              />
              <RevealText
                as="p"
                trigger="inView"
                delay={i * 0.1 + 0.1}
                className="text-[#2E1C3B]/90 text-[16px] md:text-[17px] leading-[1.6] font-medium pr-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {faq.answer}
              </RevealText>
            </motion.div>
          ))}
        </div>

        {/* Decorative Bottom Right Icons (from the first reference image) */}
        <div className="absolute bottom-8 right-8 flex gap-3 opacity-90 hidden md:flex">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#FF7A45] shadow-md hover:scale-110 transition-transform cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#FF7A45] shadow-md hover:scale-110 transition-transform cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
