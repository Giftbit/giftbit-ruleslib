import { Context } from "./Context";
import { Value } from "./Value";
import { RuleFunction } from "./functions/RuleFunction";
export declare class MutableContext implements Context {
    private readonly functions;
    private readonly values;
    constructor(functions: {
        [key: string]: RuleFunction;
    }, values?: {
        [key: string]: Value;
    });
    getFunction(name: string): RuleFunction;
    getValue(identifier: string): Value;
}
