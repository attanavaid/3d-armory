/** Inspect view: shelf-style side angle (camera on model's right). */
export const INSPECT_LAYOUT = {
  /** Multiplier applied on top of weapon inspectTargetSize / targetSize. */
  scaleMultiplier: 1.35,
  /** Camera sits to the right (+X) of the model, slightly elevated. */
  cameraPosition: [4.2, 1.0, 0.35] as const,
  lookAt: [0, 0.95, 0] as const,
  fov: 40,
  modelPivotY: 0.28,
  minDistance: 2.4,
  maxDistance: 7.5,
};
