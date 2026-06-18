"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CAROUSEL_SPACING, type Weapon } from "@/data/weapons";
import { getNeighborIndices, railOffsetX } from "@/lib/carousel";
import { Turntable } from "./Turntable";

type CarouselRailProps = {
  weapons: Weapon[];
  activeIndex: number;
  instant?: boolean;
  onTransitionEnd?: () => void;
};

type CarouselSlot = {
  index: number;
  weapon: Weapon;
};

const LERP_SPEED = 0.09;
const SNAP_THRESHOLD = 0.02;

function getCarouselSlots(
  weapons: Weapon[],
  activeIndex: number
): CarouselSlot[] {
  const total = weapons.length;
  if (total === 0) return [];
  if (total === 1) return [{ index: 0, weapon: weapons[0] }];

  const { prev, current, next } = getNeighborIndices(activeIndex, total);
  const indices = [...new Set([prev, current, next])];

  return indices.map((index) => ({
    index,
    weapon: weapons[index],
  }));
}

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

  const slots = useMemo(
    () => getCarouselSlots(weapons, activeIndex),
    [weapons, activeIndex]
  );

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

  return (
    <group ref={groupRef}>
      {slots.map(({ index, weapon }) => (
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
