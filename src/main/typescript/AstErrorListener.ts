import {AstError} from "./AstError";

export class AstErrorListener {

    readonly errors: AstError[] = [];

    constructor(public readonly expression: string) {}

    syntaxError(recognizer, offendingSymbol, line, column, msg, e): void {
        this.errors.push(new AstError(line, column, this.expression, this.sanitizeErrorMessage(msg)));
    }

    reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs): void {
        console.log("reportAmbiguity", exact, ambigAlts, configs);
    }

    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs): void {
        console.log("reportAttemptingFullContext", conflictingAlts, configs);
    }

    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs): void {
        console.log("reportContextSensitivity", prediction, configs);
    }

    private sanitizeErrorMessage(msg: string): string {
        return msg.replace("'<EOF>'", "at the end of the rule")
            .replace("<EOF>", "the end of the rule");
    }
}
