import { Clue } from '~/types';
type CluesStore = {
    clues: Clue[];
    setClues: (clues: Clue[]) => void;
    select: (clueId: Clue['id']) => void;
    answerAll: (answered: Clue['answered']) => void;
    answerSome: (clueIds: Clue['id'][], answered: Clue['answered']) => void;
};
export declare const useCluesStore: import("zustand").UseBoundStore<import("zustand").StoreApi<CluesStore>>;
export {};
