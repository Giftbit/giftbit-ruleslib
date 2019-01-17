"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObjectNode {
    constructor(expressionMap) {
        this.expressionMap = expressionMap;
        this.type = ObjectNode.type;
    }
    getValue(context) {
        const v = {};
        for (const key in this.expressionMap) {
            if (this.expressionMap.hasOwnProperty(key)) {
                v[key] = this.expressionMap[key].getValue(context);
            }
        }
        return v;
    }
    isComplex() {
        return false;
    }
    toString() {
        return `{${Object.keys(this.expressionMap).map(key => `'${key}': ${this.expressionMap[key].toString()}`).join(", ")}}`;
    }
}
ObjectNode.type = "Object";
exports.ObjectNode = ObjectNode;
