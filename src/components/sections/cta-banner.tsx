"use client";
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const CtaBanner = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="bg-[#F5F5F5] py-[16px] md:py-[24px] overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">

        {/* Outer White Card Wrapper matching the site aesthetics */}
        <div className="bg-white rounded-3xl md:rounded-[24px] px-4 md:px-8 py-8 md:py-12 border border-[#E6E6E6] shadow-sm relative overflow-hidden">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-[1100px] mx-auto">

            {/* Content Left - Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col h-full bg-[linear-gradient(135deg,#FFE5E5_0%,#F5F5F5_50%,#E5F0FF_100%)] rounded-[16px] p-6 border border-[#E6E6E6] shadow-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/40 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <Badge variant="outline" className="w-fit mb-4 text-[11px] font-mono uppercase tracking-[0.18em] border-[#D1D1D1] px-4 py-1.5 rounded-full text-[#7D7D7D] bg-white">
                  2. Your Details
                </Badge>

                <h2 className="text-[#1A1A1A] text-[28px] md:text-[36px] leading-[1.1] font-normal tracking-[-0.01em] mb-3 font-display">
                  See Brittalent On Your Communications
                </h2>
                <p className="text-[#7D7D7D] text-[15px] mb-6 font-sans">
                  Complete your information to secure your calendar slot and let us analyze your current bottlenecks.
                </p>

                <form className="flex flex-col gap-4 flex-grow font-sans text-[14px]">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1A1A1A] font-medium text-[12px] uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      className="w-full h-10 bg-white border border-[#E6E6E6] rounded-md px-3 text-[#1A1A1A] placeholder:text-[#A1A1A1] focus:outline-none focus:border-[#7D7D7D] focus:ring-1 focus:ring-[#7D7D7D] transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1A1A1A] font-medium text-[12px] uppercase tracking-wider">Work Email</label>
                    <input
                      type="email"
                      className="w-full h-10 bg-white border border-[#E6E6E6] rounded-md px-3 text-[#1A1A1A] placeholder:text-[#A1A1A1] focus:outline-none focus:border-[#7D7D7D] focus:ring-1 focus:ring-[#7D7D7D] transition-all"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1A1A1A] font-medium text-[12px] uppercase tracking-wider">Company Name</label>
                    <input
                      type="text"
                      className="w-full h-10 bg-white border border-[#E6E6E6] rounded-md px-3 text-[#1A1A1A] placeholder:text-[#A1A1A1] focus:outline-none focus:border-[#7D7D7D] focus:ring-1 focus:ring-[#7D7D7D] transition-all"
                      placeholder="Acme Corp"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1A1A1A] font-medium text-[12px] uppercase tracking-wider">Briefly describe your current bottlenecks...</label>
                    <textarea
                      className="w-full h-[60px] bg-white border border-[#E6E6E6] rounded-md p-3 text-[#1A1A1A] placeholder:text-[#A1A1A1] focus:outline-none focus:border-[#7D7D7D] focus:ring-1 focus:ring-[#7D7D7D] transition-all resize-none"
                      placeholder="Where are you struggling the most with pipeline generation?"
                      required
                    />
                  </div>

                  <Button className="mt-2 w-full h-[48px] bg-[#1A1A1A] text-white hover:bg-black rounded-md text-[13px] uppercase tracking-wider font-medium transition-colors shadow-sm">
                    Book Your Strategy Call
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Calendar Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col h-full items-center justify-center p-6 bg-[linear-gradient(225deg,#FFE5E5_0%,#F5F5F5_50%,#E5F0FF_100%)] border border-[#E6E6E6] rounded-[16px] shadow-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/40 pointer-events-none" />
              <div className="absolute top-6 left-6 z-10">
                <Badge variant="outline" className="text-[11px] font-mono uppercase tracking-[0.18em] border-[#D1D1D1] px-4 py-1.5 rounded-full text-[#7D7D7D] bg-white">
                  1. Pick a Date
                </Badge>
              </div>

              <div className="mt-10 bg-[#F5F5F5] p-4 rounded-[16px] border border-[#E6E6E6] shadow-sm transform transition-all hover:scale-[1.02]">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="bg-transparent"
                />
              </div>

              <p className="relative z-10 text-[#7D7D7D] font-sans text-[13px] mt-4 text-center max-w-[280px]">
                Select a date for your 30-minute introductory call. Times will display after selecting a day.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;