"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { filterThreeConsoleWarnings } from "@/lib/filterThreeConsoleWarnings";
import { ArmoryScene } from "./ArmoryScene";
import { AssetLoadReporter } from "./AssetLoadReporter";
import type { Weapon } from "@/data/weapons";

filterThreeConsoleWarnings();

type ArmoryCanvasProps = {
  weapons: Weapon[];
  activeIndex: number;
  instantCarousel?: boolean;
  onTransitionEnd?: () => void;
  onAssetsReady?: () => void;
};

export function ArmoryCanvas({
  weapons,
  activeIndex,
  instantCarousel,
  onTransitionEnd,
  onAssetsReady,
}: ArmoryCanvasProps) {
  return (
    <Canvas
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
        <AssetLoadReporter onReady={onAssetsReady} />
      </Suspense>
    </Canvas>
  );
}
