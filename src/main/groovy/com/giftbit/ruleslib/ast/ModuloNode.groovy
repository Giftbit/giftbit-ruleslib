package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class ModuloNode extends InfixNode {

    ModuloNode(ExpressionNode left, ExpressionNode right) {
        super(left, right)
    }

    @Override
    String getOperator() {
        return "%"
    }

    @Override
    Value getValue(Context context) {
        def leftValue = left.getValue(context).asNumber()
        def rightValue = right.getValue(context).asNumber()
        if (rightValue == 0L || rightValue == 0.0D) {
            return new Value(Double.NaN)
        }
        return new Value(leftValue % rightValue)
    }
}
