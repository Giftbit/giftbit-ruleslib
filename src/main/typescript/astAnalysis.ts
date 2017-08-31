import {ExpressionNode} from "./ast/ExpressionNode";
import {ListNode} from "./ast/ListNode";
import {FuncCallNode} from "./ast/FuncCallNode";
import {IdentifierNode} from "./ast/IdentifierNode";
import {InfixNode} from "./ast/InfixNode";
import {LambdaNode} from "./ast/LambdaNode";
import {LiteralNode} from "./ast/LiteralNode";
import {MemberNode} from "./ast/MemberNode";
import {TernaryNode} from "./ast/TernaryNode";
import {UnaryNode} from "./ast/UnaryNode";
import {UnsupportedOperationError} from "./UnsupportedOperationError";

export type AstAnalysisDataType = "boolean" | "string" | "number" | "list" | "map";

export function canEvaluateToType(node: ExpressionNode, type: AstAnalysisDataType): boolean {
    switch (node.type) {
        case FuncCallNode.type:
            return true;
        case IdentifierNode.type:
            return true;
        case InfixNode.type:
            return infixCanEvaluateToType(node as InfixNode, type);
        case LambdaNode.type:
            return true;
        case ListNode.type:
            return type === "list";
        case LiteralNode.type:
            if (type === "map") {
                return typeof (node as LiteralNode).value === "object";
            } else {
                return typeof (node as LiteralNode).value === type;
            }
        case MemberNode.type:
            return true;
        case TernaryNode.type:
            return canEvaluateToType((node as TernaryNode).consequent, type) || canEvaluateToType((node as TernaryNode).alternative, type);
        case UnaryNode.type:
            return unaryCanEvaluateToType(node as UnaryNode, type);
        default:
            throw new UnsupportedOperationError(`unknown node type '${node.type}'`);
    }
}

function infixCanEvaluateToType(node: InfixNode, type: AstAnalysisDataType): boolean {
    switch (node.operator) {
        case "+":
            switch (type) {
                case "list":
                    return canEvaluateToType(node.left, type) && canEvaluateToType(node.right, type);
                case "number":
                    if (mustEvaluateToType(node.left, "string") || mustEvaluateToType(node.right, "string")) {
                        return false;
                    }
                    return canEvaluateToType(node.left, "boolean") ||
                        canEvaluateToType(node.left, "number") ||
                        canEvaluateToType(node.left, "map") ||
                        canEvaluateToType(node.right, "boolean") ||
                        canEvaluateToType(node.right, "number") ||
                        canEvaluateToType(node.right, "map");
                case "string":
                    return canEvaluateToType(node.left, type) || canEvaluateToType(node.right, type);
                default:
                    return false;
            }
        case "-":
        case "*":
        case "/":
        case "%":
            return type === "number";
        case "&&":
        case "||":
            return canEvaluateToType(node.left, type) || canEvaluateToType(node.right, type);
        case ">":
        case ">=":
        case "<":
        case "<=":
        case "==":
            return type === "boolean";
        default: throw new UnsupportedOperationError();
    }
}

function unaryCanEvaluateToType(node: UnaryNode, type: AstAnalysisDataType): boolean {
    switch (node.operator) {
        case "!":
            return type === "boolean";
        case "+":
        case "-":
            return type === "number";
        default:
            throw new UnsupportedOperationError(`unknown unary operator '${node.operator}'`);
    }
}

export function mustEvaluateToType(node: ExpressionNode, type: AstAnalysisDataType): boolean {
    switch (node.type) {
        case FuncCallNode.type:
            return false;
        case IdentifierNode.type:
            return false;
        case InfixNode.type:
            return infixMustEvaluateToType(node as InfixNode, type);
        case LambdaNode.type:
            return false;
        case ListNode.type:
            return type === "list";
        case LiteralNode.type:
            if (type === "map") {
                return typeof (node as LiteralNode).value === "object";
            } else {
                return typeof (node as LiteralNode).value === type;
            }
        case MemberNode.type:
            return false;
        case TernaryNode.type:
            return mustEvaluateToType((node as TernaryNode).consequent, type) && mustEvaluateToType((node as TernaryNode).alternative, type);
        case UnaryNode.type:
            return unaryMustEvaluateToType(node as UnaryNode, type);
        default:
            throw new UnsupportedOperationError(`unknown node type '${node.type}'`);
    }
}

function infixMustEvaluateToType(node: InfixNode, type: AstAnalysisDataType): boolean {
    switch (node.operator) {
        case "+":
            switch (type) {
                case "list":
                    return mustEvaluateToType(node.left, type) && mustEvaluateToType(node.right, type);
                case "number":
                    if (mustEvaluateToType(node.left, "string") || mustEvaluateToType(node.right, "string")) {
                        return false;
                    }
                    return mustEvaluateToType(node.left, "boolean") ||
                        mustEvaluateToType(node.left, "number") ||
                        mustEvaluateToType(node.left, "map") ||
                        mustEvaluateToType(node.right, "boolean") ||
                        mustEvaluateToType(node.right, "number") ||
                        mustEvaluateToType(node.right, "map");
                case "string":
                    return mustEvaluateToType(node.left, type) || mustEvaluateToType(node.right, type);
                default:
                    return false;
            }
        case "-":
        case "*":
        case "/":
        case "%":
            return type === "number";
        case "&&":
        case "||":
            return mustEvaluateToType(node.left, type) && mustEvaluateToType(node.right, type);
        case ">":
        case ">=":
        case "<":
        case "<=":
        case "==":
            return type === "boolean";
        default: throw new UnsupportedOperationError();
    }
}

function unaryMustEvaluateToType(node: UnaryNode, type: AstAnalysisDataType): boolean {
    switch (node.operator) {
        case "!":
            return type === "boolean";
        case "+":
        case "-":
            return type === "number";
        default:
            throw new UnsupportedOperationError(`unknown unary operator '${node.operator}'`);
    }
}
