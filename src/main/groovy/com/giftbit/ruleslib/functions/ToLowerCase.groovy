package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.ast.ExpressionNode

class ToLowerCase extends RuleFunction {

    @Override
    Value invoke(List<ExpressionNode> args, Context context) {
        if (args.size() < 1) {
            return Value.NULL
        }

        return new Value(args[0].getValue(context).asString().toLowerCase(Locale.US))
    }
}
