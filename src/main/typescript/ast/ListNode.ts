import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class ListNode implements ExpressionNode {

    static readonly type = "List";
    readonly type = ListNode.type;

    constructor(public readonly elements: ExpressionNode[]) {}

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
