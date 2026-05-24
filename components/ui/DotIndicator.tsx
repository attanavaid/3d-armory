"use client";

import { motion } from "framer-motion";

type DotIndicatorProps = {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  disabled?: boolean;
};

export function DotIndicator({
  total,
  activeIndex,
  onSelect,
  disabled,
}: DotIndicatorProps) {
  return (
    <motion.div
      className="pointer-events-auto absolute top-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:top-10"
      layout
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to weapon ${i + 1}`}
          disabled={disabled}
          onClick={() => onSelect(i)}
          className="relative h-2 w-2 rounded-full disabled:cursor-not-allowed"
        >
          <span
            className={`block h-2 w-2 rounded-full transition ${
              i === activeIndex
                ? "bg-[var(--accent-primary)]"
                : "bg-[var(--text-subtle)] hover:opacity-80"
            }`}
          />
          {i === activeIndex && (
            <motion.span
              layoutId="activeDot"
              className="absolute inset-0 rounded-full ring-2 ring-[var(--accent-primary)]/50"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ))}
    </motion.div>
  );
}
