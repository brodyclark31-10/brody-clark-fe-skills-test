import { atom } from "jotai";

/** Theme mode type - supports light and dark modes */
export type ThemeMode = "light" | "dark";

/**
 * Global theme state atom using Jotai.
 * Stores the current theme mode (light/dark) for the application.
 * Default: "dark"
 */
export const themeAtom = atom<ThemeMode>("dark");
