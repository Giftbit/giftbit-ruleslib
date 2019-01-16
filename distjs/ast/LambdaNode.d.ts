import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class LambdaNode implements ExpressionNode {
    readonly paramNames: string[];
    readonly body: ExpressionNode;
    static readonly type = "Lambda";
    readonly type = "Lambda";
    constructor(paramNames: string[], body: ExpressionNode);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
