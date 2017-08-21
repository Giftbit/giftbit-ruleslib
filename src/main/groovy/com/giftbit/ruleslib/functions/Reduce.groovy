package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode
import com.giftbit.ruleslib.ast.LambdaNode

class Reduce extends Function {

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        if (args.size() < 2 || !(args[1] instanceof LambdaNode)) {
            return Value.NULL
        }

        Value inputList = args[0].getValue(context)
        if (!inputList.isList()) {
            return Value.NULL
        }

        LambdaNode lambda = args[1] as LambdaNode
        if (lambda.paramNames.size() < 1) {
            return Value.NULL
        }

        LambdaContext lambdaContext = new LambdaContext(context, [:])
        Value accumulator = args.size() > 2 ? args[2].getValue(context) : Value.NULL
        List<Value> currentValueList = inputList.asList()
        for (int currentIndex = 0; currentIndex < currentValueList.size(); currentIndex++) {
            if (lambda.paramNames.size() > 0) {
                lambdaContext.lambdaParams[lambda.paramNames[0]] = accumulator
            }
            if (lambda.paramNames.size() > 1) {
                lambdaContext.lambdaParams[lambda.paramNames[1]] = currentValueList[currentIndex]
            }
            if (lambda.paramNames.size() > 2) {
                lambdaContext.lambdaParams[lambda.paramNames[2]] = new Value(currentIndex)
            }
            if (lambda.paramNames.size() > 3) {
                lambdaContext.lambdaParams[lambda.paramNames[3]] = inputList
            }

            accumulator = lambda.getValue(lambdaContext)
        }

        return accumulator
    }
}
