import { RuleFunction } from "./RuleFunction";
import { ExpressionNode } from "../ast/ExpressionNode";
import { Value } from "../Value";
import { Context } from "../Context";
export declare class Min extends RuleFunction {
    invoke(args: ExpressionNode[], context: Context): Value;
    getMin(values: Value[]): number;
}
