"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RuleFunction_1 = require("./RuleFunction");
class Floor extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        return Math.floor(this.resolveFirstAsNumber(args, context));
    }
}
exports.Floor = Floor;
