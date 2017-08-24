import {RuleFunction} from "./RuleFunction";
import {ExpressionNode} from "../ast/ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";
import {LambdaNode} from "../ast/LambdaNode";
import {LambdaContext} from "./LambdaContext";

export class MapFxn extends RuleFunction {

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

        const res: Value[] = new Array(list.length);
        const lambdaContext = new LambdaContext(context, {});
        for (let ix = 0; ix < list.length; ix++) {
            lambdaContext.setLambdaParamValue(lambda, 0, list[ix]);
            res[ix] = lambda.getValue(lambdaContext);
        }

        return res;
    }
}
