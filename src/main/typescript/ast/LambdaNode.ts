import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class LambdaNode implements ExpressionNode {

    constructor(private readonly paramNames: string[], private readonly body: ExpressionNode) {
        if (this.paramNames.length === 0) {
            throw new Error("paramNames must not be empty");
        }
    }

    getValue(context: Context): Value {
        return undefined;
    }

    isComplex(): boolean {
        return true;
    }

    toString(): string {
        if (this.paramNames.length == 1) {
            return `${this.paramNames[0]} => ${this.body.toString()}`;
        }
        return `(${this.paramNames.join(", ")}) => ${this.body.toString()}`;
    }
}
