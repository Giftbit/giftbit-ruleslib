import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";
import {UnsupportedOperationError} from "../UnsupportedOperationError";

export class InfixNode implements ExpressionNode {

    constructor(private readonly left: ExpressionNode, private readonly operator: string, private readonly right: ExpressionNode) {}

    /* tslint:disable:triple-equals*/
    getValue(context: Context): Value {
        const left = this.left.getValue(context);
        const right = this.right.getValue(context);

        switch (this.operator) {
            case "+":
                if (typeof left === "string" || typeof right === "string") {
                    return this.valueToString(left) + this.valueToString(right);
                }
                return left + right;
            case "-": return (+left || 0) - (+right || 0);
            case "*": return (+left || 0) * (+right || 0);
            case "/": return (+left || 0) / (+right || 0);
            case "%": return (+left || 0) % (+right || 0);
            case "==": return this.areEqual(left, right);
            case "&&": return left && right;
            case "||": return left || right;
            case ">": return left > right;
            case ">=": return left >= right;
            case "<": return left < right;
            case "<=": return left <= right;
            default: throw new UnsupportedOperationError();
        }
    }

    private areEqual(left: Value, right: Value): boolean {
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
            } else {
                return false;
            }
        } else if (Array.isArray(right)) {
            return false;
        } else if (left && typeof left === "object" && right && typeof right === "object") {
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
        }
        return left == right;
    }

    private valueToString(v: Value): string {
        if (v === null) {
            return "";
        } else if (v === false) {
            return "false";
        } else if (v === true) {
            return "true";
        } else if (typeof v === "string") {
            return v;
        } else if (typeof v === "number") {
            return v.toString();
        } else if (Array.isArray(v)) {
            return `[${v.map(x => this.valueToString(x)).join(", ")}]`;
        } else if (typeof v === "object") {
            return "{" + Object.keys(v).map(key => `${key}: ${this.valueToString(v[key])}`).join(", ") + "}";
        }
        throw new UnsupportedOperationError();
    }

    isComplex(): boolean {
        return true;
    }

    toString(): string {
        return (this.left.isComplex() ? `(${this.left.toString()}) ` : `${this.left.toString()} `) + this.operator + (this.right.isComplex() ? ` (${this.right.toString()})` : ` ${this.right.toString()}`);
    }
}
