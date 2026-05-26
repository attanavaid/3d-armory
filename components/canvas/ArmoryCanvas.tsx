"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { filterThreeClockDeprecationWarning } from "@/lib/filterThreeClockWarning";
import { ArmoryScene } from "./ArmoryScene";
import type { Weapon } from "@/data/weapons";

filterThreeClockDeprecationWarning();

type ArmoryCanvasProps = {
  weapons: Weapon[];
  activeIndex: number;
  instantCarousel?: boolean;
  onTransitionEnd?: () => void;
};

export function ArmoryCanvas({
  weapons,
  activeIndex,
  instantCarousel,
  onTransitionEnd,
}: ArmoryCanvasProps) {
  return (
    <Canvas
      shadows="percentage"
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: false }}
      className="h-full w-full touch-none"
    >
      <Suspense fallback={null}>
        <ArmoryScene
          weapons={weapons}
          activeIndex={activeIndex}
          instantCarousel={instantCarousel}
          onTransitionEnd={onTransitionEnd}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
