import { DataType, DataTypeConfig } from "@/types";
import {
  GET_LAUNCHES,
  GET_ROCKETS,
  GET_SHIPS,
  GET_MISSIONS,
  GET_DRAGONS,
  GET_CAPSULES,
} from "@/graphql/queries";
import {
  launchColumns,
  rocketColumns,
  shipColumns,
  missionColumns,
  dragonColumns,
  capsuleColumns,
} from "./columns";

/**
 * Central registry mapping each DataType to its configuration.
 * Each config includes the GraphQL query, display columns, and data key.
 */
export const dataTypeConfigs: Record<DataType, DataTypeConfig> = {
  [DataType.LAUNCHES]: {
    type: DataType.LAUNCHES,
    label: "Launches",
    query: GET_LAUNCHES,
    columns: launchColumns,
    dataKey: "launches",
  },
  [DataType.ROCKETS]: {
    type: DataType.ROCKETS,
    label: "Rockets",
    query: GET_ROCKETS,
    columns: rocketColumns,
    dataKey: "rockets",
  },
  [DataType.SHIPS]: {
    type: DataType.SHIPS,
    label: "Ships",
    query: GET_SHIPS,
    columns: shipColumns,
    dataKey: "ships",
  },
  [DataType.MISSIONS]: {
    type: DataType.MISSIONS,
    label: "Missions",
    query: GET_MISSIONS,
    columns: missionColumns,
    dataKey: "missions",
  },
  [DataType.DRAGONS]: {
    type: DataType.DRAGONS,
    label: "Dragons",
    query: GET_DRAGONS,
    columns: dragonColumns,
    dataKey: "dragons",
  },
  [DataType.CAPSULES]: {
    type: DataType.CAPSULES,
    label: "Capsules",
    query: GET_CAPSULES,
    columns: capsuleColumns,
    dataKey: "capsules",
  },
};

/**
 * Retrieves the configuration for a specific data type.
 * @param type - The DataType enum value
 * @returns DataTypeConfig with query, columns, and dataKey
 */
export const getDataTypeConfig = (type: DataType): DataTypeConfig => {
  return dataTypeConfigs[type];
};

/**
 * Generates dropdown options from all available data types.
 * @returns Array of {value, label} objects for select components
 */
export const getDataTypeOptions = () => {
  return Object.values(dataTypeConfigs).map(({ type, label }) => ({
    value: type,
    label,
  }));
};
