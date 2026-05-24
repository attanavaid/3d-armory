/** Shared layout constants for camera framing and turntable placement. */
export const SCENE_LAYOUT = {
  /** Vertical center of the active turntable in world space. */
  stageY: 1.35,
  cameraPosition: [0, 0.95, 5.4] as const,
  cameraTarget: [0, 1.35, 0] as const,
  fov: 38,
};
