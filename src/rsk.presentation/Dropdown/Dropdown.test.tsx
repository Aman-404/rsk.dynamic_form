import { render, fireEvent } from "@testing-library/react";
import DropDown from "./Dropdown";




describe("DropDown Component", () => {
    const mockOptions = ["Option 1", "Option 2", "Option 3"];
    const mockOnChange = jest.fn();

    test('it renders the MyDropdown component', () => {
        const options = ['Option 1', 'Option 2', 'Option 3'];
        const selectedOption = 'Option 2';
        render(<DropDown options={options} />);
    });


    test("handles onChange event", () => {
        const { getByTestId } = render(
            <DropDown options={mockOptions} onChange={mockOnChange} />
        );
        const selectElement = getByTestId("dropdown");
        fireEvent.change(selectElement, { target: { value: "Option 2" } });
        expect(mockOnChange).toHaveBeenCalledWith("Option 2");
    });
});
