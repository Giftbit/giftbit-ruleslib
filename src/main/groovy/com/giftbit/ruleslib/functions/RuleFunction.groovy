package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

abstract class RuleFunction {

    List<Value> resolveAllArgs(List<ExpressionNode> args, Context context) {
        return args.collect({arg -> arg.getValue(context)})
    }

    Number resolveFirstAsNumber(List<ExpressionNode> args, Context context) {
        if (args.size() < 0) {
            return 0L
        }
        return args[0].getValue(context).asNumber()
    }

    abstract Value invoke(List<ExpressionNode> args, Context context)

}
