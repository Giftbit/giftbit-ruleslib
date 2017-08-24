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
import {IsNaN} from "./functions/IsNaN";
import {IsNull} from "./functions/IsNull";
import {Every} from "./functions/Every";
import {Some} from "./functions/Some";
import {Find} from "./functions/Find";
import {FindIndex} from "./functions/FindIndex";
import {Filter} from "./functions/Filter";
import {MapFxn} from "./functions/MapFxn";
import {Reduce} from "./functions/Reduce";

export class Rule {

    static readonly defaultFunctions: {[name: string]: RuleFunction} = {
        abs: new Abs(),
        ceil: new Ceil,
        every: new Every(),
        filter: new Filter(),
        find: new Find(),
        findIndex: new FindIndex(),
        floor: new Floor(),
        isNaN: new IsNaN(),
        isNull: new IsNull(),
        keys: new Keys(),
        map: new MapFxn(),
        max: new Max(),
        min: new Min(),
        reduce: new Reduce(),
        round: new Round(),
        roundBankers: new RoundBankers(),
        size: new Size(),
        some: new Some(),
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
