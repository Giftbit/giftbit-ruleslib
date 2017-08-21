package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

class Substring extends Function {

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        if (args.size() == 0) {
            return Value.NULL
        }

        String s = args[0].getValue(context).asString()

        int start = args.size() >= 2 ? args[1].getValue(context).asNumber() : 0
        if (start < 0) {
            start = 0
        } else if (start > s.length()) {
            start = s.length()
        }

        int end = args.size() >= 3 ? args[2].getValue(context).asNumber() : s.length()
        if (end < 0) {
            end = 0
        } else if (end > s.length()) {
            end = s.length()
        }
        if (start > end) {
            int temp = start
            start = end
            end = temp
        }

        return new Value(s.substring(start, end))
    }
}
