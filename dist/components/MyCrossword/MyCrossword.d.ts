import { CellChange, CellFocus, GuardianCrossword, GuessGrid } from '~/types';
import './MyCrossword.css';
type Theme = 'red' | 'pink' | 'purple' | 'deepPurple' | 'indigo' | 'blue' | 'lightBlue' | 'cyan' | 'teal' | 'green' | 'deepOrange' | 'blueGrey';
export interface MyCrosswordProps {
    allowedHtmlTags?: string[];
    allowMissingSolutions?: boolean;
    cellMatcher?: RegExp;
    className?: string;
    data: GuardianCrossword;
    id: string;
    loadGrid?: GuessGrid;
    onCellChange?: (cellChange: CellChange) => void;
    onCellFocus?: (cellFocus: CellFocus) => void;
    onComplete?: () => void;
    saveGrid?: (value: GuessGrid | ((val: GuessGrid) => GuessGrid)) => void;
    stickyClue?: 'always' | 'never' | 'auto';
    theme?: Theme;
}
export default function MyCrossword({ allowedHtmlTags, allowMissingSolutions, cellMatcher, className, data, id, loadGrid, onCellChange, onCellFocus, onComplete, saveGrid, stickyClue, theme, }: MyCrosswordProps): import("react/jsx-runtime").JSX.Element;
export {};
