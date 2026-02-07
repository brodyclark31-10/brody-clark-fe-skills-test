import { GridColDef } from "@mui/x-data-grid";

/**
 * Column definitions for the Dragons data grid.
 * Displays Dragon spacecraft specs including capacity, mass, and orbit duration.
 */
export const dragonColumns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "type", headerName: "Type", width: 120 },
  {
    field: "active",
    headerName: "Active",
    width: 80,
    valueGetter: (value: boolean) => (value ? "Yes" : "No"),
  },
  { field: "crew_capacity", headerName: "Crew Capacity", width: 120 },
  {
    field: "orbit_duration_yr",
    headerName: "Orbit Duration (yr)",
    width: 140,
  },
  {
    field: "dry_mass_kg",
    headerName: "Dry Mass (kg)",
    width: 130,
    valueGetter: (value: number) => value?.toLocaleString() ?? "N/A",
  },
  { field: "first_flight", headerName: "First Flight", width: 120 },
];
