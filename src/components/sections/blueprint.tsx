"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";

const Blueprint = () => {
    const data = [
        {
            title: "Step 01",
            content: (
                <div>
                    <h4 className="text-[#1A1A1A] text-[28px] md:text-[36px] font-medium leading-[1.2] mb-3 font-display tracking-tight">
                        Deep Discovery
                    </h4>
                    <p className="text-[#7D7D7D] text-[18px] md:text-[20px] font-normal leading-[1.6] mb-6 font-sans">
                        We analyse your ideal customer profile, market positioning, and growth targets to build a conversion-ready pipeline strategy. This lays the critical foundation before a single message is sent.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative h-32 md:h-64 rounded-[16px] overflow-hidden border border-[#E6E6E6] shadow-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
                                alt="Strategy dashboard and analytics"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-32 md:h-64 rounded-[16px] overflow-hidden border border-[#E6E6E6] shadow-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop"
                                alt="Team collaborating on whiteboard"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Step 02",
            content: (
                <div>
                    <h4 className="text-[#1A1A1A] text-[28px] md:text-[36px] font-medium leading-[1.2] mb-3 font-display tracking-tight">
                        Launch Campaigns
                    </h4>
                    <p className="text-[#7D7D7D] text-[18px] md:text-[20px] font-normal leading-[1.6] mb-6 font-sans">
                        Multi-channel outreach begins: LinkedIn, email sequences, and intent-based targeting to reach decision makers exactly where their attention is focused.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative h-32 md:h-64 rounded-[16px] overflow-hidden border border-[#E6E6E6] shadow-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop"
                                alt="Outreach campaign metrics"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-32 md:h-64 rounded-[16px] overflow-hidden border border-[#E6E6E6] shadow-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
                                alt="Growth and conversion charts"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Step 03",
            content: (
                <div>
                    <h4 className="text-[#1A1A1A] text-[28px] md:text-[36px] font-medium leading-[1.2] mb-3 font-display tracking-tight">
                        Appointments Delivered
                    </h4>
                    <p className="text-[#7D7D7D] text-[18px] md:text-[20px] font-normal leading-[1.6] mb-6 font-sans">
                        Qualified appointments hit your calendar seamlessly. You close deals — we handle the rest. Everything from initial interest to the booked call is managed for you.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative h-32 md:h-64 rounded-[16px] overflow-hidden border border-[#E6E6E6] shadow-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1470&auto=format&fit=crop"
                                alt="Calendar with booked meetings"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-32 md:h-64 rounded-[16px] overflow-hidden border border-[#E6E6E6] shadow-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1546&auto=format&fit=crop"
                                alt="Successful handshake after meeting"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="blueprint" className="bg-[#F5F5F5] py-[16px] md:py-[24px] overflow-hidden">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
                {/* Outer White Card Wrapper */}
                <div className="bg-white rounded-3xl md:rounded-[24px] px-6 py-8 md:py-12 border border-[#E6E6E6] shadow-sm overflow-hidden">
                    {/* Header matched to existing site styles */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center gap-4 text-center mb-2 md:mb-4"
                    >
                        <Badge variant="outline" className="text-[11px] font-mono uppercase tracking-[0.18em] border-[#D1D1D1] px-4 py-1.5 rounded-full text-[#7D7D7D] bg-white">
                            The Blueprint
                        </Badge>
                        <h2 className="text-[#1A1A1A] text-[40px] md:text-[56px] font-normal leading-[1.1] tracking-[-0.01em] font-display max-w-2xl">
                            Three steps to predictable growth.
                        </h2>
                    </motion.div>

                    <Timeline data={data} />
                </div>
            </div>
        </section>
    );
};

export default Blueprint;


