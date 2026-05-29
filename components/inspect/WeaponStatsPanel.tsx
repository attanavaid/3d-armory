"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import {
  STAT_LABELS,
  WEAPON_STAT_KEYS,
  type Weapon,
} from "@/data/weapons";
import { StatBar } from "@/components/ui/StatBar";

type WeaponStatsPanelProps = {
  weapon: Weapon;
  onBack: () => void;
};

export function WeaponStatsPanel({ weapon, onBack }: WeaponStatsPanelProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
      className="flex h-full flex-col border-r border-[var(--panel-border)] bg-[var(--panel-bg)] p-6 backdrop-blur-xl md:p-8 md:pt-8"
    >
      <motion.button
        type="button"
        aria-label="Back to armory"
        onClick={onBack}
        className="mb-6 flex w-fit items-center gap-3 border-0 bg-transparent p-0 text-left font-display text-xl font-medium tracking-[0.14em] leading-[1.6] text-[var(--text-heading)] underline decoration-[var(--text-heading)] underline-offset-[6px] transition hover:opacity-70 md:text-2xl md:tracking-[0.16em]"
        whileTap={{ scale: 0.99 }}
      >
        <ArrowLeft className="h-6 w-6 shrink-0 md:h-7 md:w-7" strokeWidth={1.75} />
        Back
      </motion.button>

      <div className="mb-6">
        <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-subtle)] uppercase">
          Specifications
        </p>
        <h2 className="font-display mt-2 text-xl font-semibold text-[var(--text-heading)] md:text-2xl">
          {weapon.name}
        </h2>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-5">
        {WEAPON_STAT_KEYS.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.3 }}
          >
            <StatBar label={STAT_LABELS[key]} value={weapon.stats[key]} />
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-xs text-[var(--text-subtle)]">
        Drag to rotate · Scroll or pinch to zoom
      </p>
    </motion.aside>
  );
}
