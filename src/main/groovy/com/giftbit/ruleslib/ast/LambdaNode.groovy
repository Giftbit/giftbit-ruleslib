package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

class LambdaNode extends ExpressionNode {

    final List<String> paramNames
    final ExpressionNode body

    LambdaNode(List<String> paramNames, ExpressionNode body) {
        this.paramNames = paramNames
        this.body = body
    }

    /**
     * It's the caller's responsibility to fill in the parameters
     * in the Context.
     */
    @Override
    Value getValue(Context context) {
        return body.getValue(context)
    }

    @Override
    String toString() {
        if (paramNames.size() == 1) {
            return "${paramNames[0]} => $body"
        }
        return "(${paramNames.join(", ")}) => $body"
    }
}
