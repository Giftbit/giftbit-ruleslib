import {Context} from "../Context";
import {Value} from "../Value";

export interface ExpressionNode {

    getValue(context: Context): Value;
    isComplex(): boolean;

}
