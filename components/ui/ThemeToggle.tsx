"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === "dark";

  if (!mounted) {
    return (
      <div
        className="pointer-events-auto h-10 w-10 rounded-full border border-[var(--panel-border)] bg-[var(--panel-bg)]"
        aria-hidden
      />
    );
  }

  return (
    <motion.button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggleTheme}
      className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-[var(--panel-border)] bg-[var(--panel-bg)] text-[var(--accent-primary)] shadow-sm backdrop-blur-md transition hover:border-[var(--accent-primary)]/40 hover:bg-[var(--panel-bg-hover)] md:h-11 md:w-11"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </motion.button>
  );
}
