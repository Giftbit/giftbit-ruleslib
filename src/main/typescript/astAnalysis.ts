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

export type AnalysisType = "boolean" | "string" | "number" | "list" | "map";

export function canEvaluateToType(node: ExpressionNode, type: AnalysisType): boolean {
    switch (node.type) {
        case ListNode.type:
            return type === "list";
        case FuncCallNode.type:
            return true;
        case IdentifierNode.type:
            return true;
        case InfixNode.type:
            return infixCanEvaluateToType(node as InfixNode, type);
        case LambdaNode.type:
            return true;
        case LiteralNode.type:
            if (type === "list") {
                return Array.isArray((node as LiteralNode).value);
            } else if (type === "map") {
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

function infixCanEvaluateToType(node: InfixNode, type: AnalysisType): boolean {
    switch (node.operator) {
        case "+":
            switch (type) {
                case "list":
                    return canEvaluateToType(node.left, type) && canEvaluateToType(node.right, type);
                case "number":
                    // Could do better here.
                    return true;
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

function unaryCanEvaluateToType(node: UnaryNode, type: AnalysisType): boolean {
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
