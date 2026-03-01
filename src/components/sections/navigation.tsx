"use client";

import React, { useState, useEffect } from "react";



const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Process", href: "#process" },
    { name: "Blueprint", href: "#blueprint" },
    { name: "Plans", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${isScrolled
        ? "bg-white/80 backdrop-blur-xl border-b border-[#E6E6E6] py-3"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <span className="text-[22px] font-bold tracking-tight text-[#121212] font-typewriter">
              brittalent
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="group relative">
                <a href={item.href} className="flex items-center gap-1 text-[15px] font-medium text-[#1A1A1A] hover:text-[#7D7D7D] transition-colors py-2">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#demo"
              className="bg-[#121212] text-white px-5 py-2.5 rounded-[4px] text-[14px] font-medium tracking-tight hover:bg-black transition-colors uppercase whitespace-nowrap"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Navigation;