"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsupportedOperationError = void 0;
class UnsupportedOperationError extends Error {
    constructor(msg) {
        super(msg || "Unsupported operation");
    }
}
exports.UnsupportedOperationError = UnsupportedOperationError;
