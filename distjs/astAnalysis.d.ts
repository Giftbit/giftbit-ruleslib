import { ExpressionNode } from "./ast/ExpressionNode";
export declare type AstAnalysisDataType = "boolean" | "string" | "number" | "list" | "map";
export declare function canEvaluateToType(node: ExpressionNode, type: AstAnalysisDataType): boolean;
export declare function mustEvaluateToType(node: ExpressionNode, type: AstAnalysisDataType): boolean;
