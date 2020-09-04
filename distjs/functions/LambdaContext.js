"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaContext = void 0;
class LambdaContext {
    constructor(baseContext, lambdaParams) {
        this.baseContext = baseContext;
        this.lambdaParams = lambdaParams;
    }
    getFunction(name) {
        return this.baseContext.getFunction(name);
    }
    getValue(identifier) {
        if (this.lambdaParams[identifier] !== undefined) {
            return this.lambdaParams[identifier];
        }
        return this.baseContext.getValue(identifier);
    }
    setValue(identifier, value) {
        this.lambdaParams[identifier] = value;
    }
    setLambdaParamValue(lambda, paramIx, value) {
        if (paramIx < 0) {
            throw new Error(`paramIx must be >= 0, ${paramIx}`);
        }
        if (paramIx < lambda.paramNames.length) {
            this.lambdaParams[lambda.paramNames[paramIx]] = value;
        }
    }
}
exports.LambdaContext = LambdaContext;
