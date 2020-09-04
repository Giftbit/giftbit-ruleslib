"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Round = void 0;
const RuleFunction_1 = require("./RuleFunction");
class Round extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        return Math.round(this.resolveFirstAsNumber(args, context));
    }
}
exports.Round = Round;
