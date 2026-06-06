import * as THREE from "three";

const DEFAULT_TARGET_SIZE = 2;

/** Per-asset overrides for exports with unusual origins or orientations. */
export type ModelLayout = {
  /** Euler rotation (radians) applied before measuring bounds. */
  rotation?: [number, number, number];
  /** Ground alignment after scaling. */
  groundAlign?: "bottom" | "center";
  /** Extra lift above the shared platform offset. */
  platformLift?: number;
};

export function normalizeModel(
  object: THREE.Object3D,
  targetSize: number = DEFAULT_TARGET_SIZE,
  layout: ModelLayout = {}
): void {
  const { rotation, groundAlign = "bottom" } = layout;

  if (rotation) {
    object.rotation.set(rotation[0], rotation[1], rotation[2]);
    object.updateMatrixWorld(true);
  }

  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z, 0.0001);
  const scale = targetSize / maxDim;
  object.scale.multiplyScalar(scale);

  const alignedBox = new THREE.Box3().setFromObject(object);
  const center = alignedBox.getCenter(new THREE.Vector3());
  object.position.x -= center.x;
  object.position.z -= center.z;

  if (groundAlign === "center") {
    object.position.y -= center.y;
  } else {
    object.position.y -= alignedBox.min.y;
  }
}

export function enhancePBRMaterials(object: THREE.Object3D): void {
  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    const materials = Array.isArray(child.material)
      ? child.material
      : [child.material];

    for (const material of materials) {
      if (material instanceof THREE.MeshStandardMaterial) {
        material.envMapIntensity = 1.2;
        material.needsUpdate = true;
      }
    }
  });
}
