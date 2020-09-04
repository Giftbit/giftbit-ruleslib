"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mustEvaluateToType = exports.canEvaluateToType = void 0;
const ListNode_1 = require("./ast/ListNode");
const FuncCallNode_1 = require("./ast/FuncCallNode");
const IdentifierNode_1 = require("./ast/IdentifierNode");
const InfixNode_1 = require("./ast/InfixNode");
const LambdaNode_1 = require("./ast/LambdaNode");
const LiteralNode_1 = require("./ast/LiteralNode");
const MemberNode_1 = require("./ast/MemberNode");
const TernaryNode_1 = require("./ast/TernaryNode");
const UnaryNode_1 = require("./ast/UnaryNode");
const UnsupportedOperationError_1 = require("./UnsupportedOperationError");
function canEvaluateToType(node, type) {
    switch (node.type) {
        case FuncCallNode_1.FuncCallNode.type:
            return true;
        case IdentifierNode_1.IdentifierNode.type:
            return true;
        case InfixNode_1.InfixNode.type:
            return infixCanEvaluateToType(node, type);
        case LambdaNode_1.LambdaNode.type:
            return true;
        case ListNode_1.ListNode.type:
            return type === "list";
        case LiteralNode_1.LiteralNode.type:
            if (type === "map") {
                return typeof node.value === "object";
            }
            else {
                return typeof node.value === type;
            }
        case MemberNode_1.MemberNode.type:
            return true;
        case TernaryNode_1.TernaryNode.type:
            return canEvaluateToType(node.consequent, type) || canEvaluateToType(node.alternative, type);
        case UnaryNode_1.UnaryNode.type:
            return unaryCanEvaluateToType(node, type);
        default:
            throw new UnsupportedOperationError_1.UnsupportedOperationError(`unknown node type '${node.type}'`);
    }
}
exports.canEvaluateToType = canEvaluateToType;
function infixCanEvaluateToType(node, type) {
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
        default: throw new UnsupportedOperationError_1.UnsupportedOperationError();
    }
}
function unaryCanEvaluateToType(node, type) {
    switch (node.operator) {
        case "!":
            return type === "boolean";
        case "+":
        case "-":
            return type === "number";
        default:
            throw new UnsupportedOperationError_1.UnsupportedOperationError(`unknown unary operator '${node.operator}'`);
    }
}
function mustEvaluateToType(node, type) {
    switch (node.type) {
        case FuncCallNode_1.FuncCallNode.type:
            return false;
        case IdentifierNode_1.IdentifierNode.type:
            return false;
        case InfixNode_1.InfixNode.type:
            return infixMustEvaluateToType(node, type);
        case LambdaNode_1.LambdaNode.type:
            return false;
        case ListNode_1.ListNode.type:
            return type === "list";
        case LiteralNode_1.LiteralNode.type:
            if (type === "map") {
                return typeof node.value === "object";
            }
            else {
                return typeof node.value === type;
            }
        case MemberNode_1.MemberNode.type:
            return false;
        case TernaryNode_1.TernaryNode.type:
            return mustEvaluateToType(node.consequent, type) && mustEvaluateToType(node.alternative, type);
        case UnaryNode_1.UnaryNode.type:
            return unaryMustEvaluateToType(node, type);
        default:
            throw new UnsupportedOperationError_1.UnsupportedOperationError(`unknown node type '${node.type}'`);
    }
}
exports.mustEvaluateToType = mustEvaluateToType;
function infixMustEvaluateToType(node, type) {
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
        default: throw new UnsupportedOperationError_1.UnsupportedOperationError();
    }
}
function unaryMustEvaluateToType(node, type) {
    switch (node.operator) {
        case "!":
            return type === "boolean";
        case "+":
        case "-":
            return type === "number";
        default:
            throw new UnsupportedOperationError_1.UnsupportedOperationError(`unknown unary operator '${node.operator}'`);
    }
}
