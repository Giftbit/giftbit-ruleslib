import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class UnaryNode implements ExpressionNode {
    private readonly operator;
    private readonly child;
    readonly type: string;
    constructor(operator: string, child: ExpressionNode);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}