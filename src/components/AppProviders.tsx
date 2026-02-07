"use client";

import { ReactNode, useMemo } from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useAtom } from "jotai";
import { client } from "@/graphql/client";
import { themeAtom } from "@/store/theme";
import { getAstroTheme } from "@/theme/astroTheme";

interface AppProvidersProps {
  children: ReactNode;
}

/**
 * AppProviders - Application-wide provider wrapper component.
 * Provides:
 * - ApolloProvider for GraphQL data fetching
 * - ThemeProvider for MUI theming with dark/light mode support
 * - CssBaseline for consistent base styles
 * @param children - Child components to wrap with providers
 */
export const AppProviders = ({ children }: AppProvidersProps) => {
  // Get current theme mode from global Jotai state
  const [mode] = useAtom(themeAtom);

  // Memoize theme object to prevent unnecessary re-renders
  const theme = useMemo(() => getAstroTheme(mode), [mode]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
};
