# Adding New Column Definitions

When adding column definitions for a new data type, follow this checklist.

## Checklist

- [ ] Create `src/config/columns/{entityName}Columns.ts`
- [ ] Export from `src/config/columns/index.ts`
- [ ] Register in `src/config/dataTypes.ts`

## Step 1: Create the Columns File

Create a new file named `{entityName}Columns.ts` with this structure:

```typescript
import { GridColDef } from "@mui/x-data-grid";

/**
 * Column definitions for the {EntityName}s data grid.
 * Brief description of what data is displayed.
 */
export const {entityName}Columns: GridColDef[] = [
  { field: "id", headerName: "{EntityName} ID", flex: 1 },
  // Add more columns...
];
```

### Column Definition Options

| Property      | Type       | Description                               |
| ------------- | ---------- | ----------------------------------------- |
| `field`       | `string`   | Must match the data field name exactly    |
| `headerName`  | `string`   | Display label for the column header       |
| `flex`        | `number`   | Relative width (use for flexible columns) |
| `width`       | `number`   | Fixed pixel width                         |
| `valueGetter` | `function` | Transform the value before display        |

### Sizing Guidelines

- Use `flex: 1` for standard columns that should share space
- Use `flex: 1.5` or higher for columns needing more space
- Use `width: 100-150` for short values (status, counts, booleans)

### ValueGetter Examples

For nullable strings:

```typescript
{
  field: "some_field",
  headerName: "Label",
  flex: 1,
  valueGetter: (value: string | null) => value ?? "N/A",
}
```

For booleans:

```typescript
{
  field: "is_active",
  headerName: "Active",
  width: 100,
  valueGetter: (value: boolean | null) =>
    value === null ? "Unknown" : value ? "Yes" : "No",
}
```

For nested objects:

```typescript
{
  field: "nested_object",
  headerName: "Nested Value",
  flex: 1,
  valueGetter: (value: { sub_field: string } | null) =>
    value?.sub_field ?? "N/A",
}
```

## Step 2: Export from Index

Add to `src/config/columns/index.ts`:

```typescript
export { {entityName}Columns } from "./{entityName}Columns";
```

## Step 3: Register in dataTypes.ts

Add to `src/config/dataTypes.ts`:

1. Import the query and columns:

```typescript
import { GET_{ENTITY_NAME_UPPER}S } from "@/graphql/queries";
import { {entityName}Columns } from "./columns";
```

2. Add to `dataTypeConfigs`:

```typescript
[DataType.{ENTITY_NAME_UPPER}S]: {
  type: DataType.{ENTITY_NAME_UPPER}S,
  label: "{EntityName}s",  // Display label in dropdown
  query: GET_{ENTITY_NAME_UPPER}S,
  columns: {entityName}Columns,
  dataKey: "{entityName}s",  // Key in GraphQL response
},
```

## Complete Example: Capsules

```typescript
import { GridColDef } from "@mui/x-data-grid";

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
```
