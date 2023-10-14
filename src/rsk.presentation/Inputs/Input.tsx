import React, { useState } from "react";

interface InputProps {
    placeholder: string;
    type: string;
    // onClick?: () => void;
    // onSubmit?: () => void;
    onBlur?: () => void;
    onChange?: (value: string) => void;
}

const Input = ({ placeholder, type }: InputProps) => {
    const[values,setValues] = useState()
    
    const handleValue = (e:any) => {
        setValues(e.target.value)
        console.log(values);
    };
    return (
        <>
            <label>{type}:</label>
            <input
                type={type}
                placeholder={placeholder}
                onBlur={(e) => handleValue(e)}
                onChange={(e) => handleValue(e)}
            />
        </>
    );
};

export default Input;
