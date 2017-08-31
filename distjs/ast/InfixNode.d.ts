import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class InfixNode implements ExpressionNode {
    readonly left: ExpressionNode;
    readonly operator: string;
    readonly right: ExpressionNode;
    static readonly type: string;
    readonly type: string;
    constructor(left: ExpressionNode, operator: string, right: ExpressionNode);
    getValue(context: Context): Value;
    private areEqual(left, right);
    isComplex(): boolean;
    toString(): string;
}
