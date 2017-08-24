import { Context } from "../Context";
import { RuleFunction } from "./RuleFunction";
import { Value } from "../Value";
import { LambdaNode } from "../ast/LambdaNode";
export declare class LambdaContext implements Context {
    private readonly baseContext;
    private readonly lambdaParams;
    constructor(baseContext: Context, lambdaParams: {
        [key: string]: Value;
    });
    getFunction(name: string): RuleFunction;
    getValue(identifier: string): Value;
    setValue(identifier: string, value: Value): void;
    setLambdaParamValue(lambda: LambdaNode, paramIx: number, value: Value): void;
}
