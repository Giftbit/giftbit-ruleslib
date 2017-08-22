import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";
import {UnsupportedOperationError} from "../UnsupportedOperationError";

export class InfixNode implements ExpressionNode {

    constructor(private readonly left: ExpressionNode, private readonly operator: string, private readonly right: ExpressionNode) {}

    getValue(context: Context): Value {
        switch (this.operator) {
            case "+": return this.left.getValue(context) + this.right.getValue(context);
            case "-": return this.left.getValue(context) - this.right.getValue(context);
            case "*": return this.left.getValue(context) * this.right.getValue(context);
            case "/": return this.left.getValue(context) / this.right.getValue(context);
            case "%": return this.left.getValue(context) % this.right.getValue(context);
            case "==": return this.left.getValue(context) == this.right.getValue(context);
            case "&&": return this.left.getValue(context) && this.right.getValue(context);
            case "||": return this.left.getValue(context) || this.right.getValue(context);
            case ">": return this.left.getValue(context) > this.right.getValue(context);
            case ">=": return this.left.getValue(context) >= this.right.getValue(context);
            case "<": return this.left.getValue(context) < this.right.getValue(context);
            case "<=": return this.left.getValue(context) <= this.right.getValue(context);
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
