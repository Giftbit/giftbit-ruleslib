import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class LiteralNode implements ExpressionNode {
    private readonly value;
    readonly type: string;
    constructor(value: Value);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
