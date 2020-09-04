"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifierNode = void 0;
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
exports.IdentifierNode = IdentifierNode;
IdentifierNode.type = "Identifier";
