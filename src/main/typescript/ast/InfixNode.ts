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
                if ((typeof left === "string" || typeof right === "string") && (left === null || right === null)) {
                    return (left || "") + (right || "");
                }
                return left + right;
            case "-": return (+left || 0) - (+right || 0);
            case "*": return (+left || 0) * (+right || 0);
            case "/": return (+left || 0) / (+right || 0);
            case "%": return (+left || 0) % (+right || 0);
            case "==": return left == right;
            case "&&": return left && right;
            case "||": return left || right;
            case ">": return left > right;
            case ">=": return left >= right;
            case "<": return left < right;
            case "<=": return left <= right;
            default: throw new UnsupportedOperationError();
        }
    }

    isComplex(): boolean {
        return true;
    }

    toString(): string {
        return (this.left.isComplex() ? `(${this.left.toString()}) ` : `${this.left.toString()} `) + this.operator + (this.right.isComplex() ? ` (${this.right.toString()})` : ` ${this.right.toString()}`);
    }
}
