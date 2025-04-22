import * as React from 'react';
import './Button.css';
interface ButtonProps {
    ariaLabel?: string;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    id?: string;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    variant?: 'filled' | 'outlined';
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
