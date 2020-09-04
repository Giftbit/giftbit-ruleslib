"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Min = void 0;
const RuleFunction_1 = require("./RuleFunction");
class Min extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        return this.getMin(this.resolveAllArgs(args, context));
    }
    getMin(values) {
        let min = null;
        for (const value of values) {
            if (Array.isArray(value)) {
                const arrayValue = this.getMin(value);
                if (min === null || arrayValue < min) {
                    min = arrayValue;
                }
            }
            else {
                const numValue = +value || 0;
                if (min === null || numValue < min) {
                    min = numValue;
                }
            }
        }
        return min;
    }
}
exports.Min = Min;
