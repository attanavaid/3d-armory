import { useGLTF } from "@react-three/drei";
import type { Weapon } from "@/data/weapons";
import { getNeighborIndices } from "@/lib/carousel";

function preloadPaths(paths: string[]): void {
  for (const path of paths) {
    useGLTF.preload(path);
  }
}

/** Preload the active weapon and its carousel neighbors. */
export function preloadCarouselWindow(
  weapons: Weapon[],
  activeIndex: number
): void {
  if (weapons.length === 0) return;

  const { prev, current, next } = getNeighborIndices(
    activeIndex,
    weapons.length
  );
  const paths = [...new Set([prev, current, next])].map(
    (index) => weapons[index].modelPath
  );
  preloadPaths(paths);
}

/** Queue remaining models after the carousel window, staggered to avoid network floods. */
export function queueRemainingWeaponPreloads(
  weapons: Weapon[],
  activeIndex: number
): void {
  if (weapons.length <= 3) return;

  const { prev, current, next } = getNeighborIndices(
    activeIndex,
    weapons.length
  );
  const skip = new Set([prev, current, next]);
  const remaining = weapons
    .filter((_, index) => !skip.has(index))
    .map((weapon) => weapon.modelPath);

  remaining.forEach((path, index) => {
    const run = () => useGLTF.preload(path);
    const delay = index * 400;

    if (typeof requestIdleCallback !== "undefined") {
      requestIdleCallback(() => setTimeout(run, delay));
    } else {
      setTimeout(run, 100 + delay);
    }
  });
}
