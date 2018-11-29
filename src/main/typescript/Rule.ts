import * as astAnalysis from "./astAnalysis";
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
import {AstVisitor} from "./AstVisitor";
import {AstError} from "./AstError";

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
    public readonly compileError: AstError;

    constructor(expression: string) {
        try {
            this.expression = AstVisitor.buildAst(expression);
        } catch (e) {
            if (e instanceof AstError) {
                this.compileError = e;
            } else {
                this.compileError = new AstError(0, 0, expression, e.message);
            }
        }
    }

    evaluate(contextValues: object, customFunctions?: {[key: string]: RuleFunction}): any {
        if (this.compileError) {
            throw this.compileError;
        }
        return this.expression.getValue(new MutableContext({...Rule.defaultFunctions, ...customFunctions}, contextValues));
    }

    evaluateToBoolean(contextValues: object, customFunctions?: {[key: string]: RuleFunction}): boolean {
        if (this.compileError) {
            throw this.compileError;
        }
        return !!this.expression.getValue(new MutableContext({...Rule.defaultFunctions, ...customFunctions}, contextValues));
    }

    evaluateToNumber(contextValues: object, customFunctions?: {[key: string]: RuleFunction}): number {
        if (this.compileError) {
            throw this.compileError;
        }
        return +this.expression.getValue(new MutableContext({...Rule.defaultFunctions, ...customFunctions}, contextValues));
    }

    evaluateToString(contextValues: object, customFunctions?: {[key: string]: RuleFunction}): string {
        if (this.compileError) {
            throw this.compileError;
        }
        return this.expression.getValue(new MutableContext({...Rule.defaultFunctions, ...customFunctions}, contextValues)) + "";
    }

    /**
     * Determine through static analysis whether the rule *might* evaluate
     * to the given type.  This is accomplished through static analysis and
     * is necessarily optimistic.  False is only returned if the value
     * type definitely cannot be returned.
     */
    canEvaluateToType(type: astAnalysis.AstAnalysisDataType): boolean {
        if (this.compileError) {
            throw this.compileError;
        }
        return astAnalysis.canEvaluateToType(this.expression, type);
    }

    /**
     * Determine through static analysis whether the rule *must* evaluate
     * to the given type.  This is accomplished through static analysis and
     * is necessarily pessimistic.  True is only returned if the value
     * type definitely will be returned.
     */
    mustEvaluateToType(type: astAnalysis.AstAnalysisDataType): boolean {
        if (this.compileError) {
            throw this.compileError;
        }
        return astAnalysis.mustEvaluateToType(this.expression, type);
    }
}
