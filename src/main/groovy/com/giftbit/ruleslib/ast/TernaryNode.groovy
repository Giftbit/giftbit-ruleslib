package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class TernaryNode extends ExpressionNode {

    final ExpressionNode condition
    final ExpressionNode consequent
    final ExpressionNode alternative

    TernaryNode(ExpressionNode condition, ExpressionNode consequent, ExpressionNode alternative) {
        this.condition = condition
        this.consequent = consequent
        this.alternative = alternative
    }

    @Override
    Value getValue(Context context) {
        return condition.getValue(context).asBoolean() ? consequent.getValue(context) : alternative.getValue(context)
    }

    @Override
    String toString() {
        return "${condition.isComplex() ? "($condition)" : condition} ? ${consequent.isComplex() ? "($consequent)" : consequent} : ${alternative.isComplex() ? "($alternative)" : alternative}"
    }
}
