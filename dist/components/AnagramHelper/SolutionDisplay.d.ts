import { Cell, SeparatorLocations } from '~/types';
import './SolutionDisplay.css';
interface SolutionDisplayProps {
    cells: Cell[];
    letters?: string;
    separators: SeparatorLocations;
    shuffling: boolean;
}
export default function SolutionDisplay({ cells, letters, separators, shuffling, }: SolutionDisplayProps): import("react/jsx-runtime").JSX.Element;
export {};
