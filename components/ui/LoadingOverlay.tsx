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
      className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#0a0b10]/90"
    >
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-400" />
      <p className="mt-4 font-mono text-xs tracking-[0.25em] text-cyan-300/80 uppercase">
        Loading armory
      </p>
    </motion.div>
  );
}
