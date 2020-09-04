import {Context} from "../Context";
import {RuleFunction} from "./RuleFunction";
import {Value} from "../Value";
import {LambdaNode} from "../ast/LambdaNode";

export class LambdaContext implements Context {

    constructor(private readonly baseContext: Context, private readonly lambdaParams: {[key: string]: Value}) {}

    getFunction(name: string): RuleFunction {
        return this.baseContext.getFunction(name);
    }

    getValue(identifier: string): Value {
        if (this.lambdaParams[identifier] !== undefined) {
            return this.lambdaParams[identifier];
        }
        return this.baseContext.getValue(identifier);
    }

    setValue(identifier: string, value: Value): void {
        this.lambdaParams[identifier] = value;
    }

    setLambdaParamValue(lambda: LambdaNode, paramIx: number, value: Value): void {
        if (paramIx < 0) {
            throw new Error(`paramIx must be >= 0, ${paramIx}`);
        }
        if (paramIx < lambda.paramNames.length) {
            this.lambdaParams[lambda.paramNames[paramIx]] = value;
        }
    }
}
