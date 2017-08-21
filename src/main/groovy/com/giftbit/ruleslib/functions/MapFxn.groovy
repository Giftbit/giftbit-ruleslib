package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode
import com.giftbit.ruleslib.ast.LambdaNode

class MapFxn extends Function {

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        if (args.size() < 2 || !(args[1] instanceof LambdaNode)) {
            return Value.EMPTY
        }

        Value inputList = args[0].getValue(context)
        if (!inputList.isList()) {
            return Value.EMPTY
        }

        LambdaNode lambda = args[1] as LambdaNode
        if (lambda.paramNames.size() < 1) {
            return Value.EMPTY
        }

        List<Value> output = []
        LambdaContext lambdaContext = new LambdaContext(context, [:])
        for (Value value in inputList.asList()) {
            lambdaContext.lambdaParams[lambda.paramNames[0]] = value
            output.push(lambda.getValue(lambdaContext))
        }

        return new Value(output)
    }
}
