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
  turntableYOffset?: number;
  inspectTargetSize?: number;
  storeUrl?: string;
  stats: WeaponStats;
};

export const WEAPONS: Weapon[] = [
  {
    id: "heavy-rocket-launcher",
    name: "Heavy Rocket Launcher",
    modelPath: "/models/weapons/heavy-rocket-launcher.glb",
    targetSize: 2.4,
    inspectTargetSize: 2.6,
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
    turntableYOffset: 0.1,
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
    turntableYOffset: 0.05,
    stats: {
      damage: 48,
      recoil: 5,
      accuracy: 92,
      range: 8,
      fireRate: 82,
      mobility: 95,
    },
  },
];

export const CAROUSEL_SPACING = 4;
export const TRANSITION_MS = 750;

export const WEAPON_STAT_KEYS = Object.keys(STAT_LABELS) as WeaponStatKey[];
