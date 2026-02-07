"use client";

import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { DataType } from "@/types";
import { getDataTypeOptions } from "@/config";
import {
  formControlStyles,
  inputLabelStyles,
  selectStyles,
  selectMenuProps,
} from "./styles";

interface DataSelectorProps {
  value: DataType;
  onChange: (value: DataType) => void;
}

/**
 * DataSelector - Dropdown component for selecting the data view type.
 * Allows switching between different SpaceX data types (launches, rockets, ships, etc.)
 * @param value - Currently selected data type
 * @param onChange - Callback fired when selection changes
 */
export const DataSelector = ({ value, onChange }: DataSelectorProps) => {
  // Get available data type options from config
  const options = getDataTypeOptions();

  // Handle selection change and cast to DataType enum
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as DataType);
  };

  return (
    <FormControl size="small" sx={formControlStyles}>
      <InputLabel sx={inputLabelStyles}>Data View</InputLabel>
      <Select
        value={value}
        label="Data View"
        onChange={handleChange}
        sx={selectStyles}
        MenuProps={selectMenuProps}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
