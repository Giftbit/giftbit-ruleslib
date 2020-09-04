"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abs = void 0;
const RuleFunction_1 = require("./RuleFunction");
class Abs extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        return Math.abs(this.resolveFirstAsNumber(args, context));
    }
}
exports.Abs = Abs;
