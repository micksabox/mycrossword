import { Cell, CellChange, Clue, GuessGrid } from '~/types';
import './Controls.css';
interface ControlsProps {
    cells: Cell[];
    clues: Clue[];
    gridCols: number;
    gridRows: number;
    onAnagramHelperClick: () => void;
    onCellChange?: (cellChange: CellChange) => void;
    onComplete?: () => void;
    setGuessGrid: (value: GuessGrid | ((val: GuessGrid) => GuessGrid)) => void;
    solutionsAvailable: boolean;
    selectedClueHasHash?: boolean;
    onCheckClueHash?: () => void;
    disableAllReveals?: boolean;
    disableAnagram?: boolean;
    disableLetterChecks?: boolean;
    disableGridChecks?: boolean;
}
export default function Controls({ cells, clues, gridCols, gridRows, onAnagramHelperClick, onCellChange, onComplete, setGuessGrid, solutionsAvailable, selectedClueHasHash, onCheckClueHash, disableAllReveals, disableAnagram, disableLetterChecks, disableGridChecks, }: ControlsProps): import("react/jsx-runtime").JSX.Element;
export {};
