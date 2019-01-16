import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class UnaryNode implements ExpressionNode {
    readonly operator: string;
    readonly child: ExpressionNode;
    static readonly type = "Unary";
    readonly type = "Unary";
    constructor(operator: string, child: ExpressionNode);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
