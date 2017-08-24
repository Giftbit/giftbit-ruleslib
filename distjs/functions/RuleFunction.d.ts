import { ExpressionNode } from "../ast/ExpressionNode";
import { Context } from "../Context";
import { Value } from "../Value";
export declare abstract class RuleFunction {
    abstract invoke(args: ExpressionNode[], context: Context): Value;
    resolveAllArgs(args: ExpressionNode[], context: Context): Value[];
    resolveFirstAsNumber(args: ExpressionNode[], context: Context): number;
    resolveAsNumber(index: number, args: ExpressionNode[], context: Context): number;
    resolveFirstAsString(args: ExpressionNode[], context: Context): string;
    resolveAsString(index: number, args: ExpressionNode[], context: Context): string;
}
