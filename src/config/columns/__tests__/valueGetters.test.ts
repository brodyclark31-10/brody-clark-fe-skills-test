import { launchColumns } from "../launchColumns";
import { rocketColumns } from "../rocketColumns";
import { missionColumns } from "../missionColumns";
import { dragonColumns } from "../dragonColumns";
import { GridColDef } from "@mui/x-data-grid";

// Helper to extract valueGetter from column by field name
// Cast to single-arg function since we only test the value transformation
const getValueGetter = (columns: GridColDef[], field: string) => {
  const col = columns.find((c) => c.field === field);
  return col?.valueGetter as ((value: unknown) => string) | undefined;
};

describe("Launch column value getters", () => {
  describe("launch_success", () => {
    const valueGetter = getValueGetter(launchColumns, "launch_success");

    it("returns 'Unknown' for null", () => {
      expect(valueGetter!(null)).toBe("Unknown");
    });

    it("returns 'Yes' for true", () => {
      expect(valueGetter!(true)).toBe("Yes");
    });

    it("returns 'No' for false", () => {
      expect(valueGetter!(false)).toBe("No");
    });
  });

  describe("rocket", () => {
    const valueGetter = getValueGetter(launchColumns, "rocket");

    it("extracts rocket_name from nested object", () => {
      expect(valueGetter!({ rocket_name: "Falcon 9" })).toBe("Falcon 9");
    });

    it("returns 'N/A' for null", () => {
      expect(valueGetter!(null)).toBe("N/A");
    });

    it("returns 'N/A' when rocket_name is undefined", () => {
      expect(valueGetter!({})).toBe("N/A");
    });
  });

  describe("launch_site", () => {
    const valueGetter = getValueGetter(launchColumns, "launch_site");

    it("extracts site_name_long from nested object", () => {
      expect(valueGetter!({ site_name_long: "Kennedy Space Center" })).toBe(
        "Kennedy Space Center"
      );
    });

    it("returns 'N/A' for null", () => {
      expect(valueGetter!(null)).toBe("N/A");
    });
  });
});

describe("Rocket column value getters", () => {
  describe("active", () => {
    const valueGetter = getValueGetter(rocketColumns, "active");

    it("returns 'Yes' for active rockets", () => {
      expect(valueGetter!(true)).toBe("Yes");
    });

    it("returns 'No' for inactive rockets", () => {
      expect(valueGetter!(false)).toBe("No");
    });
  });

  describe("cost_per_launch", () => {
    const valueGetter = getValueGetter(rocketColumns, "cost_per_launch");

    it("formats cost in millions with 1 decimal", () => {
      expect(valueGetter!(50000000)).toBe("$50.0M");
    });

    it("handles fractional millions", () => {
      expect(valueGetter!(2700000)).toBe("$2.7M");
    });

    it("returns 'N/A' for falsy value", () => {
      expect(valueGetter!(0)).toBe("N/A");
      expect(valueGetter!(null)).toBe("N/A");
    });
  });

  describe("success_rate_pct", () => {
    const valueGetter = getValueGetter(rocketColumns, "success_rate_pct");

    it("formats as percentage", () => {
      expect(valueGetter!(97)).toBe("97%");
    });

    it("returns 'N/A' for 0", () => {
      expect(valueGetter!(0)).toBe("N/A");
    });
  });
});

describe("Mission column value getters", () => {
  describe("description", () => {
    const valueGetter = getValueGetter(missionColumns, "description");

    it("returns short descriptions unchanged", () => {
      const shortDesc = "A short mission description.";
      expect(valueGetter!(shortDesc)).toBe(shortDesc);
    });

    it("truncates long descriptions at 100 chars with ellipsis", () => {
      const longDesc = "A".repeat(150);
      const result = valueGetter!(longDesc);
      expect(result).toHaveLength(103); // 100 + '...'
      expect(result).toMatch(/\.\.\.$/);
    });

    it("returns 'N/A' for empty string", () => {
      expect(valueGetter!("")).toBe("N/A");
    });

    it("returns 'N/A' for null", () => {
      expect(valueGetter!(null)).toBe("N/A");
    });
  });

  describe("manufacturers", () => {
    const valueGetter = getValueGetter(missionColumns, "manufacturers");

    it("joins array with commas", () => {
      expect(valueGetter!(["SpaceX", "NASA"])).toBe("SpaceX, NASA");
    });

    it("handles single manufacturer", () => {
      expect(valueGetter!(["SpaceX"])).toBe("SpaceX");
    });

    it("returns 'N/A' for null", () => {
      expect(valueGetter!(null)).toBe("N/A");
    });

    it("returns 'N/A' for undefined", () => {
      expect(valueGetter!(undefined)).toBe("N/A");
    });
  });

  describe("website", () => {
    const valueGetter = getValueGetter(missionColumns, "website");

    it("returns 'Link' when URL exists", () => {
      expect(valueGetter!("https://spacex.com")).toBe("Link");
    });

    it("returns 'N/A' for empty string", () => {
      expect(valueGetter!("")).toBe("N/A");
    });

    it("returns 'N/A' for null", () => {
      expect(valueGetter!(null)).toBe("N/A");
    });
  });
});

describe("Dragon column value getters", () => {
  describe("dry_mass_kg", () => {
    const valueGetter = getValueGetter(dragonColumns, "dry_mass_kg");

    it("formats large numbers with locale separators", () => {
      expect(valueGetter!(6000)).toBe("6,000");
    });

    it("returns 'N/A' for undefined", () => {
      expect(valueGetter!(undefined)).toBe("N/A");
    });
  });
});
