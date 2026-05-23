"use client";

import {
  ContactShadows,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
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
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1.4, 5.5]} fov={40} />
      <color attach="background" args={["#0a0b10"]} />
      <fog attach="fog" args={["#0a0b10", 8, 18]} />

      <ambientLight intensity={0.25} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <spotLight
        position={[-3, 5, 2]}
        angle={0.4}
        penumbra={0.5}
        intensity={2}
        color="#22d3ee"
      />
      <spotLight
        position={[3, 4, -2]}
        angle={0.35}
        penumbra={0.6}
        intensity={1.5}
        color="#a78bfa"
      />

      <Environment preset="warehouse" />
      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.55}
        scale={12}
        blur={2.5}
        far={4}
      />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial
          color="#0d1117"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      <CarouselRail
        weapons={weapons}
        activeIndex={activeIndex}
        instant={instantCarousel}
        onTransitionEnd={onTransitionEnd}
      />
    </>
  );
}
