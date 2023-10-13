import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
    test('it renders the MyDropdown component', () => {
    
        render(<Input placeholder={""} type={""}/>);
    });

    test("handles onBlur event", () => {
        const { getByPlaceholderText } = render(
            <Input placeholder="Test Placeholder" type="text" />
        );
        const inputElement = getByPlaceholderText("Test Placeholder");

        fireEvent.blur(inputElement); // Simulate blur event

        // Add your assertions for onBlur functionality here
    });

    test("handles onChange event", () => {
        const { getByPlaceholderText } = render(
            <Input placeholder="Test Placeholder" type="text" />
        );
        const inputElement = getByPlaceholderText("Test Placeholder");

        fireEvent.change(inputElement, { target: { value: "Test Value" } }); // Simulate change event

        // Add your assertions for onChange functionality here
    });
});
