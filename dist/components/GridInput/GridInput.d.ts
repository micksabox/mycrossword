import * as React from 'react';
import './GridInput.css';
interface GridInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    visible: boolean;
}
declare const GridInput: React.ForwardRefExoticComponent<GridInputProps & React.RefAttributes<HTMLInputElement>>;
export default GridInput;
