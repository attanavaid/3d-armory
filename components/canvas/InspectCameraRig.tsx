"use client";

import { useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  getInspectCameraPosition,
  INSPECT_LAYOUT,
  INSPECT_LOOK_AT,
} from "@/lib/inspectLayout";

export function InspectCameraRig() {
  const camera = useThree((state) => state.camera);

  useLayoutEffect(() => {
    camera.position.set(...getInspectCameraPosition());
    camera.lookAt(new THREE.Vector3(...INSPECT_LOOK_AT));
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = INSPECT_LAYOUT.fov;
      camera.updateProjectionMatrix();
    }
  }, [camera]);

  return null;
}
