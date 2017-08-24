package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

class IsNaN extends RuleFunction {

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        if (args.size() < 1) {
            return Value.FALSE
        }

        Value value = args[0].getValue(context)
        return new Value(value.isNumber() && Double.isNaN(value.asNumber() as double))
    }
}
