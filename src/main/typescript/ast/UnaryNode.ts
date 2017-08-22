import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";
import {UnsupportedOperationError} from "../UnsupportedOperationError";

export class UnaryNode implements ExpressionNode {

    constructor(private readonly operator: string, private readonly child: ExpressionNode) {}

    getValue(context: Context): Value {
        switch (this.operator) {
            case "!": return !this.child.getValue(context);
            case "-": return -this.child.getValue(context);
            case "+": return +this.child.getValue(context);
            default: throw new UnsupportedOperationError();
        }
    }

    isComplex(): boolean {
        return false;
    }

    toString(): string {
        return this.child.isComplex() ? `${this.operator}(${this.child.toString()})` : `${this.operator}${this.child.toString()}`;
    }
}
