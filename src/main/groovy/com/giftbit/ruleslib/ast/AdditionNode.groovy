package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class AdditionNode extends InfixNode {

    AdditionNode(ExpressionNode left, ExpressionNode right) {
        super(left, right)
    }

    @Override
    String getOperator() {
        return "+"
    }

    @Override
    Value getValue(Context context) {
        Value leftValue = left.getValue(context)
        Value rightValue = right.getValue(context)
        if (leftValue.isString() || rightValue.isString()) {
            return new Value(leftValue.asString() + rightValue.asString())
        }
        return new Value(leftValue.asNumber() + rightValue.asNumber())
    }
}
