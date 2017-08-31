package com.giftbit.ruleslib

import com.giftbit.ruleslib.ast.*

class AstAnalysis {

    static boolean canEvaluateToType(ExpressionNode node, AstAnalysisDataType t) {
        if (node instanceof AdditionNode) {
            switch (t) {
                case AstAnalysisDataType.LIST:
                    return canEvaluateToType((node as AdditionNode).left, t) && canEvaluateToType((node as AdditionNode).right, t)
                case AstAnalysisDataType.NUMBER:
                    if (mustEvaluateToType((node as AdditionNode).left, AstAnalysisDataType.STRING) || mustEvaluateToType((node as AdditionNode).right, AstAnalysisDataType.STRING)) {
                        return false
                    }
                    return canEvaluateToType((node as AdditionNode).left, AstAnalysisDataType.BOOLEAN) ||
                            canEvaluateToType((node as AdditionNode).left, AstAnalysisDataType.NUMBER) ||
                            canEvaluateToType((node as AdditionNode).left, AstAnalysisDataType.MAP) ||
                            canEvaluateToType((node as AdditionNode).right, AstAnalysisDataType.BOOLEAN) ||
                            canEvaluateToType((node as AdditionNode).right, AstAnalysisDataType.NUMBER) ||
                            canEvaluateToType((node as AdditionNode).right, AstAnalysisDataType.MAP)
                case AstAnalysisDataType.STRING:
                    return canEvaluateToType((node as AdditionNode).left, t) || canEvaluateToType((node as AdditionNode).right, t)
                default:
                    return false
            }
        } else if (node instanceof AndNode) {
            return canEvaluateToType((node as AndNode).left, t) || canEvaluateToType((node as AndNode).right, t)
        } else if (node instanceof ComparisonNode) {
            return t == AstAnalysisDataType.BOOLEAN
        } else if (node instanceof DivisionNode) {
            return t == AstAnalysisDataType.NUMBER
        } else if (node instanceof EqualityNode) {
            return t == AstAnalysisDataType.BOOLEAN
        } else if (node instanceof FuncCallNode) {
            return true
        } else if (node instanceof IdentifierNode) {
            return true
        } else if (node instanceof LambdaNode) {
            return true
        } else if (node instanceof ListNode) {
            return t == AstAnalysisDataType.LIST
        } else if (node instanceof LiteralNode) {
            switch (t) {
                case AstAnalysisDataType.BOOLEAN:
                    return (node as LiteralNode).value.isBoolean()
                case AstAnalysisDataType.LIST:
                    return (node as LiteralNode).value.isList()
                case AstAnalysisDataType.MAP:
                    return (node as LiteralNode).value.isMap()
                case AstAnalysisDataType.NUMBER:
                    return (node as LiteralNode).value.isNumber()
                case AstAnalysisDataType.STRING:
                    return (node as LiteralNode).value.isString()
                default:
                    throw new UnsupportedOperationException()
            }
        } else if (node instanceof MemberNode) {
            return true
        } else if (node instanceof ModuloNode) {
            return t == AstAnalysisDataType.NUMBER
        } else if (node instanceof MultiplicationNode) {
            return t == AstAnalysisDataType.NUMBER
        } else if (node instanceof NotNode) {
            return t == AstAnalysisDataType.BOOLEAN
        } else if (node instanceof OrNode) {
            return canEvaluateToType((node as OrNode).left, t) || canEvaluateToType((node as OrNode).right, t)
        } else if (node instanceof SubtractionNode) {
            return t == AstAnalysisDataType.NUMBER
        } else if (node instanceof TernaryNode) {
            return canEvaluateToType((node as TernaryNode).consequent, t) || canEvaluateToType((node as TernaryNode).alternative, t)
        } else if (node instanceof UnaryMinusNode) {
            return t == AstAnalysisDataType.NUMBER
        } else if (node instanceof UnaryPlusNode) {
            return t == AstAnalysisDataType.NUMBER
        } else {
            throw new UnsupportedOperationException()
        }
    }

    static boolean mustEvaluateToType(ExpressionNode node, AstAnalysisDataType t) {
        if (node instanceof AdditionNode) {
            switch (t) {
                case AstAnalysisDataType.LIST:
                    return mustEvaluateToType((node as AdditionNode).left, t) && mustEvaluateToType((node as AdditionNode).right, t)
                case AstAnalysisDataType.NUMBER:
                    if (mustEvaluateToType((node as AdditionNode).left, AstAnalysisDataType.STRING) || mustEvaluateToType((node as AdditionNode).right, AstAnalysisDataType.STRING)) {
                        return false
                    }
                    return mustEvaluateToType((node as AdditionNode).left, AstAnalysisDataType.BOOLEAN) ||
                            mustEvaluateToType((node as AdditionNode).left, AstAnalysisDataType.NUMBER) ||
                            mustEvaluateToType((node as AdditionNode).left, AstAnalysisDataType.MAP) ||
                            mustEvaluateToType((node as AdditionNode).right, AstAnalysisDataType.BOOLEAN) ||
                            mustEvaluateToType((node as AdditionNode).right, AstAnalysisDataType.NUMBER) ||
                            mustEvaluateToType((node as AdditionNode).right, AstAnalysisDataType.MAP)
                case AstAnalysisDataType.STRING:
                    return mustEvaluateToType((node as AdditionNode).left, t) || mustEvaluateToType((node as AdditionNode).right, t)
                default:
                    return false
            }
        } else if (node instanceof AndNode) {
            return mustEvaluateToType((node as AndNode).left, t) && mustEvaluateToType((node as AndNode).right, t)
        } else if (node instanceof ComparisonNode) {
            return t == AstAnalysisDataType.BOOLEAN
        } else if (node instanceof DivisionNode) {
            return t == AstAnalysisDataType.NUMBER
        } else if (node instanceof EqualityNode) {
            return t == AstAnalysisDataType.BOOLEAN
        } else if (node instanceof FuncCallNode) {
            return false
        } else if (node instanceof IdentifierNode) {
            return false
        } else if (node instanceof LambdaNode) {
            return false
        } else if (node instanceof ListNode) {
            return t == AstAnalysisDataType.LIST
        } else if (node instanceof LiteralNode) {
            switch (t) {
                case AstAnalysisDataType.BOOLEAN:
                    return (node as LiteralNode).value.isBoolean()
                case AstAnalysisDataType.LIST:
                    return (node as LiteralNode).value.isList()
                case AstAnalysisDataType.MAP:
                    return (node as LiteralNode).value.isMap()
                case AstAnalysisDataType.NUMBER:
                    return (node as LiteralNode).value.isNumber()
                case AstAnalysisDataType.STRING:
                    return (node as LiteralNode).value.isString()
                default:
                    throw new UnsupportedOperationException()
            }
        } else if (node instanceof MemberNode) {
            return false
        } else if (node instanceof ModuloNode) {
            return t == AstAnalysisDataType.NUMBER
        } else if (node instanceof MultiplicationNode) {
            return t == AstAnalysisDataType.NUMBER
        } else if (node instanceof NotNode) {
            return t == AstAnalysisDataType.BOOLEAN
        } else if (node instanceof OrNode) {
            return mustEvaluateToType((node as OrNode).left, t) && mustEvaluateToType((node as OrNode).right, t)
        } else if (node instanceof SubtractionNode) {
            return t == AstAnalysisDataType.NUMBER
        } else if (node instanceof TernaryNode) {
            return mustEvaluateToType((node as TernaryNode).consequent, t) && mustEvaluateToType((node as TernaryNode).alternative, t)
        } else if (node instanceof UnaryMinusNode) {
            return t == AstAnalysisDataType.NUMBER
        } else if (node instanceof UnaryPlusNode) {
            return t == AstAnalysisDataType.NUMBER
        } else {
            throw new UnsupportedOperationException()
        }
    }
}
