import {Abs} from "./functions/Abs";
import {Ceil} from "./functions/Ceil";
import {Every} from "./functions/Every";
import {ExpressionNode} from "./ast/ExpressionNode";
import {Filter} from "./functions/Filter";
import {FindIndex} from "./functions/FindIndex";
import {Find} from "./functions/Find";
import {Floor} from "./functions/Floor";
import {IsNaN} from "./functions/IsNaN";
import {IsNull} from "./functions/IsNull";
import {Keys} from "./functions/Keys";
import {MapFxn} from "./functions/MapFxn";
import {Max} from "./functions/Max";
import {Min} from "./functions/Min";
import {Reduce} from "./functions/Reduce";
import {RoundBankers} from "./functions/RoundBankers";
import {Round} from "./functions/Round";
import {RuleFunction} from "./functions/RuleFunction";
import {Size} from "./functions/Size";
import {Some} from "./functions/Some";
import {Substring} from "./functions/Substring";
import {Sum} from "./functions/Sum";
import {ToLowerCase} from "./functions/ToLowerCase";
import {ToUpperCase} from "./functions/ToUpperCase";
import {Values} from "./functions/Values";
import {MutableContext} from "./MutableContext";

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

    public readonly expression: ExpressionNode;
    public readonly compileError: Error;

    constructor(expressionOrError: ExpressionNode | Error) {
        this.expression = (expressionOrError as ExpressionNode).getValue && (expressionOrError as ExpressionNode).isComplex ? (expressionOrError as ExpressionNode) : null;
        this.compileError = this.expression ? null : expressionOrError as Error;
    }

    evaluate(contextValues: object): any {
        if (this.compileError) {
            throw this.compileError;
        }
        return this.expression.getValue(new MutableContext(Rule.defaultFunctions, contextValues));
    }

    evaluateToBoolean(contextValues: object): boolean {
        if (this.compileError) {
            throw this.compileError;
        }
        return !!this.expression.getValue(new MutableContext(Rule.defaultFunctions, contextValues));
    }

    evaluateToNumber(contextValues: object): number {
        if (this.compileError) {
            throw this.compileError;
        }
        return +this.expression.getValue(new MutableContext(Rule.defaultFunctions, contextValues));
    }

    evaluateToString(contextValues: object): string {
        if (this.compileError) {
            throw this.compileError;
        }
        return this.expression.getValue(new MutableContext(Rule.defaultFunctions, contextValues)) + "";
    }
}
