export declare const DEFAULT_HTML_TAGS: string[];
export declare const DEFAULT_CELL_MATCHER: RegExp;
export declare function isValidChar(char: string, matcher: RegExp): false | RegExpMatchArray | null;
export declare function isInViewport(rect: DOMRect): boolean;
export declare function isInPerimeterRect(rect: DOMRect, perimeterRect: DOMRect): boolean;
