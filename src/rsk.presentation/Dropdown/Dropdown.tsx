import React, { ChangeEvent } from "react";

interface InputProps {
    options: any[];
    
}

const DropDown = ({ options}: InputProps) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
        console.log(selectedOption);
        
        
    };

    return (
        <select onChange={handleChange}>
            {options.map((option, index) => (
                <option key={index}>{option}</option>
            ))}
        </select>
    );
};

export default DropDown;
