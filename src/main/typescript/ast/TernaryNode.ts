import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class TernaryNode implements ExpressionNode {

    static readonly type = "Ternary";
    readonly type = TernaryNode.type;

    constructor(private readonly condition: ExpressionNode, private readonly consequent: ExpressionNode, private readonly alternative: ExpressionNode) {}

    getValue(context: Context): Value {
        return this.condition.getValue(context) ? this.consequent.getValue(context) : this.alternative.getValue(context);
    }

    isComplex(): boolean {
        return true;
    }

    toString(): string {
        const a = this.condition.isComplex() ? `(${this.condition.toString()})` : this.condition.toString();
        const b = this.consequent.isComplex() ? `(${this.consequent.toString()})` : this.consequent.toString();
        const c = this.alternative.isComplex() ? `(${this.alternative.toString()})` : this.alternative.toString();
        return `${a} ? ${b} : ${c}`;
    }
}
