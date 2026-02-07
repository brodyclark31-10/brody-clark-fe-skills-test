import { gql } from "@apollo/client";

// Fetches SpaceX support ships with landing statistics
export const GET_SHIPS = gql`
  query GetShips {
    ships {
      id
      name
      type
      active
      home_port
      year_built
      successful_landings
      attempted_landings
    }
  }
`;
