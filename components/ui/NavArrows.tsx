"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type NavArrowsProps = {
  onPrev: () => void;
  onNext: () => void;
  disabled?: boolean;
};

export function NavArrows({ onPrev, onNext, disabled }: NavArrowsProps) {
  return (
    <>
      <motion.button
        type="button"
        aria-label="Previous weapon"
        onClick={onPrev}
        disabled={disabled}
        className="pointer-events-auto absolute left-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300 backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-cyan-500/10 disabled:cursor-not-allowed disabled:opacity-40 md:left-8 md:h-16 md:w-16"
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
      >
        <ChevronLeft className="h-8 w-8" />
      </motion.button>
      <motion.button
        type="button"
        aria-label="Next weapon"
        onClick={onNext}
        disabled={disabled}
        className="pointer-events-auto absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-violet-300 backdrop-blur-md transition hover:border-violet-400/40 hover:bg-violet-500/10 disabled:cursor-not-allowed disabled:opacity-40 md:right-8 md:h-16 md:w-16"
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
      >
        <ChevronRight className="h-8 w-8" />
      </motion.button>
    </>
  );
}
