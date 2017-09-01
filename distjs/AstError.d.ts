export declare class AstError extends Error {
    readonly row: number;
    readonly column: number;
    readonly expression: string;
    readonly msg: string;
    constructor(row: number, column: number, expression: string, msg: string);
}
