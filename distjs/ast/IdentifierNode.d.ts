import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class IdentifierNode implements ExpressionNode {
    readonly identifier: string;
    static readonly type = "Identifier";
    readonly type = "Identifier";
    constructor(identifier: string);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
