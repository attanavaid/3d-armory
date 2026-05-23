"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { WeaponModel } from "./WeaponModel";
import type { Weapon } from "@/data/weapons";

type TurntableProps = {
  weapon: Weapon;
  isActive: boolean;
};

export function Turntable({ weapon, isActive }: TurntableProps) {
  const platformRef = useRef<THREE.Group>(null);
  const weaponRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (platformRef.current) {
      platformRef.current.rotation.y = t * (isActive ? 0.35 : 0.15);
    }
    if (weaponRef.current && isActive) {
      weaponRef.current.position.y = Math.sin(t * 1.2) * 0.04;
    }
  });

  return (
    <group>
      <group ref={platformRef}>
        <mesh position={[0, 0.02, 0]} receiveShadow>
          <cylinderGeometry args={[1.1, 1.2, 0.08, 32]} />
          <meshStandardMaterial
            color="#1a1f2e"
            metalness={0.85}
            roughness={0.25}
            envMapIntensity={1.5}
          />
        </mesh>
        <mesh position={[0, 0.09, 0]}>
          <torusGeometry args={[0.95, 0.03, 16, 48]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#0891b2"
            emissiveIntensity={isActive ? 0.6 : 0.15}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      </group>
      <group ref={weaponRef}>
        <WeaponModel
          modelPath={weapon.modelPath}
          targetSize={weapon.targetSize}
          yOffset={weapon.turntableYOffset}
          isActive={isActive}
        />
      </group>
    </group>
  );
}
