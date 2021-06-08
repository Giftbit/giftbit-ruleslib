package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

class Flatten extends RuleFunction {

    static List<Value> flatDeep(List<Value> arr, int d) {
        if (d > 0) {
            return arr.inject([], { acc, val -> acc + (val.isList() ? flatDeep(val, d - 1) : val) })
        } else {
            return arr
        }
    }

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        if (args.size() == 0) {
            return new Value([])
        }
    }
}
