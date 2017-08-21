package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class OrNode extends InfixNode {

    OrNode(ExpressionNode left, ExpressionNode right) {
        super(left, right)
    }

    @Override
    String getOperator() {
        return "||"
    }

    @Override
    Value getValue(Context context) {
        Value leftValue = left.getValue(context)
        return leftValue.asBoolean() ? leftValue : right.getValue(context)
    }
}
