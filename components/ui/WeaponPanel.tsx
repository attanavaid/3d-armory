"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Weapon } from "@/data/weapons";

type WeaponPanelProps = {
  weapon: Weapon;
  index: number;
  total: number;
  onInspect: () => void;
};

export function WeaponPanel({
  weapon,
  index,
  total,
  onInspect,
}: WeaponPanelProps) {
  const padded = String(index + 1).padStart(2, "0");
  const totalPadded = String(total).padStart(2, "0");

  return (
    <motion.div
      className="pointer-events-auto absolute bottom-8 left-1/2 z-20 w-[min(92vw,28rem)] -translate-x-1/2 md:bottom-12"
      layout
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={weapon.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="rounded-2xl border border-[var(--panel-border)] bg-[var(--panel-bg)] p-6 shadow-lg backdrop-blur-xl"
        >
          <div className="mb-2 flex items-start justify-between gap-4">
            <h1 className="font-display text-2xl font-semibold tracking-wide text-[var(--text-heading)] md:text-3xl">
              {weapon.name}
            </h1>
            <span className="shrink-0 font-mono text-xs text-[var(--text-subtle)] tabular-nums">
              {padded}/{totalPadded}
            </span>
          </div>
          {weapon.subtitle && (
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {weapon.subtitle}
            </p>
          )}
          {weapon.storeUrl && (
            <a
              href={weapon.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--accent-primary)] transition hover:opacity-80"
            >
              View in store →
            </a>
          )}
          <motion.button
            type="button"
            onClick={onInspect}
            className="mt-5 w-full rounded-xl border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 py-3 text-sm font-semibold tracking-wide text-[var(--accent-primary)] uppercase transition hover:bg-[var(--accent-primary)]/20"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Inspect
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
