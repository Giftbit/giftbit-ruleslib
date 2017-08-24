import { ExpressionNode } from "./ast/ExpressionNode";
import { RuleFunction } from "./functions/RuleFunction";
export declare class Rule {
    static readonly defaultFunctions: {
        [name: string]: RuleFunction;
    };
    private readonly expression;
    private readonly compileError;
    constructor(expressionOrError: ExpressionNode | Error);
    evaluateBoolean(contextValues: object): boolean;
}
