package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class LambdaContext implements Context {

    final Map<String, Value> lambdaParams
    final Context baseContext

    LambdaContext(Context baseContext, Map<String, Value> lambdaParams) {
        this.lambdaParams = lambdaParams
        this.baseContext = baseContext
    }

    @Override
    Function getFunction(String name) {
        return baseContext.getFunction(name)
    }

    @Override
    Value getValue(String identifier) {
        Value v = lambdaParams[identifier]
        if (v == null) {
            v = baseContext.getValue(identifier)
        }
        return v
    }
}
