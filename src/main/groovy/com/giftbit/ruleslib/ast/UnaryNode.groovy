package com.giftbit.ruleslib.ast

abstract class UnaryNode extends ExpressionNode {

    final ExpressionNode child

    UnaryNode(ExpressionNode child) {
        this.child = child
    }

    abstract String getOperator()

    @Override
    boolean isComplex() {
        return child.isComplex()
    }

    @Override
    String toString() {
        return child.isComplex() ? "${operator}(${child})" : "${operator}${child}"
    }
}
