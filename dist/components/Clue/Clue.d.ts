import * as React from 'react';
import type { CellFocus } from '~/types';
import './Clue.css';
interface ClueProps {
    allowedHtmlTags: string[];
    answered: boolean;
    col: number;
    containerRef?: React.RefObject<HTMLDivElement>;
    id: string;
    inputRef?: React.RefObject<HTMLInputElement>;
    isHighlighted: boolean;
    num: string;
    onCellFocus?: (cellFocus: CellFocus) => void;
    row: number;
    scrollTo?: boolean;
    text: string;
}
declare function Clue({ allowedHtmlTags, answered, col, containerRef, id, inputRef, isHighlighted, num, onCellFocus, row, scrollTo, text, }: ClueProps): import("react/jsx-runtime").JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Clue>;
export default _default;
