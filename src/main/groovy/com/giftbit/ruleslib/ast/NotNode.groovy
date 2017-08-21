package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class NotNode extends UnaryNode {

    NotNode(ExpressionNode child) {
        super(child)
    }

    @Override
    String getOperator() {
        return "!"
    }

    @Override
    Value getValue(Context context) {
        return new Value(!child.getValue(context).asBoolean())
    }
}
