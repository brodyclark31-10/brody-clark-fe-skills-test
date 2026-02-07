"use client";

import { IconButton } from "@mui/material";
import { useAtom } from "jotai";
import { themeAtom } from "@/store/theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

/**
 * ThemeToggle - Dark/light mode toggle button component.
 * Displays a sun icon in dark mode and moon icon in light mode.
 * Toggles global theme state on click.
 */
export const ThemeToggle = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};
