import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";
import {LambdaNode} from "../ast/LambdaNode";
import {LambdaContext} from "./LambdaContext";

export class FindLast extends RuleFunction {

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

        const lambdaContext = new LambdaContext(context, {});
        for (let ix = list.length - 1; ix >= 0; ix--) {
            const value = list[ix];
            lambdaContext.setLambdaParamValue(lambda, 0, value);
            if (lambda.getValue(lambdaContext)) {
                return value;
            }
        }

        return null;
    }
}
