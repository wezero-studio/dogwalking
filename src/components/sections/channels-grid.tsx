"use client";
import React from 'react';
import { Mail, Linkedin, MessagesSquare, CalendarCheck, BarChart3, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const ChannelsGrid = () => {
  const channels = [
    {
      title: 'LinkedIn Engine',
      description: 'Engage wellness founders and gym owners directly in their professional feed.',
      icon: <Linkedin className="w-5 h-5 text-[#1A1A1A]" />,
      gridPos: 'col-span-1 row-span-1'
    },
    {
      title: 'Cold Email',
      description: 'Hyper-personalized sequences that bypass spam and land in the primary inbox.',
      icon: <Mail className="w-5 h-5 text-[#1A1A1A]" />,
      gridPos: 'col-span-1 row-span-1'
    },
    {
      title: 'SMS & Follow-up',
      description: 'Automated objection handling and nurturing to keep leads warm.',
      icon: <MessagesSquare className="w-5 h-5 text-[#1A1A1A]" />,
      gridPos: 'col-span-1 row-span-1'
    },
    {
      title: 'Guaranteed Booking',
      description: 'Direct calendar integration. They book, you close. We handle the friction.',
      icon: <CalendarCheck className="w-5 h-5 text-[#1A1A1A]" />,
      gridPos: 'col-span-1 row-span-1'
    },
    {
      title: 'Intent Data',
      description: 'Signal-based targeting hitting prospects exactly when they are looking to buy.',
      icon: <Target className="w-5 h-5 text-[#1A1A1A]" />,
      gridPos: 'col-span-1 row-span-1'
    },
    {
      title: 'Revenue Analytics',
      description: 'Transparent dashboards tracking every reply, click, and booked demo.',
      icon: <BarChart3 className="w-5 h-5 text-[#1A1A1A]" />,
      gridPos: 'col-span-1 row-span-1'
    }
  ];

  return (
    <section className="bg-[#F5F5F5] py-[16px] md:py-[24px] relative overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">

        {/* Outer White Card Wrapper matching the other sections */}
        <div className="bg-white rounded-3xl md:rounded-[24px] px-6 py-12 md:py-16 border border-[#E6E6E6] shadow-sm relative overflow-hidden">
          {/* Background Grid Pattern constrained to card */}
          <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10 px-2 lg:px-8">
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center h-full min-h-[400px]"
            >
              <Badge variant="outline" className="w-fit mb-6 text-[11px] font-mono uppercase tracking-[0.18em] border-[#D1D1D1] px-4 py-1.5 rounded-full text-[#7D7D7D] bg-white">
                Omnichannel Approach
              </Badge>
              <h2 className="text-[40px] md:text-[56px] leading-[1.1] font-normal tracking-[-0.01em] text-[#1A1A1A] mb-8 max-w-[450px] font-display">
                Every Channel. Every Partner. Engaged.
              </h2>
              <p className="text-[18px] leading-[1.6] text-[#7D7D7D] mb-10 max-w-[420px] font-sans">
                Your entire pipeline strategy operates with precision. Highly-qualified gym and wellness leads are engaged at the exact moment they need your solution.
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-2.5 bg-[#F5F5F5] border border-[#E6E6E6] rounded-[6px] text-[13px] font-medium uppercase tracking-wider text-[#1A1A1A] hover:bg-black hover:text-white transition-colors">
                  Outreach
                </button>
                <button className="px-6 py-2.5 bg-[#F5F5F5] border border-[#E6E6E6] rounded-[6px] text-[13px] font-medium uppercase tracking-wider text-[#1A1A1A] hover:bg-black hover:text-white transition-colors">
                  Nurture
                </button>
                <button className="px-6 py-2.5 bg-[#F5F5F5] border border-[#E6E6E6] rounded-[6px] text-[13px] font-medium uppercase tracking-wider text-[#1A1A1A] hover:bg-black hover:text-white transition-colors">
                  Close
                </button>
              </div>
            </motion.div>

            {/* Right Side Grid */}
            <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {channels.map((channel, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[linear-gradient(135deg,#FFE5E5_0%,#F5F5F5_50%,#E5F0FF_100%)] rounded-[16px] p-8 border border-[#E6E6E6] shadow-sm flex flex-col group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex gap-4 mb-6">
                    <div className="w-10 h-10 relative flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg shadow-inner border border-[#E6E6E6] group-hover:scale-110 transition-transform">
                      {channel.icon}
                    </div>
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-[#1A1A1A] mb-3 leading-[1.3] font-display">
                    {channel.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-[#7D7D7D] font-sans">
                    {channel.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelsGrid;