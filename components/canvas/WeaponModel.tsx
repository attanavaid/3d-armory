"use client";

import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { enhancePBRMaterials, normalizeModel, type ModelAlign } from "@/lib/normalizeModel";
import { WEAPON_PLATFORM_OFFSET } from "@/lib/sceneLayout";

type WeaponModelProps = {
  modelPath: string;
  targetSize?: number;
  platformLift?: number;
  /** Gallery uses bottom align + turntable lift; inspect uses center align. */
  align?: ModelAlign;
  isActive?: boolean;
};

export function WeaponModel({
  modelPath,
  targetSize = 2,
  platformLift = 0,
  align = "bottom",
  isActive = true,
}: WeaponModelProps) {
  const { scene } = useGLTF(modelPath);

  const model = useMemo(() => {
    const clone = scene.clone(true);
    normalizeModel(clone, targetSize, align);
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
  }, [scene, targetSize, align, isActive]);

  const y =
    align === "center" ? 0 : WEAPON_PLATFORM_OFFSET + platformLift;

  return <primitive object={model} position={[0, y, 0]} />;
}
