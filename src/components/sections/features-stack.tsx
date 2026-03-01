"use client";

import React, { useEffect, useRef, useState } from 'react';

/* ─────────────────────────────────────────────────────────────
   Right-side visual panels — all h-[420px], white card inside
   peach-pink gradient wrapper matching hero
   ───────────────────────────────────────────────────────────── */

/** Gym & Studios visual — 4 lead rows only, no stats bar */
const GymVisual = () => (
  <div className="w-full h-[420px] flex items-center justify-center p-6 bg-gradient-to-br from-[#E24A3B]/20 via-[#F07E6E]/15 to-[#FFB89A]/10">
    <div className="bg-white rounded-[12px] shadow-sm w-full max-w-[380px] p-5 space-y-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[13px] font-medium text-[#1A1A1A] uppercase tracking-widest font-mono">Weekly Pipeline</span>
        <span className="text-[11px] text-[#7D7D7D] font-mono">Gym & Studio Leads</span>
      </div>
      {[
        { name: 'CrossFit Apex Chicago', type: 'Boutique Chain', status: 'Call Booked', dot: '#22C55E' },
        { name: 'Iron Temple Gyms', type: 'Regional (12 loc)', status: 'In Progress', dot: '#F59E0B' },
        { name: 'Peak Pilates Studio', type: 'Wellness Franchise', status: 'Call Booked', dot: '#22C55E' },
        { name: 'Elevate Fitness Co.', type: 'Nationwide Chain', status: 'Qualified', dot: '#3B82F6' },
      ].map((lead, i) => (
        <div key={i} className="flex items-center justify-between border border-[#F0F0F0] rounded-[8px] px-4 py-3">
          <div>
            <div className="text-[13px] font-medium text-[#1A1A1A]">{lead.name}</div>
            <div className="text-[11px] text-[#7D7D7D] font-mono mt-0.5">{lead.type}</div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: lead.dot }} />
            <span className="text-[11px] font-medium" style={{ color: lead.dot }}>{lead.status}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/** Wellness Tech visual */
const WellnessVisual = () => (
  <div className="w-full h-[420px] flex items-center justify-center p-6 bg-gradient-to-br from-[#E24A3B]/20 via-[#F07E6E]/15 to-[#FFB89A]/10">
    <div className="bg-white rounded-[12px] shadow-sm w-full max-w-[380px] p-5">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[13px] font-medium text-[#1A1A1A] uppercase tracking-widest font-mono">Market Penetration</span>
        <span className="text-[11px] text-[#7D7D7D] font-mono">Wellness SaaS</span>
      </div>
      {[
        { label: 'Wearable & Hardware', value: 72, color: '#E24A3B' },
        { label: 'Mental Wellness Apps', value: 58, color: '#F07E6E' },
        { label: 'Recovery Tech', value: 84, color: '#121212' },
        { label: 'Nutrition Platforms', value: 45, color: '#7D7D7D' },
      ].map((seg, i) => (
        <div key={i} className="mb-4">
          <div className="flex justify-between mb-1.5">
            <span className="text-[12px] font-medium text-[#1A1A1A]">{seg.label}</span>
            <span className="text-[12px] font-mono text-[#7D7D7D]">{seg.value}%</span>
          </div>
          <div className="h-[6px] bg-[#F0F0F0] rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${seg.value}%`, backgroundColor: seg.color }} />
          </div>
        </div>
      ))}
      <div className="mt-4 border border-[#F0F0F0] rounded-[10px] p-4 flex items-center gap-4">
        <div className="w-9 h-9 rounded-[8px] bg-[#E24A3B]/10 flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M9 2L11.5 7H16L12 10.5L13.5 16L9 13L4.5 16L6 10.5L2 7H6.5L9 2Z" fill="#E24A3B" /></svg>
        </div>
        <div>
          <div className="text-[13px] font-semibold text-[#1A1A1A]">127 Enterprise Prospects</div>
          <div className="text-[11px] text-[#7D7D7D] font-mono">Qualified for Q2 outreach cycle</div>
        </div>
      </div>
    </div>
  </div>
);

/** Corporate Health visual */
const CorporateVisual = () => (
  <div className="w-full h-[420px] flex items-center justify-center p-6 bg-gradient-to-br from-[#E24A3B]/20 via-[#F07E6E]/15 to-[#FFB89A]/10">
    <div className="bg-white rounded-[12px] shadow-sm w-full max-w-[380px] p-5 space-y-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[13px] font-medium text-[#1A1A1A] uppercase tracking-widest font-mono">Decision Maker Map</span>
        <span className="text-[11px] text-[#7D7D7D] font-mono">Corporate Health</span>
      </div>
      <div className="border border-[#F0F0F0] rounded-[10px] p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#E24A3B] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">HR</div>
          <div>
            <div className="text-[12px] font-semibold text-[#1A1A1A]">Head of HR, Fortune 500</div>
            <div className="text-[10px] text-[#22C55E] font-mono">Meeting Confirmed</div>
          </div>
        </div>
        <div className="h-px bg-[#F0F0F0] my-2" />
        {[
          { role: 'VP', name: 'VP of Total Rewards', color: '#F07E6E', status: 'Outreach Sent' },
          { role: 'BE', name: 'Benefits Director, TechCorp', color: '#F59E0B', status: 'Call Scheduled' },
          { role: 'CO', name: 'Chief People Officer', color: '#E24A3B', status: 'Intro Done' },
        ].map((node, i) => (
          <div key={i} className="flex items-center gap-3 py-2 border-b border-[#F5F5F5] last:border-0">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: node.color }}>
              {node.role}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-medium text-[#1A1A1A] truncate">{node.name}</div>
            </div>
            <span className="text-[10px] font-mono text-[#7D7D7D] whitespace-nowrap">{node.status}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="border border-[#F0F0F0] rounded-[8px] p-3 text-center">
          <div className="text-[22px] font-bold text-[#E24A3B]">4.2x</div>
          <div className="text-[10px] text-[#7D7D7D] font-mono uppercase">Pipeline ROI</div>
        </div>
        <div className="border border-[#F0F0F0] rounded-[8px] p-3 text-center">
          <div className="text-[22px] font-bold text-[#1A1A1A]">18d</div>
          <div className="text-[10px] text-[#7D7D7D] font-mono uppercase">Avg to First Call</div>
        </div>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   Section data
   ───────────────────────────────────────────────────────────── */
const VERTICALS = [
  {
    id: 'gym',
    label: 'Gym & Studios',
    heading: 'Boutique Fitness & Nationwide Chains',
    body: `We connect fitness businesses from single-location studios to multi-site chains with qualified decision makers who control purchasing and expansion budgets. Our process targets owners, GMs, and regional directors with personalised outreach that pre-qualifies intent before a single call is booked.`,
    visual: <GymVisual />,
  },
  {
    id: 'wellness',
    label: 'Wellness Tech',
    heading: 'SaaS & Hardware for the Health-Conscious Enterprise',
    body: `The wellness tech market is crowded. Breaking through to procurement leads and C-suite buyers requires precision targeting. Brittalent maps the buying committee at your top accounts and runs multi-touch sequences designed for complex B2B sales cycles, so your AEs walk into real conversations.`,
    visual: <WellnessVisual />,
  },
  {
    id: 'corporate',
    label: 'Corporate Health',
    heading: 'Connecting Providers with HR Leaders and Decision Makers',
    body: `Corporate wellness is growing fast, but the path to the right buyer is buried in org charts. We identify HR directors, benefits leads, and Chief People Officers inside mid-market and enterprise companies who are actively evaluating wellbeing partners, and we put you in front of them.`,
    visual: <CorporateVisual />,
  },
];

/* ─────────────────────────────────────────────────────────────
   Sticky Tracker — only active bar is dark, others light
   ───────────────────────────────────────────────────────────── */
const SectionTracker = ({ active }: { active: number }) => (
  <div className="flex gap-4 w-full">
    {VERTICALS.map((v, i) => (
      <div key={v.id} className="flex-1 min-w-0">
        <div className={`h-[3px] rounded-full mb-2 transition-colors duration-300 ${i === active ? 'bg-[#1A1A1A]' : 'bg-[#D1D1D1]'
          }`} />
        <span className={`text-[11px] font-mono uppercase tracking-widest transition-colors duration-300 ${i === active ? 'text-[#1A1A1A] font-semibold' : 'text-[#ABABAB]'
          }`}>
          {v.label}
        </span>
      </div>
    ))}
  </div>
);

/* ─────────────────────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────────────────────── */
const FeaturesStack = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      // Trigger zone: top third of the viewport (below sticky navbar+tracker)
      const triggerY = window.innerHeight * 0.35;

      let newActive = 0;
      sectionRefs.current.forEach((ref, i) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        // Section is considered active once its top has passed the trigger line
        if (rect.top <= triggerY) {
          newActive = i;
        }
      });

      setActiveSection(newActive);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="bg-[#F5F5F5] pt-[80px]">
      <div className="container mx-auto px-8 max-w-[1280px] pt-[60px] pb-[40px]">

        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="font-display text-[48px] md:text-[56px] leading-[1.1] font-normal tracking-[-0.02em] text-[#1A1A1A]">
            Targeted Expertise
          </h2>
        </div>

        {/* Sticky Tracker — inside container, below heading */}
        <div className="sticky top-[80px] z-[999] bg-[#F5F5F5] border-b border-[#E6E6E6] py-4 mb-[60px]">
          <SectionTracker active={activeSection} />
        </div>

        {/* Feature Blocks */}
        <div className="flex flex-col gap-[100px]">
          {VERTICALS.map((v, i) => (
            <div
              key={v.id}
              ref={(el) => { sectionRefs.current[i] = el; }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
            >
              {/* Text side */}
              <div className={`max-w-[480px] ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                <span className="inline-block text-[11px] font-mono uppercase tracking-[0.18em] text-[#7D7D7D] mb-3 border border-[#D1D1D1] rounded-full px-3 py-1">
                  {v.label}
                </span>
                <h3 className="text-[#1A1A1A] text-[28px] leading-[1.3] font-medium mb-4">
                  {v.heading}
                </h3>
                <p className="text-[#7D7D7D] text-[16px] leading-[1.7] mb-8">
                  {v.body}
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-[#121212] text-white text-[14px] font-medium px-6 py-3 rounded-[4px] uppercase tracking-wider hover:bg-black transition-colors"
                >
                  Learn More
                </a>
              </div>

              {/* Visual card */}
              <div className={`rounded-[16px] overflow-hidden border border-[#E6E6E6] ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                {v.visual}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesStack;