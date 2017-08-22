import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";

export class MemberNode implements ExpressionNode {

    constructor(private readonly parent: ExpressionNode, private readonly child: ExpressionNode, private readonly isCalculated: boolean) {}

    getValue(context: Context): Value {
        const childValue = this.child.getValue(context);
        if (childValue === null) {
            return null;
        }

        const parentValue = this.parent.getValue(context);
        if (Array.isArray(parentValue)) {
            return parentValue[+childValue];
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
