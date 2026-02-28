"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";

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
    { name: "Platform", hasDropdown: true },
    { name: "Solutions", hasDropdown: true },
    { name: "Developers", hasDropdown: false },
    { name: "Security", hasDropdown: false },
    { name: "Company", hasDropdown: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[#E6E6E6] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/svgs/698272edf18ab399e2728f23_logo-black-3.svg"
                alt="Brittalent Logo"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="group relative">
                <button className="flex items-center gap-1 text-[15px] font-medium text-[#1A1A1A] hover:text-[#7D7D7D] transition-colors py-2">
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </button>

                {item.hasDropdown && (
                  <div className="absolute top-full -left-4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white border border-[#E6E6E6] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-6 min-w-[280px]">
                      {item.name === "Platform" ? (
                        <div className="space-y-4">
                          <div className="flex justify-between items-center border-b border-[#F0F0F0] pb-4 mb-4">
                            <span className="text-[20px] font-medium">Platform</span>
                            <a href="/platform" className="flex items-center gap-1 text-[14px] font-mono text-[#7D7D7D] hover:text-[#121212]">
                              Learn more <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                          <div className="grid gap-6">
                            <DropdownItem
                              title="Compose"
                              description="Define your rules"
                              imgSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/698503efe9b9ae75d0a3287d_compose-1.avif"
                            />
                            <DropdownItem
                              title="Guard"
                              description="Enforce at send"
                              imgSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/698503ef9ba9f64a8ba9de86_guard-2.avif"
                            />
                            <DropdownItem
                              title="Command"
                              description="Full visibility"
                              imgSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/images/698503ef886462d4f4a93f48_compose-1-3.avif"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <a href="#" className="block py-1 text-[15px] hover:text-accent transition-colors">By Workflow</a>
                          <a href="#" className="block py-1 text-[15px] hover:text-accent transition-colors">By Team</a>
                          <a href="#" className="block py-1 text-[15px] hover:text-accent transition-colors">By Industry</a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
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

const DropdownItem = ({ title, description, imgSrc }: { title: string; description: string; imgSrc: string }) => (
  <a href={`/platform#${title.toLowerCase()}`} className="flex items-center gap-4 group/item">
    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-[#E6E6E6]">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <div>
      <div className="text-[18px] font-normal group-hover/item:text-accent transition-colors">{title}</div>
      <div className="text-[14px] text-[#7D7D7D] whitespace-nowrap">{description}</div>
    </div>
  </a>
);

export default Navigation;