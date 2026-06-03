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

export type Weapon = {
  id: string;
  name: string;
  subtitle?: string;
  modelPath: string;
  targetSize?: number;
  inspectTargetSize?: number;
  storeUrl?: string;
  stats: WeaponStats;
};

export const WEAPONS: Weapon[] = [
  {
    id: "heavy-rocket-launcher",
    name: "Heavy Rocket Launcher",
    modelPath: "/models/weapons/heavy-rocket-launcher.glb",
    targetSize: 3.1,
    inspectTargetSize: 3.2,
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
    id: "obsidian-blade",
    name: "Obsidian Blade",
    subtitle: "Forged in volcanic glass — PBR showcase",
    modelPath: "/models/weapons/obsidian-blade.glb",
    targetSize: 2.2,
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
