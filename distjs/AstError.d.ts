export declare class AstError extends Error {
    readonly line: number;
    readonly character: number;
    readonly expression: string;
    readonly msg: string;
    constructor(line: number, character: number, expression: string, msg: string);
}
