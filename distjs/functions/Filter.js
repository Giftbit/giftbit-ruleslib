"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RuleFunction_1 = require("./RuleFunction");
const LambdaContext_1 = require("./LambdaContext");
class Filter extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        if (args.length < 2 || args[1].type !== "Lambda") {
            return [];
        }
        const list = args[0].getValue(context);
        if (!Array.isArray(list)) {
            return [];
        }
        const lambda = args[1];
        if (lambda.paramNames.length < 1) {
            return [];
        }
        const lambdaContext = new LambdaContext_1.LambdaContext(context, {});
        const res = [];
        for (const value of list) {
            lambdaContext.setLambdaParamValue(lambda, 0, value);
            if (lambda.getValue(lambdaContext)) {
                res.push(value);
            }
        }
        return res;
    }
}
exports.Filter = Filter;
