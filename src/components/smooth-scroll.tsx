"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 0.85,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.2,
      // Touch scroll stays native — mobile momentum scrolling is already smooth on its own,
      // and JS-driven touch interpolation here was stacking extra per-frame work on top of
      // GSAP ScrollTrigger's own calculations, which is what was making touch scrolling feel
      // glitchy through the pinned/scroll-linked sections.
      syncTouch: false,
    });

    // Single source of truth for animation frames: GSAP's own ticker drives Lenis's raf loop
    // (instead of a separate, independent requestAnimationFrame loop), and Lenis's scroll
    // updates are fed straight into ScrollTrigger.update. Without this wiring, Lenis and GSAP
    // each run their own rAF callback with no guaranteed order, so scroll-linked/scrubbed GSAP
    // animations (the dog model, pinned sections, etc.) can read a stale scroll position for a
    // frame — that's what shows up as jitter/glitchiness, worse on weaker mobile hardware.
    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Route in-page anchor links (nav menu, CTA buttons, etc.) through Lenis's
    // own smooth scrollTo instead of the browser's native jump-to-anchor —
    // keeps every scroll interaction on the same easing/engine, since we no
    // longer rely on CSS scroll-behavior (which fights Lenis's own rAF loop).
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { duration: 1.2 });
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(tickerCallback);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
