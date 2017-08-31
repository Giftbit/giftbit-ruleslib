import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class ListNode implements ExpressionNode {
    readonly elements: ExpressionNode[];
    static readonly type: string;
    readonly type: string;
    constructor(elements: ExpressionNode[]);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
