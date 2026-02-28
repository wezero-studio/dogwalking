import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const sitemap = [
    {
      title: 'Platform',
      links: [
        { label: 'Compose', href: '#' },
        { label: 'Guard', href: '#' },
        { label: 'Command', href: '#' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Workflow', href: '#' },
        { label: 'Team', href: '#' },
        { label: 'Industry', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Security', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'DPA', href: '#' },
      ],
    },
  ];

  const subFooterLinks = [
    { label: 'investors@brittalent.ai', label2: 'Investors', href: 'mailto:investors@brittalent.ai' },
    { label: 'info@brittalent.com', label2: 'General', href: 'mailto:info@brittalent.com' },
    { label: 'press@brittalent.ai', label2: 'Press', href: 'mailto:press@brittalent.ai' },
  ];

  return (
    <footer className="bg-white border-t border-[#E6E6E6] pt-16 pb-12 px-6 sm:px-12 md:px-24">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand and Info Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-8">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a45fca8-c697-442c-bbdb-690bb996ae73-zerodrift-ai/assets/svgs/698272edf18ab399e2728f23_logo-black-3.svg" 
                alt="Brittalent Logo" 
                width={140} 
                height={32}
                className="h-8 w-auto"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[14px] font-medium text-[#1A1A1A] mb-3">Headquarters</h4>
                <div className="text-[16px] text-[#7D7D7D] leading-[1.6]">
                  <p>4 World Trade Center</p>
                  <p>150 Greenwich Street, New York, NY 10007</p>
                </div>
              </div>

              <div>
                <h4 className="text-[14px] font-medium text-[#1A1A1A] mb-3">Get in Touch</h4>
                <a href="mailto:hello@brittalent.ai" className="text-[16px] text-[#7D7D7D] hover:text-[#1A1A1A] transition-colors">
                  hello@brittalent.ai
                </a>
              </div>

              <div className="flex gap-3 pt-2">
                {['SOC 2 TYPE II', 'ISO 27001', 'GDPR'].map((badge) => (
                  <div key={badge} className="w-10 h-10 rounded-full border border-[#E6E6E6] flex items-center justify-center bg-[#F5F5F5]">
                    {/* Placeholder for small certification icons if they were separate assets */}
                    <div className="bg-[#121212] w-6 h-6 rounded-full opacity-80 scale-75"></div>
                  </div>
                ))}
              </div>
              
              <p className="text-[12px] text-[#7D7D7D] mt-2">
                Your data never stored. <a href="#" className="underline hover:text-[#1A1A1A]">View Trust Center.</a>
              </p>
            </div>
          </div>

          {/* Sitemaps Column */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {sitemap.map((section) => (
              <div key={section.title}>
                <h4 className="text-[14px] font-medium text-[#1A1A1A] mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href} 
                        className="text-[14px] text-[#7D7D7D] hover:text-[#1A1A1A] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar Segment */}
        <div className="mt-20 pt-8 border-t border-[#E6E6E6] flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="text-[14px] text-[#7D7D7D]">
            © 2026 Brittalent, Inc. All rights reserved.
          </div>
          
          <div className="flex flex-col gap-2">
            {subFooterLinks.map((item) => (
              <div key={item.label} className="flex flex-row justify-between md:justify-end gap-12 text-[13px]">
                <span className="text-[#1A1A1A] font-medium min-w-[60px]">{item.label2}</span>
                <a href={item.href} className="text-[#7D7D7D] hover:text-[#1A1A1A] text-right font-mono">
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
