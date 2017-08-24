"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnsupportedOperationError extends Error {
    constructor(msg) {
        super(msg || "Unsupported operation");
    }
}
exports.UnsupportedOperationError = UnsupportedOperationError;
