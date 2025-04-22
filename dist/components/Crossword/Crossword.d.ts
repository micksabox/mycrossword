import { CellChange, CellFocus, GuardianCrossword, GuessGrid } from '~/types';
import './Crossword.css';
interface CrosswordProps {
    allowedHtmlTags: string[];
    allowMissingSolutions: boolean;
    cellMatcher: RegExp;
    data: GuardianCrossword;
    id: string;
    loadGrid?: GuessGrid;
    onCellChange?: (cellChange: CellChange) => void;
    onCellFocus?: (cellFocus: CellFocus) => void;
    onComplete?: () => void;
    saveGrid?: (value: GuessGrid | ((val: GuessGrid) => GuessGrid)) => void;
    stickyClue: 'always' | 'never' | 'auto';
    onClueHashCheckResult?: (clueId: string, isValid: boolean) => void;
    disableAllReveals?: boolean;
    disableAnagram?: boolean;
    disableLetterChecks?: boolean;
    disableGridChecks?: boolean;
    checkClueHash?: (clueId: string, currentGuess: string, solutionHash?: string | null) => Promise<boolean>;
}
export default function Crossword({ allowedHtmlTags, allowMissingSolutions, cellMatcher, data, id, loadGrid, onCellChange, onCellFocus, onComplete, saveGrid, stickyClue, onClueHashCheckResult, disableAllReveals, disableAnagram, disableLetterChecks, disableGridChecks, checkClueHash, }: CrosswordProps): import("react/jsx-runtime").JSX.Element;
export {};
