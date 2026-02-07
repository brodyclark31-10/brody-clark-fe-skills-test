import { getAstroTheme } from "../astroTheme";

describe("getAstroTheme", () => {
  describe("dark mode", () => {
    const theme = getAstroTheme("dark");

    it("sets palette mode to dark", () => {
      expect(theme.palette.mode).toBe("dark");
    });

    it("uses dark background colors", () => {
      expect(theme.palette.background.default).toBe("#171a1f");
      expect(theme.palette.background.paper).toBe("#1e2227");
    });

    it("uses teal/cyan primary color", () => {
      expect(theme.palette.primary.main).toBe("#00b4d8");
    });

    it("sets appropriate text colors for dark mode", () => {
      expect(theme.palette.text.primary).toBe("#e8eaed");
      expect(theme.palette.text.secondary).toBe("#9aa0a6");
    });
  });

  describe("light mode", () => {
    const theme = getAstroTheme("light");

    it("sets palette mode to light", () => {
      expect(theme.palette.mode).toBe("light");
    });

    it("uses light background colors", () => {
      expect(theme.palette.background.default).toBe("#f5f7fa");
      expect(theme.palette.background.paper).toBe("#ffffff");
    });

    it("uses darker primary for light mode contrast", () => {
      expect(theme.palette.primary.main).toBe("#0096c7");
    });
  });

  describe("theme structure", () => {
    it("returns a valid MUI theme object", () => {
      const theme = getAstroTheme("dark");
      expect(theme).toHaveProperty("palette");
      expect(theme).toHaveProperty("typography");
      expect(theme).toHaveProperty("spacing");
    });
  });
});
