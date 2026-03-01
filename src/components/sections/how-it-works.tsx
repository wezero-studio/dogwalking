"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
}

interface Tab {
    value: string;
    icon: React.ReactNode;
    label: string;
    content: TabContent;
}

const HowItWorks = () => {
    const tabs: Tab[] = [
        {
            value: "tab-1",
            icon: <Zap className="h-auto w-4 shrink-0" />,
            label: "Targeted Outreach",
            content: {
                badge: "Step 01",
                title: "Hyper-focused targeting.",
                description: "We identify high-intent gym-goers and wellness enthusiasts in your local area. We map out exact decision makers, filling your pipeline with prospects actively searching for what you offer.",
                buttonText: "Book a Call",
                imageSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
                imageAlt: "Targeted gym and wellness outreach",
            },
        },
        {
            value: "tab-2",
            icon: <Pointer className="h-auto w-4 shrink-0" />,
            label: "Lead Qualification",
            content: {
                badge: "Step 02",
                title: "We filter the noise.",
                description: "Our team vets every lead. We handle upfront friction—answering questions and verifying intent—so you only book people ready to show up and pay. No more wasted time on unqualified prospects.",
                buttonText: "Book a Call",
                imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop",
                imageAlt: "Team discussing lead qualification",
            },
        },
        {
            value: "tab-3",
            icon: <Layout className="h-auto w-4 shrink-0" />,
            label: "Guaranteed Booking",
            content: {
                badge: "Step 03",
                title: "Meetings on autopilot.",
                description: "The appointment appears in your calendar. You only pay when they book. It's a risk-free engine—just check your calendar, see highly-qualified appointments, and focus on closing the deal.",
                buttonText: "Book a Call",
                imageSrc: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1546&auto=format&fit=crop",
                imageAlt: "Guaranteed booking handshake",
            },
        },
    ];

    return (
        <section id="process" className="py-[16px] md:py-[24px] bg-[#F5F5F5]">
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-8">
                {/* Outer White Card Wrapper */}
                <div className="bg-white rounded-3xl md:rounded-[24px] px-4 py-8 md:px-6 md:py-10 border border-[#E6E6E6] shadow-sm overflow-hidden">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center gap-4 text-center mb-6"
                    >
                        <Badge variant="outline" className="text-[11px] font-mono uppercase tracking-[0.18em] border-[#D1D1D1] px-4 py-1.5 rounded-full text-[#7D7D7D] bg-white">
                            How It Works
                        </Badge>
                        <h2 className="text-[#1A1A1A] text-[36px] md:text-[48px] font-normal leading-[1.1] tracking-[-0.01em] font-display">
                            Our Process
                        </h2>
                    </motion.div>

                    {/* Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Tabs defaultValue={tabs[0].value} className="mt-4">
                            <TabsList className="mx-auto w-full max-w-[600px] flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-8 h-auto bg-transparent">
                                {tabs.map((tab) => (
                                    <TabsTrigger
                                        key={tab.value}
                                        value={tab.value}
                                        className="flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium text-[#7D7D7D] bg-[#F5F5F5] transition-all hover:bg-[#E6E6E6] data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white shadow-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    >
                                        {tab.icon} {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            <div className="mx-auto mt-4 w-full max-w-[1100px] rounded-3xl bg-[linear-gradient(135deg,#FFE5E5_0%,#F5F5F5_50%,#E5F0FF_100%)] p-4 sm:p-6 lg:p-10">
                                {tabs.map((tab) => (
                                    <TabsContent
                                        key={tab.value}
                                        value={tab.value}
                                        className="grid place-items-center gap-10 lg:grid-cols-2 lg:gap-14 focus-visible:outline-none data-[state=inactive]:hidden motion-safe:data-[state=active]:animate-in motion-safe:data-[state=active]:fade-in-50 motion-safe:data-[state=active]:slide-in-from-bottom-4 motion-safe:duration-500"
                                    >
                                        <div className="flex flex-col gap-6 order-2 lg:order-1 max-w-[480px]">
                                            <Badge variant="outline" className="w-fit bg-white/80 backdrop-blur-sm text-[13px] px-4 py-1.5 rounded-full border-[#E6E6E6] shadow-sm font-mono text-[#1A1A1A]">
                                                {tab.content.badge}
                                            </Badge>
                                            <h3 className="text-[24px] md:text-[32px] font-medium text-[#1A1A1A] leading-[1.2] font-display tracking-tight">
                                                {tab.content.title}
                                            </h3>
                                            <p className="text-[#7D7D7D] text-[16px] md:text-[18px] font-normal leading-[1.6] mb-4 font-sans">
                                                {tab.content.description}
                                            </p>
                                            <Button className="mt-2 w-fit px-8 py-6 rounded-[6px] bg-[#121212] hover:bg-black text-[13px] uppercase tracking-wider font-medium font-sans h-auto" size="lg">
                                                {tab.content.buttonText}
                                            </Button>
                                        </div>

                                        <div className="relative w-full aspect-[4/3] order-1 lg:order-2 rounded-2xl overflow-hidden shadow-glass border border-[#E6E6E6]">
                                            <img
                                                src={tab.content.imageSrc}
                                                alt={tab.content.imageAlt}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                            {/* Subtle gradient overlay to blend corners nicely */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none mix-blend-overlay" />
                                        </div>
                                    </TabsContent>
                                ))}
                            </div>
                        </Tabs>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
