"use client";
import React from "react";

const navLinks = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Where We Source", href: "#where-we-source" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#e2e8f0] font-sans">
      <div className="w-full mx-auto px-6 md:px-16 lg:px-24">

        {/* Main footer row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-b border-[#e2e8f0]">

          {/* // CONTACT */}
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#94a3b8]">// Contact</span>
            <div className="flex flex-col gap-1.5">
              <a
                href="mailto:hello@brittalent.co.uk"
                className="text-[18px] text-[#0f172a] hover:text-[#1e3a8a] transition-colors font-normal"
              >
                hello@brittalent.co.uk
              </a>
              <a
                href="tel:+44000000000"
                className="text-[18px] text-[#0f172a] hover:text-[#1e3a8a] transition-colors font-normal"
              >
                +44 (0) 000 000 0000
              </a>
            </div>
          </div>

          {/* // NAVIGATION */}
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#94a3b8]">// Navigation</span>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <span className="text-[#94a3b8] text-[14px]">:.</span>
                  <a
                    href={link.href}
                    className="text-[16px] text-[#334155] hover:text-[#1e3a8a] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* // SOCIAL */}
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#94a3b8]">// Social</span>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center border border-[#e2e8f0] rounded-[4px] text-[#334155] hover:border-[#1e3a8a] hover:text-[#1e3a8a] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-8">
          <div>
            <span className="text-[15px] font-semibold text-[#0f172a] font-display tracking-tight">
              Brit Talent
            </span>
            <span className="text-[15px] text-[#64748b] ml-2">— We Find the Talent You Can&apos;t.</span>
          </div>
          <p className="text-[13px] text-[#94a3b8]">
            © 2026 Brit Talent. Based in the United Kingdom.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
