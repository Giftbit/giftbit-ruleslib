import {Context} from "./Context";
import {Value} from "./Value";

export class MutableContext implements Context {

    constructor(private readonly values: {[key: string]: Value} = {}) {}

    getValue(identifier: string): Value {
        if (this.values.hasOwnProperty(identifier)) {
            return this.values[identifier];
        }

        return null;
    }
}
