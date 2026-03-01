"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";



const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center">
              <a
                href="#demo"
                className="bg-[#121212] text-white px-5 py-2.5 rounded-[4px] text-[14px] font-medium tracking-tight hover:bg-black transition-colors uppercase whitespace-nowrap"
              >
                Book a call
              </a>
            </div>
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-[#1A1A1A] -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#E6E6E6] shadow-lg py-4 px-6 flex flex-col gap-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[16px] font-medium text-[#1A1A1A] hover:text-[#7D7D7D] py-2 border-b border-[#F5F5F5]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#demo"
              className="flex items-center justify-center bg-[#121212] text-white px-5 py-3 rounded-[4px] text-[14px] font-medium tracking-tight uppercase w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};


export default Navigation;