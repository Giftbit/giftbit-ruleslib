package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class UnaryMinusNode extends UnaryNode {

    UnaryMinusNode(ExpressionNode child) {
        super(child)
    }

    @Override
    String getOperator() {
        return "-"
    }

    @Override
    Value getValue(Context context) {
        return new Value(child.getValue(context).asNumber() * -1)
    }
}
