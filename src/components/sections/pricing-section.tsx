"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHeading from "@/components/ui/animated-heading";

type Option = "15min" | "30min" | "1hr" | "2hr";

const plans: Record<Option, { label: string; basePrice: number; duration: string; perks: string[] }> = {
  "15min": {
    label: "Quick Stretch",
    basePrice: 5,
    duration: "15 min walk",
    perks: [
      "Perfect for a midday break",
      "Potty break & light exercise",
      "GPS-tracked route",
      "Post-walk photo update",
    ],
  },
  "30min": {
    label: "Solid Stroll",
    basePrice: 9,
    duration: "30 min walk",
    perks: [
      "Great for extra energy to burn",
      "Potty break & proper exercise",
      "GPS-tracked route",
      "Post-walk photo update",
    ],
  },
  "1hr": {
    label: "Proper Walk",
    basePrice: 15,
    duration: "1 hour walk",
    perks: [
      "Plenty of time to explore",
      "Ideal for active breeds",
      "GPS-tracked route",
      "Post-walk photo update",
    ],
  },
  "2hr": {
    label: "Big Adventure",
    basePrice: 25,
    duration: "2 hour walk",
    perks: [
      "Full park & trail exploration",
      "Socialisation with other dogs",
      "GPS-tracked route",
      "Post-walk photo update",
    ],
  },
};

const fmt = (p: number) => {
  return "\u00a3" + (p % 1 === 0 ? p.toFixed(0) : p.toFixed(2));
};

const PricingSection = () => {
  const [selected, setSelected] = useState<Option>("30min");
  const [addon15, setAddon15] = useState(0);
  const [addon30, setAddon30] = useState(0);

  const handleSelect = (opt: Option) => {
    setSelected(opt);
    setAddon15(0);
    setAddon30(0);
  };

  const plan = plans[selected];

  // Logic to only allow "in between" combinations and prevent reaching the next base tier
  const available15 = selected !== "15min";
  const available30 = selected === "1hr" || selected === "2hr";

  const actualAddon15 = available15 ? Math.min(1, addon15) : 0;
  const actualAddon30 = available30 ? Math.min(1, addon30) : 0;

  const addonCost = actualAddon15 * 2.5 + actualAddon30 * 4.5;
  const totalPrice = plan.basePrice + addonCost;
  const hasAddon = addonCost > 0;

  const baseMins = { "15min": 15, "30min": 30, "1hr": 60, "2hr": 120 }[selected];
  const totalMins = baseMins + actualAddon15 * 15 + actualAddon30 * 30;
  const durationLabel = (() => {
    const h = Math.floor(totalMins / 60);
    const m = totalMins % 60;
    if (h === 0) return `${m} min walk`;
    if (m === 0) return `${h} hr walk`;
    return `${h} hr ${m} min walk`;
  })();

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
          className="text-[#2E1C3B] text-[38px] sm:text-[48px] md:text-[80px] lg:text-[100px] leading-[0.95] sm:leading-[0.88] uppercase mb-6 text-center tracking-tight"
          style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
        />

        {/* Base Duration Toggle */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14 bg-[#2E1C3B]/[0.06] rounded-full p-2">
          {(Object.keys(plans) as Option[]).map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`relative px-6 py-3 rounded-full text-[15px] font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${
                selected === opt
                  ? "text-white shadow-lg"
                  : "text-[#2E1C3B]/60 hover:text-[#2E1C3B]"
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
              {plans[opt].duration.replace(" walk", "")}
            </button>
          ))}
        </div>

        {/* Pricing Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full max-w-[840px] bg-transparent rounded-[24px] border border-[#2E1C3B] p-8 md:p-12 flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-14 text-[#2E1C3B] mx-auto"
          >
            {/* Left Column: Title + Duration + Price */}
            <div className="flex flex-col justify-center text-left md:w-[45%] md:border-r border-[#2E1C3B]/20 md:pr-10 shrink-0">
              <span
                className="text-[32px] md:text-[40px] leading-tight"
                style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
              >
                {plan.label}
              </span>
              <motion.span
                key={durationLabel}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-[#2E1C3B]/70 text-[16px] md:text-[18px] font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {durationLabel}
              </motion.span>

              <hr className="border-t border-[#2E1C3B]/20 my-8 hidden md:block" />
              <hr className="border-t border-[#2E1C3B]/20 my-6 md:hidden" />

              {/* Price */}
              <div className="text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={totalPrice}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="block text-[64px] md:text-[88px] leading-[0.9] tracking-tight"
                    style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
                  >
                    {fmt(totalPrice)}
                  </motion.span>
                </AnimatePresence>
                <AnimatePresence>
                  {hasAddon && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-[13px] md:text-[14px] text-[#2E1C3B]/50 mt-2 overflow-hidden"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {fmt(plan.basePrice)} base + {fmt(addonCost)} extra time
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <hr className="border-t border-[#2E1C3B]/20 mb-6 md:hidden" />

            {/* Right Column: Includes + CTA */}
            <div className="flex flex-col flex-1 text-left justify-center">
              {/* Includes list */}
              <div className="flex flex-col gap-3 mb-8 flex-1">
                <span className="text-[#2E1C3B] text-[14px] mb-1 font-semibold uppercase tracking-widest opacity-60" style={{ fontFamily: "'Inter', sans-serif" }}>Includes:</span>
                {plan.perks.map((perk, i) => (
                  <motion.div
                    key={perk}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#2E1C3B] shrink-0" />
                    <span
                      className="text-[#2E1C3B] text-[15px] font-medium leading-[1.5]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {perk}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Add Extra Time (only for in-between durations) */}
              {(available15 || available30) && (
                <div className="mb-8 rounded-2xl border border-[#2E1C3B]/15 overflow-hidden">
                  <div className="bg-[#2E1C3B]/[0.04] px-4 py-2 border-b border-[#2E1C3B]/10">
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#2E1C3B]/50" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Add Extra Time
                    </span>
                  </div>

                  {available15 && (
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[#2E1C3B]/10 last:border-b-0">
                      <div>
                        <p className="text-[14px] font-semibold text-[#2E1C3B]" style={{ fontFamily: "'Inter', sans-serif" }}>+15 minutes</p>
                        <p className="text-[11px] text-[#2E1C3B]/45" style={{ fontFamily: "'Inter', sans-serif" }}>£2.50 per block</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setAddon15(0)}
                          disabled={actualAddon15 === 0}
                          className="w-8 h-8 rounded-full border border-[#2E1C3B]/25 flex items-center justify-center text-[#2E1C3B] font-bold text-[20px] leading-none hover:bg-[#2E1C3B] hover:text-white hover:border-transparent transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                          aria-label="Remove 15 min block"
                        >
                          −
                        </button>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={actualAddon15}
                            initial={{ scale: 1.3, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="w-5 text-center text-[16px] font-bold"
                            style={{ fontFamily: "'Shantell Sans', cursive" }}
                          >
                            {actualAddon15}
                          </motion.span>
                        </AnimatePresence>
                        <button
                          onClick={() => setAddon15(1)}
                          disabled={actualAddon15 >= 1}
                          className="w-8 h-8 rounded-full border border-[#2E1C3B]/25 flex items-center justify-center text-[#2E1C3B] font-bold text-[20px] leading-none hover:bg-[#2E1C3B] hover:text-white hover:border-transparent transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                          aria-label="Add 15 min block"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}

                  {available30 && (
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[#2E1C3B]/10 last:border-b-0">
                      <div>
                        <p className="text-[14px] font-semibold text-[#2E1C3B]" style={{ fontFamily: "'Inter', sans-serif" }}>+30 minutes</p>
                        <p className="text-[11px] text-[#2E1C3B]/45" style={{ fontFamily: "'Inter', sans-serif" }}>£4.50 per block</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setAddon30(0)}
                          disabled={actualAddon30 === 0}
                          className="w-8 h-8 rounded-full border border-[#2E1C3B]/25 flex items-center justify-center text-[#2E1C3B] font-bold text-[20px] leading-none hover:bg-[#2E1C3B] hover:text-white hover:border-transparent transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                          aria-label="Remove 30 min block"
                        >
                          −
                        </button>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={actualAddon30}
                            initial={{ scale: 1.3, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="w-5 text-center text-[16px] font-bold"
                            style={{ fontFamily: "'Shantell Sans', cursive" }}
                          >
                            {actualAddon30}
                          </motion.span>
                        </AnimatePresence>
                        <button
                          onClick={() => setAddon30(1)}
                          disabled={actualAddon30 >= 1}
                          className="w-8 h-8 rounded-full border border-[#2E1C3B]/25 flex items-center justify-center text-[#2E1C3B] font-bold text-[20px] leading-none hover:bg-[#2E1C3B] hover:text-white hover:border-transparent transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                          aria-label="Add 30 min block"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* CTA */}
              <motion.a
                href="#booking"
                layout
                className="w-full bg-[#2E1C3B] text-white py-4 rounded-sm flex items-center justify-center text-[15px] font-bold tracking-wide hover:opacity-90 transition-opacity mt-auto"
                style={{ fontFamily: "'Shantell Sans', cursive", fontWeight: 700 }}
              >
                Book Now — {fmt(totalPrice)}
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
