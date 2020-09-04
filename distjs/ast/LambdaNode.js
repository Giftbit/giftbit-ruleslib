"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaNode = void 0;
class LambdaNode {
    constructor(paramNames, body) {
        this.paramNames = paramNames;
        this.body = body;
        this.type = LambdaNode.type;
        if (this.paramNames.length === 0) {
            throw new Error("paramNames must not be empty");
        }
    }
    getValue(context) {
        return this.body.getValue(context);
    }
    isComplex() {
        return true;
    }
    toString() {
        if (this.paramNames.length === 1) {
            return `${this.paramNames[0]} => ${this.body.toString()}`;
        }
        return `(${this.paramNames.join(", ")}) => ${this.body.toString()}`;
    }
}
exports.LambdaNode = LambdaNode;
LambdaNode.type = "Lambda";
