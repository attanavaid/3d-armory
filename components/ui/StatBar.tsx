"use client";

import { motion } from "framer-motion";

type StatBarProps = {
  label: string;
  value: number;
};

export function StatBar({ label, value }: StatBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="text-[var(--text-muted)]">{label}</span>
        <span className="font-mono text-xs tabular-nums text-[var(--text-subtle)]">
          {clamped}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[var(--stat-track)]">
        <motion.div
          className="h-full rounded-full bg-[var(--accent-primary)]"
          initial={{ width: 0 }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
