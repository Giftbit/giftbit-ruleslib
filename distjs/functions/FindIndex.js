"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindIndex = void 0;
const RuleFunction_1 = require("./RuleFunction");
const LambdaContext_1 = require("./LambdaContext");
class FindIndex extends RuleFunction_1.RuleFunction {
    invoke(args, context) {
        if (args.length < 2 || args[1].type !== "Lambda") {
            return -1;
        }
        const list = args[0].getValue(context);
        if (!Array.isArray(list)) {
            return -1;
        }
        const lambda = args[1];
        if (lambda.paramNames.length < 1) {
            return -1;
        }
        const lambdaContext = new LambdaContext_1.LambdaContext(context, {});
        for (let ix = 0; ix < list.length; ix++) {
            lambdaContext.setLambdaParamValue(lambda, 0, list[ix]);
            if (lambda.getValue(lambdaContext)) {
                return ix;
            }
        }
        return -1;
    }
}
exports.FindIndex = FindIndex;
