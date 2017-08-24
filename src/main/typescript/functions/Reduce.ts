import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";
import {LambdaNode} from "../ast/LambdaNode";
import {LambdaContext} from "./LambdaContext";

export class Reduce extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        if (args.length < 2 || args[1].type !== "Lambda") {
            return null;
        }

        const list = args[0].getValue(context);
        if (!Array.isArray(list)) {
            return null;
        }

        const lambda = args[1] as LambdaNode;
        if (lambda.paramNames.length < 1) {
            return null;
        }

        let accumulator: Value = args.length > 2 ? args[2].getValue(context) : null;
        const lambdaContext = new LambdaContext(context, {});
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
