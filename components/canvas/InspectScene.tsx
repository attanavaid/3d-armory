"use client";

import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { useTheme } from "@/components/ThemeProvider";
import { INSPECT_LAYOUT } from "@/lib/inspectLayout";
import { SCENE_THEMES } from "@/lib/sceneTheme";
import { InspectCameraRig } from "./InspectCameraRig";
import { WeaponModel } from "./WeaponModel";
import type { Weapon } from "@/data/weapons";

type InspectSceneProps = {
  weapon: Weapon;
};

export function InspectScene({ weapon }: InspectSceneProps) {
  const { resolvedTheme } = useTheme();
  const scene = SCENE_THEMES[resolvedTheme];
  const baseSize = weapon.inspectTargetSize ?? weapon.targetSize ?? 2;
  const inspectSize = baseSize * INSPECT_LAYOUT.scaleMultiplier;
  const pivotY = INSPECT_LAYOUT.modelPivotY;

  return (
    <>
      <InspectCameraRig />
      <color attach="background" args={[scene.background]} />
      <ambientLight intensity={scene.ambientIntensity} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={scene.directionalIntensity}
      />
      <spotLight
        position={[-3, 5, 2]}
        angle={0.4}
        penumbra={0.5}
        intensity={scene.spotPrimaryIntensity}
        color={scene.spotPrimaryColor}
      />
      <spotLight
        position={[3, 4, -2]}
        angle={0.35}
        penumbra={0.6}
        intensity={scene.spotFillIntensity}
        color={scene.spotFillColor}
      />

      <Environment preset={scene.environmentPreset} />

      <group position={[0, pivotY, 0]}>
        <ContactShadows
          opacity={scene.contactShadowOpacity}
          scale={8}
          blur={2.5}
          far={3}
        />
        <WeaponModel
          modelPath={weapon.modelPath}
          targetSize={inspectSize}
          isActive
        />
      </group>

      <OrbitControls
        enablePan={false}
        minDistance={INSPECT_LAYOUT.minDistance}
        maxDistance={INSPECT_LAYOUT.maxDistance}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 1.35}
        target={[0, pivotY, 0]}
        touches={{
          ONE: 0,
          TWO: 2,
        }}
      />
    </>
  );
}
