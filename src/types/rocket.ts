import { BaseEntity } from "./common";

// Rocket data from SpaceX API
export interface Rocket extends BaseEntity {
  name: string;
  type: string;
  active: boolean;
  stages: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  description: string;
}

// API response shape
export interface RocketsData {
  rockets: Rocket[];
}
