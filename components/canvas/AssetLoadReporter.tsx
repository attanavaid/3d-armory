"use client";

import { useEffect, useRef } from "react";

type AssetLoadReporterProps = {
  onReady?: () => void;
};

/**
 * Fires once the parent Suspense boundary has resolved (carousel models mounted).
 */
export function AssetLoadReporter({ onReady }: AssetLoadReporterProps) {
  const onReadyRef = useRef(onReady);

  onReadyRef.current = onReady;

  useEffect(() => {
    onReadyRef.current?.();
  }, []);

  return null;
}
