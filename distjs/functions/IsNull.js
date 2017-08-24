"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RuleFunction_1 = require("./RuleFunction");
class IsNull extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        if (args.length < 1) {
            return true;
        }
        const value = args[0].getValue(context);
        return value === null;
    }
}
exports.IsNull = IsNull;
