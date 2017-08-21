package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class ArrayNode extends ExpressionNode {

    final List<ExpressionNode> elements

    ArrayNode(List<ExpressionNode> elements) {
        this.elements = elements
    }

    @Override
    Value getValue(Context context) {
        return new Value(elements.collect({ element -> element.getValue(context)}))
    }

    @Override
    boolean isComplex() {
        return false
    }

    @Override
    String toString() {
        return "[${elements.collect({element -> element.toString()}).join(", ")}]"
    }
}
