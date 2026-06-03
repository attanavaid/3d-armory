/** Shared layout constants for camera framing and turntable placement. */
export const SCENE_LAYOUT = {
  /** Vertical position of the carousel / turntable in world space (lower = more room above the weapon). */
  stageY: 0.08,
  cameraPosition: [0, 1.05, 5.5] as const,
  cameraTarget: [0, 1.0, 0] as const,
  fov: 38,
};

/** Height the weapon sits above the turntable platform surface. */
export const WEAPON_PLATFORM_OFFSET = 0.12;
