import { ExpressionNode } from "./ast/ExpressionNode";
import { RuleFunction } from "./functions/RuleFunction";
export declare class Rule {
    static readonly defaultFunctions: {
        [name: string]: RuleFunction;
    };
    readonly expression: ExpressionNode;
    readonly compileError: Error;
    constructor(expressionOrError: ExpressionNode | Error);
    evaluate(contextValues: object): any;
    evaluateToBoolean(contextValues: object): boolean;
    evaluateToNumber(contextValues: object): number;
    evaluateToString(contextValues: object): string;
}
