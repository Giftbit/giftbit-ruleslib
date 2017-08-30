import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class LiteralNode implements ExpressionNode {

    static readonly type = "Literal";
    readonly type = LiteralNode.type;

    constructor(public readonly value: Value) {}

    getValue(context: Context): Value {
        return this.value;
    }

    isComplex(): boolean {
        return false;
    }

    toString(): string {
        return JSON.stringify(this.value);
    }
}
