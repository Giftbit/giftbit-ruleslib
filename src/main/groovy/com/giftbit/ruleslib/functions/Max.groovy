package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

class Max extends Function {

    static Value getMax(List<Value> values) {
        Number max = null
        for (int i=0; i < values.size(); i++) {
            Number value = values[i].isList() ? getMax(values[i].asList()).asNumber() : values[i].asNumber()
            if (max == null || value > max) {
                max = value
            }
        }
        return max == null ? Value.NULL : new Value(max)
    }

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        return getMax(resolveAllArgs(args, context))
    }
}
