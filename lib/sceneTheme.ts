import { palette } from "@/lib/palette";

export type ResolvedTheme = "dark" | "light";

export type SceneTheme = {
  background: string;
  fog: string;
  ground: string;
  platform: string;
  ambientIntensity: number;
  directionalIntensity: number;
  spotPrimaryIntensity: number;
  spotFillIntensity: number;
  spotPrimaryColor: string;
  spotFillColor: string;
  contactShadowOpacity: number;
  environmentPreset: "warehouse" | "studio" | "apartment";
};

export const SCENE_THEMES: Record<ResolvedTheme, SceneTheme> = {
  dark: {
    background: palette.black.base,
    fog: palette.black.base,
    ground: palette.gray[900],
    platform: palette.gray[800],
    ambientIntensity: 0.25,
    directionalIntensity: 1.2,
    spotPrimaryIntensity: 2,
    spotFillIntensity: 1.4,
    spotPrimaryColor: palette.blue[400],
    spotFillColor: palette.blue[600],
    contactShadowOpacity: 0.55,
    environmentPreset: "warehouse",
  },
  light: {
    background: palette.gray[100],
    fog: palette.gray[100],
    ground: palette.gray[300],
    platform: palette.gray[200],
    ambientIntensity: 0.55,
    directionalIntensity: 1.4,
    spotPrimaryIntensity: 1.2,
    spotFillIntensity: 0.9,
    spotPrimaryColor: palette.blue[500],
    spotFillColor: palette.blue[700],
    contactShadowOpacity: 0.35,
    environmentPreset: "studio",
  },
};
