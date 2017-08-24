import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Value} from "../Value";
import {Context} from "../Context";

export class Round extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        return Math.round(this.resolveFirstAsNumber(args, context));
    }
}
