/** Inspect view: shelf-style angle (camera on model's right, ~45° presentation). */
export const INSPECT_LAYOUT = {
  /** Multiplier applied on top of weapon inspectTargetSize / targetSize. */
  scaleMultiplier: 1.35,
  cameraDistance: 4.2,
  /** Horizontal Y rotation applied to the model in inspect (45°). */
  modelYaw: Math.PI / 4,
  fov: 40,
  minDistance: 2.4,
  maxDistance: 7.5,
} as const;

/** Camera on +X axis, level with model center — pairs with modelYaw for a ~45° shelf view. */
export function getInspectCameraPosition(): [number, number, number] {
  const { cameraDistance } = INSPECT_LAYOUT;
  return [cameraDistance, 0, 0];
}

export const INSPECT_LOOK_AT: [number, number, number] = [0, 0, 0];

export function getInspectModelYaw(invertFacing = false): number {
  return (
    INSPECT_LAYOUT.modelYaw + (invertFacing ? Math.PI : 0)
  );
}
