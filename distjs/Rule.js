"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = void 0;
const astAnalysis = require("./astAnalysis");
const Abs_1 = require("./functions/Abs");
const Ceil_1 = require("./functions/Ceil");
const Every_1 = require("./functions/Every");
const Filter_1 = require("./functions/Filter");
const FindIndex_1 = require("./functions/FindIndex");
const FindLast_1 = require("./functions/FindLast");
const FindLastIndex_1 = require("./functions/FindLastIndex");
const Find_1 = require("./functions/Find");
const Flatten_1 = require("./functions/Flatten");
const Floor_1 = require("./functions/Floor");
const IsNaN_1 = require("./functions/IsNaN");
const IsNull_1 = require("./functions/IsNull");
const Keys_1 = require("./functions/Keys");
const MapFxn_1 = require("./functions/MapFxn");
const Max_1 = require("./functions/Max");
const Min_1 = require("./functions/Min");
const Reduce_1 = require("./functions/Reduce");
const RoundBankers_1 = require("./functions/RoundBankers");
const Round_1 = require("./functions/Round");
const Size_1 = require("./functions/Size");
const Some_1 = require("./functions/Some");
const Substring_1 = require("./functions/Substring");
const Sum_1 = require("./functions/Sum");
const ToLowerCase_1 = require("./functions/ToLowerCase");
const ToUpperCase_1 = require("./functions/ToUpperCase");
const Values_1 = require("./functions/Values");
const MutableContext_1 = require("./MutableContext");
const AstVisitor_1 = require("./AstVisitor");
const AstError_1 = require("./AstError");
class Rule {
    constructor(expression) {
        try {
            this.expression = AstVisitor_1.AstVisitor.buildAst(expression);
        }
        catch (e) {
            if (e instanceof AstError_1.AstError) {
                this.compileError = e;
            }
            else {
                this.compileError = new AstError_1.AstError(0, 0, expression, e.message);
            }
        }
    }
    evaluate(contextValues, customFunctions) {
        if (this.compileError) {
            throw this.compileError;
        }
        return this.expression.getValue(new MutableContext_1.MutableContext(Object.assign(Object.assign({}, Rule.defaultFunctions), customFunctions), contextValues));
    }
    evaluateToBoolean(contextValues, customFunctions) {
        if (this.compileError) {
            throw this.compileError;
        }
        return !!this.expression.getValue(new MutableContext_1.MutableContext(Object.assign(Object.assign({}, Rule.defaultFunctions), customFunctions), contextValues));
    }
    evaluateToNumber(contextValues, customFunctions) {
        if (this.compileError) {
            throw this.compileError;
        }
        return +this.expression.getValue(new MutableContext_1.MutableContext(Object.assign(Object.assign({}, Rule.defaultFunctions), customFunctions), contextValues));
    }
    evaluateToString(contextValues, customFunctions) {
        if (this.compileError) {
            throw this.compileError;
        }
        return this.expression.getValue(new MutableContext_1.MutableContext(Object.assign(Object.assign({}, Rule.defaultFunctions), customFunctions), contextValues)) + "";
    }
    /**
     * Determine through static analysis whether the rule *might* evaluate
     * to the given type.  This is accomplished through static analysis and
     * is necessarily optimistic.  False is only returned if the value
     * type definitely cannot be returned.
     */
    canEvaluateToType(type) {
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
    mustEvaluateToType(type) {
        if (this.compileError) {
            throw this.compileError;
        }
        return astAnalysis.mustEvaluateToType(this.expression, type);
    }
}
exports.Rule = Rule;
Rule.defaultFunctions = {
    abs: new Abs_1.Abs(),
    ceil: new Ceil_1.Ceil,
    every: new Every_1.Every(),
    filter: new Filter_1.Filter(),
    find: new Find_1.Find(),
    findIndex: new FindIndex_1.FindIndex(),
    findLast: new FindLast_1.FindLast(),
    findLastIndex: new FindLastIndex_1.FindLastIndex(),
    flatten: new Flatten_1.Flatten(),
    floor: new Floor_1.Floor(),
    isNaN: new IsNaN_1.IsNaN(),
    isNull: new IsNull_1.IsNull(),
    keys: new Keys_1.Keys(),
    map: new MapFxn_1.MapFxn(),
    max: new Max_1.Max(),
    min: new Min_1.Min(),
    reduce: new Reduce_1.Reduce(),
    round: new Round_1.Round(),
    roundBankers: new RoundBankers_1.RoundBankers(),
    size: new Size_1.Size(),
    some: new Some_1.Some(),
    substring: new Substring_1.Substring(),
    sum: new Sum_1.Sum(),
    toLowerCase: new ToLowerCase_1.ToLowerCase(),
    toUpperCase: new ToUpperCase_1.ToUpperCase(),
    values: new Values_1.Values(),
};
