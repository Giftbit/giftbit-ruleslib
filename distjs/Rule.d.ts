import * as astAnalysis from "./astAnalysis";
import { ExpressionNode } from "./ast/ExpressionNode";
import { RuleFunction } from "./functions/RuleFunction";
export declare class Rule {
    static readonly defaultFunctions: {
        [name: string]: RuleFunction;
    };
    readonly expression: ExpressionNode;
    readonly compileError: Error;
    constructor(expression: string);
    evaluate(contextValues: object): any;
    evaluateToBoolean(contextValues: object): boolean;
    evaluateToNumber(contextValues: object): number;
    evaluateToString(contextValues: object): string;
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
