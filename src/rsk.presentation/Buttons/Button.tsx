
interface ButtonProps {
    name: string;
    onClick: () => void; 
    disabled: boolean;
}

const Button = ({ name, onClick,  disabled }: ButtonProps) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        >
            {name}
        </button>
    );

};

export default Button;