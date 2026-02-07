import { BaseEntity } from "./common";

// Mission data from SpaceX API
export interface Mission extends BaseEntity {
  name: string;
  description: string;
  website: string;
  wikipedia: string;
  twitter: string;
  manufacturers: string[];
}

// API response shape
export interface MissionsData {
  missions: Mission[];
}
