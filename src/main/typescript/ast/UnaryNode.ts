import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";
import {UnsupportedOperationError} from "../UnsupportedOperationError";

export class UnaryNode implements ExpressionNode {

    readonly type = "Unary";

    constructor(private readonly operator: string, private readonly child: ExpressionNode) {}

    getValue(context: Context): Value {
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
