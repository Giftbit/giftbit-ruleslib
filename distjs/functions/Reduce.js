"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reduce = void 0;
const RuleFunction_1 = require("./RuleFunction");
const LambdaContext_1 = require("./LambdaContext");
class Reduce extends RuleFunction_1.RuleFunction {
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
        let accumulator = args.length > 2 ? args[2].getValue(context) : null;
        const lambdaContext = new LambdaContext_1.LambdaContext(context, {});
        for (let ix = 0; ix < list.length; ix++) {
            lambdaContext.setLambdaParamValue(lambda, 0, accumulator);
            lambdaContext.setLambdaParamValue(lambda, 1, list[ix]);
            lambdaContext.setLambdaParamValue(lambda, 2, ix);
            lambdaContext.setLambdaParamValue(lambda, 3, list);
            accumulator = lambda.getValue(lambdaContext);
        }
        return accumulator;
    }
}
exports.Reduce = Reduce;
