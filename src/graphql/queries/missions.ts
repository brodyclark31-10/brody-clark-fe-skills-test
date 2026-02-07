import { gql } from "@apollo/client";

// Fetches SpaceX missions with descriptions and external links
export const GET_MISSIONS = gql`
  query GetMissions {
    missions {
      id
      name
      description
      website
      wikipedia
      twitter
      manufacturers
    }
  }
`;
