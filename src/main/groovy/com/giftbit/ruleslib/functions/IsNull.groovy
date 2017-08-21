package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

class IsNull extends Function {

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        if (args.size() == 0) {
            return Value.TRUE
        }

        return args[0].getValue(context).isNull() ? Value.TRUE : Value.FALSE
    }
}
