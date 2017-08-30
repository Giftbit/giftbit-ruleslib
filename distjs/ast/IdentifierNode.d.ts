import { ExpressionNode } from "./ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class IdentifierNode implements ExpressionNode {
    private readonly identifier;
    static readonly type: string;
    readonly type: string;
    constructor(identifier: string);
    getValue(context: Context): Value;
    isComplex(): boolean;
    toString(): string;
}
