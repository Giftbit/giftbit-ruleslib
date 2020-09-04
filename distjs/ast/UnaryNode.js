"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnaryNode = void 0;
const UnsupportedOperationError_1 = require("../UnsupportedOperationError");
class UnaryNode {
    constructor(operator, child) {
        this.operator = operator;
        this.child = child;
        this.type = UnaryNode.type;
    }
    getValue(context) {
        const child = this.child.getValue(context);
        switch (this.operator) {
            case "!": return !child;
            case "-": {
                const value = -child;
                if (isNaN(value)) {
                    return 0;
                }
                return value;
            }
            case "+": {
                const value = +child;
                if (isNaN(value)) {
                    return 0;
                }
                return value;
            }
            default: throw new UnsupportedOperationError_1.UnsupportedOperationError();
        }
    }
    isComplex() {
        return false;
    }
    toString() {
        return this.child.isComplex() ? `${this.operator}(${this.child.toString()})` : `${this.operator}${this.child.toString()}`;
    }
}
exports.UnaryNode = UnaryNode;
UnaryNode.type = "Unary";
