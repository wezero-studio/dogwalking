"use client";

import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import ProblemWeSolve from "@/components/sections/problem-we-solve";
import StatsSection from "@/components/sections/stats-section";
import WhatWeDoDark from "@/components/sections/what-we-do-dark";
import OurReach from "@/components/sections/our-reach";
import WhyBritTalent from "@/components/sections/why-brit-talent";
import Testimonials from "@/components/sections/testimonials";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <ProblemWeSolve />
        <StatsSection />
        <OurReach />
        <WhatWeDoDark />
        <WhyBritTalent />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
