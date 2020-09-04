import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class ObjectNode implements ExpressionNode {

    static readonly type = "Object";
    readonly type = ObjectNode.type;

    constructor(public readonly expressionMap: {[key: string]: ExpressionNode}) {}

    getValue(context: Context): Value {
        const v: Value = {};
        for (const key in this.expressionMap) {
            if (this.expressionMap[key] !== undefined) {
                v[key] = this.expressionMap[key].getValue(context);
            }
        }
        return v;
    }

    isComplex(): boolean {
        return false;
    }

    toString(): string {
        return `{${Object.keys(this.expressionMap).map(key => `'${key}': ${this.expressionMap[key].toString()}`).join(", ")}}`;
    }
}
