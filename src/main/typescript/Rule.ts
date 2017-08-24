import {RuleFunction} from "./functions/RuleFunction";
import {Max} from "./functions/Max";
import {Min} from "./functions/Min";
import {Abs} from "./functions/Abs";
import {Ceil} from "./functions/Ceil";
import {Floor} from "./functions/Floor";
import {ExpressionNode} from "./ast/ExpressionNode";
import {Sum} from "./functions/Sum";
import {Size} from "./functions/Size";
import {Substring} from "./functions/Substring";
import {ToLowerCase} from "./functions/ToLowerCase";
import {ToUpperCase} from "./functions/ToUpperCase";
import {Round} from "./functions/Round";
import {RoundBankers} from "./functions/RoundBankers";
import {Keys} from "./functions/Keys";
import {Values} from "./functions/Values";

export class Rule {

    static readonly defaultFunctions: {[name: string]: RuleFunction} = {
        abs: new Abs(),
        ceil: new Ceil,
        floor: new Floor(),
        keys: new Keys(),
        max: new Max(),
        min: new Min(),
        round: new Round(),
        roundBankers: new RoundBankers(),
        size: new Size(),
        substring: new Substring(),
        sum: new Sum(),
        toLowerCase: new ToLowerCase(),
        toUpperCase: new ToUpperCase(),
        values: new Values(),
    };

    private readonly expression: ExpressionNode;
    private readonly compileError: Error;

    constructor(expressionOrError: ExpressionNode | Error) {
        this.expression = (expressionOrError as ExpressionNode).getValue && (expressionOrError as ExpressionNode).isComplex ? (expressionOrError as ExpressionNode) : null;
        this.compileError = this.expression ? null : expressionOrError as Error;
    }
}
