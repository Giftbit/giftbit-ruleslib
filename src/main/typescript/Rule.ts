import {RuleFunction} from "./functions/RuleFunction";
import {Max} from "./functions/Max";
import {Min} from "./functions/Min";
import {Abs} from "./functions/Abs";
import {Ceil} from "./functions/Ceil";
import {Floor} from "./functions/Floor";
import {ExpressionNode} from "./ast/ExpressionNode";
import {Sum} from "./functions/Sum";
import {Size} from "./functions/Size";

export class Rule {

    static readonly defaultFunctions: {[name: string]: RuleFunction} = {
        abs: new Abs(),
        ceil: new Ceil,
        floor: new Floor(),
        max: new Max(),
        min: new Min(),
        size: new Size(),
        sum: new Sum(),
    };

    private readonly expression: ExpressionNode;
    private readonly compileError: Error;

    constructor(expressionOrError: ExpressionNode | Error) {
        this.expression = (expressionOrError as ExpressionNode).getValue && (expressionOrError as ExpressionNode).isComplex ? (expressionOrError as ExpressionNode) : null;
        this.compileError = this.expression ? null : expressionOrError as Error;
    }
}
