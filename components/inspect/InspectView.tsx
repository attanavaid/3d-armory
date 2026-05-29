"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { Weapon } from "@/data/weapons";
import { WeaponStatsPanel } from "./WeaponStatsPanel";

const InspectCanvas = dynamic(
  () =>
    import("@/components/canvas/InspectCanvas").then((m) => m.InspectCanvas),
  { ssr: false }
);

type InspectViewProps = {
  weapon: Weapon;
  onBack: () => void;
};

export function InspectView({ weapon, onBack }: InspectViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-0 z-40 flex flex-col bg-[var(--background)] md:flex-row"
    >
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <div className="order-1 h-auto max-h-[48vh] shrink-0 overflow-y-auto md:order-1 md:h-full md:max-h-none md:w-[min(20rem,36vw)] md:shrink-0">
          <WeaponStatsPanel weapon={weapon} onBack={onBack} />
        </div>

        <div className="order-2 min-h-0 flex-1 md:order-2">
          <InspectCanvas weapon={weapon} />
        </div>
      </div>
    </motion.div>
  );
}
