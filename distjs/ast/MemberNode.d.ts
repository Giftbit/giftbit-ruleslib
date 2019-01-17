import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class MemberNode implements ExpressionNode {
    readonly parent: ExpressionNode;
    readonly child: ExpressionNode;
    readonly isCalculated: boolean;
    static readonly type = "Member";
    readonly type = "Member";
    constructor(parent: ExpressionNode, child: ExpressionNode, isCalculated: boolean);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
