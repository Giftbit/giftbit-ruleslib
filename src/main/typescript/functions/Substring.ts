import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class Substring extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        const value = this.resolveFirstAsString(args, context);

        let lower = this.resolveAsNumber(1, args, context);
        let higher = args.length > 2 ? this.resolveAsNumber(2, args, context) : value.length;
        if (lower > higher) {
            const temp = lower;
            lower = higher;
            higher = temp;
        }
        if (lower < 0) {
            lower = 0;
        }
        if (higher > value.length) {
            higher = value.length;
        }
        return value.substring(lower, higher);
    }
}
