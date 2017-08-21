package com.giftbit.ruleslib.ast

abstract class InfixNode extends ExpressionNode {

    final ExpressionNode left
    final ExpressionNode right

    InfixNode(ExpressionNode left, ExpressionNode right) {
        this.left = left
        this.right = right
    }

    abstract String getOperator()

    @Override
    String toString() {
        return "${left.isComplex() ? "($left)" : left} ${operator} ${right.isComplex() ? "($right)" : right}"
    }
}
