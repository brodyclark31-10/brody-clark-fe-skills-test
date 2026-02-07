"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { BaseEntity } from "@/types";
import { dataGridStyles } from "./styles";

interface DataTableProps<T extends BaseEntity> {
  data: T[];
  columns: GridColDef[];
}

/**
 * DataTable - Generic data grid component for displaying SpaceX data.
 * Uses MUI DataGrid with auto-pagination and custom styling.
 * @template T - Data type extending BaseEntity (must have id field)
 * @param data - Array of data items to display
 * @param columns - Column definitions for the data grid
 */
export const DataTable = <T extends BaseEntity>({
  data,
  columns,
}: DataTableProps<T>) => {
  return (
    <DataGrid
      rows={data}
      columns={columns}
      autoPageSize
      disableRowSelectionOnClick
      sx={dataGridStyles}
    />
  );
};
