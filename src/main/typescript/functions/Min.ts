import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Value} from "../Value";
import {Context} from "../Context";

export class Min extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        return this.getMin(this.resolveAllArgs(args, context));
    }

    getMin(values: Value[]): number {
        let min: number | null = null;
        for (const value of values) {
            if (Array.isArray(value)) {
                const arrayValue = this.getMin(value);
                if (min === null || arrayValue < min) {
                    min = arrayValue;
                }
            } else {
                const numValue = +value || 0;
                if (min === null || numValue < min) {
                    min = numValue;
                }
            }
        }
        return min;
    }
}
