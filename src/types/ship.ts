import { BaseEntity } from "./common";

// Ship data from SpaceX API
export interface Ship extends BaseEntity {
  name: string;
  type: string;
  active: boolean;
  home_port: string;
  year_built: number | null;
  successful_landings: number | null;
  attempted_landings: number | null;
}

// API response shape
export interface ShipsData {
  ships: Ship[];
}
