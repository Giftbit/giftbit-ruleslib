import { ExpressionNode } from "./ast/ExpressionNode";
import { RuleFunction } from "./functions/RuleFunction";
export declare class Rule {
    static readonly defaultFunctions: {
        [name: string]: RuleFunction;
    };
    readonly expression: ExpressionNode;
    readonly compileError: Error;
    constructor(expressionOrError: ExpressionNode | Error);
    evaluateBoolean(contextValues: object): boolean;
}
