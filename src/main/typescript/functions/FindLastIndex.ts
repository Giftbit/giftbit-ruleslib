import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";
import {LambdaNode} from "../ast/LambdaNode";
import {LambdaContext} from "./LambdaContext";

export class FindLastIndex extends RuleFunction {

    invoke(args: ExpressionNode[], context: Context): Value {
        if (args.length < 2 || args[1].type !== "Lambda") {
            return -1;
        }

        const list = args[0].getValue(context);
        if (!Array.isArray(list)) {
            return -1;
        }

        const lambda = args[1] as LambdaNode;
        if (lambda.paramNames.length < 1) {
            return -1;
        }

        const lambdaContext = new LambdaContext(context, {});
        for (let ix = list.length - 1; ix >= 0; ix--) {
            lambdaContext.setLambdaParamValue(lambda, 0, list[ix]);
            if (lambda.getValue(lambdaContext)) {
                return ix;
            }
        }

        return -1;
    }
}
