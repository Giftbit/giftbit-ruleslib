import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";
import {UnsupportedOperationError} from "../UnsupportedOperationError";

export class InfixNode implements ExpressionNode {

    readonly type = "Infix";

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
                return this.valueToNumber(left) + this.valueToNumber(right);
            case "-": return this.valueToNumber(left) - this.valueToNumber(right);
            case "*": return this.valueToNumber(left) * this.valueToNumber(right);
            case "/": return this.valueToNumber(left) / this.valueToNumber(right);
            case "%": return this.valueToNumber(left) % this.valueToNumber(right);
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
            return true;
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

    private valueToNumber(v: Value): number {
        if (v === null) {
            return 0;
        } else if (v === false) {
            return 0;
        } else if (v === true) {
            return 1;
        } else if (typeof v === "string") {
            return +v || 0;
        } else if (typeof v === "number") {
            return v;
        } else if (Array.isArray(v)) {
            return 0;
        } else if (typeof v === "object") {
            return 0;
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
