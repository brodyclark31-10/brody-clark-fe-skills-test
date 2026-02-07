import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "../ThemeToggle";
import { useAtom } from "jotai";

// Mock Jotai
jest.mock("jotai", () => ({
  useAtom: jest.fn(),
  atom: jest.fn(),
}));

const mockUseAtom = useAtom as jest.Mock;

describe("ThemeToggle", () => {
  it("renders sun icon in dark mode", () => {
    mockUseAtom.mockReturnValue(["dark", jest.fn()]);
    render(<ThemeToggle />);

    expect(screen.getByTestId("Brightness7Icon")).toBeInTheDocument();
  });

  it("renders moon icon in light mode", () => {
    mockUseAtom.mockReturnValue(["light", jest.fn()]);
    render(<ThemeToggle />);

    expect(screen.getByTestId("Brightness4Icon")).toBeInTheDocument();
  });

  it("toggles from dark to light on click", async () => {
    const setTheme = jest.fn();
    mockUseAtom.mockReturnValue(["dark", setTheme]);
    const user = userEvent.setup();

    render(<ThemeToggle />);
    await user.click(screen.getByRole("button"));

    expect(setTheme).toHaveBeenCalledWith("light");
  });

  it("toggles from light to dark on click", async () => {
    const setTheme = jest.fn();
    mockUseAtom.mockReturnValue(["light", setTheme]);
    const user = userEvent.setup();

    render(<ThemeToggle />);
    await user.click(screen.getByRole("button"));

    expect(setTheme).toHaveBeenCalledWith("dark");
  });
});
