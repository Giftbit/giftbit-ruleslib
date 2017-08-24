"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RuleFunction_1 = require("./RuleFunction");
class Max extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        return this.getMax(this.resolveAllArgs(args, context));
    }
    getMax(values) {
        let max = null;
        for (const value of values) {
            if (Array.isArray(value)) {
                const arrayValue = this.getMax(value);
                if (max === null || arrayValue > max) {
                    max = arrayValue;
                }
            }
            else {
                const numValue = +value || 0;
                if (max === null || numValue > max) {
                    max = numValue;
                }
            }
        }
        return max;
    }
}
exports.Max = Max;
