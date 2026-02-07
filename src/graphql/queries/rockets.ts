import { gql } from "@apollo/client";

// Fetches all SpaceX rockets with specifications and performance data
export const GET_ROCKETS = gql`
  query GetRockets {
    rockets {
      id
      name
      type
      active
      stages
      cost_per_launch
      success_rate_pct
      first_flight
      country
      company
      description
    }
  }
`;
