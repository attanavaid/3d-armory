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
    <div className="pointer-events-auto absolute bottom-8 left-1/2 z-20 w-[min(92vw,28rem)] -translate-x-1/2 md:bottom-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={weapon.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="mb-3 flex items-center justify-between text-xs tracking-[0.2em] text-cyan-300/80 uppercase">
            <span>Armory</span>
            <span className="font-mono text-white/50">
              {padded} / {totalPadded}
            </span>
          </div>
          <h1 className="font-display text-2xl font-semibold tracking-wide text-white md:text-3xl">
            {weapon.name}
          </h1>
          {weapon.subtitle && (
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {weapon.subtitle}
            </p>
          )}
          {weapon.tags && weapon.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {weapon.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {weapon.storeUrl && (
            <a
              href={weapon.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-300 transition hover:text-cyan-200"
            >
              View in store →
            </a>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
