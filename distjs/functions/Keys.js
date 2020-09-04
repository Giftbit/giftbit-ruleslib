"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keys = void 0;
const RuleFunction_1 = require("./RuleFunction");
class Keys extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        if (args.length < 1) {
            return [];
        }
        const value = args[0].getValue(context);
        if (value && typeof value === "object" && !Array.isArray(value)) {
            return Object.keys(value);
        }
        return [];
    }
}
exports.Keys = Keys;
