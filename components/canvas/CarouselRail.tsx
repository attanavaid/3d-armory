"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { CAROUSEL_SPACING, type Weapon } from "@/data/weapons";
import { railOffsetX } from "@/lib/carousel";
import { Turntable } from "./Turntable";

type CarouselRailProps = {
  weapons: Weapon[];
  activeIndex: number;
  instant?: boolean;
  onTransitionEnd?: () => void;
};

const LERP_SPEED = 0.09;
const SNAP_THRESHOLD = 0.02;

export function CarouselRail({
  weapons,
  activeIndex,
  instant = false,
  onTransitionEnd,
}: CarouselRailProps) {
  const groupRef = useRef<THREE.Group>(null);
  const targetX = railOffsetX(activeIndex, CAROUSEL_SPACING);
  const transitioningRef = useRef(false);
  const onEndRef = useRef(onTransitionEnd);
  onEndRef.current = onTransitionEnd;

  useEffect(() => {
    transitioningRef.current = true;
    if (instant && groupRef.current) {
      groupRef.current.position.x = targetX;
      transitioningRef.current = false;
      onEndRef.current?.();
    }
  }, [activeIndex, targetX, instant]);

  useFrame(() => {
    const group = groupRef.current;
    if (!group || instant) return;

    const current = group.position.x;
    const next = THREE.MathUtils.lerp(current, targetX, LERP_SPEED);
    group.position.x = next;

    if (
      transitioningRef.current &&
      Math.abs(next - targetX) < SNAP_THRESHOLD
    ) {
      group.position.x = targetX;
      transitioningRef.current = false;
      onEndRef.current?.();
    }
  });

  useEffect(() => {
    weapons.forEach((w) => useGLTF.preload(w.modelPath));
  }, [weapons]);

  return (
    <group ref={groupRef}>
      {weapons.map((weapon, index) => (
        <group
          key={weapon.id}
          position={[index * CAROUSEL_SPACING, 0, 0]}
        >
          <Turntable weapon={weapon} isActive={index === activeIndex} />
        </group>
      ))}
    </group>
  );
}
