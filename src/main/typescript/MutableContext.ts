import {Context} from "./Context";
import {Value} from "./Value";
import {RuleFunction} from "./functions/RuleFunction";

export class MutableContext implements Context {

    constructor(private readonly functions: {[key: string]: RuleFunction}, private readonly values: {[key: string]: Value} = {}) {}

    getFunction(name: string): RuleFunction {
        return this.functions[name];
    }

    getValue(identifier: string): Value {
        if (this.values[identifier] !== undefined) {
            return this.values[identifier];
        }

        return null;
    }
}
