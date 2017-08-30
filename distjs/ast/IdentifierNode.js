"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IdentifierNode {
    constructor(identifier) {
        this.identifier = identifier;
        this.type = IdentifierNode.type;
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
IdentifierNode.type = "Identifier";
exports.IdentifierNode = IdentifierNode;
