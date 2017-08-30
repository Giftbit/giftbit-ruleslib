import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class LambdaNode implements ExpressionNode {

    static readonly type = "Lambda";
    readonly type = LambdaNode.type;

    constructor(public readonly paramNames: string[], public readonly body: ExpressionNode) {
        if (this.paramNames.length === 0) {
            throw new Error("paramNames must not be empty");
        }
    }

    getValue(context: Context): Value {
        return this.body.getValue(context);
    }

    isComplex(): boolean {
        return true;
    }

    toString(): string {
        if (this.paramNames.length === 1) {
            return `${this.paramNames[0]} => ${this.body.toString()}`;
        }
        return `(${this.paramNames.join(", ")}) => ${this.body.toString()}`;
    }
}
