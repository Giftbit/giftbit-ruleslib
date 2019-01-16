import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class ObjectNode implements ExpressionNode {

    static readonly type = "Object";
    readonly type = ObjectNode.type;

    constructor(public readonly object: {[key: string]: ExpressionNode}) {}

    getValue(context: Context): Value {
        const v: Value = {};
        for (const key in this.object) {
            if (this.object.hasOwnProperty(key)) {
                v[key] = this.object[key].getValue(context);
            }
        }
        return v;
    }

    isComplex(): boolean {
        return false;
    }

    toString(): string {
        return `{${Object.keys(this.object).map(key => `'${key}': ${this.object[key].toString()}`).join(", ")}}`;
    }
}
