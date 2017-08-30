"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LiteralNode {
    constructor(value) {
        this.value = value;
        this.type = LiteralNode.type;
    }
    getValue(context) {
        return this.value;
    }
    isComplex() {
        return false;
    }
    toString() {
        return JSON.stringify(this.value);
    }
}
LiteralNode.type = "Literal";
exports.LiteralNode = LiteralNode;
