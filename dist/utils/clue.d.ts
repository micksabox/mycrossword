import { Cell, Clue, GuardianClue, SeparatorLocations } from '~/types';
export declare function getGroupCells(groupIds: string[], cells: Cell[]): Cell[];
export declare function getGroupSeparators(groupIds: string[], clues: Clue[]): SeparatorLocations;
export declare function isCluePopulated(clue: GuardianClue, cells: Cell[]): boolean;
export declare function getCrossingClueIds(clue: Clue, cells: Cell[]): string[];
export declare function initialiseClues(entries: GuardianClue[], cells: Cell[], selectedClueId?: string): {
    answered: boolean;
    selected: boolean;
    clue: string;
    direction: import("~/types").Direction;
    group: string[];
    humanNumber: string;
    id: string;
    length: number;
    number: number;
    position: {
        x: number;
        y: number;
    };
    separatorLocations: import("~/types").SeparatorLocationsOptional;
    solution?: string | undefined;
    solutionPoseidonHash?: string | undefined;
}[];
