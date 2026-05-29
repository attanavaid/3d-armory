"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { filterThreeClockDeprecationWarning } from "@/lib/filterThreeClockWarning";
import { INSPECT_LAYOUT } from "@/lib/inspectLayout";
import { InspectScene } from "./InspectScene";
import type { Weapon } from "@/data/weapons";

filterThreeClockDeprecationWarning();

type InspectCanvasProps = {
  weapon: Weapon;
};

export function InspectCanvas({ weapon }: InspectCanvasProps) {
  return (
    <Canvas
      shadows="percentage"
      dpr={[1, 2]}
      camera={{
        position: INSPECT_LAYOUT.cameraPosition,
        fov: INSPECT_LAYOUT.fov,
        near: 0.1,
        far: 100,
      }}
      gl={{ antialias: true, alpha: false }}
      className="h-full w-full"
    >
      <Suspense fallback={null}>
        <InspectScene weapon={weapon} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
