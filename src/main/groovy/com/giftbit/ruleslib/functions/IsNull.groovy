package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

class IsNull extends RuleFunction {

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        if (args.size() == 0) {
            return Value.TRUE
        }

        Value value = args[0].getValue(context)
        return value.isNull() ? Value.TRUE : Value.FALSE
    }
}
