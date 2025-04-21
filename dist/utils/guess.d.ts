import type { Cell, GuessGrid } from '~/types';
/**
 * Initialise a guess grid with a single char (default = '').
 */
export declare function initialiseGuessGrid(cols: number, rows: number, char?: string): GuessGrid;
/**
 * Generate guess grid from cells.
 */
export declare function getGuessGrid(cols: number, rows: number, cells: Cell[]): GuessGrid;
export declare function validateGuessGrid(guessGrid: GuessGrid, cols: number, rows: number, cellMatcher: RegExp): boolean;
