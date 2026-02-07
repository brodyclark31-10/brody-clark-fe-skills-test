"use client";

import { Box, CircularProgress } from "@mui/material";
import { loadingContainerStyles } from "./styles";

/**
 * Loading - Loading spinner component.
 * Displays a centered circular progress indicator during data fetching.
 */
export const Loading = () => {
  return (
    <Box sx={loadingContainerStyles}>
      <CircularProgress />
    </Box>
  );
};
