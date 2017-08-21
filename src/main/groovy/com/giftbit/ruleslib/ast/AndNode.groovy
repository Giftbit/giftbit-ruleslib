package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class AndNode extends InfixNode {

    AndNode(ExpressionNode left, ExpressionNode right) {
        super(left, right)
    }

    @Override
    String getOperator() {
        return "&&"
    }

    @Override
    Value getValue(Context context) {
        Value leftValue = left.getValue(context)
        return leftValue.asBoolean() ? right.getValue(context) : leftValue
    }
}
