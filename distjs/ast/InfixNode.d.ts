import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class InfixNode implements ExpressionNode {
    private readonly left;
    private readonly operator;
    private readonly right;
    static readonly type: string;
    readonly type: string;
    constructor(left: ExpressionNode, operator: string, right: ExpressionNode);
    getValue(context: Context): Value;
    private areEqual(left, right);
    isComplex(): boolean;
    toString(): string;
}
