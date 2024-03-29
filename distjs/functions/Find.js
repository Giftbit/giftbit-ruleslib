"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Find = void 0;
const RuleFunction_1 = require("./RuleFunction");
const LambdaContext_1 = require("./LambdaContext");
class Find extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        if (args.length < 2 || args[1].type !== "Lambda") {
            return null;
        }
        const list = args[0].getValue(context);
        if (!Array.isArray(list)) {
            return null;
        }
        const lambda = args[1];
        if (lambda.paramNames.length < 1) {
            return null;
        }
        const lambdaContext = new LambdaContext_1.LambdaContext(context, {});
        for (const value of list) {
            lambdaContext.setLambdaParamValue(lambda, 0, value);
            if (lambda.getValue(lambdaContext)) {
                return value;
            }
        }
        return null;
    }
}
exports.Find = Find;
