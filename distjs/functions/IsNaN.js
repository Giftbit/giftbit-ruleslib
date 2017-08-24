"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RuleFunction_1 = require("./RuleFunction");
class IsNaN extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        if (args.length < 1) {
            return false;
        }
        const value = args[0].getValue(context);
        return Number.isNaN(value);
    }
}
exports.IsNaN = IsNaN;
