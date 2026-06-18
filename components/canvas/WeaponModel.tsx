"use client";

import { useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import {
  cloneMeshMaterials,
  enhancePBRMaterials,
  normalizeModel,
  setModelActiveState,
  type ModelAlign,
} from "@/lib/normalizeModel";
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
    cloneMeshMaterials(clone);
    normalizeModel(clone, targetSize, align);
    enhancePBRMaterials(clone);
    return clone;
  }, [scene, targetSize, align]);

  useEffect(() => {
    setModelActiveState(model, isActive);
  }, [model, isActive]);

  const y =
    align === "center" ? 0 : WEAPON_PLATFORM_OFFSET + platformLift;

  return <primitive object={model} position={[0, y, 0]} />;
}
