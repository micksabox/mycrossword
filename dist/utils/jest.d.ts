type ConsoleMessageType = 'info' | 'log' | 'debug' | 'warn' | 'error';
export declare function suppressConsoleMessage(type: ConsoleMessageType): void;
export declare function restoreConsoleMessage(type: ConsoleMessageType): void;
export {};
