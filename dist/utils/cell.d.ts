import { Cell, GuardianClue, GuessGrid } from '~/types';
export declare function mergeCell(newCell: Cell, cells: Cell[]): Cell[];
/**
 * Transpose clue entries to cell array.
 * @param cols
 * @param rows
 * @param entries
 * @returns
 */
export declare function initialiseCells({ cols, rows, entries, guessGrid, allowMissingSolutions, }: {
    cols: number;
    rows: number;
    entries: GuardianClue[];
    guessGrid?: GuessGrid;
    allowMissingSolutions?: boolean;
}): Cell[];
export declare function blankNeighbours(cells: Cell[], currentCell: Cell, across: boolean): boolean;
