import {Value} from "./Value";
import {RuleFunction} from "./functions/RuleFunction";

export interface Context {

    getFunction(name: string): RuleFunction;
    getValue(identifier: string): Value;

}
