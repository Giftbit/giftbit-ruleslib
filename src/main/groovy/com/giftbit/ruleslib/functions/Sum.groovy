package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

class Sum extends RuleFunction {

    static Value getSum(List<Value> args) {
        Number sum = null
        for (int i=0; i < args.size(); i++) {
            if (args[i].isList())  {
                sum = (sum ?: 0) + getSum(args[i].asList()).asNumber()
            } else {
                sum = (sum ?: 0) + args[i].asNumber()
            }
        }
        return sum == null ? Value.NULL : new Value(sum)
    }

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        return getSum(resolveAllArgs(args, context))
    }
}
