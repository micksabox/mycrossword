import * as React from 'react';
import './DropdownButton.css';
export interface DropdownMenuItem {
    disabled?: boolean;
    onClick: () => void;
    text: string;
}
interface DropdownButtonProps {
    className?: string;
    id?: string;
    menu: DropdownMenuItem[];
    text: string;
    disabled?: boolean;
}
declare function DropdownButton({ className, id, menu, text, disabled, }: DropdownButtonProps): import("react/jsx-runtime").JSX.Element;
declare const _default: React.MemoExoticComponent<typeof DropdownButton>;
export default _default;
