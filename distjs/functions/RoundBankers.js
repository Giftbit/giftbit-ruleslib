"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundBankers = void 0;
const RuleFunction_1 = require("./RuleFunction");
class RoundBankers extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        const num = this.resolveFirstAsNumber(args, context);
        if ((num < 0 && num % 1 === -0.5 && Math.floor(num) % 2 === 0) || (num % 1 === 0.5 && Math.floor(num) % 2 === 0)) {
            return Math.round(num - 0.5);
        }
        return Math.round(num);
    }
}
exports.RoundBankers = RoundBankers;
