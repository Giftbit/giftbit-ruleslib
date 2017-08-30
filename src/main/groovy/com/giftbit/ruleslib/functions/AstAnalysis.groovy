package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.ast.*

class AstAnalysis {

    static boolean canEvaluateToType(ExpressionNode node, AstAnalysisType t) {
        if (node instanceof AdditionNode) {
            switch (t) {
                case AstAnalysisType.LIST:
                    return canEvaluateToType((node as AdditionNode).left, t) && canEvaluateToType((node as AdditionNode).right, t)
                case AstAnalysisType.NUMBER:
                    return true
                case AstAnalysisType.STRING:
                    return canEvaluateToType((node as AdditionNode).left, t) || canEvaluateToType((node as AdditionNode).right, t)
                default:
                    return false
            }
        } else if (node instanceof AndNode) {
            return canEvaluateToType((node as AndNode).left, t) || canEvaluateToType((node as AndNode).right, t)
        } else if (node instanceof ListNode) {
            return t == AstAnalysisType.LIST
        } else if (node instanceof ComparisonNode) {
            return t === AstAnalysisType.BOOLEAN
        } else if (node instanceof DivisionNode) {
            return t === AstAnalysisType.NUMBER
        } else if (node instanceof EqualityNode) {
            return t === AstAnalysisType.BOOLEAN
        } else if (node instanceof FuncCallNode) {
            return true
        } else if (node instanceof IdentifierNode) {
            return true
        } else if (node instanceof LambdaNode) {
            return true
        } else if (node instanceof LiteralNode) {
            switch (t) {
                case AstAnalysisType.BOOLEAN:
                    return (node as LiteralNode).value.isBoolean()
                case AstAnalysisType.LIST:
                    return (node as LiteralNode).value.isList()
                case AstAnalysisType.MAP:
                    return (node as LiteralNode).value.isMap()
                case AstAnalysisType.NUMBER:
                    return (node as LiteralNode).value.isNumber()
                case AstAnalysisType.STRING:
                    return (node as LiteralNode).value.isString()
                default:
                    throw new UnsupportedOperationException()
            }
        } else if (node instanceof MemberNode) {
            return true
        } else if (node instanceof ModuloNode) {
            return t === AstAnalysisType.NUMBER
        } else if (node instanceof MultiplicationNode) {
            return t === AstAnalysisType.NUMBER
        } else if (node instanceof NotNode) {
            return t === AstAnalysisType.BOOLEAN
        } else if (node instanceof OrNode) {
            return canEvaluateToType((node as OrNode).left, t) || canEvaluateToType((node as OrNode).right, t)
        } else if (node instanceof SubtractionNode) {
            return t === AstAnalysisType.NUMBER
        } else if (node instanceof TernaryNode) {
            return canEvaluateToType((node as TernaryNode).consequent, t) || canEvaluateToType((node as TernaryNode).alternative, t)
        } else if (node instanceof UnaryMinusNode) {
            return t === AstAnalysisType.NUMBER
        } else if (node instanceof UnaryPlusNode) {
            return t === AstAnalysisType.NUMBER
        } else {
            throw new UnsupportedOperationException()
        }
    }
}
