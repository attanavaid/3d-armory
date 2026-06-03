/** Shared layout constants for camera framing and turntable placement. */
export const SCENE_LAYOUT = {
  /** Vertical position of the carousel / turntable in world space. */
  stageY: 0.32,
  cameraPosition: [0, 1.08, 5.5] as const,
  cameraTarget: [0, 1.02, 0] as const,
  fov: 38,
};

/** Height the weapon sits above the turntable platform surface. */
export const WEAPON_PLATFORM_OFFSET = 0.12;
