"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useAppReady } from "@/components/app-ready-context";

interface AnimatedHeadingProps {
  /** Single string, wrapped naturally by the browser. Ignored if `lines` is given. */
  text?: string;
  /** Hard line breaks — each entry renders as its own non-wrapping line. */
  lines?: string[];
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
  /** "mount" plays immediately (use above-the-fold, e.g. hero); "inView" plays once scrolled into view. */
  trigger?: "mount" | "inView";
}

/**
 * Renders text with a per-letter "slice" reveal: each glyph sits in its own
 * clipped mask and slides up into place, sweeping left-to-right like a wave.
 * Spaces are left as plain text so word-spacing/letter-spacing render exactly
 * as normal text would; only visible glyphs are wrapped.
 *
 * Uses a single useInView observer on the whole element (not one per letter)
 * to drive every letter's animate state — far more reliable than attaching
 * whileInView to each of the (often 50+) individual letter spans.
 */
const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  lines,
  className = "",
  style,
  as = "h2",
  delay = 0,
  stagger = 0.018,
  trigger = "mount",
}) => {
  // Cast to `any`: a strongly-typed dynamic tag makes TS compute props across the
  // full IntrinsicElements union, which is too complex to represent.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = as as any;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const appReady = useAppReady();
  const shouldAnimate = trigger === "mount" ? appReady : isInView;

  const resolvedLines = lines ?? [text ?? ""];
  const fullText = resolvedLines.join(" ");
  let letterIndex = 0;

  const renderWord = (word: string, key: number) => (
    <span key={key} className="inline-block whitespace-nowrap">
      {Array.from(word).map((char, ci) => {
        const i = letterIndex++;
        return (
          <span
            key={ci}
            className="inline-block overflow-hidden align-bottom"
            aria-hidden="true"
          >
            <motion.span
              className="inline-block"
              initial={{ y: "-110%" }}
              animate={{ y: shouldAnimate ? "0%" : "-110%" }}
              transition={{
                duration: 0.6,
                delay: delay + i * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </span>
  );

  return (
    <Tag ref={ref} className={className} style={style} aria-label={fullText}>
      {resolvedLines.map((line, li) => (
        <span key={li} className={lines ? "block whitespace-nowrap" : undefined}>
          {line.split(" ").map((word, wi, arr) => (
            <React.Fragment key={wi}>
              {renderWord(word, wi)}
              {wi < arr.length - 1 ? " " : ""}
            </React.Fragment>
          ))}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedHeading;
