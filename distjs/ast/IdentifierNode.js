"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IdentifierNode {
    constructor(identifier) {
        this.identifier = identifier;
        this.type = "Identifier";
    }
    getValue(context) {
        return context.getValue(this.identifier);
    }
    isComplex() {
        return false;
    }
    toString() {
        return this.identifier;
    }
}
exports.IdentifierNode = IdentifierNode;
