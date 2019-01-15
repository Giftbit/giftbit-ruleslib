import * as astAnalysis from "./astAnalysis";
import { ExpressionNode } from "./ast/ExpressionNode";
import { RuleFunction } from "./functions/RuleFunction";
import { AstError } from "./AstError";
export declare class Rule {
    static readonly defaultFunctions: {
        [name: string]: RuleFunction;
    };
    readonly expression: ExpressionNode;
    readonly compileError: AstError;
    constructor(expression: string);
    evaluate(contextValues: object, customFunctions?: {
        [key: string]: RuleFunction;
    }): any;
    evaluateToBoolean(contextValues: object, customFunctions?: {
        [key: string]: RuleFunction;
    }): boolean;
    evaluateToNumber(contextValues: object, customFunctions?: {
        [key: string]: RuleFunction;
    }): number;
    evaluateToString(contextValues: object, customFunctions?: {
        [key: string]: RuleFunction;
    }): string;
    /**
     * Determine through static analysis whether the rule *might* evaluate
     * to the given type.  This is accomplished through static analysis and
     * is necessarily optimistic.  False is only returned if the value
     * type definitely cannot be returned.
     */
    canEvaluateToType(type: astAnalysis.AstAnalysisDataType): boolean;
    /**
     * Determine through static analysis whether the rule *must* evaluate
     * to the given type.  This is accomplished through static analysis and
     * is necessarily pessimistic.  True is only returned if the value
     * type definitely will be returned.
     */
    mustEvaluateToType(type: astAnalysis.AstAnalysisDataType): boolean;
}
