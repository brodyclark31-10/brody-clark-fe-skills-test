import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DataSelector } from "../DataSelector";
import { DataType } from "@/types";

// Mock the styles import
jest.mock("../styles", () => ({
  formControlStyles: {},
  inputLabelStyles: {},
  selectStyles: {},
  selectMenuProps: {},
}));

describe("DataSelector", () => {
  it("renders with current value displayed", () => {
    render(<DataSelector value={DataType.LAUNCHES} onChange={jest.fn()} />);

    expect(screen.getByRole("combobox")).toHaveTextContent("Launches");
  });

  it("shows all data type options when opened", async () => {
    const user = userEvent.setup();
    render(<DataSelector value={DataType.LAUNCHES} onChange={jest.fn()} />);

    await user.click(screen.getByRole("combobox"));

    expect(screen.getByRole("option", { name: "Launches" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Rockets" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Ships" })).toBeInTheDocument();
  });

  it("calls onChange with selected value", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(<DataSelector value={DataType.LAUNCHES} onChange={onChange} />);

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Rockets" }));

    expect(onChange).toHaveBeenCalledWith(DataType.ROCKETS);
  });
});
