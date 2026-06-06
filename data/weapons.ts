export type WeaponStatKey =
  | "damage"
  | "recoil"
  | "accuracy"
  | "range"
  | "fireRate"
  | "mobility";

export type WeaponStats = Record<WeaponStatKey, number>;

export const STAT_LABELS: Record<WeaponStatKey, string> = {
  damage: "Damage",
  recoil: "Recoil",
  accuracy: "Accuracy",
  range: "Range",
  fireRate: "Fire Rate",
  mobility: "Mobility",
};

import type { ModelLayout } from "@/lib/normalizeModel";

export type Weapon = {
  id: string;
  name: string;
  subtitle?: string;
  modelPath: string;
  targetSize?: number;
  inspectTargetSize?: number;
  /** Corrects exports with non-standard origin/orientation (priority assets). */
  modelLayout?: ModelLayout;
  storeUrl?: string;
  stats: WeaponStats;
};

export const WEAPONS: Weapon[] = [
  {
    id: "heavy-rocket-launcher",
    name: "Heavy Rocket Launcher",
    subtitle: "Shoulder-fired launcher for heavy anti-armor strikes",
    modelPath: "/models/weapons/heavy-rocket-launcher.glb",
    targetSize: 4.1,
    inspectTargetSize: 4.2,
    modelLayout: {
      platformLift: 1.2,
    },
    stats: {
      damage: 95,
      recoil: 78,
      accuracy: 62,
      range: 88,
      fireRate: 25,
      mobility: 35,
    },
  },
  {
    id: "assault-rifle-1",
    name: "Assault Rifle",
    subtitle: "Balanced automatic rifle for mid-range engagements",
    modelPath: "/models/weapons/assault-rifle-1.glb",
    targetSize: 3.4,
    inspectTargetSize: 3.5,
    modelLayout: {
      platformLift: 0.6,
    },
    stats: {
      damage: 68,
      recoil: 45,
      accuracy: 78,
      range: 65,
      fireRate: 72,
      mobility: 70,
    },
  },
  {
    id: "assault-rifle-plasma",
    name: "Plasma Assault Rifle",
    subtitle: "Energy-charged rifle firing superheated plasma bolts",
    modelPath: "/models/weapons/assault-rifle-plasma.glb",
    targetSize: 3.4,
    inspectTargetSize: 3.5,
    modelLayout: {
      platformLift: 0.9,
    },
    stats: {
      damage: 74,
      recoil: 40,
      accuracy: 76,
      range: 68,
      fireRate: 70,
      mobility: 66,
    },
  },
  {
    id: "plasma-gun",
    name: "Plasma Gun",
    subtitle: "Compact energy sidearm with rapid plasma discharge",
    modelPath: "/models/weapons/plasma-gun.glb",
    targetSize: 3.2,
    inspectTargetSize: 3.3,
    modelLayout: {
      platformLift: 0.6,
    },
    stats: {
      damage: 62,
      recoil: 32,
      accuracy: 80,
      range: 55,
      fireRate: 78,
      mobility: 74,
    },
  },
  {
    id: "m319-grenade-launcher",
    name: "M319 Grenade Launcher",
    subtitle: "Single-shot explosive launcher for area denial",
    modelPath: "/models/weapons/m319-grenade-launcher.glb",
    targetSize: 3.4,
    inspectTargetSize: 3.5,
    modelLayout: {
      platformLift: 1.2,
    },
    stats: {
      damage: 90,
      recoil: 65,
      accuracy: 58,
      range: 75,
      fireRate: 20,
      mobility: 42,
    },
  },
  {
    id: "dark-matter-surge-rifle",
    name: "Dark Matter Surge Rifle",
    subtitle: "Exotic energy rifle channeling volatile dark-matter bursts",
    modelPath: "/models/weapons/dark-matter-surge-rifle.glb",
    targetSize: 3.4,
    inspectTargetSize: 3.5,
    modelLayout: {
      platformLift: 0.6,
    },
    stats: {
      damage: 82,
      recoil: 38,
      accuracy: 74,
      range: 70,
      fireRate: 68,
      mobility: 62,
    },
  },
  {
    id: "chain-gun",
    name: "Chain Gun",
    subtitle: "Rotary automatic minigun built for sustained suppressive fire",
    modelPath: "/models/weapons/chain-gun.glb",
    targetSize: 3.6,
    inspectTargetSize: 3.7,
    modelLayout: {
      platformLift: 1.1,
    },
    stats: {
      damage: 76,
      recoil: 72,
      accuracy: 55,
      range: 72,
      fireRate: 92,
      mobility: 38,
    },
  },
  {
    id: "obsidian-blade",
    name: "Obsidian Blade",
    subtitle: "Forged in volcanic glass — PBR showcase",
    modelPath: "/models/weapons/obsidian-blade.glb",
    targetSize: 2.2,
    modelLayout: {
      // Centered origin export — lift clear of the turntable cylinder.
      groundAlign: "bottom",
      platformLift: 0.28,
    },
    stats: {
      damage: 72,
      recoil: 8,
      accuracy: 85,
      range: 12,
      fireRate: 55,
      mobility: 78,
    },
  },
  {
    id: "ember-axe",
    name: "Ember Axe",
    subtitle: "Heavy two-handed war axe",
    modelPath: "/models/weapons/ember-axe.glb",
    targetSize: 1.8,
    stats: {
      damage: 88,
      recoil: 15,
      accuracy: 70,
      range: 18,
      fireRate: 40,
      mobility: 52,
    },
  },
  {
    id: "crystal-dagger",
    name: "Crystal Dagger",
    subtitle: "Lightweight off-hand blade",
    modelPath: "/models/weapons/crystal-dagger.glb",
    targetSize: 2.5,
    stats: {
      damage: 48,
      recoil: 5,
      accuracy: 92,
      range: 8,
      fireRate: 82,
      mobility: 95,
    },
  },
  {
    id: "prism-scepter",
    name: "Prism Scepter",
    subtitle: "Iridescent arcane focus — Khronos glTF sample",
    modelPath: "/models/weapons/prism-scepter.glb",
    targetSize: 2.1,
    stats: {
      damage: 58,
      recoil: 10,
      accuracy: 80,
      range: 35,
      fireRate: 48,
      mobility: 68,
    },
  },
  {
    id: "soul-lantern",
    name: "Soul Lantern",
    subtitle: "Wrought iron and captured flame — Khronos glTF sample",
    modelPath: "/models/weapons/soul-lantern.glb",
    targetSize: 1.85,
    stats: {
      damage: 42,
      recoil: 5,
      accuracy: 75,
      range: 22,
      fireRate: 60,
      mobility: 72,
    },
  },
];

export const CAROUSEL_SPACING = 4;
export const TRANSITION_MS = 750;

export const WEAPON_STAT_KEYS = Object.keys(STAT_LABELS) as WeaponStatKey[];
