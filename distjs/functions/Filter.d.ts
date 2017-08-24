import { RuleFunction } from "./RuleFunction";
import { ExpressionNode } from "../ast/ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class Filter extends RuleFunction {
    invoke(args: ExpressionNode[], context: Context): Value;
}
