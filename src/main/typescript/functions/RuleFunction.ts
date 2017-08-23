import {ExpressionNode} from "../ast/ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export abstract class RuleFunction {

    abstract invoke(args: ExpressionNode[], context: Context): Value;

    resolveAllArgs(args: ExpressionNode[], context: Context): Value[] {
        return args.map(arg => arg.getValue(context));
    }

    resolveFirstAsNumber(args: ExpressionNode[], context: Context): number {
        if (args.length < 0) {
            return 0;
        }
        return +args[0].getValue(context) || 0;
    }
}
