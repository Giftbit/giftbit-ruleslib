package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

class Min extends Function {

    static Value getMin(List<Value> args) {
        Number min = null
        for (int i=0; i < args.size(); i++) {
            Number value = args[i].isList() ? getMin(args[i].asList()).asNumber() : args[i].asNumber()
            if (min == null || value < min) {
                min = value
            }
        }
        return min == null ? Value.NULL : new Value(min)
    }

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        return getMin(resolveAllArgs(args, context))
    }
}
