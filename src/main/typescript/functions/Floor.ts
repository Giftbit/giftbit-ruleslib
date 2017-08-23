import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Value} from "../Value";
import {Context} from "../Context";

export class Floor extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        return Math.floor(this.resolveFirstAsNumber(args, context));
    }
}
