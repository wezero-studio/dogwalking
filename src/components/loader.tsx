"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  /** Fired the moment the loader starts lifting, so hidden content can begin animating. */
  onReveal?: () => void;
}

// Hard cap on how long the loader will wait for the 3D dog model before giving
// up and revealing the page anyway — a stalled/broken fetch must never leave
// the loader stuck forever.
const MODEL_WAIT_TIMEOUT_MS = 8000;

const Loader = ({ onReveal }: LoaderProps) => {
  // Jumps rather than a smooth 0->100 count: 0, two randomized mid checkpoints, then a
  // final 100 held back until the dog model (see below) is actually ready to render.
  const steps = useMemo(() => {
    const mid1 = 25 + Math.floor(Math.random() * 25); // 25-49
    const mid2 = 60 + Math.floor(Math.random() * 25); // 60-84
    return [0, mid1, mid2, 100];
  }, []);

  const [stepIndex, setStepIndex] = useState(0);
  const [reachedHoldStep, setReachedHoldStep] = useState(false);
  // The desktop-only 3D dog (`/dog1.glb`, loaded by <model-viewer> further down the
  // tree) is the single heaviest asset on the page. The loader has no direct handle on
  // that element, so it independently fetches the same URL here — this both gates
  // completion on the model actually being downloaded AND warms the browser's HTTP
  // cache, so model-viewer's own request for it resolves instantly right after.
  const [modelReady, setModelReady] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [hide, setHide] = useState(false);

  const progress = steps[reachedHoldStep && modelReady ? steps.length - 1 : stepIndex];

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let elapsed = 0;

    // Advance through every step except the final one — that last jump to 100 is held
    // until modelReady flips true, below.
    for (let idx = 1; idx < steps.length - 1; idx++) {
      elapsed += idx === 1 ? 300 : 500;
      const targetIndex = idx;
      timers.push(setTimeout(() => setStepIndex(targetIndex), elapsed));
    }
    timers.push(setTimeout(() => setReachedHoldStep(true), elapsed + 500));

    return () => timers.forEach(clearTimeout);
  }, [steps]);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) {
      setModelReady(true);
      return;
    }

    let settled = false;
    const settle = () => {
      if (settled) return;
      settled = true;
      setModelReady(true);
    };

    fetch("/dog1.glb", { cache: "force-cache" }).then(settle).catch(settle);
    const timeout = setTimeout(settle, MODEL_WAIT_TIMEOUT_MS);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!reachedHoldStep || !modelReady) return;
    setStepIndex(steps.length - 1);
    setIsDone(true);
  }, [reachedHoldStep, modelReady, steps.length]);

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
          className="fixed inset-0 z-[10000] bg-[#FCD34D] flex flex-col items-center justify-center"
        >
          <div className="relative overflow-hidden h-[90px] md:h-[140px] w-[320px] md:w-[480px] flex items-center justify-center">
            <AnimatePresence>
              <motion.span
                key={progress}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-110%" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center text-[80px] md:text-[140px] font-bold text-[#1a1208] tabular-nums leading-none"
                style={{ fontFamily: "'Luckiest Guy', sans-serif" }}
              >
                {progress}%
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="fixed bottom-0 left-0 right-0 w-full h-[8px] bg-white/40 overflow-hidden">
            <motion.div
              className="h-full bg-[#1a1208]"
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
