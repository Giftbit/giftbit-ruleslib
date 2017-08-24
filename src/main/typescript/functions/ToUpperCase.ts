import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class ToUpperCase extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        return this.resolveFirstAsString(args, context).toUpperCase();
    }
}
