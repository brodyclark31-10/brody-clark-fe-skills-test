import { GridColDef } from "@mui/x-data-grid";

/**
 * Column definitions for the Launches data grid.
 * Displays mission name, date, success status, rocket name, and launch site.
 */
export const launchColumns: GridColDef[] = [
  { field: "mission_name", headerName: "Mission Name", flex: 1 },
  { field: "launch_date_local", headerName: "Launch Date", flex: 1 },
  {
    field: "launch_success",
    headerName: "Success",
    width: 100,
    valueGetter: (value: boolean | null) =>
      value === null ? "Unknown" : value ? "Yes" : "No",
  },
  {
    field: "rocket",
    headerName: "Rocket",
    flex: 1,
    valueGetter: (value: { rocket_name: string } | null) =>
      value?.rocket_name ?? "N/A",
  },
  {
    field: "launch_site",
    headerName: "Launch Site",
    flex: 1.5,
    valueGetter: (value: { site_name_long: string } | null) =>
      value?.site_name_long ?? "N/A",
  },
];
