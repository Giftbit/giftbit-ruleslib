package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class MultiplicationNode extends InfixNode {

    MultiplicationNode(ExpressionNode left, ExpressionNode right) {
        super(left, right)
    }

    @Override
    String getOperator() {
        return "*"
    }

    @Override
    Value getValue(Context context) {
        Value leftValue = left.getValue(context)
        Value rightValue = right.getValue(context)
        new Value(leftValue.asNumber() * rightValue.asNumber())
    }
}
