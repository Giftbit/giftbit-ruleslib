import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class LiteralNode implements ExpressionNode {

    readonly type = "Literal";

    constructor(private readonly value: Value) {}

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
