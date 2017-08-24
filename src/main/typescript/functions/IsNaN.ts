import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class IsNaN extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        if (args.length < 1) {
            return false;
        }

        const value = args[0].getValue(context);
        return Number.isNaN(value);
    }
}
