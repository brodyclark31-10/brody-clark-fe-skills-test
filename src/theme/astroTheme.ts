import { createTheme, Theme } from "@mui/material";
import { ThemeMode } from "@/store/theme";

/**
 * Astro color palette - inspired by Apollo Studio's dark theme.
 * Provides consistent colors for backgrounds, accents, text, and borders.
 */
const astroColors = {
  // Backgrounds
  darkBg: "#171a1f",
  darkPaper: "#1e2227",
  darkElevated: "#252a31",

  // Accent - teal/cyan
  primary: "#00b4d8",
  primaryLight: "#48cae4",
  primaryDark: "#0096c7",

  // Text
  textPrimary: "#e8eaed",
  textSecondary: "#9aa0a6",

  // Borders
  border: "#3c4043",
};

/**
 * Creates an MUI theme based on the current mode (light/dark).
 * Uses astroColors for dark mode and lighter variants for light mode.
 * @param mode - Current theme mode
 * @returns MUI Theme object
 */
export const getAstroTheme = (mode: ThemeMode): Theme =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: astroColors.primary,
              light: astroColors.primaryLight,
              dark: astroColors.primaryDark,
            },
            background: {
              default: astroColors.darkBg,
              paper: astroColors.darkPaper,
            },
            text: {
              primary: astroColors.textPrimary,
              secondary: astroColors.textSecondary,
            },
            divider: astroColors.border,
          }
        : {
            primary: {
              main: astroColors.primaryDark,
              light: astroColors.primary,
              dark: "#0077b6",
            },
            background: {
              default: "#f5f7fa",
              paper: "#ffffff",
            },
          }),
    },
  });
