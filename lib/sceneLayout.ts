/** Shared layout constants for camera framing and turntable placement. */
export const SCENE_LAYOUT = {
  /** Vertical center of the active turntable in world space. */
  stageY: 0.55,
  cameraPosition: [0, 0.75, 5.4] as const,
  cameraTarget: [0, 0.65, 0] as const,
  fov: 38,
};

/** Height the weapon sits above the turntable platform surface. */
export const WEAPON_PLATFORM_OFFSET = 0.12;
