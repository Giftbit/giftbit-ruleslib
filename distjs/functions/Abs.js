"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RuleFunction_1 = require("./RuleFunction");
class Abs extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        return Math.abs(this.resolveFirstAsNumber(args, context));
    }
}
exports.Abs = Abs;
