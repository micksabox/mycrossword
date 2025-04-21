import * as React from 'react';
import { Cell, CellChange, CellFocus, Clue, GuardianClue, GuessGrid } from '~/types';
import './Grid.css';
interface GridProps {
    cellMatcher: RegExp;
    cells: Cell[];
    clues: Clue[];
    cols: number;
    guessGrid: GuessGrid;
    inputRef?: React.RefObject<HTMLInputElement>;
    onCellChange?: (cellChange: CellChange) => void;
    onCellFocus?: (cellFocus: CellFocus) => void;
    onComplete?: () => void;
    rawClues: GuardianClue[];
    rows: number;
    setGuessGrid: (value: GuessGrid | ((val: GuessGrid) => GuessGrid)) => void;
}
export default function Grid({ cellMatcher, cells, clues, cols, guessGrid, inputRef, onCellChange, onCellFocus, onComplete, rawClues, rows, setGuessGrid, }: GridProps): import("react/jsx-runtime").JSX.Element;
export {};
