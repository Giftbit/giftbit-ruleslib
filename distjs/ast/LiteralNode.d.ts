import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class LiteralNode implements ExpressionNode {
    readonly value: Value;
    static readonly type: string;
    readonly type: string;
    constructor(value: Value);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
