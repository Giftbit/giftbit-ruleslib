"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RuleFunction_1 = require("./RuleFunction");
class ToLowerCase extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        return this.resolveFirstAsString(args, context).toLowerCase();
    }
}
exports.ToLowerCase = ToLowerCase;
