import { gql } from "@apollo/client";

// Fetches recent SpaceX launches with mission details, rocket, and launch site info
export const GET_LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 100) {
      id
      mission_name
      launch_date_local
      launch_success
      rocket {
        rocket_name
      }
      launch_site {
        site_name_long
      }
    }
  }
`;
