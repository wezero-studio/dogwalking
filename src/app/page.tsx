"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import Script from "next/script";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import ProblemWeSolve from "@/components/sections/problem-we-solve";
import StatsSection from "@/components/sections/stats-section";
import WhatWeDoDark from "@/components/sections/what-we-do-dark";
import OurReach from "@/components/sections/our-reach";
import GetStarted from "@/components/sections/get-started";
import WhyBritTalent from "@/components/sections/why-brit-talent";
import Testimonials from "@/components/sections/testimonials";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

// React 19's JSX types live under the 'react' module rather than the old global JSX namespace.
declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace -- ambient JSX augmentation requires `namespace`, no ES2015-module equivalent exists
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        [attr: string]: unknown;
      };
    }
  }
}

export default function Home() {
  const transitionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: transitionRef, offset: ["start end", "start start"] });
  const heroToWalkColor = useTransform(scrollYProgress, [0, 1], ["#FCD34D", "#4ADE80"]);

  // Testimonials -> Contact handoff: progress is driven by CONTACT's own entrance (stays 0,
  // i.e. pure green, for as long as testimonials is being read normally), but the resulting
  // color is applied to BOTH sections — so whichever portion of each is on screen always
  // shows the identical color, and the whole visible window shifts together with no seam.
  const contactRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: contactProgress } = useScroll({ target: contactRef, offset: ["start end", "start start"] });
  const testimonialsToContactColor = useTransform(contactProgress, [0, 1], ["#4ADE80", "#A3D8FF"]);

  // The 3D dog model is desktop-only. It was previously just CSS-hidden (`hidden lg:block`) on
  // mobile, which still mounts the <model-viewer> element — meaning the multi-MB .glb model was
  // downloading and a WebGL context spinning up in the background on every phone regardless,
  // which was a real contributor to the mobile jank. Gating it on an actual viewport check means
  // it's never added to the DOM at all below the breakpoint, so none of that work happens.
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useGSAP(() => {
    if (!isDesktop) return;

    // Starts sitting right on the hero's tray (via #dog-anchor) and is visible immediately —
    // it's the hero's centerpiece from the very first frame, then descends into "what we do"
    // as you scroll. The trigger range (top 100% -> top 20%) is wide enough that the descent
    // plays out visibly as you actually scroll, rather than resolving almost immediately.
    const anchor = document.getElementById("dog-anchor");
    const overlay = document.getElementById("dogOverlay");
    // Read the overlay's OWN rendered size instead of a hardcoded pixel offset, so this stays
    // correct at any viewport size. Using ~78% of its height (rather than the full height) sits
    // it a little lower on the tray than a full-height offset would.
    const overlayHeight = overlay ? overlay.getBoundingClientRect().height : 350;
    const startTop = anchor
      ? anchor.getBoundingClientRect().top - overlayHeight * 0.78
      : window.innerHeight * 0.35;

    gsap.set("#dogOverlay", { top: startTop });

    gsap.to("#dogOverlay", {
      top: "130vh",
      scale: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: "#what-we-do",
        start: "top 100%",
        end: "top 20%",
        scrub: true,        // instant sync with scroll — no lag jump
      },
    });
  }, [isDesktop]);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navigation />
      {isDesktop && (
        <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js" strategy="afterInteractive" />
      )}
      <main className="flex-grow relative">
        <HeroSection bgColor={heroToWalkColor} />
        <div ref={transitionRef}>
          <ProblemWeSolve bgColor={heroToWalkColor} />
        </div>

        {/* The Single Continuous 3D Dog powered by GSAP — desktop only, not just CSS-hidden but
            never mounted below the breakpoint (see isDesktop above) */}
        {isDesktop && (
          <div
            id="dogOverlay"
            className="absolute w-[350px] h-[350px] z-10"
            style={{ left: "calc(50vw - 175px)", transformOrigin: "center center" }}
          >
            {/* Inner: tray-float CSS animation lives here, separate from GSAP's transform */}
            <div className="w-full h-full tray-float flex items-center justify-center pointer-events-auto">
              <model-viewer
                src="/dog1.glb"
                auto-rotate
                auto-rotate-delay="0"
                rotation-per-second="30deg"
                interaction-prompt="none"
                camera-controls
                disable-zoom
                disable-pan
                shadow-intensity="1"
                shadow-softness="1"
                exposure="1"
                style={{ width: "100%", height: "100%", "--poster-color": "transparent", "--progress-bar-height": "0px" } as React.CSSProperties}
              ></model-viewer>
            </div>
          </div>
        )}

        <StatsSection />
        <OurReach />
        <GetStarted />
        <WhyBritTalent />
        <Testimonials bgColor={testimonialsToContactColor} />
        <div ref={contactRef}>
          <ContactSection bgColor={testimonialsToContactColor} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
