import { GridColDef } from "@mui/x-data-grid";

/**
 * Column definitions for the Ships data grid.
 * Displays support vessel info including name, type, port, and landing stats.
 */
export const shipColumns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "type", headerName: "Type", width: 150 },
  {
    field: "active",
    headerName: "Active",
    width: 80,
    valueGetter: (value: boolean) => (value ? "Yes" : "No"),
  },
  { field: "home_port", headerName: "Home Port", flex: 1 },
  {
    field: "year_built",
    headerName: "Year Built",
    width: 100,
    valueGetter: (value: number | null) => value ?? "N/A",
  },
  {
    field: "successful_landings",
    headerName: "Successful Landings",
    width: 150,
    valueGetter: (value: number | null) => value ?? "N/A",
  },
  {
    field: "attempted_landings",
    headerName: "Attempted Landings",
    width: 150,
    valueGetter: (value: number | null) => value ?? "N/A",
  },
];
