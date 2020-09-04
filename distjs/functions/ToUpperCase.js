"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToUpperCase = void 0;
const RuleFunction_1 = require("./RuleFunction");
class ToUpperCase extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        return this.resolveFirstAsString(args, context).toUpperCase();
    }
}
exports.ToUpperCase = ToUpperCase;
