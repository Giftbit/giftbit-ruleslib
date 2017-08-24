import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class TernaryNode implements ExpressionNode {
    private readonly condition;
    private readonly consequent;
    private readonly alternative;
    readonly type: string;
    constructor(condition: ExpressionNode, consequent: ExpressionNode, alternative: ExpressionNode);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}