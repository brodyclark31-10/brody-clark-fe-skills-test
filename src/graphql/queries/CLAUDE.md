# Adding a New GraphQL Query

When adding a new GraphQL query for the data table, follow this checklist.

## Checklist

- [ ] Create `src/graphql/queries/{entityName}s.ts` with the query
- [ ] Export from `src/graphql/queries/index.ts`

## Step 1: Create the Query File

Create a new file named `{entityName}s.ts` (lowercase, plural) with this structure:

```typescript
import { gql } from "@apollo/client";

// Brief description of what this query fetches
export const GET_{ENTITY_NAME_UPPER}S = gql`
  query Get{EntityName}s {
    {entityName}s {
      id
      // Add fields you want to display in the table
      // These must match your type definition in src/types/
    }
  }
`;
```

### Query Guidelines

- Always include `id` field (required for DataGrid row keys)
- Only request fields you'll display in columns
- For nested data, request only the subfields needed:
  ```graphql
  nested_object {
    specific_field
  }
  ```
- Use `limit` parameter if the endpoint supports it and returns many records:
  ```graphql
  {entityName}s(limit: 100) {
    ...
  }
  ```

## Step 2: Export from Index

Add to `src/graphql/queries/index.ts`:

```typescript
export { GET_{ENTITY_NAME_UPPER}S } from "./{entityName}s";
```

## Example: Capsules Query

```typescript
import { gql } from "@apollo/client";

export const GET_CAPSULES = gql`
  query GetCapsules {
    capsules {
      id
      status
      type
      landings
      reuse_count
      original_launch
    }
  }
`;
```

## Next Steps

After completing the query, you need to:

1. Ensure types exist in `src/types/` (see CLAUDE.md there)
2. Create column definitions in `src/config/columns/` (see CLAUDE.md there)
3. Wire everything in `src/config/dataTypes.ts`
