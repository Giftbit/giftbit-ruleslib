import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class ArrayNode implements ExpressionNode {
    private readonly elements;
    static readonly type: string;
    readonly type: string;
    constructor(elements: ExpressionNode[]);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
