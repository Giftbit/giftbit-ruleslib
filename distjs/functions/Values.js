"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RuleFunction_1 = require("./RuleFunction");
class Values extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        if (args.length < 1) {
            return [];
        }
        const value = args[0].getValue(context);
        if (value && typeof value === "object" && !Array.isArray(value)) {
            return Object.keys(value).map(k => value[k]);
        }
        return [];
    }
}
exports.Values = Values;
