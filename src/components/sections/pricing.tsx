"use client";
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Pricing = () => {
    return (
        <section id="pricing" className="bg-[#F5F5F5] py-[16px] md:py-[24px] overflow-hidden">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">

                {/* Outer White Card Wrapper matching the previous sections */}
                <div className="bg-white rounded-3xl md:rounded-[24px] px-6 py-8 md:py-12 border border-[#E6E6E6] shadow-sm">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center mb-8"
                    >
                        <Badge variant="outline" className="mb-4 text-[11px] font-mono uppercase tracking-[0.18em] border-[#D1D1D1] px-4 py-1.5 rounded-full text-[#7D7D7D] bg-[#F5F5F5]">
                            Flexible Plans
                        </Badge>
                        <h2 className="text-[#1A1A1A] text-[32px] md:text-[48px] font-normal leading-[1.1] tracking-[-0.01em] font-display max-w-2xl mb-3">
                            Simple, transparent pricing.
                        </h2>
                        <p className="text-[#7D7D7D] text-[16px] md:text-[18px] max-w-xl font-sans">
                            Choose the model that fits your growth stage. Scale without friction.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">

                        {/* Performance Plan - Standard Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-[#F5F5F5] border border-[#E6E6E6] rounded-[20px] p-6 md:p-8 flex flex-col relative h-full transition-transform hover:-translate-y-1 hover:shadow-md"
                        >
                            <h3 className="text-[#1A1A1A] text-[24px] font-medium font-display mb-1">Performance</h3>
                            <p className="text-[#1A1A1A] text-[28px] md:text-[32px] font-semibold tracking-tight mb-2">Pay-per-meeting</p>
                            <p className="text-[#7D7D7D] text-[15px] mb-6 font-sans">
                                Perfect for businesses testing the waters with zero risk.
                            </p>

                            <div className="space-y-3 mb-8 flex-grow">
                                {['Zero upfront retainer', 'Qualified leads only', 'Custom CRM integration', 'Dedicated account manager'].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#E6E6E6] flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-[#1A1A1A]" />
                                        </div>
                                        <span className="text-[#1A1A1A] text-[15px] font-sans">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className="w-full bg-white border border-[#E6E6E6] text-[#1A1A1A] hover:bg-[#E6E6E6] rounded-[8px] h-12 text-[14px] font-medium uppercase tracking-wider transition-colors mt-auto shadow-sm">
                                Start Free
                            </Button>
                        </motion.div>

                        {/* Partner Growth Plan - Highlighted Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-[linear-gradient(135deg,#FFE5E5_0%,#F5F5F5_50%,#E5F0FF_100%)] border-2 border-[#ba2c2c]/20 rounded-[20px] p-6 md:p-8 flex flex-col relative h-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] scale-100 md:scale-[1.02] transform transition-transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        >
                            <div className="absolute top-0 right-6 -translate-y-1/2">
                                <Badge className="bg-[#ba2c2c] text-white hover:bg-[#ba2c2c] border-none text-[11px] font-medium uppercase tracking-widest px-3 py-1">
                                    Most Popular
                                </Badge>
                            </div>

                            <h3 className="text-[#ba2c2c] text-[24px] font-medium font-display mb-1">Partner Growth</h3>
                            <p className="text-[#ba2c2c] text-[28px] md:text-[32px] font-semibold tracking-tight mb-2">35% Per Appointment</p>
                            <p className="text-[#1A1A1A] text-[15px] mb-6 font-sans">
                                Ideal for studios ready to scale. You pay nothing until we bring you a paying client.
                            </p>

                            <div className="space-y-3 mb-8 flex-grow">
                                {['Zero monthly retainer', 'Only pay for bookings', 'Unlimited appointment volume', 'Full-funnel optimization', 'No-show protection', 'Priority support'].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#FFC2C2]/40 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-[#ba2c2c]" />
                                        </div>
                                        <span className="text-[#1A1A1A] text-[15px] font-sans font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className="w-full bg-[#ba2c2c] text-white hover:bg-[#962323] rounded-[8px] h-12 text-[14px] font-medium uppercase tracking-wider transition-colors mt-auto shadow-sm">
                                Join Partner Program
                            </Button>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
