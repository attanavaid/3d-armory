"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Weapon } from "@/data/weapons";

type WeaponPanelProps = {
  weapon: Weapon;
  index: number;
  total: number;
};

export function WeaponPanel({ weapon, index, total }: WeaponPanelProps) {
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
          <motion.div
            className="mb-3 flex items-center justify-between text-xs tracking-[0.2em] text-[var(--accent-primary)] uppercase opacity-80"
          >
            <span>Armory</span>
            <span className="font-mono text-[var(--text-subtle)]">
              {padded} / {totalPadded}
            </span>
          </motion.div>
          <h1 className="font-display text-2xl font-semibold tracking-wide text-[var(--text-heading)] md:text-3xl">
            {weapon.name}
          </h1>
          {weapon.subtitle && (
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              {weapon.subtitle}
            </p>
          )}
          {weapon.tags && weapon.tags.length > 0 && (
            <motion.div className="mt-4 flex flex-wrap gap-2">
              {weapon.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--tag-border)] bg-[var(--tag-bg)] px-3 py-1 text-xs text-[var(--tag-text)]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
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
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
