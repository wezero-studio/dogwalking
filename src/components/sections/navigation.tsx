"use client";

import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "Services", href: "#stats" },
  { name: "Coverage", href: "#where-we-source" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Why Us", href: "#why-us" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const nextVisible = !(currentScrollY > prevScrollY && currentScrollY > 100 && !isMenuOpen);
      prevScrollY = currentScrollY;
      setIsVisible(nextVisible);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-transform duration-300 pointer-events-none ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full px-6 md:px-16 pt-6 pointer-events-auto">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">

          {/* Left: reserved empty space for a future logo */}
          <div className="hidden lg:block" />

          {/* Nav links — centered */}
          <nav className="hidden lg:flex items-center gap-8 justify-self-center">
            {NAV_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[14px] font-semibold text-[#2E1C3B] hover:opacity-60 transition-opacity tracking-wide whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-5 h-11 bg-[#2E1C3B] text-[#F9F4EB] rounded-xl text-[14px] font-bold uppercase tracking-wide hover:opacity-85 transition-opacity justify-self-end"
            style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
          >
            Schedule a Walk
          </a>

          {/* Mobile: hamburger only */}
          <button
            className="lg:hidden col-start-3 justify-self-end text-[#1a1208]"
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
                style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 flex items-center justify-center gap-2 px-5 h-12 bg-[#1a1208] text-white rounded-xl text-[15px] font-bold uppercase tracking-wide"
              style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule a Walk
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
