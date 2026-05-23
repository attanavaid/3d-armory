export function wrapIndex(index: number, length: number): number {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

export function getNeighborIndices(
  index: number,
  length: number
): { prev: number; current: number; next: number } {
  const current = wrapIndex(index, length);
  return {
    prev: wrapIndex(current - 1, length),
    current,
    next: wrapIndex(current + 1, length),
  };
}

export function railOffsetX(activeIndex: number, spacing: number): number {
  return -activeIndex * spacing;
}
