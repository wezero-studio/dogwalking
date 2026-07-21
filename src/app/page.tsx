"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import ProblemWeSolve from "@/components/sections/problem-we-solve";
import StatsSection from "@/components/sections/stats-section";
import PricingSection from "@/components/sections/pricing-section";
import GetStarted from "@/components/sections/get-started";
import FaqSection from "@/components/sections/faq-section";
import Testimonials from "@/components/sections/testimonials";
import ContactSection from "@/components/sections/contact-section";
import BookingSection from "@/components/sections/booking-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  const transitionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: transitionRef, offset: ["start end", "start start"] });
  const heroToWalkColor = useTransform(scrollYProgress, [0, 1], ["#FCD34D", "#4ADE80"]);

  const contactRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: contactProgress } = useScroll({ target: contactRef, offset: ["start end", "start start"] });
  const testimonialsToContactColor = useTransform(contactProgress, [0, 1], ["#4ADE80", "#A3D8FF"]);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <div ref={transitionRef}>
          <ProblemWeSolve bgColor={heroToWalkColor} />
        </div>
        <StatsSection />
        <GetStarted />
        <PricingSection />
        <FaqSection />
        <Testimonials bgColor={testimonialsToContactColor} />
        <BookingSection />
        <div ref={contactRef}>
          <ContactSection bgColor={testimonialsToContactColor} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
