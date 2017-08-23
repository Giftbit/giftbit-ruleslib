import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class ArrayNode implements ExpressionNode {

    readonly type = "Array";

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
