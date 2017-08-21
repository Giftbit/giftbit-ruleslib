package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class ComparisonNode extends InfixNode {

    final String operator

    ComparisonNode(ExpressionNode left, String operator, ExpressionNode right) {
        super(left, right)
        this.operator = operator
    }

    @Override
    String getOperator() {
        return operator
    }

    @Override
    Value getValue(Context context) {
        Number leftValue = left.getValue(context).asNumber()
        Number rightValue = right.getValue(context).asNumber()
        switch (operator) {
            case ">": return new Value(leftValue > rightValue)
            case ">=": return new Value(leftValue >= rightValue)
            case "<": return new Value(leftValue < rightValue)
            case "<=": return new Value(leftValue <= rightValue)
        }
        throw new UnsupportedOperationException()
    }
}
