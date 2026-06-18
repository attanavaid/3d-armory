"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { WEAPONS, type Weapon } from "@/data/weapons";
import { wrapIndex } from "@/lib/carousel";
import {
  preloadCarouselWindow,
  queueRemainingWeaponPreloads,
} from "@/lib/preloadWeapons";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { InspectView } from "@/components/inspect/InspectView";
import { LoadingOverlay } from "./ui/LoadingOverlay";
import { AppChrome } from "./ui/AppChrome";
import { NavArrows } from "./ui/NavArrows";
import { WeaponPanel } from "./ui/WeaponPanel";

const ArmoryCanvas = dynamic(
  () =>
    import("./canvas/ArmoryCanvas").then((mod) => mod.ArmoryCanvas),
  { ssr: false, loading: () => <LoadingOverlay visible /> }
);

type ViewMode = "gallery" | "inspect";

export function Armory() {
  const [view, setView] = useState<ViewMode>("gallery");
  const [inspectWeapon, setInspectWeapon] = useState<Weapon | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const pointerStart = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();

  const weapon = WEAPONS[activeIndex];
  const total = WEAPONS.length;
  const isGallery = view === "gallery";

  const handleAssetsReady = useCallback(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    preloadCarouselWindow(WEAPONS, activeIndex);
    queueRemainingWeaponPreloads(WEAPONS, activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (inspectWeapon) useGLTF.preload(inspectWeapon.modelPath);
  }, [inspectWeapon]);

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

  const openInspect = useCallback(() => {
    if (!weapon) return;
    setInspectWeapon(weapon);
    setView("inspect");
  }, [weapon]);

  const closeInspect = useCallback(() => {
    setView("gallery");
    setInspectWeapon(null);
  }, []);

  useEffect(() => {
    if (!isGallery) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext, isGallery]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!isGallery) return;
    pointerStart.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isGallery || pointerStart.current === null || isTransitioning) return;
    const delta = e.clientX - pointerStart.current;
    const threshold = 50;
    if (delta > threshold) goPrev();
    else if (delta < -threshold) goNext();
    pointerStart.current = null;
  };

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-background transition-colors duration-300">
      <AppChrome showTitle={isGallery} />

      {isGallery && (
        <>
          <motion.div
            className="absolute inset-0"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          >
            <ArmoryCanvas
              weapons={WEAPONS}
              activeIndex={activeIndex}
              instantCarousel={reducedMotion}
              onTransitionEnd={handleTransitionEnd}
              onAssetsReady={handleAssetsReady}
            />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at center, transparent 0%, var(--overlay-vignette) 70%)`,
            }}
          />

          <NavArrows
            onPrev={goPrev}
            onNext={goNext}
            disabled={isTransitioning}
          />

          {weapon && (
            <WeaponPanel
              weapon={weapon}
              index={activeIndex}
              total={total}
              onInspect={openInspect}
            />
          )}
        </>
      )}

      <AnimatePresence>
        {view === "inspect" && inspectWeapon && (
          <InspectView weapon={inspectWeapon} onBack={closeInspect} />
        )}
      </AnimatePresence>

      {isGallery && <LoadingOverlay visible={!isReady} />}
    </main>
  );
}
