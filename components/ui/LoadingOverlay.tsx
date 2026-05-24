"use client";

import { motion } from "framer-motion";

type LoadingOverlayProps = {
  visible: boolean;
};

export function LoadingOverlay({ visible }: LoadingOverlayProps) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center bg-[var(--loading-bg)]"
    >
      <motion.div
        className="h-12 w-12 rounded-full border-2 border-[var(--accent-primary)]/30 border-t-[var(--accent-primary)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="mt-4 font-mono text-xs tracking-[0.25em] text-[var(--accent-primary)] uppercase opacity-80">
        Loading armory
      </p>
    </motion.div>
  );
}
