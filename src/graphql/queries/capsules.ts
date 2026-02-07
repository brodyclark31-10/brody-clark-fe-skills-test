import { gql } from "@apollo/client";

// Fetches individual capsule units with reuse statistics
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
