import { GridColDef } from "@mui/x-data-grid";

/**
 * Column definitions for the Missions data grid.
 * Displays mission details including name, description, and manufacturers.
 */
export const missionColumns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  {
    field: "description",
    headerName: "Description",
    flex: 2,
    valueGetter: (value: string) =>
      value ? (value.length > 100 ? `${value.slice(0, 100)}...` : value) : "N/A",
  },
  {
    field: "manufacturers",
    headerName: "Manufacturers",
    flex: 1,
    valueGetter: (value: string[]) => value?.join(", ") ?? "N/A",
  },
  {
    field: "website",
    headerName: "Website",
    width: 100,
    valueGetter: (value: string) => (value ? "Link" : "N/A"),
  },
];
