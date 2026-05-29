"use client";

import { ThemeToggle } from "./ThemeToggle";

type AppChromeProps = {
  showTitle?: boolean;
};

export function AppChrome({ showTitle = true }: AppChromeProps) {
  return (
    <>
      {showTitle && (
        <header className="pointer-events-none absolute top-0 left-0 z-30 p-6 md:p-8">
          <h1 className="font-display text-lg text-[var(--text-heading)] md:text-xl">
            Armory
          </h1>
        </header>
      )}
      <div className="pointer-events-none absolute top-0 right-0 z-50 p-6 md:p-8">
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
