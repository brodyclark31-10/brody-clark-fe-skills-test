import { useQuery } from "@apollo/client";
import { DataType, BaseEntity } from "@/types";
import { getDataTypeConfig } from "@/config";

/**
 * useDataByType - Unified hook for fetching SpaceX data by type.
 * Dynamically selects the appropriate GraphQL query and column config
 * based on the provided data type.
 * @template T - Data type extending BaseEntity
 * @param dataType - The type of data to fetch (launches, rockets, etc.)
 * @returns Object containing data array, loading state, error, and config
 */
export const useDataByType = <T extends BaseEntity>(dataType: DataType) => {
  // Get query and column config for the selected data type
  const config = getDataTypeConfig(dataType);

  // Execute GraphQL query using Apollo's useQuery hook
  const { data, loading, error } = useQuery(config.query);

  return {
    // Extract data array from response using the config's dataKey
    data: data?.[config.dataKey] as T[] | undefined,
    loading,
    error,
    config,
  };
};
