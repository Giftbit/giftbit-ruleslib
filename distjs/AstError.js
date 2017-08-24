"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AstError extends Error {
    constructor(line, character, expression, msg) {
        super(msg);
        this.line = line;
        this.character = character;
        this.expression = expression;
        this.msg = msg;
    }
}
exports.AstError = AstError;
