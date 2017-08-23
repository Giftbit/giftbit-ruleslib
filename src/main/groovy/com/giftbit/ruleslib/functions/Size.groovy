package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

class Size extends RuleFunction {

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        if (args.size() < 1) {
            return Value.ZERO
        }

        Value v = args[0].getValue(context)
        if (v.isList()) {
            return new Value(v.asList().size())
        } else if (v.isString()) {
            return new Value(v.asString().size())
        }

        return Value.ZERO
    }
}
