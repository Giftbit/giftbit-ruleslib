import {Value} from "./Value";

export interface Context {

    getValue(identifier: string): Value;

}
