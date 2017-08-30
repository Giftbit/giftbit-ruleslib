import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class MemberNode implements ExpressionNode {
    private readonly parent;
    private readonly child;
    private readonly isCalculated;
    static readonly type: string;
    readonly type: string;
    constructor(parent: ExpressionNode, child: ExpressionNode, isCalculated: boolean);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
