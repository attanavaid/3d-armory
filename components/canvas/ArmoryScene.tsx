"use client";

import {
  ContactShadows,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { useTheme } from "@/components/ThemeProvider";
import { SCENE_LAYOUT } from "@/lib/sceneLayout";
import { SCENE_THEMES } from "@/lib/sceneTheme";
import { CameraRig } from "./CameraRig";
import { CarouselRail } from "./CarouselRail";
import type { Weapon } from "@/data/weapons";

type ArmorySceneProps = {
  weapons: Weapon[];
  activeIndex: number;
  instantCarousel?: boolean;
  onTransitionEnd?: () => void;
};

export function ArmoryScene({
  weapons,
  activeIndex,
  instantCarousel = false,
  onTransitionEnd,
}: ArmorySceneProps) {
  const { resolvedTheme } = useTheme();
  const scene = SCENE_THEMES[resolvedTheme];
  const { stageY } = SCENE_LAYOUT;

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={SCENE_LAYOUT.cameraPosition}
        fov={SCENE_LAYOUT.fov}
      />
      <CameraRig />
      <color attach="background" args={[scene.background]} />
      <fog attach="fog" args={[scene.fog, 8, 18]} />

      <ambientLight intensity={scene.ambientIntensity} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={scene.directionalIntensity}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <spotLight
        position={[-3, 5, 2]}
        angle={0.4}
        penumbra={0.5}
        intensity={scene.spotCyanIntensity}
        color="#22d3ee"
      />
      <spotLight
        position={[3, 4, -2]}
        angle={0.35}
        penumbra={0.6}
        intensity={scene.spotVioletIntensity}
        color="#a78bfa"
      />

      <Environment preset={scene.environmentPreset} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial
          color={scene.ground}
          metalness={resolvedTheme === "dark" ? 0.6 : 0.35}
          roughness={resolvedTheme === "dark" ? 0.4 : 0.55}
        />
      </mesh>

      <group position={[0, stageY, 0]}>
        <ContactShadows
          position={[0, 0, 0]}
          opacity={scene.contactShadowOpacity}
          scale={12}
          blur={2.5}
          far={4}
        />
        <CarouselRail
          weapons={weapons}
          activeIndex={activeIndex}
          instant={instantCarousel}
          onTransitionEnd={onTransitionEnd}
        />
      </group>
    </>
  );
}
