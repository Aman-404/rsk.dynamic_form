import React from "react";

interface ButtonProps {
    name: string;
    onClick: string;
    onSubmit: string;
    disabled: boolean;
}



const Button = ({ name, onClick,  onSubmit, disabled }: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            onClick={() => console.log(onClick)}
            onSubmit={() => console.log(onSubmit)}
        >
            {name}
        </button>
    );

};

export default Button;