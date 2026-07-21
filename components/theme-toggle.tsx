"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemePreference = "system" | "light" | "dark";

const themes: ThemePreference[] = ["system", "light", "dark"];
const labels: Record<ThemePreference, string> = {
  system: "System",
  light: "Hell",
  dark: "Dunkel",
};

function applyTheme(preference: ThemePreference) {
  const dark =
    preference === "dark" ||
    (preference === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
}

export function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>("system");

  useEffect(() => {
    const stored = localStorage.getItem("grownavi_theme");
    const initial = themes.includes(stored as ThemePreference)
      ? (stored as ThemePreference)
      : "system";
    setPreference(initial);
    applyTheme(initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = () => {
      if ((localStorage.getItem("grownavi_theme") ?? "system") === "system")
        applyTheme("system");
    };
    media.addEventListener("change", syncSystemTheme);
    return () => media.removeEventListener("change", syncSystemTheme);
  }, []);

  const nextTheme = () => {
    const next = themes[(themes.indexOf(preference) + 1) % themes.length];
    setPreference(next);
    localStorage.setItem("grownavi_theme", next);
    applyTheme(next);
  };

  const Icon =
    preference === "dark" ? Moon : preference === "light" ? Sun : Monitor;
  const next = themes[(themes.indexOf(preference) + 1) % themes.length];

  return (
    <button
      type="button"
      onClick={nextTheme}
      className="theme-toggle grid size-10 shrink-0 place-items-center rounded-full border border-forest/15 bg-white/60 text-forest shadow-sm transition hover:border-moss/40 hover:bg-white"
      aria-label={`Farbschema: ${labels[preference]}. Zu ${labels[next]} wechseln`}
      title={`Farbschema: ${labels[preference]} · klicken für ${labels[next]}`}
    >
      <Icon className="size-[18px]" aria-hidden="true" />
    </button>
  );
}
