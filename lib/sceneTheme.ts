export type ResolvedTheme = "dark" | "light";

export type SceneTheme = {
  background: string;
  fog: string;
  ground: string;
  platform: string;
  ring: string;
  ringEmissive: string;
  ambientIntensity: number;
  directionalIntensity: number;
  spotCyanIntensity: number;
  spotVioletIntensity: number;
  contactShadowOpacity: number;
  environmentPreset: "warehouse" | "studio" | "apartment";
};

export const SCENE_THEMES: Record<ResolvedTheme, SceneTheme> = {
  dark: {
    background: "#0a0b10",
    fog: "#0a0b10",
    ground: "#0d1117",
    platform: "#1a1f2e",
    ring: "#22d3ee",
    ringEmissive: "#0891b2",
    ambientIntensity: 0.25,
    directionalIntensity: 1.2,
    spotCyanIntensity: 2,
    spotVioletIntensity: 1.5,
    contactShadowOpacity: 0.55,
    environmentPreset: "warehouse",
  },
  light: {
    background: "#e8edf4",
    fog: "#e8edf4",
    ground: "#d1dae8",
    platform: "#c5cedd",
    ring: "#0891b2",
    ringEmissive: "#06b6d4",
    ambientIntensity: 0.55,
    directionalIntensity: 1.4,
    spotCyanIntensity: 1.2,
    spotVioletIntensity: 0.9,
    contactShadowOpacity: 0.35,
    environmentPreset: "studio",
  },
};
