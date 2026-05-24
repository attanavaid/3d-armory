"use client";

import { useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { SCENE_LAYOUT } from "@/lib/sceneLayout";

export function CameraRig() {
  const camera = useThree((state) => state.camera);

  useLayoutEffect(() => {
    camera.position.set(...SCENE_LAYOUT.cameraPosition);
    camera.lookAt(new THREE.Vector3(...SCENE_LAYOUT.cameraTarget));
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = SCENE_LAYOUT.fov;
      camera.updateProjectionMatrix();
    }
  }, [camera]);

  return null;
}
