"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RuleFunction_1 = require("./RuleFunction");
class Size extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        if (args.length < 1) {
            return 0;
        }
        const value = args[0].getValue(context);
        if (Array.isArray(value)) {
            return value.length;
        }
        else if (typeof value === "string") {
            return value.length;
        }
        return 0;
    }
}
exports.Size = Size;
