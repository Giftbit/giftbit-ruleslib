import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Value} from "../Value";
import {Context} from "../Context";

export class Max extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        return this.getMax(this.resolveAllArgs(args, context));
    }

    getMax(values: Value[]): number {
        let max: number | null = null;
        for (const value of values) {
            if (Array.isArray(value)) {
                const arrayValue = this.getMax(value);
                if (max === null || arrayValue > max) {
                    max = arrayValue;
                }
            } else {
                const numValue = +value || 0;
                if (max === null || numValue > max) {
                    max = numValue;
                }
            }
        }
        return max;
    }
}
