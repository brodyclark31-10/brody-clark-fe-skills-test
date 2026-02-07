import { gql } from "@apollo/client";

// Fetches Dragon spacecraft with capacity and specifications
export const GET_DRAGONS = gql`
  query GetDragons {
    dragons {
      id
      name
      type
      active
      crew_capacity
      orbit_duration_yr
      dry_mass_kg
      first_flight
      description
    }
  }
`;
