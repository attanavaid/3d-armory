export type Weapon = {
  id: string;
  name: string;
  subtitle?: string;
  modelPath: string;
  targetSize?: number;
  turntableYOffset?: number;
  tags?: string[];
  storeUrl?: string;
};

export const WEAPONS: Weapon[] = [
  {
    id: "obsidian-blade",
    name: "Obsidian Blade",
    subtitle: "Forged in volcanic glass — PBR showcase",
    modelPath: "/models/weapons/obsidian-blade.glb",
    targetSize: 2.2,
    tags: ["sword", "legendary"],
  },
  {
    id: "ember-axe",
    name: "Ember Axe",
    subtitle: "Heavy two-handed war axe",
    modelPath: "/models/weapons/ember-axe.glb",
    targetSize: 1.8,
    turntableYOffset: 0.1,
    tags: ["axe", "rare"],
  },
  {
    id: "crystal-dagger",
    name: "Crystal Dagger",
    subtitle: "Lightweight off-hand blade",
    modelPath: "/models/weapons/crystal-dagger.glb",
    targetSize: 2.5,
    turntableYOffset: 0.05,
    tags: ["dagger", "uncommon"],
  },
];

export const CAROUSEL_SPACING = 4;
export const TRANSITION_MS = 750;
