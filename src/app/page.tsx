"use client";

import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import LogoCloud from "@/components/sections/logo-cloud";
import FeaturesStack from "@/components/sections/features-stack";
import HowItWorks from "@/components/sections/how-it-works";
import Blueprint from "@/components/sections/blueprint";
import ChannelsGrid from "@/components/sections/channels-grid";
import Pricing from "@/components/sections/pricing";
import CtaBanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navigation />
      <main className="flex-grow pt-24 lg:pt-0">
        <HeroSection />
        <LogoCloud />
        <FeaturesStack />
        <HowItWorks />
        <Blueprint />
        <ChannelsGrid />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
