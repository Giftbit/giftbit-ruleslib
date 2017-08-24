import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class IsNull extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        if (args.length < 1) {
            return true;
        }

        const value = args[0].getValue(context);
        return value === null;
    }
}
