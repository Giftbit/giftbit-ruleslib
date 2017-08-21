package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class UnaryPlusNode extends UnaryNode {

    UnaryPlusNode(ExpressionNode child) {
        super(child)
    }

    @Override
    String getOperator() {
        return "+"
    }

    @Override
    Value getValue(Context context) {
        return new Value(child.getValue(context).asNumber())
    }
}
