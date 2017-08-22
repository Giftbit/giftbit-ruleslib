package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class IdentifierNode extends ExpressionNode {

    final String identifier

    IdentifierNode(String identifier) {
        this.identifier = identifier
    }

    @Override
    Value getValue(Context context) {
        def value = context.getValue(identifier)
        if (value == null) {
            value = Value.NULL
        }
        return value
    }

    @Override
    boolean isComplex() {
        return false
    }

    @Override
    String toString() {
        return identifier
    }
}
