"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TernaryNode {
    constructor(condition, consequent, alternative) {
        this.condition = condition;
        this.consequent = consequent;
        this.alternative = alternative;
        this.type = TernaryNode.type;
    }
    getValue(context) {
        return this.condition.getValue(context) ? this.consequent.getValue(context) : this.alternative.getValue(context);
    }
    isComplex() {
        return true;
    }
    toString() {
        const a = this.condition.isComplex() ? `(${this.condition.toString()})` : this.condition.toString();
        const b = this.consequent.isComplex() ? `(${this.consequent.toString()})` : this.consequent.toString();
        const c = this.alternative.isComplex() ? `(${this.alternative.toString()})` : this.alternative.toString();
        return `${a} ? ${b} : ${c}`;
    }
}
TernaryNode.type = "Ternary";
exports.TernaryNode = TernaryNode;
