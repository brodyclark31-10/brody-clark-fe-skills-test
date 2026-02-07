import { renderHook } from "@testing-library/react";
import { useDataByType } from "../useDataByType";
import { DataType } from "@/types";

// Mock Apollo's useQuery
jest.mock("@apollo/client", () => ({
  useQuery: jest.fn(() => ({
    data: { launches: [{ id: "1", mission_name: "Test" }] },
    loading: false,
    error: undefined,
  })),
  gql: jest.fn((strings: TemplateStringsArray) => strings[0]),
}));

describe("useDataByType", () => {
  it("returns data, loading, error, and config", () => {
    const { result } = renderHook(() => useDataByType(DataType.LAUNCHES));

    expect(result.current).toHaveProperty("data");
    expect(result.current).toHaveProperty("loading");
    expect(result.current).toHaveProperty("error");
    expect(result.current).toHaveProperty("config");
  });

  it("returns correct config for the data type", () => {
    const { result } = renderHook(() => useDataByType(DataType.ROCKETS));

    expect(result.current.config.type).toBe(DataType.ROCKETS);
    expect(result.current.config.dataKey).toBe("rockets");
  });

  it("extracts data using the correct dataKey", () => {
    const { result } = renderHook(() => useDataByType(DataType.LAUNCHES));

    expect(result.current.data).toEqual([{ id: "1", mission_name: "Test" }]);
  });
});
