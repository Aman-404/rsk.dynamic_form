import React, { ChangeEvent } from "react";

interface InputProps {
    options: any[];
    onChange?: (selectedOption: string) => void;
}

const DropDown = ({ options, onChange }: InputProps) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
        console.log(selectedOption);
        if (onChange) {
            onChange(selectedOption);
        }
    };

    return (
        <select data-testid="dropdown" onChange={handleChange}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default DropDown;
