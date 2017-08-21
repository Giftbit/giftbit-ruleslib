package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode
import com.giftbit.ruleslib.ast.LambdaNode

class FindIndex extends Function {

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        if (args.size() < 2 || !(args[1] instanceof LambdaNode)) {
            return new Value(-1)
        }

        Value inputList = args[0].getValue(context)
        if (!inputList.isList()) {
            return new Value(-1)
        }

        LambdaNode lambda = args[1] as LambdaNode
        if (lambda.paramNames.size() < 1) {
            return new Value(-1)
        }

        LambdaContext lambdaContext = new LambdaContext(context, [:])
        List<Value> input = inputList.asList()
        for (int i = 0; i < input.size(); i++) {
            Value value = input[i]
            lambdaContext.lambdaParams[lambda.paramNames[0]] = value
            if (lambda.getValue(lambdaContext).asBoolean()) {
                return new Value(i)
            }
        }

        return new Value(-1)
    }
}
