"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleFunction = void 0;
const Value_1 = require("../Value");
class RuleFunction {
    resolveAllArgs(args, context) {
        return args.map(arg => arg.getValue(context));
    }
    resolveFirstAsNumber(args, context) {
        return this.resolveAsNumber(0, args, context);
    }
    resolveAsNumber(index, args, context) {
        if (index >= args.length) {
            return 0;
        }
        return Value_1.valueToNumber(args[index].getValue(context));
    }
    resolveFirstAsString(args, context) {
        return this.resolveAsString(0, args, context);
    }
    resolveAsString(index, args, context) {
        if (index >= args.length) {
            return "";
        }
        return Value_1.valueToString(args[index].getValue(context));
    }
}
exports.RuleFunction = RuleFunction;
