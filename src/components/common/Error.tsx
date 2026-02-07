"use client";

import { Alert } from "@mui/material";

interface ErrorProps {
  message: string;
}

/**
 * Error - Error message display component.
 * Renders an MUI Alert with error severity to display error messages.
 * @param message - Error message text to display
 */
export const Error = ({ message }: ErrorProps) => {
  return <Alert severity="error">{message}</Alert>;
};
