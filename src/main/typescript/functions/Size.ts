import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class Size extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        if (args.length < 1) {
            return 0;
        }

        const value = args[0].getValue(context);
        if (Array.isArray(value)) {
            return value.length;
        } else if (typeof value === "string") {
            return value.length
        }

        return 0;
    }
}
