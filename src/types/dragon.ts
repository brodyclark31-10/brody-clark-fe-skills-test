import { BaseEntity } from "./common";

// Dragon data from SpaceX API
export interface Dragon extends BaseEntity {
  name: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  orbit_duration_yr: number;
  dry_mass_kg: number;
  first_flight: string;
  description: string;
}

// API response shape
export interface DragonsData {
  dragons: Dragon[];
}
