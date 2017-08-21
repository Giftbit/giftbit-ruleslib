package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value

abstract class ExpressionNode {

    abstract Value getValue(Context context)

    boolean isComplex() {
        return true
    }
}
