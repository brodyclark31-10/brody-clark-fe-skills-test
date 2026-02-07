import { BaseEntity } from "./common";

// Launch data from SpaceX API
export interface Launch extends BaseEntity {
  mission_name: string;
  launch_date_local: string;
  launch_success: boolean | null;
  rocket: {
    rocket_name: string;
  } | null;
  launch_site: {
    site_name_long: string;
  } | null;
}

// API response shape
export interface LaunchesData {
  launches: Launch[];
}
