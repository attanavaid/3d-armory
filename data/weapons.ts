export type Weapon = {
  id: string;
  name: string;
  subtitle?: string;
  modelPath: string;
  targetSize?: number;
  turntableYOffset?: number;
  storeUrl?: string;
};

export const WEAPONS: Weapon[] = [
  {
    id: "heavy-rocket-launcher",
    name: "Heavy Rocket Launcher",
    modelPath: "/models/weapons/heavy-rocket-launcher.glb",
    targetSize: 2.4,
  },
  {
    id: "obsidian-blade",
    name: "Obsidian Blade",
    subtitle: "Forged in volcanic glass — PBR showcase",
    modelPath: "/models/weapons/obsidian-blade.glb",
    targetSize: 2.2,
  },
  {
    id: "ember-axe",
    name: "Ember Axe",
    subtitle: "Heavy two-handed war axe",
    modelPath: "/models/weapons/ember-axe.glb",
    targetSize: 1.8,
    turntableYOffset: 0.1,
  },
  {
    id: "crystal-dagger",
    name: "Crystal Dagger",
    subtitle: "Lightweight off-hand blade",
    modelPath: "/models/weapons/crystal-dagger.glb",
    targetSize: 2.5,
    turntableYOffset: 0.05,
  },
];

export const CAROUSEL_SPACING = 4;
export const TRANSITION_MS = 750;
