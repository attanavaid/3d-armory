"use client";

import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import {
  enhancePBRMaterials,
  normalizeModel,
  type ModelLayout,
} from "@/lib/normalizeModel";
import { WEAPON_PLATFORM_OFFSET } from "@/lib/sceneLayout";

type WeaponModelProps = {
  modelPath: string;
  targetSize?: number;
  modelLayout?: ModelLayout;
  isActive?: boolean;
};

export function WeaponModel({
  modelPath,
  targetSize = 2,
  modelLayout,
  isActive = true,
}: WeaponModelProps) {
  const { scene } = useGLTF(modelPath);

  const model = useMemo(() => {
    const clone = scene.clone(true);
    normalizeModel(clone, targetSize, modelLayout);
    enhancePBRMaterials(clone);
    clone.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];
      for (const mat of materials) {
        if (mat instanceof THREE.MeshStandardMaterial) {
          mat.opacity = isActive ? 1 : 0.35;
          mat.transparent = !isActive;
        }
      }
    });
    return clone;
  }, [scene, targetSize, modelLayout, isActive]);

  const platformY =
    WEAPON_PLATFORM_OFFSET + (modelLayout?.platformLift ?? 0);

  return (
    <primitive object={model} position={[0, platformY, 0]} />
  );
}
