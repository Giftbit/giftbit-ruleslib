package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

import java.math.RoundingMode

class RoundBankers extends RuleFunction {

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        return new Value(new BigDecimal(resolveFirstAsNumber(args, context)).setScale(0, RoundingMode.HALF_EVEN).longValue())
    }
}
