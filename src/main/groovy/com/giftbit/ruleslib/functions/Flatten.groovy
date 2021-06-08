package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

class Flatten extends RuleFunction {

    static Value flatDeep(Value arr, Number d) {
        println('flatDeep ' + arr + ' ' + d)
        if (d > 0) {
            return new Value(arr.asList().inject([], { acc, val -> acc + (val.isList() ? flatDeep(val, d - 1).asList() : val) }))
        } else {
            println('nothing to do ' + arr)
            return arr
        }
    }

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        if (args.size() == 0) {
            return new Value([])
        }

        Value list = args[0].getValue(context)
        if (!list.isList()) {
            return new Value([list])
        }

        Number depth = args.size() >= 2 ? args[1].getValue(context).asNumber() : 1
        return flatDeep(list, depth)
    }
}
