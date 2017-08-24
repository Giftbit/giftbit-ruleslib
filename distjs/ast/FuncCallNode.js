"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FuncCallNode {
    constructor(funcName, args, isMethodCall) {
        this.funcName = funcName;
        this.args = args;
        this.isMethodCall = isMethodCall;
        this.type = "FuncCall";
        if (this.isMethodCall && args.length === 0) {
            throw new Error("Method call must have at least 1 argument.  The first argument is the 'this' argument.");
        }
    }
    getValue(context) {
        const func = context.getFunction(this.funcName);
        if (!func) {
            return null;
        }
        return func.invoke(this.args, context);
    }
    isComplex() {
        return false;
    }
    toString() {
        if (this.isMethodCall) {
            return `${this.args[0].toString()}.${this.funcName}(${this.args.slice(1).map(arg => arg.toString()).join(", ")})`;
        }
        return `${this.funcName}(${this.args.map(arg => arg.toString()).join(", ")})`;
    }
}
exports.FuncCallNode = FuncCallNode;
