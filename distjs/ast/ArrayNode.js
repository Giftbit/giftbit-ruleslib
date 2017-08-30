"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayNode {
    constructor(elements) {
        this.elements = elements;
        this.type = ArrayNode.type;
    }
    getValue(context) {
        return this.elements.map(e => e.getValue(context));
    }
    isComplex() {
        return false;
    }
    toString() {
        return `[${this.elements.map(e => e.toString()).join(", ")}]`;
    }
}
ArrayNode.type = "Array";
exports.ArrayNode = ArrayNode;
