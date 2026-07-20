"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHeading from "@/components/ui/animated-heading";

type Option = "15min" | "2hr";

const plans: Record<Option, { label: string; price: string; duration: string; perks: string[] }> = {
  "15min": {
    label: "Quick Stretch",
    price: "£5",
    duration: "15 min walk",
    perks: [
      "Perfect for a midday break",
      "Potty break & light exercise",
      "GPS-tracked route",
      "Post-walk photo update",
    ],
  },
  "2hr": {
    label: "Big Adventure",
    price: "£25",
    duration: "2 hour walk",
    perks: [
      "Full park & trail exploration",
      "Socialisation with other dogs",
      "GPS-tracked route",
      "Post-walk photo update",
    ],
  },
};

const PricingSection = () => {
  const [selected, setSelected] = useState<Option>("15min");
  const plan = plans[selected];

  return (
    <section
      id="pricing"
      className="relative bg-[#F9F4EB] py-32 px-6 md:px-12 min-h-[70vh] flex flex-col items-center justify-center overflow-hidden"
    >


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-[900px] flex flex-col items-center"
      >
        {/* Heading */}
        <AnimatedHeading
          as="h2"
          trigger="inView"
          lines={["CLEAR PRICING,", "NO SURPRISES."]}
          className="text-[#1B3B2C] text-[54px] md:text-[80px] lg:text-[100px] leading-[0.88] uppercase mb-6 text-center tracking-tight"
          style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
        />

        {/* Toggle Selector */}
        <div className="flex items-center gap-3 mb-14 bg-[#1B3B2C]/[0.06] rounded-full p-2">
          {(["15min", "2hr"] as Option[]).map((opt) => (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className={`relative px-8 py-3 rounded-full text-[16px] font-bold tracking-wide transition-all duration-300 ${
                selected === opt
                  ? "text-white shadow-lg"
                  : "text-[#1B3B2C]/60 hover:text-[#1B3B2C]"
              }`}
              style={{ fontFamily: "'Shantell Sans', cursive" }}
            >
              {selected === opt && (
                <motion.span
                  layoutId="pill"
                  className="absolute inset-0 bg-[#FF5722] rounded-full"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {opt === "15min" ? "15 minutes" : "2 hours"}
            </button>
          ))}
        </div>

        {/* Pricing Card — wide, short: price on the left, everything else on the right */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full max-w-[900px] bg-transparent rounded-[24px] border border-[#1B3B2C] p-8 md:p-10 flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-10 text-[#1B3B2C] mx-auto"
          >
            {/* Left: Price */}
            <div className="flex flex-col justify-center text-left md:w-2/5 md:border-r md:border-[#1B3B2C]/20 md:pr-10">
              <span
                className="text-[64px] md:text-[80px] leading-[0.9] tracking-tight"
                style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
              >
                {plan.price}
              </span>
              <span
                className="mt-2 text-[#1B3B2C]/80 text-[16px] md:text-[18px] font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Best For: {plan.duration}
              </span>
            </div>

            {/* Right: title + features + CTA */}
            <div className="flex flex-col text-left md:w-3/5">
              <span
                className="text-[32px] md:text-[36px] leading-tight mb-6"
                style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
              >
                {plan.label}
              </span>

              <div className="flex flex-col gap-3 mb-8 flex-1">
                <span className="text-[#1B3B2C] text-[15px] md:text-[16px] mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Includes:</span>
                {plan.perks.map((perk, i) => (
                  <motion.div
                    key={perk}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#1B3B2C] shrink-0" />
                    <span
                      className="text-[#1B3B2C] text-[15px] md:text-[16px] font-medium leading-[1.4]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {perk}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://cal.eu/12345678910/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1B3B2C] text-white py-4 rounded-sm flex items-center justify-center text-[16px] font-bold tracking-wide hover:opacity-90 transition-opacity"
                style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Wave transition to the next section */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[120px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#FFF4B3]"
          />
        </svg>
      </div>
    </section>
  );
};

export default PricingSection;


