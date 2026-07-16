"use client";
import React from "react";

const col1Links = [
  { label: "Home", href: "#" },
  { label: "Process", href: "#how-it-works" },
  { label: "Why Us", href: "#what-we-do" },
];

const col2Links = [
  { label: "Reach", href: "#where-we-source" },
  { label: "Contact", href: "#contact" },
];

const col3Links = [
  { label: "Privacy Policy", href: "#" },
  { label: "Refunds and Cancellations Policy", href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1208] font-sans">
      <div className="w-full mx-auto px-6 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4 items-start border-b border-white/20 pb-16">
          
          {/* LOGO */}
          <div className="col-span-1 md:col-span-3 flex justify-center md:justify-start">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-[#FCD34D] text-[40px] md:text-[50px] leading-[0.9] font-bold uppercase m-0" style={{ fontFamily: "'Luckiest Guy', sans-serif" }}>
                D D
              </h2>
              <span className="text-[#FCD34D] text-[12px] md:text-[14px] font-semibold tracking-[0.2em] uppercase mt-2">
                Dog Walkers
              </span>
            </div>
          </div>

          {/* LINKS 1 */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start gap-4">
            {col1Links.map(link => (
              <a key={link.label} href={link.href} className="text-white text-[15px] font-bold hover:text-[#FCD34D] transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* LINKS 2 */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start gap-4">
            {col2Links.map(link => (
              <a key={link.label} href={link.href} className="text-white text-[15px] font-bold hover:text-[#FCD34D] transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* LINKS 3 (Policies) */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start gap-4">
            {col3Links.map(link => (
              <a key={link.label} href={link.href} className="text-white text-[15px] font-bold hover:text-[#FCD34D] transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* LET'S BE FRIENDS */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-center md:items-start gap-4 mt-8 md:mt-0">
            <h3 className="text-white text-[28px] md:text-[36px] font-bold uppercase m-0 leading-none" style={{ fontFamily: "'Luckiest Guy', sans-serif" }}>
              Let&apos;s Be Friends
            </h3>
            <div className="flex gap-3">
              {/* Social Icons - circle outline */}
              <a href="#" className="w-9 h-9 rounded-full border-[1.5px] border-white flex items-center justify-center text-white hover:bg-[#FCD34D] hover:border-[#FCD34D] hover:text-[#3d3024] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border-[1.5px] border-white flex items-center justify-center text-white hover:bg-[#FCD34D] hover:border-[#FCD34D] hover:text-[#3d3024] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border-[1.5px] border-white flex items-center justify-center text-white hover:bg-[#FCD34D] hover:border-[#FCD34D] hover:text-[#3d3024] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border-[1.5px] border-white flex items-center justify-center text-white hover:bg-[#FCD34D] hover:border-[#FCD34D] hover:text-[#3d3024] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-white/80 text-[13px] md:text-[14px] font-medium tracking-wide">
            Designed and developed by: D D Team
          </p>
          <p className="text-white/80 text-[13px] md:text-[14px] font-medium tracking-wide">
            © copyright 2026 London Dog Walkers. All rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
