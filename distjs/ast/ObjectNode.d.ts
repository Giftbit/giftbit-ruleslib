import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class ObjectNode implements ExpressionNode {
    readonly expressionMap: {
        [key: string]: ExpressionNode;
    };
    static readonly type = "Object";
    readonly type = "Object";
    constructor(expressionMap: {
        [key: string]: ExpressionNode;
    });
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
