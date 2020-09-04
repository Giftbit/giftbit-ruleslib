import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class FuncCallNode implements ExpressionNode {
    readonly funcName: string;
    readonly args: ExpressionNode[];
    readonly isMethodCall: boolean;
    static readonly type = "FuncCall";
    readonly type = "FuncCall";
    constructor(funcName: string, args: ExpressionNode[], isMethodCall: boolean);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
