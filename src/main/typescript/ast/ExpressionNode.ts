import {Context} from "../Context";
import {Value} from "../Value";

export interface ExpressionNode {

    readonly type: string;
    getValue(context: Context): Value;
    isComplex(): boolean;

}
