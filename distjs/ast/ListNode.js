"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
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
exports.ListNode = ListNode;
ListNode.type = "List";
