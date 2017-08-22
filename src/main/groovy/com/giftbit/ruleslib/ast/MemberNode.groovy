package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class MemberNode extends ExpressionNode {

    final ExpressionNode parent
    final ExpressionNode child
    final boolean isCalculated

    MemberNode(ExpressionNode parent, ExpressionNode child, boolean isCalculated) {
        this.parent = parent
        this.child = child
        this.isCalculated = isCalculated
    }

    @Override
    Value getValue(Context context) {
        Value parentValue = parent.getValue(context)

        if (parentValue.isList()) {
            List<Value> parentList = parentValue.asList()
            int ix = child.getValue(context).asNumber().intValue()
            if (ix >= 0 && ix < parentList.size()) {
                return parentList[ix]
            }
        } else if (parentValue.isMap()) {
            Map<String, Value> parentMap = parentValue.asMap()
            String key = child.getValue(context).asString()
            Value v = parentMap[key]
            if (v == null) {
                return Value.NULL
            }
            return v
        }

        return Value.NULL
    }

    @Override
    boolean isComplex() {
        return false
    }

    @Override
    String toString() {
        if (isCalculated) {
            return "${parent.isComplex() ? "($parent)" : parent}[$child]"
        }
        return "${parent.isComplex() ? "($parent)" : parent}.$child"
    }
}
