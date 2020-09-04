"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AstError = void 0;
class AstError extends Error {
    constructor(row, column, expression, msg) {
        super(msg);
        this.row = row;
        this.column = column;
        this.expression = expression;
        this.msg = msg;
    }
}
exports.AstError = AstError;
