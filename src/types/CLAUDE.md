# Adding a New Data Type

When adding a new GraphQL data type to display in the table, follow this checklist.

## Checklist

- [ ] Create `src/types/{entityName}.ts` with the interface definition
- [ ] Export from `src/types/index.ts`
- [ ] Add enum value in `src/types/dataTypes.ts`

## Step 1: Create the Type File

Create a new file named `{entityName}.ts` (lowercase, singular) with this structure:

```typescript
import { BaseEntity } from "./common";

// {EntityName} data from SpaceX API
export interface {EntityName} extends BaseEntity {
  // Add fields matching your GraphQL query response
  // Example: field_name: string;
  // Example: nested_object: { sub_field: string } | null;
}

// API response shape
export interface {EntityName}sData {
  {entityName}s: {EntityName}[];
}
```

### Field Type Guidelines

| GraphQL Type         | TypeScript Type           |
| -------------------- | ------------------------- |
| `String`             | `string`                  |
| `String` (nullable)  | `string \| null`          |
| `Int` / `Float`      | `number`                  |
| `Boolean`            | `boolean`                 |
| `Boolean` (nullable) | `boolean \| null`         |
| Nested object        | `{ field: type } \| null` |
| Array                | `type[]`                  |

## Step 2: Export from Index

Add to `src/types/index.ts`:

```typescript
export * from "./{entityName}";
```

## Step 3: Add to DataType Enum

Add a new enum value in `src/types/dataTypes.ts`:

```typescript
export enum DataType {
  // ... existing types
  {ENTITY_NAME_UPPER} = "{entityName}s",  // plural, lowercase
}
```

## Next Steps

After completing the type, you need to:

1. Create the GraphQL query in `src/graphql/queries/` (see CLAUDE.md there)
2. Create column definitions in `src/config/columns/` (see CLAUDE.md there)
3. Wire everything in `src/config/dataTypes.ts`
