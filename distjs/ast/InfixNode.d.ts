import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class InfixNode implements ExpressionNode {
    readonly left: ExpressionNode;
    readonly operator: string;
    readonly right: ExpressionNode;
    static readonly type = "Infix";
    readonly type = "Infix";
    constructor(left: ExpressionNode, operator: string, right: ExpressionNode);
    getValue(context: Context): Value;
    private areEqual;
    isComplex(): boolean;
    toString(): string;
}
