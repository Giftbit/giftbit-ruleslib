import { AstError } from "./AstError";
export declare class AstErrorListener {
    readonly expression: string;
    readonly errors: AstError[];
    constructor(expression: string);
    syntaxError(recognizer: any, offendingSymbol: any, line: any, column: any, msg: any, e: any): void;
    reportAmbiguity(recognizer: any, dfa: any, startIndex: any, stopIndex: any, exact: any, ambigAlts: any, configs: any): void;
    reportAttemptingFullContext(recognizer: any, dfa: any, startIndex: any, stopIndex: any, conflictingAlts: any, configs: any): void;
    reportContextSensitivity(recognizer: any, dfa: any, startIndex: any, stopIndex: any, prediction: any, configs: any): void;
    private sanitizeErrorMessage(msg);
}
