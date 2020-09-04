"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfixNode = void 0;
const Value_1 = require("../Value");
const UnsupportedOperationError_1 = require("../UnsupportedOperationError");
class InfixNode {
    constructor(left, operator, right) {
        this.left = left;
        this.operator = operator;
        this.right = right;
        this.type = InfixNode.type;
    }
    /* tslint:disable:triple-equals*/
    getValue(context) {
        const left = this.left.getValue(context);
        const right = this.right.getValue(context);
        // console.log(left, this.operator, right);
        switch (this.operator) {
            case "+":
                if (Array.isArray(left) && Array.isArray(right)) {
                    return [...left, ...right];
                }
                if (typeof left === "string" || typeof right === "string") {
                    return Value_1.valueToString(left) + Value_1.valueToString(right);
                }
                return Value_1.valueToNumber(left) + Value_1.valueToNumber(right);
            case "-": return Value_1.valueToNumber(left) - Value_1.valueToNumber(right);
            case "*": return Value_1.valueToNumber(left) * Value_1.valueToNumber(right);
            case "/": return Value_1.valueToNumber(left) / Value_1.valueToNumber(right);
            case "%": return Value_1.valueToNumber(left) % Value_1.valueToNumber(right);
            case "==": return this.areEqual(left, right);
            case "&&": return left && right;
            case "||": return left || right;
            case ">": return left > right;
            case ">=": return left >= right;
            case "<": return left < right;
            case "<=": return left <= right;
            default: throw new UnsupportedOperationError_1.UnsupportedOperationError();
        }
    }
    areEqual(left, right) {
        if (Array.isArray(left)) {
            if (Array.isArray(right)) {
                if (left.length != right.length) {
                    return false;
                }
                for (let i = 0; i < left.length; i++) {
                    if (!this.areEqual(left[i], right[i])) {
                        return false;
                    }
                }
                return true;
            }
            else {
                return false;
            }
        }
        else if (Array.isArray(right)) {
            return false;
        }
        else if (left && typeof left === "object" && right && typeof right === "object") {
            const leftKeys = Object.keys(left);
            const rightKeys = Object.keys(right);
            if (leftKeys.length !== rightKeys.length) {
                return false;
            }
            for (const key of leftKeys) {
                if (rightKeys.indexOf(key) === -1 || !this.areEqual(left[key], right[key])) {
                    return false;
                }
            }
            return true;
        }
        return left == right;
    }
    isComplex() {
        return true;
    }
    toString() {
        return (this.left.isComplex() ? `(${this.left.toString()}) ` : `${this.left.toString()} `) + this.operator + (this.right.isComplex() ? ` (${this.right.toString()})` : ` ${this.right.toString()}`);
    }
}
exports.InfixNode = InfixNode;
InfixNode.type = "Infix";
