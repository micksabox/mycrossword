import * as React from 'react';
import { CellFocus, CellPosition, Char } from '~/types';
import './GridCell.css';
export declare const CELL_SIZE = 31;
export declare const getDimensions: (cellPos: CellPosition) => {
    xRect: number;
    yRect: number;
    xNum: number;
    yNum: number;
    xText: number;
    yText: number;
};
interface GridCellProps {
    clueIds: string[];
    guess?: Char;
    inputRef?: React.RefObject<HTMLInputElement>;
    isHighlighted: boolean;
    isSelected: boolean;
    num?: number;
    onCellFocus?: (cellFocus: CellFocus) => void;
    pos: CellPosition;
    selectedClueIndex: number;
}
declare function GridCell({ clueIds, guess, inputRef, isHighlighted, isSelected, num, onCellFocus, pos, selectedClueIndex, }: GridCellProps): import("react/jsx-runtime").JSX.Element;
declare const _default: React.MemoExoticComponent<typeof GridCell>;
export default _default;
