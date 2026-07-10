"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";



const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up (unless near top)
      if (currentScrollY > prevScrollY && currentScrollY > 100 && !isMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      prevScrollY = currentScrollY;

      // Detect dark backgrounds under the navbar
      const darkSectionIds = ["hero-bg", "stats", "how-it-works", "contact"];
      let currentlyOverDark = false;
      const navCenterY = 50; // approximate center of the navbar

      for (const id of darkSectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navCenterY && rect.bottom >= navCenterY) {
            currentlyOverDark = true;
            break;
          }
        }
      }

      setIsDarkBackground(currentlyOverDark);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const navItems = [
    { name: "What We Do", href: "#what-we-do" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Where We Source", href: "#where-we-source" },
    { name: "Contact", href: "#contact" },
  ];

  const chromeIsLight = !isDarkBackground;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] bg-transparent py-7 md:py-9 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 -ml-4 md:-ml-16">
            <span
              className={`text-[22px] font-bold tracking-tight font-display transition-colors ${
                chromeIsLight ? "text-[#121212]" : "text-white"
              }`}
            >
              Brit Talent
            </span>
          </Link>

          {/* CTA & Expandable Menu */}
          <div className="flex items-center gap-3 -mr-4 md:-mr-16">
            <a
              href="#demo"
              className={`px-5 py-2.5 rounded-[4px] text-[14px] font-medium tracking-tight transition-colors uppercase whitespace-nowrap ${
                chromeIsLight
                  ? "bg-[#121212] text-white hover:bg-black"
                  : "bg-white text-[#121212] hover:bg-white/90"
              }`}
            >
              Talk to Us
            </a>

            <div className="relative">
              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                className={`group flex items-center gap-2 rounded-[4px] px-5 py-2.5 text-[14px] font-medium tracking-tight border transition-colors ${
                  chromeIsLight
                    ? "bg-[#121212]/5 border-[#121212]/10 text-[#121212] hover:bg-[#121212]/10"
                    : "bg-white/10 border-white/20 text-white backdrop-blur-sm hover:bg-white/20"
                }`}
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                <span>{isMenuOpen ? "Close" : "Menu"}</span>
              </button>

              {/* Expanded Panel */}
              {isMenuOpen && (
                <div
                  className={`absolute top-full right-0 mt-2 w-[220px] rounded-[4px] border py-6 px-6 flex flex-col gap-4 transition-colors ${
                    chromeIsLight
                      ? "bg-white border-[#E6E6E6] shadow-lg"
                      : "bg-[#121212] border-white/10 shadow-lg backdrop-blur-md"
                  }`}
                >
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-[15px] font-medium transition-colors ${
                        chromeIsLight
                          ? "text-[#1A1A1A] hover:text-[#7D7D7D]"
                          : "text-white hover:text-white/70"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Navigation;