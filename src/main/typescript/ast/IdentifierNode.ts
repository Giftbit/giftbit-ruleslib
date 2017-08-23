import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class IdentifierNode implements ExpressionNode {

    readonly type = "Identifier";

    constructor(private readonly identifier: string) {}

    getValue(context: Context): Value {
        return context.getValue(this.identifier);
    }

    isComplex(): boolean {
        return false;
    }

    toString(): string {
        return this.identifier;
    }
}
