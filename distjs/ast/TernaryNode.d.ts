import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class TernaryNode implements ExpressionNode {
    readonly condition: ExpressionNode;
    readonly consequent: ExpressionNode;
    readonly alternative: ExpressionNode;
    static readonly type: string;
    readonly type: string;
    constructor(condition: ExpressionNode, consequent: ExpressionNode, alternative: ExpressionNode);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
