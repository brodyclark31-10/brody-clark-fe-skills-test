import { GridColDef } from "@mui/x-data-grid";

/**
 * Column definitions for the Rockets data grid.
 * Displays rocket specs including name, type, stages, cost, and success rate.
 */
export const rocketColumns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "type", headerName: "Type", width: 120 },
  {
    field: "active",
    headerName: "Active",
    width: 80,
    valueGetter: (value: boolean) => (value ? "Yes" : "No"),
  },
  { field: "stages", headerName: "Stages", width: 80 },
  {
    field: "cost_per_launch",
    headerName: "Cost per Launch",
    width: 140,
    valueGetter: (value: number) =>
      value ? `$${(value / 1000000).toFixed(1)}M` : "N/A",
  },
  {
    field: "success_rate_pct",
    headerName: "Success Rate",
    width: 120,
    valueGetter: (value: number) => (value ? `${value}%` : "N/A"),
  },
  { field: "first_flight", headerName: "First Flight", width: 120 },
  { field: "country", headerName: "Country", width: 120 },
];
