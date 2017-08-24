import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class FuncCallNode implements ExpressionNode {
    private readonly funcName;
    private readonly args;
    private readonly isMethodCall;
    readonly type: string;
    constructor(funcName: any, args: ExpressionNode[], isMethodCall: boolean);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
