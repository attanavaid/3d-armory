"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { filterThreeConsoleWarnings } from "@/lib/filterThreeConsoleWarnings";
import { getInspectCameraPosition, INSPECT_LAYOUT } from "@/lib/inspectLayout";
import { InspectScene } from "./InspectScene";
import type { Weapon } from "@/data/weapons";

filterThreeConsoleWarnings();

type InspectCanvasProps = {
  weapon: Weapon;
};

export function InspectCanvas({ weapon }: InspectCanvasProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{
        position: getInspectCameraPosition(),
        fov: INSPECT_LAYOUT.fov,
        near: 0.1,
        far: 100,
      }}
      gl={{ antialias: true, alpha: false }}
      className="h-full w-full"
    >
      <Suspense fallback={null}>
        <InspectScene weapon={weapon} />
      </Suspense>
    </Canvas>
  );
}
