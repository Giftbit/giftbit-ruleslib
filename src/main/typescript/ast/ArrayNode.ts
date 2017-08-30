import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class ArrayNode implements ExpressionNode {

    static readonly type = "Array";
    readonly type = ArrayNode.type;

    constructor(private readonly elements: ExpressionNode[]) {}

    getValue(context: Context): Value {
        return this.elements.map(e => e.getValue(context));
    }

    isComplex(): boolean {
        return false;
    }

    toString(): string {
        return `[${this.elements.map(e => e.toString()).join(", ")}]`;
    }
}
