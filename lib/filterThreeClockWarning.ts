/**
 * Suppresses the THREE.Clock deprecation warning emitted by @react-three/fiber v9
 * when mounting <Canvas>. R3F v10 replaces Clock with Timer; remove this once upgraded.
 * @see https://github.com/pmndrs/react-three-fiber/issues/3741
 */
export function filterThreeClockDeprecationWarning(): void {
  if (typeof window === "undefined") return;

  const key = "__armoryClockWarnFiltered";
  const w = window as Window & { [key]?: boolean };
  if (w[key]) return;
  w[key] = true;

  const originalWarn = console.warn.bind(console);
  console.warn = (...args: unknown[]) => {
    const message = args[0];
    if (
      typeof message === "string" &&
      message.includes("THREE.Clock") &&
      message.includes("deprecated")
    ) {
      return;
    }
    originalWarn(...args);
  };
}
