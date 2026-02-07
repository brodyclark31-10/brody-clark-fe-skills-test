import { GridColDef } from "@mui/x-data-grid";

/**
 * Column definitions for the Capsules data grid.
 * Displays individual capsule info including status, landings, and reuse count.
 */
export const capsuleColumns: GridColDef[] = [
  { field: "id", headerName: "Capsule ID", flex: 1 },
  { field: "status", headerName: "Status", width: 120 },
  { field: "type", headerName: "Type", width: 120 },
  { field: "landings", headerName: "Landings", width: 100 },
  { field: "reuse_count", headerName: "Reuse Count", width: 120 },
  {
    field: "original_launch",
    headerName: "Original Launch",
    flex: 1,
    valueGetter: (value: string | null) => value ?? "N/A",
  },
];
