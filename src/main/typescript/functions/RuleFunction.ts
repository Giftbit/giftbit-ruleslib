import {ExpressionNode} from "../ast/ExpressionNode";
import {Context} from "../Context";
import {Value, valueToNumber, valueToString} from "../Value";

export abstract class RuleFunction {

    abstract invoke(args: ExpressionNode[], context: Context): Value;

    resolveAllArgs(args: ExpressionNode[], context: Context): Value[] {
        return args.map(arg => arg.getValue(context));
    }

    resolveFirstAsNumber(args: ExpressionNode[], context: Context): number {
        return this.resolveAsNumber(0, args, context);
    }

    resolveAsNumber(index: number, args: ExpressionNode[], context: Context): number {
        if (index >= args.length) {
            return 0;
        }
        return valueToNumber(args[index].getValue(context));
    }

    resolveFirstAsString(args: ExpressionNode[], context: Context): string {
        return this.resolveAsString(0, args, context);
    }

    resolveAsString(index: number, args: ExpressionNode[], context: Context): string {
        if (index >= args.length) {
            return "";
        }
        return valueToString(args[index].getValue(context));
    }
}
