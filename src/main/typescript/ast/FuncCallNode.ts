import {ExpressionNode} from "./ExpressionNode";
import {Context} from "../Context";
import {Value} from "../Value";
import {RuleFunction} from "../functions/RuleFunction";

export class FuncCallNode implements ExpressionNode {

    static readonly type = "FuncCall";
    readonly type = FuncCallNode.type;

    constructor(public readonly funcName, public readonly args: ExpressionNode[], public readonly isMethodCall: boolean) {
        if (this.isMethodCall && args.length === 0) {
            throw new Error("Method call must have at least 1 argument.  The first argument is the 'this' argument.");
        }
    }

    getValue(context: Context): Value {
        const func: RuleFunction = context.getFunction(this.funcName);
        if (!func) {
            return null;
        }
        return func.invoke(this.args, context);
    }

    isComplex(): boolean {
        return false;
    }

    toString(): string {
        if (this.isMethodCall) {
            return `${this.args[0].toString()}.${this.funcName}(${this.args.slice(1).map(arg => arg.toString()).join(", ")})`;
        }
        return `${this.funcName}(${this.args.map(arg => arg.toString()).join(", ")})`;
    }
}
