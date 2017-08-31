"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(elements) {
        this.elements = elements;
        this.type = ListNode.type;
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
ListNode.type = "List";
exports.ListNode = ListNode;
