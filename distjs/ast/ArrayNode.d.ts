import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class ArrayNode implements ExpressionNode {
    private readonly elements;
    readonly type: string;
    constructor(elements: ExpressionNode[]);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
