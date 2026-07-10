"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useAppReady } from "@/components/app-ready-context";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "p";
  delay?: number;
  duration?: number;
  /** "mount" plays immediately (above-the-fold use, e.g. hero); "inView" plays once scrolled into view. */
  trigger?: "mount" | "inView";
}

/**
 * Wraps block content (a paragraph, a CTA, a card body) in a clipped mask and
 * slides it straight up into place — no opacity fade, just a clean reveal.
 * Same mechanic as AnimatedHeading's per-letter wave, but applied to a whole
 * block at once, which reads better on body copy than letter-by-letter.
 */
const RevealText: React.FC<RevealTextProps> = ({
  children,
  className = "",
  as = "div",
  delay = 0,
  duration = 0.7,
  trigger = "inView",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const appReady = useAppReady();
  const shouldAnimate = trigger === "mount" ? appReady : isInView;
  const MotionTag = as === "p" ? motion.p : motion.div;

  return (
    <div ref={ref} className="overflow-hidden">
      <MotionTag
        initial={{ y: "100%" }}
        animate={{ y: shouldAnimate ? "0%" : "100%" }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </MotionTag>
    </div>
  );
};

export default RevealText;
