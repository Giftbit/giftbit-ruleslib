import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Value} from "../Value";
import {Context} from "../Context";

export class Flatten extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        if (args.length === 0) {
            return [];
        }

        const list = args[0].getValue(context);
        if (!Array.isArray(list)) {
            return [list];
        }

        const depth = args.length >= 2 ? this.resolveAsNumber(1, args, context) : 1;
        return flatDeep(list, depth);
    }
}

/**
 * The MDN polyfill for Array.prototype.flat().
 * @param arr array to flatten
 * @param d depth to flatten to
 */
function flatDeep(arr: any[], d: number): any[] {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
}
