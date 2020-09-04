"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ceil = void 0;
const RuleFunction_1 = require("./RuleFunction");
class Ceil extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        return Math.ceil(this.resolveFirstAsNumber(args, context));
    }
}
exports.Ceil = Ceil;
