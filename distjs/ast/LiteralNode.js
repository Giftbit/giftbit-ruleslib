"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiteralNode = void 0;
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
exports.LiteralNode = LiteralNode;
LiteralNode.type = "Literal";
