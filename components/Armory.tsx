"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useTheme } from "@/components/ThemeProvider";
import { WEAPONS } from "@/data/weapons";
import { wrapIndex, getNeighborIndices } from "@/lib/carousel";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DotIndicator } from "./ui/DotIndicator";
import { LoadingOverlay } from "./ui/LoadingOverlay";
import { NavArrows } from "./ui/NavArrows";
import { ThemeToggle } from "./ui/ThemeToggle";
import { WeaponPanel } from "./ui/WeaponPanel";

const ArmoryCanvas = dynamic(
  () =>
    import("./canvas/ArmoryCanvas").then((mod) => mod.ArmoryCanvas),
  { ssr: false, loading: () => <LoadingOverlay visible /> }
);

export function Armory() {
  const { resolvedTheme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const pointerStart = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();

  const weapon = WEAPONS[activeIndex];
  const total = WEAPONS.length;

  const preloadNeighbors = useCallback(
    (index: number) => {
      const { prev, next } = getNeighborIndices(index, total);
      useGLTF.preload(WEAPONS[prev].modelPath);
      useGLTF.preload(WEAPONS[next].modelPath);
      useGLTF.preload(WEAPONS[index].modelPath);
    },
    [total]
  );

  useEffect(() => {
    WEAPONS.forEach((w) => useGLTF.preload(w.modelPath));
    const timer = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    preloadNeighbors(activeIndex);
  }, [activeIndex, preloadNeighbors]);

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const next = wrapIndex(index, total);
      if (isTransitioning || next === activeIndex) return;
      setIsTransitioning(true);
      setActiveIndex(next);
      if (reducedMotion) {
        setIsTransitioning(false);
      }
    },
    [activeIndex, isTransitioning, total, reducedMotion]
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStart.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (pointerStart.current === null || isTransitioning) return;
    const delta = e.clientX - pointerStart.current;
    const threshold = 50;
    if (delta > threshold) goPrev();
    else if (delta < -threshold) goNext();
    pointerStart.current = null;
  };

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-[var(--background)] transition-colors duration-300">
      <motion.div
        key={resolvedTheme}
        className="absolute inset-0"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <ArmoryCanvas
          weapons={WEAPONS}
          activeIndex={activeIndex}
          instantCarousel={reducedMotion}
          onTransitionEnd={handleTransitionEnd}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, var(--overlay-vignette) 70%)`,
        }}
      />

      <header className="pointer-events-none absolute top-0 right-0 left-0 z-20 flex items-start justify-between p-6 md:p-8">
        <motion.div layout>
          <p className="font-mono text-[10px] tracking-[0.35em] text-[var(--accent-primary)] uppercase opacity-70 md:text-xs">
            Fantasy Armory
          </p>
          <h2 className="font-display mt-1 text-lg text-[var(--text-heading)] md:text-xl">
            3D Weapon Gallery
          </h2>
        </motion.div>
        <ThemeToggle />
      </header>

      <DotIndicator
        total={total}
        activeIndex={activeIndex}
        onSelect={goTo}
        disabled={isTransitioning}
      />

      <NavArrows
        onPrev={goPrev}
        onNext={goNext}
        disabled={isTransitioning}
      />

      {weapon && (
        <WeaponPanel weapon={weapon} index={activeIndex} total={total} />
      )}

      <LoadingOverlay visible={!isReady} />
    </main>
  );
}
