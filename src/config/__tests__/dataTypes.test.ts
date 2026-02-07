import { DataType } from "@/types";
import {
  getDataTypeConfig,
  getDataTypeOptions,
  dataTypeConfigs,
} from "../dataTypes";

describe("dataTypes config", () => {
  describe("getDataTypeConfig", () => {
    it("returns correct config for each data type", () => {
      Object.values(DataType).forEach((type) => {
        const config = getDataTypeConfig(type);
        expect(config).toBeDefined();
        expect(config.type).toBe(type);
        expect(config.query).toBeDefined();
        expect(config.columns).toBeDefined();
        expect(config.dataKey).toBeDefined();
      });
    });

    it("returns config with matching dataKey for launches", () => {
      const config = getDataTypeConfig(DataType.LAUNCHES);
      expect(config.dataKey).toBe("launches");
      expect(config.label).toBe("Launches");
    });

    it("returns config with matching dataKey for rockets", () => {
      const config = getDataTypeConfig(DataType.ROCKETS);
      expect(config.dataKey).toBe("rockets");
      expect(config.label).toBe("Rockets");
    });
  });

  describe("getDataTypeOptions", () => {
    it("returns options for all data types", () => {
      const options = getDataTypeOptions();
      expect(options).toHaveLength(Object.keys(DataType).length);
    });

    it("returns options with value and label properties", () => {
      const options = getDataTypeOptions();
      options.forEach((option) => {
        expect(option).toHaveProperty("value");
        expect(option).toHaveProperty("label");
        expect(typeof option.label).toBe("string");
      });
    });

    it("includes all expected data types", () => {
      const options = getDataTypeOptions();
      const values = options.map((o) => o.value);

      expect(values).toContain(DataType.LAUNCHES);
      expect(values).toContain(DataType.ROCKETS);
      expect(values).toContain(DataType.SHIPS);
      expect(values).toContain(DataType.MISSIONS);
      expect(values).toContain(DataType.DRAGONS);
      expect(values).toContain(DataType.CAPSULES);
    });
  });

  describe("dataTypeConfigs registry", () => {
    it("has an entry for every DataType enum value", () => {
      Object.values(DataType).forEach((type) => {
        expect(dataTypeConfigs[type]).toBeDefined();
      });
    });

    it("all configs have non-empty columns arrays", () => {
      Object.values(dataTypeConfigs).forEach((config) => {
        expect(Array.isArray(config.columns)).toBe(true);
        expect(config.columns.length).toBeGreaterThan(0);
      });
    });
  });
});
