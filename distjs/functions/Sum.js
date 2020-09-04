"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sum = void 0;
const RuleFunction_1 = require("./RuleFunction");
class Sum extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        return this.getSum(this.resolveAllArgs(args, context));
    }
    getSum(values) {
        let sum = null;
        for (const value of values) {
            if (Array.isArray(value)) {
                const arrayValue = this.getSum(value);
                sum = (sum || 0) + arrayValue;
            }
            else {
                const numValue = +value || 0;
                sum = (sum || 0) + numValue;
            }
        }
        return sum;
    }
}
exports.Sum = Sum;
