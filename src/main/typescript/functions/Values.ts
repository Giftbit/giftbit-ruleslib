import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class Values extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        if (args.length < 1) {
            return [];
        }

        const value = args[0].getValue(context);
        if (value && typeof value === "object" && !Array.isArray(value)) {
            return Object.keys(value).map(k => value[k]);
        }

        return [];
    }
}
