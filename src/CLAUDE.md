# Adding a New Table from GraphQL Endpoint

This guide walks through adding a new data type to the application. The table will appear as an option in the dropdown on the main page.

## Prerequisites

You will be given:

- The GraphQL endpoint/query structure
- Sample data showing the fields and their types

## Complete Checklist

### 1. Types (`src/types/`)

- [ ] Create `src/types/{entityName}.ts` - Interface matching the data
- [ ] Export from `src/types/index.ts`
- [ ] Add enum value in `src/types/dataTypes.ts`

See `src/types/CLAUDE.md` for details.

### 2. GraphQL Query (`src/graphql/queries/`)

- [ ] Create `src/graphql/queries/{entityName}s.ts` - The GQL query
- [ ] Export from `src/graphql/queries/index.ts`

See `src/graphql/queries/CLAUDE.md` for details.

### 3. Column Definitions (`src/config/columns/`)

- [ ] Create `src/config/columns/{entityName}Columns.ts` - Table columns
- [ ] Export from `src/config/columns/index.ts`

See `src/config/columns/CLAUDE.md` for details.

### 4. Wire Everything (`src/config/dataTypes.ts`)

- [ ] Import the query and columns
- [ ] Add entry to `dataTypeConfigs` record

## File Naming Convention

| Entity  | Type File    | Query File    | Columns File        | DataType Enum           |
| ------- | ------------ | ------------- | ------------------- | ----------------------- |
| Capsule | `capsule.ts` | `capsules.ts` | `capsuleColumns.ts` | `CAPSULES = "capsules"` |
| Dragon  | `dragon.ts`  | `dragons.ts`  | `dragonColumns.ts`  | `DRAGONS = "dragons"`   |

## Quick Reference: Files to Modify

For a new entity called `{EntityName}`:

| Action          | File                                        |
| --------------- | ------------------------------------------- |
| Create type     | `src/types/{entityName}.ts`                 |
| Export type     | `src/types/index.ts`                        |
| Add enum        | `src/types/dataTypes.ts`                    |
| Create query    | `src/graphql/queries/{entityName}s.ts`      |
| Export query    | `src/graphql/queries/index.ts`              |
| Create columns  | `src/config/columns/{entityName}Columns.ts` |
| Export columns  | `src/config/columns/index.ts`               |
| Register config | `src/config/dataTypes.ts`                   |

## Example Prompt

> "Add a new table for the `landpads` endpoint. The data looks like this:
>
> ````json
> {
>   "id": "LZ-1",
>   "full_name": "Landing Zone 1",
>   "status": "active",
>   "landing_type": "RTLS",
>   "attempted_landings": 20,
>   "successful_landings": 18
> }
> ```"
> ````

This would result in creating files for `Landpad` type, `GET_LANDPADS` query, and `landpadColumns` definition.
