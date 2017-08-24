import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Value} from "../Value";
import {Context} from "../Context";

export class RoundBankers extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        const num = this.resolveFirstAsNumber(args, context);
        if (num % 1 === 0.5 && Math.floor(num) % 2 === 0) {
            return Math.round(num - 1);
        }
        return Math.round(num);
    }
}
