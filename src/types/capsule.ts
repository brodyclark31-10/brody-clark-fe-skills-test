import { BaseEntity } from "./common";

// Capsule data from SpaceX API
export interface Capsule extends BaseEntity {
  status: string;
  type: string;
  landings: number;
  reuse_count: number;
  original_launch: string | null;
}

// API response shape
export interface CapsulesData {
  capsules: Capsule[];
}
