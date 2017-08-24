"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AstError_1 = require("./AstError");
class AstErrorListener {
    constructor(expression) {
        this.expression = expression;
        this.errors = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push(new AstError_1.AstError(line, column, this.expression, this.sanitizeErrorMessage(msg)));
    }
    reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
        console.log("reportAmbiguity", exact, ambigAlts, configs);
    }
    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
        console.log("reportAttemptingFullContext", conflictingAlts, configs);
    }
    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
        console.log("reportContextSensitivity", prediction, configs);
    }
    sanitizeErrorMessage(msg) {
        return msg.replace("'<EOF>'", "at the end of the rule")
            .replace("<EOF>", "the end of the rule");
    }
}
exports.AstErrorListener = AstErrorListener;
