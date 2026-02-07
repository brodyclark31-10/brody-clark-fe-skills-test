import { ApolloClient, InMemoryCache } from "@apollo/client";

/**
 * Apollo Client instance configured for the SpaceX GraphQL API.
 * Uses in-memory caching for query results.
 */
export const client = new ApolloClient({
  // SpaceX public GraphQL API endpoint
  uri: "https://spacex-production.up.railway.app/graphql",
  // In-memory cache for normalized query caching
  cache: new InMemoryCache(),
});
