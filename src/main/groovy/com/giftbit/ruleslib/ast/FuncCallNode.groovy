package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.Value
import com.giftbit.ruleslib.functions.Function

class FuncCallNode extends ExpressionNode {

    final String funcName
    final ExpressionNode thisArg
    final List<ExpressionNode> args

    FuncCallNode(String funcName, List<ExpressionNode> args) {
        this.funcName = funcName
        this.thisArg = null
        this.args = args
    }

    FuncCallNode(String funcName, ExpressionNode thisArg, List<ExpressionNode> args) {
        this.funcName = funcName
        this.thisArg = thisArg
        this.args = [thisArg] + args
    }

    @Override
    Value getValue(Context context) {
        Function func = context.getFunction(funcName)
        if (!func) {
            return Value.NULL
        }

        return func.invoke(args, context)
    }

    @Override
    String toString() {
        if (thisArg) {
            return "${thisArg}.${funcName}(${args.subList(1, args.size()).collect({ a -> a.toString() }).join(", ")})"
        }
        return "${funcName}(${args.collect({ a -> a.toString() }).join(", ")})"
    }
}
