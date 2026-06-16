/**
 * Suppresses known benign Three.js console noise in local dev (Windows/ANGLE).
 *
 * - THREE.Clock deprecation from @react-three/fiber v9
 * - HLSL X4122 precision warnings from WebGLProgram info logs (PMREM / PBR shaders)
 *
 * @see https://github.com/mrdoob/three.js/issues/32692
 * @see https://github.com/pmndrs/react-three-fiber/issues/3741
 */
export function filterThreeConsoleWarnings(): void {
  if (typeof window === "undefined") return;

  const key = "__armoryThreeWarnFiltered";
  const w = window as Window & { [key]?: boolean };
  if (w[key]) return;
  w[key] = true;

  const isBenign = (message: unknown): boolean => {
    if (typeof message !== "string") return false;

    if (message.includes("THREE.Clock") && message.includes("deprecated")) {
      return true;
    }

    if (
      message.includes("THREE.WebGLProgram") &&
      (message.includes("X4122") ||
        message.includes("cannot be represented accurately"))
    ) {
      return true;
    }

    return false;
  };

  const originalWarn = console.warn.bind(console);
  console.warn = (...args: unknown[]) => {
    if (isBenign(args[0])) return;
    originalWarn(...args);
  };
}

/** @deprecated Use filterThreeConsoleWarnings */
export const filterThreeClockDeprecationWarning = filterThreeConsoleWarnings;
