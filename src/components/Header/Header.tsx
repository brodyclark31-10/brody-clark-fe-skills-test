"use client";

import { AppBar, Toolbar, Box } from "@mui/material";
import { Title } from "./Title";
import { ThemeToggle } from "./ThemeToggle";
import { DataSelector } from "../DataTable/DataSelector";
import { DataType } from "@/types";
import { dataSelectorContainerStyles, spacerStyles } from "./styles";

interface HeaderProps {
  dataView: DataType;
  onDataViewChange: (value: DataType) => void;
}

/**
 * Header - Main application header component.
 * Contains the app title, data type selector dropdown, and theme toggle button.
 * @param dataView - Currently selected data type (launches, rockets, etc.)
 * @param onDataViewChange - Callback to update the selected data type
 */
export const Header = ({ dataView, onDataViewChange }: HeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Title />
        <Box sx={dataSelectorContainerStyles}>
          <DataSelector value={dataView} onChange={onDataViewChange} />
        </Box>
        <Box sx={spacerStyles} />
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};
