import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class LambdaNode implements ExpressionNode {
    readonly paramNames: string[];
    readonly body: ExpressionNode;
    readonly type: string;
    constructor(paramNames: string[], body: ExpressionNode);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
