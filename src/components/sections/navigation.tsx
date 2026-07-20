"use client";

import React, { useState, useEffect } from "react";

// href values point at real live section ids — the previous list had "Coverage"
// (#where-we-source) and "Why Us" (#why-us) pointing at sections that don't exist
// on the page anymore, so those links silently did nothing.
const NAV_LINKS = [
  { name: "Services", href: "#stats" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Why Us", href: "#what-we-do" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOverDark, setIsOverDark] = useState(true);
  const [ctaVisible, setCtaVisible] = useState(true);

  useEffect(() => {
    let prevScrollY = window.scrollY;
    let tick = false;

    const handleScroll = () => {
      if (!tick) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrolled(currentScrollY > 80);

          // CTA hides logic removed as per request
          prevScrollY = currentScrollY;

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
  }, [isMenuOpen]);

  const useWhiteText = !scrolled || isOverDark;

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-[1000] pointer-events-none">
      <div className="w-full px-6 md:px-16 pt-6 pointer-events-auto">
        <div
          className={`grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300 ${
            !scrolled ? "py-0" : "py-2"
          }`}
        >

          {/* Left: reserved empty space */}
          <div className="hidden lg:block" />

          {/* Nav links — centered */}
          <nav className="hidden lg:flex items-center gap-8 justify-self-center">
            {NAV_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-[14px] font-semibold transition-opacity tracking-wide whitespace-nowrap hover:opacity-60 ${
                  useWhiteText ? "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]" : "text-black"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop right CTA */}
          <a
            href="#booking"
            className="hidden lg:flex items-center gap-2 px-6 h-11 rounded-full text-[14px] font-bold uppercase tracking-wide hover:scale-105 transition-transform justify-self-end bg-[#1B3B2C] text-white"
            style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
          >
            Book Now
          </a>

          {/* Mobile: hamburger */}
          <button
            className={`lg:hidden col-start-3 justify-self-end ${useWhiteText ? "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]" : "text-[#1a1208]"}`}
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-[#FCD34D] border-[2px] border-[#1a1208] rounded-xl px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[18px] font-bold text-[#1a1208]"
                style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* Desktop has this as a standing pill in the header; mobile only had the
                hamburger's link list with no way to book at all until this was added. */}
            <a
              href="#booking"
              className="flex items-center justify-center gap-2 mt-2 px-6 h-12 rounded-full text-[15px] font-bold uppercase tracking-wide bg-[#1B3B2C] text-white"
              style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </header>
  </>
  );
};

export default Navigation;
