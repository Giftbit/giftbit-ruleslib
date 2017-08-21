package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class LiteralNode extends ExpressionNode {

    final Value value

    LiteralNode(Value value) {
        this.value = value
    }

    LiteralNode(Object o) {
        this.value = Value.fromObject(o)
    }

    @Override
    Value getValue(Context context) {
        return value
    }

    @Override
    boolean isComplex() {
        return false
    }

    @Override
    String toString() {
        return value.toString()
    }
}
