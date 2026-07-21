"use client";
import React from "react";
import AnimatedHeading from "@/components/ui/animated-heading";

const col1Links = [
  { label: "Home", href: "#hero" },
  { label: "Process", href: "#how-it-works" },
  { label: "Why Us", href: "#what-we-do" },
];

const col2Links = [
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#F9F4EB] font-sans">
      <div className="w-full mx-auto px-6 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 items-start border-b border-[#1B3B2C]/20 pb-16">

          {/* LOGO */}
          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <AnimatedHeading
                as="h2"
                trigger="inView"
                text="HEYFORD"
                className="text-[#FF5722] text-[40px] md:text-[50px] leading-[0.9] font-bold uppercase m-0"
                style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
              />
              <span className="text-[#1B3B2C] text-[12px] md:text-[14px] font-semibold tracking-[0.2em] uppercase mt-2">
                Walks
              </span>
            </div>
          </div>

          {/* LINKS 1 */}
          <div className="flex flex-col items-center md:items-start gap-4">
            {col1Links.map(link => (
              <a key={link.label} href={link.href} className="text-[#1B3B2C] text-[15px] font-bold hover:text-[#FF5722] transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* LINKS 2 */}
          <div className="flex flex-col items-center md:items-start gap-4">
            {col2Links.map(link => (
              <a key={link.label} href={link.href} className="text-[#1B3B2C] text-[15px] font-bold hover:text-[#FF5722] transition-colors">
                {link.label}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex justify-center items-center pt-8">
          <p className="text-[#1B3B2C]/80 text-[13px] md:text-[14px] font-medium tracking-wide">
            © copyright 2026 Heyford Walks. All rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
