"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide on scroll down, show on scroll up
      const nextVisible = !(currentScrollY > prevScrollY && currentScrollY > 100 && !isMenuOpen);
      prevScrollY = currentScrollY;
      
      setIsVisible(nextVisible);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const navItems = [
    { name: "What We Do", href: "#what-we-do" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Where We Source", href: "#where-we-source" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] py-4 transition-all duration-300 pointer-events-none ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pointer-events-auto">
        <div className="flex items-center justify-between">
          
          {/* Left / Empty to balance */}
          <div className="w-1/3 flex items-center">
            <Link href="/" className="flex items-center flex-shrink-0">
              <span
                className="text-[28px] md:text-[36px] font-bold tracking-tight uppercase text-[#3d3024] leading-none"
                style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
              >
                D D
              </span>
            </Link>
          </div>

          {/* Center Logo space (now empty) */}
          <div className="w-1/3 flex justify-center flex-shrink-0">
          </div>

          {/* Right side: Circular buttons */}
          <div className="w-1/3 flex items-center justify-end gap-2 md:gap-4">
            
            <a
              href="#contact"
              className="group flex flex-col items-center justify-center w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full border border-[#3d3024] text-[#3d3024] hover:bg-[#3d3024] hover:text-[#A3D8FF] transition-colors"
            >
               <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest">Talk</span>
            </a>

            <div className="relative">
              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                className="group flex flex-col items-center justify-center w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full border border-[#3d3024] text-[#3d3024] hover:bg-[#3d3024] hover:text-[#A3D8FF] transition-colors bg-transparent"
              >
                {isMenuOpen ? <X className="w-4 h-4 md:w-5 md:h-5 mb-0.5" /> : <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest">Menu</span>}
              </button>

              {/* Expanded Panel */}
              {isMenuOpen && (
                <div
                  className="absolute top-full right-0 mt-4 w-[240px] rounded-2xl border-[3px] border-[#3d3024] py-6 px-6 flex flex-col gap-4 transition-colors bg-[#F8F9FA] shadow-[8px_8px_0_#3d3024]"
                >
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-[20px] font-bold uppercase tracking-wide text-[#3d3024] hover:text-[#F87171] transition-colors"
                      style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
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