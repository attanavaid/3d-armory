import * as THREE from "three";

const DEFAULT_TARGET_SIZE = 2;

export type ModelAlign = "bottom" | "center";

export function normalizeModel(
  object: THREE.Object3D,
  targetSize: number = DEFAULT_TARGET_SIZE,
  align: ModelAlign = "bottom"
): void {
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z, 0.0001);
  const scale = targetSize / maxDim;
  object.scale.multiplyScalar(scale);

  const alignedBox = new THREE.Box3().setFromObject(object);
  const center = alignedBox.getCenter(new THREE.Vector3());
  object.position.x -= center.x;
  object.position.z -= center.z;
  object.position.y -= align === "center" ? center.y : alignedBox.min.y;
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
