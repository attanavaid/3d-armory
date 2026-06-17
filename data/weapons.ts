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
  /** Extra height above the turntable platform (added to WEAPON_PLATFORM_OFFSET). */
  platformLift?: number;
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
    platformLift: 1.2,
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
    platformLift: 0.6,
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
    platformLift: 0.9,
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
    platformLift: 0.9,
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
    id: "link-gun",
    name: "Link Gun",
    subtitle: "Unreal Tournament–inspired energy weapon — chain lightning and plasma orbs",
    modelPath: "/models/weapons/link-gun.glb",
    targetSize: 3.4,
    inspectTargetSize: 3.5,
    platformLift: 1.1,
    stats: {
      damage: 70,
      recoil: 18,
      accuracy: 82,
      range: 60,
      fireRate: 85,
      mobility: 68,
    },
  },
  {
    id: "railgun",
    name: "Railgun",
    subtitle: "Halo-inspired ARC 920 — magnetic accelerator for long-range armor penetration",
    modelPath: "/models/weapons/railgun.glb",
    targetSize: 3.7,
    inspectTargetSize: 3.8,
    platformLift: 0.9,
    stats: {
      damage: 98,
      recoil: 85,
      accuracy: 94,
      range: 95,
      fireRate: 15,
      mobility: 40,
    },
  },
  {
    id: "m319-grenade-launcher",
    name: "M319 Grenade Launcher",
    subtitle: "Single-shot explosive launcher for area denial",
    modelPath: "/models/weapons/m319-grenade-launcher.glb",
    targetSize: 3.4,
    inspectTargetSize: 3.5,
    platformLift: 1.2,
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
    platformLift: 0.6,
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
    platformLift: 1.1,
    stats: {
      damage: 76,
      recoil: 72,
      accuracy: 55,
      range: 72,
      fireRate: 92,
      mobility: 38,
    },
  },
];

export const CAROUSEL_SPACING = 4;
export const TRANSITION_MS = 750;
export const WEAPON_STAT_KEYS = Object.keys(STAT_LABELS) as WeaponStatKey[];
