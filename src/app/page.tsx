"use client";

import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import LogoCloud from "@/components/sections/logo-cloud";
import FeaturesStack from "@/components/sections/features-stack";
import ComplaintLook from "@/components/sections/complaint-look";
import VideoDemo from "@/components/sections/video-demo";
import ChannelsGrid from "@/components/sections/channels-grid";
import ApiBlock from "@/components/sections/api-block";
import Certifications from "@/components/sections/certifications";
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
        <ComplaintLook />
        <VideoDemo />
        <ChannelsGrid />
        <ApiBlock />
        <Certifications />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
