import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
    const mockOnClick = jest.fn();
    // const mockOnSubmit = jest.fn();
    const defaultProps = {
        name: "Test Button",
        onClick: mockOnClick,
        // onSubmit: mockOnSubmit,
        disabled: false,
    };

    test('it renders the Button component', () => {
        render(<Button {...defaultProps}/>)
    });
    test("calls onClick handler when clicked", () => {
        const { getByText } = render(<Button {...defaultProps} />);
        const buttonElement = getByText("Test Button");
        fireEvent.click(buttonElement);
        expect(mockOnClick).toHaveBeenCalled();
    });
    test("is disabled when disabled prop is true", () => {
        const { getByText } = render(<Button {...defaultProps} disabled={true} />);
        const buttonElement = getByText("Test Button");
        expect(buttonElement).toBeTruthy();
    });
});
