import type { Cell, CellPosition } from '~/types';
type CellsStore = {
    cells: Cell[];
    complete: boolean;
    checkComplete: () => boolean | null;
    setCells: (cells: Cell[]) => void;
    select: (pos: CellPosition) => void;
    answerAll: (answered: boolean) => void;
};
export declare const useCellsStore: import("zustand").UseBoundStore<import("zustand").StoreApi<CellsStore>>;
export {};
