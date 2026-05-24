"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/components/ThemeProvider";
import { SCENE_THEMES } from "@/lib/sceneTheme";
import { WeaponModel } from "./WeaponModel";
import type { Weapon } from "@/data/weapons";

type TurntableProps = {
  weapon: Weapon;
  isActive: boolean;
};

export function Turntable({ weapon, isActive }: TurntableProps) {
  const { resolvedTheme } = useTheme();
  const scene = SCENE_THEMES[resolvedTheme];
  const turntableRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!turntableRef.current) return;
    turntableRef.current.rotation.y =
      state.clock.elapsedTime * (isActive ? 0.35 : 0.15);
  });

  return (
    <group ref={turntableRef}>
      <mesh position={[0, 0.02, 0]} receiveShadow>
        <cylinderGeometry args={[1.1, 1.2, 0.08, 32]} />
        <meshStandardMaterial
          color={scene.platform}
          metalness={0.85}
          roughness={resolvedTheme === "dark" ? 0.25 : 0.35}
          envMapIntensity={1.5}
        />
      </mesh>
      <mesh position={[0, 0.09, 0]}>
        <torusGeometry args={[0.95, 0.03, 16, 48]} />
        <meshStandardMaterial
          color={scene.ring}
          emissive={scene.ringEmissive}
          emissiveIntensity={isActive ? 0.6 : 0.15}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
      <WeaponModel
        modelPath={weapon.modelPath}
        targetSize={weapon.targetSize}
        yOffset={weapon.turntableYOffset}
        isActive={isActive}
      />
    </group>
  );
}
