package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

class Keys extends RuleFunction {

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        if (args.size() < 1) {
            return new Value([])
        }

        Value inputMap = args[0].getValue(context)
        if (!inputMap.isMap()) {
            return new Value([])
        }

        return new Value(inputMap.asMap().keySet().collect({ key -> new Value(key as String) }))
    }
}
