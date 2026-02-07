## Quindar Skills Test

In this project you will retrieve and display launch data from [SpaceX's public GraphQL API](https://studio.apollographql.com/public/SpaceX-pxxbxen/variant/current/explorer?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABADICGMSUAFggM5HAA6SRRANhVbQ8620TAIUZAJbs6LAUVFgpAuKLp1REJAH1Z8touWqNSMonkBfFiZAmgA).

**The objective of this challenge is to create a custom component to best display historical and upcoming launch data. Feel free to use any libraries or components that you are comfortable with.**

- You should use the Apollo GraphQL client to retrieve any launch data that you find interesting and display the historical and upcoming launch data in an intuitive format.

- We have included an `antd` Table to display some initial data. Please replace this with a custom component that you'll develop to display the data here.

- The styling is messed up with the current Table and you can update the styling as you choose for your custom component. We don't expect production-quality design here.

- A strech goal would be to create an interactive component that displays more details of a single launch when the user interacts with your component.

- This challenge is intended to take roughly two hours. The component is not expected to be production-ready, we just want to see your approach to this problem.

- If you are uncertain about specifics, try to push forward and state your assumptions in code comments.

Please update this README or create a new one and include:

- brief description of your solution
- description of next steps you would take if you needed to "productionize" and test this capability

After 2 hours, open a pull request to this repository. We'll evaluate your work and get back to you soon.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/pages/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# Solution Details

## Architecture Choices

### State Management

- **Jotai Atoms** - Lightweight atomic state management for theme toggling. Chose Jotai over heavier solutions like Redux for its simplicity and minimal boilerplate while still providing reactive state updates across components.

### UI Components

- **Material UI (MUI)** - Used MUI for consistent, accessible components including:
  - `DataGrid` for launch data display with built-in sorting, filtering, and pagination
  - `Select/Dropdown` for data source selection (historical vs upcoming launches)
  - Theme provider integration for dark/light mode support

### Data Fetching

- **Apollo Client + TanStack Query** - Hybrid approach leveraging Apollo for GraphQL communication with the SpaceX API and TanStack Query patterns for caching and request management

### Project Structure

```
src/
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks for data fetching and state
├── types/         # TypeScript type definitions
├── queries/       # GraphQL query definitions
└── config/        # Configuration including table columns
```

### Design Principles

- **Modularization** - Separated concerns into distinct layers (components, hooks, queries, types)
- **Scalability** - Component architecture supports adding new data sources and views
- **Extendability** - Type-safe patterns and modular hooks make it easy to extend functionality
- **Local State** - DataTable manages its own internal state for UI interactions while receiving data via props

# Future Work
