import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class FuncCallNode implements ExpressionNode {
    readonly funcName: any;
    readonly args: ExpressionNode[];
    readonly isMethodCall: boolean;
    static readonly type: string;
    readonly type: string;
    constructor(funcName: any, args: ExpressionNode[], isMethodCall: boolean);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
