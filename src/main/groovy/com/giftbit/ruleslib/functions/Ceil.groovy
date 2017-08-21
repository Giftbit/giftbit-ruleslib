package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

class Ceil extends Function {


    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        return new Value(Math.ceil(resolveFirstAsNumber(args, context)))
    }
}
