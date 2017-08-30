import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class MemberNode implements ExpressionNode {

    static readonly type = "Member";
    readonly type = MemberNode.type;

    constructor(public readonly parent: ExpressionNode, public readonly child: ExpressionNode, public readonly isCalculated: boolean) {}

    getValue(context: Context): Value {
        const childValue = this.child.getValue(context);
        const parentValue = this.parent.getValue(context);
        if (parentValue === null) {
            return null;
        } else if (Array.isArray(parentValue)) {
            const index = Math.floor(+childValue || 0);
            if (index < 0 || index >= parentValue.length) {
                return null;
            }
            return parentValue[index];
        } else if (typeof parentValue === "object" && parentValue.hasOwnProperty(childValue)) {
            return parentValue[childValue];
        }

        return null;
    }

    isComplex(): boolean {
        return false;
    }

    toString(): string {
        let s: string = this.parent.isComplex() ? `(${this.parent.toString()})` : this.parent.toString();
        if (this.isCalculated) {
            s += `[${this.child.toString()}]`;
        } else if (this.child.isComplex()) {
            s += `.(${this.child.toString()})`;
        } else {
            s += `.${this.child.toString()}`;
        }
        return s;
    }
}
