import * as React from 'react';
import { Cell, Clue, SeparatorLocations } from '~/types';
import './AnagramHelper.css';
interface AnagramHelperProps {
    allowedHtmlTags: string[];
    clue: Clue;
    groupCells: Cell[];
    groupSeparators: SeparatorLocations;
    onClose: () => void;
    style?: React.CSSProperties;
}
export default function AnagramHelper({ allowedHtmlTags, clue, groupCells, groupSeparators, onClose, style, }: AnagramHelperProps): import("react/jsx-runtime").JSX.Element;
export {};
