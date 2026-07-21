"use client";

import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOverDark, setIsOverDark] = useState(true);

  useEffect(() => {
    let tick = false;

    const handleScroll = () => {
      if (!tick) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrolled(currentScrollY > 80);

          // Check what section is under the navbar. Uses elementsFromPoint (plural) rather
          // than elementFromPoint: the nav itself is pointer-events-auto and sits on top at
          // this exact point, so a single-element hit-test just returns a nav link with no
          // enclosing <section>, and isOverDark silently never updates again. The full stack
          // lets us walk past the nav to the actual page content underneath it.
          const stack = document.elementsFromPoint(window.innerWidth / 2, 30);
          const section = stack.map((node) => node.closest('section')).find(Boolean);
          if (section) {
            const id = section.getAttribute('id');
            // White nav text over hero/stats/faqs/contact (photo backgrounds dark enough to
            // need it). Everything else — pricing, how-it-works, testimonials, what-we-do —
            // is light enough that black reads better.
            setIsOverDark(id === 'hero' || id === 'stats' || id === 'faqs' || id === 'contact');
          }

          tick = false;
        });
        tick = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useWhiteText = !scrolled || isOverDark;

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] pointer-events-none">
      <div className="w-full px-6 md:px-16 pt-6 pointer-events-auto">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            !scrolled ? "py-0" : "py-2"
          }`}
        >
          {/* Left: brand name */}
          <a
            href="#hero"
            className={`text-[18px] md:text-[22px] font-bold uppercase tracking-wide whitespace-nowrap transition-opacity hover:opacity-70 ${
              useWhiteText ? "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]" : "text-[#1B3B2C]"
            }`}
            style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
          >
            Heyford Walks
          </a>

          {/* Right: CTA */}
          <a
            href="#booking"
            className="flex items-center gap-2 px-6 h-11 rounded-full text-[14px] font-bold uppercase tracking-wide hover:scale-105 transition-transform bg-[#1B3B2C] text-white"
            style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
