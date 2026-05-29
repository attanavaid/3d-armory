"use client";

import { useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { INSPECT_LAYOUT } from "@/lib/inspectLayout";

export function InspectCameraRig() {
  const camera = useThree((state) => state.camera);

  useLayoutEffect(() => {
    camera.position.set(...INSPECT_LAYOUT.cameraPosition);
    camera.lookAt(new THREE.Vector3(...INSPECT_LAYOUT.lookAt));
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = INSPECT_LAYOUT.fov;
      camera.updateProjectionMatrix();
    }
  }, [camera]);

  return null;
}
