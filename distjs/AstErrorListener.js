"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AstErrorListener = void 0;
const AstError_1 = require("./AstError");
// ANTLR4 for JS isn't super well documented so there's a lot of trial-and-error
// and just-good-enough going on here.
/* eslint-disable */
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
