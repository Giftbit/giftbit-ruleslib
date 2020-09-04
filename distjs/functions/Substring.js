"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Substring = void 0;
const RuleFunction_1 = require("./RuleFunction");
class Substring extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        const value = this.resolveFirstAsString(args, context);
        let lower = this.resolveAsNumber(1, args, context);
        let higher = args.length > 2 ? this.resolveAsNumber(2, args, context) : value.length;
        if (lower > higher) {
            const temp = lower;
            lower = higher;
            higher = temp;
        }
        if (lower < 0) {
            lower = 0;
        }
        if (higher > value.length) {
            higher = value.length;
        }
        return value.substring(lower, higher);
    }
}
exports.Substring = Substring;
