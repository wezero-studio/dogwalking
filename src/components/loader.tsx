"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  /** Fired the moment the loader starts lifting, so hidden content can begin animating. */
  onReveal?: () => void;
}

const Loader = ({ onReveal }: LoaderProps) => {
  // Jumps rather than a smooth 0->100 count: 0, two randomized mid checkpoints, 100.
  const steps = useMemo(() => {
    const mid1 = 25 + Math.floor(Math.random() * 25); // 25-49
    const mid2 = 60 + Math.floor(Math.random() * 25); // 60-84
    return [0, mid1, mid2, 100];
  }, []);

  const [stepIndex, setStepIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [hide, setHide] = useState(false);

  const progress = steps[stepIndex];

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let elapsed = 0;

    for (let idx = 1; idx < steps.length; idx++) {
      elapsed += idx === 1 ? 300 : 500;
      const targetIndex = idx;
      timers.push(setTimeout(() => setStepIndex(targetIndex), elapsed));
    }
    timers.push(setTimeout(() => setIsDone(true), elapsed + 50));

    return () => timers.forEach(clearTimeout);
  }, [steps]);

  useEffect(() => {
    if (!isDone) return;
    const t = setTimeout(() => {
      setHide(true);
      onReveal?.();
    }, 500);
    return () => clearTimeout(t);
  }, [isDone, onReveal]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center"
        >
          <div className="relative overflow-hidden h-[70px] md:h-[110px] w-[200px] flex items-center justify-center">
            <AnimatePresence>
              <motion.span
                key={progress}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-110%" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center font-display text-[64px] md:text-[96px] font-normal tracking-[-0.02em] text-[#121212] tabular-nums"
              >
                {progress}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="fixed bottom-0 left-0 right-0 w-full h-[3px] bg-[#e6e6e6] overflow-hidden">
            <motion.div
              className="h-full bg-[#121212]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
