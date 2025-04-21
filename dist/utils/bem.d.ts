type Element = `__${Uncapitalize<string>}`;
type Modifier = `--${Uncapitalize<string>}`;
/**
 * This function returns another function that just wraps the classNames
 * function, but adds typesafety to ensure (as far as possible) that the classes
 * follow the BEM convention, with respect to the given block.
 */
export declare function getBem<Block extends Capitalize<string>>(_block: Block): (...args: Array<Block | `${Block}${Element}` | `${Block}${Modifier}` | `${Block}${Element}${Modifier}` | null | undefined>) => string;
export {};
