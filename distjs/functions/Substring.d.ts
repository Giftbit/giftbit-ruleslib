import { RuleFunction } from "./RuleFunction";
import { ExpressionNode } from "../ast/ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare class Substring extends RuleFunction {
    invoke(args: ExpressionNode[], context: Context): Value;
}
