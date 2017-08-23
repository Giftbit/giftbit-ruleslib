import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Value} from "../Value";
import {Context} from "../Context";

export class Abs extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        return Math.abs(this.resolveFirstAsNumber(args, context));
    }
}
