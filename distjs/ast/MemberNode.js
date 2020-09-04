"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberNode = void 0;
class MemberNode {
    constructor(parent, child, isCalculated) {
        this.parent = parent;
        this.child = child;
        this.isCalculated = isCalculated;
        this.type = MemberNode.type;
    }
    getValue(context) {
        const childValue = this.child.getValue(context);
        const parentValue = this.parent.getValue(context);
        if (parentValue === null) {
            return null;
        }
        else if (Array.isArray(parentValue)) {
            const index = Math.floor(+childValue || 0);
            if (index < 0 || index >= parentValue.length) {
                return null;
            }
            return parentValue[index];
        }
        else if (typeof parentValue === "object" && parentValue[childValue] !== undefined) {
            return parentValue[childValue];
        }
        return null;
    }
    isComplex() {
        return false;
    }
    toString() {
        let s = this.parent.isComplex() ? `(${this.parent.toString()})` : this.parent.toString();
        if (this.isCalculated) {
            s += `[${this.child.toString()}]`;
        }
        else if (this.child.isComplex()) {
            s += `.(${this.child.toString()})`;
        }
        else {
            s += `.${this.child.toString()}`;
        }
        return s;
    }
}
exports.MemberNode = MemberNode;
MemberNode.type = "Member";
