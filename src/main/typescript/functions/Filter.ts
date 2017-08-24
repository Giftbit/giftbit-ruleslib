import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";
import {LambdaNode} from "../ast/LambdaNode";
import {LambdaContext} from "./LambdaContext";

export class Filter extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        if (args.length < 2 || args[1].type !== "Lambda") {
            return [];
        }

        const list = args[0].getValue(context);
        if (!Array.isArray(list)) {
            return [];
        }

        const lambda = args[1] as LambdaNode;
        if (lambda.paramNames.length < 1) {
            return [];
        }

        const lambdaContext = new LambdaContext(context, {});
        const res: Value[] = [];
        for (const value of list) {
            lambdaContext.setLambdaParamValue(lambda, 0, value);
            if (lambda.getValue(lambdaContext)) {
                res.push(value)
            }
        }

        return res;
    }
}
