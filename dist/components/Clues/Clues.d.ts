import * as React from 'react';
import { CellFocus, Clue as ClueType } from '~/types';
import './Clues.css';
interface CluesProps {
    allowedHtmlTags: string[];
    entries: ClueType[];
    gridHeight: number;
    inputRef?: React.RefObject<HTMLInputElement>;
    onCellFocus?: (cellFocus: CellFocus) => void;
    selectedClueId?: string;
}
export default function Clues({ allowedHtmlTags, entries, gridHeight, inputRef, onCellFocus, selectedClueId, }: CluesProps): import("react/jsx-runtime").JSX.Element;
export {};
