package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class ObjectNode extends ExpressionNode {

    private final Map<String, ExpressionNode> expressionMap

    ObjectNode(Map<String, ExpressionNode> expressionMap) {
        this.expressionMap = expressionMap
    }

    @Override
    Value getValue(Context context) {
        def map = new HashMap<String, Value>()
        for (def kvp : expressionMap) {
            map.put(kvp.key, kvp.value.getValue(context))
        }
        return new Value(map)
    }

    @Override
    boolean isComplex() {
        return false
    }

    @Override
    String toString() {
        return "{${expressionMap.collect({kvp -> "'${kvp.key}': ${kvp.value.toString()}"}).join(", ")}}"
    }
}
