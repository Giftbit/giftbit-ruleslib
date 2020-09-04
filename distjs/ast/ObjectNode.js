"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectNode = void 0;
class ObjectNode {
    constructor(expressionMap) {
        this.expressionMap = expressionMap;
        this.type = ObjectNode.type;
    }
    getValue(context) {
        const v = {};
        for (const key in this.expressionMap) {
            if (this.expressionMap[key] !== undefined) {
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
exports.ObjectNode = ObjectNode;
ObjectNode.type = "Object";
