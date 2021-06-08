"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flatten = void 0;
const RuleFunction_1 = require("./RuleFunction");
class Flatten extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
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
exports.Flatten = Flatten;
function flatDeep(arr, d) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
}
