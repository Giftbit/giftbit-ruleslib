package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class DivisionNode extends InfixNode {

    DivisionNode(ExpressionNode left, ExpressionNode right) {
        super(left, right)
    }

    @Override
    String getOperator() {
        return "/"
    }

    @Override
    Value getValue(Context context) {
        Value leftValue = left.getValue(context)
        Value rightValue = right.getValue(context)
        if (((leftValue.asNumber() as Double) % rightValue.asNumber()) == 0) {
            return new Value(leftValue.asNumber() / rightValue.asNumber())
        }
        new Value((leftValue.asNumber() as Double) / rightValue.asNumber())
    }
}
