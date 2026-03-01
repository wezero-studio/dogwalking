"use client";
import {
    useScroll,
    useTransform,
    motion,
    useMotionValueEvent,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [activeIndex, setActiveIndex] = useState(-1);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const stepSize = 1 / data.length;
        let newIndex = Math.floor(latest / stepSize);
        if (newIndex >= data.length) newIndex = data.length - 1;
        if (newIndex < 0) newIndex = 0;
        if (latest < 0.05) newIndex = -1; // Keep unhighlighted at very start
        setActiveIndex(newIndex);
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full font-sans"
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                                <div className={`h-4 w-4 rounded-full border p-2 transition-colors duration-300 ${index <= activeIndex ? 'bg-[#1A1A1A] border-[#1A1A1A]' : 'bg-[#E6E6E6] border-[#D1D1D1]'}`} />
                            </div>
                            <h3 className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold font-display transition-colors duration-300 ${index <= activeIndex ? 'text-[#1A1A1A]' : 'text-[#D1D1D1]'}`}>
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className={`md:hidden block text-2xl mb-4 text-left font-bold font-display transition-colors duration-300 ${index <= activeIndex ? 'text-[#1A1A1A]' : 'text-[#D1D1D1]'}`}>
                                {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#E6E6E6] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-[linear-gradient(to_bottom,#FFD1D1_0%,#B8D4FF_100%)] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
