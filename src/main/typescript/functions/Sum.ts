import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Value} from "../Value";
import {Context} from "../Context";

export class Sum extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        return this.getSum(this.resolveAllArgs(args, context));
    }

    getSum(values: Value[]): number {
        let sum: number | null = null;
        for (const value of values) {
            if (Array.isArray(value)) {
                const arrayValue = this.getSum(value);
                sum = (sum || 0) + arrayValue;
            } else {
                const numValue = +value || 0;
                sum = (sum || 0) + numValue;
            }
        }
        return sum;
    }
}
