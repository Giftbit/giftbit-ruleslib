"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Abs_1 = require("./functions/Abs");
const Ceil_1 = require("./functions/Ceil");
const Every_1 = require("./functions/Every");
const Filter_1 = require("./functions/Filter");
const FindIndex_1 = require("./functions/FindIndex");
const Find_1 = require("./functions/Find");
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
class Rule {
    constructor(expressionOrError) {
        this.expression = expressionOrError.getValue && expressionOrError.isComplex ? expressionOrError : null;
        this.compileError = this.expression ? null : expressionOrError;
    }
    evaluate(contextValues) {
        if (this.compileError) {
            throw this.compileError;
        }
        return this.expression.getValue(new MutableContext_1.MutableContext(Rule.defaultFunctions, contextValues));
    }
    evaluateToBoolean(contextValues) {
        if (this.compileError) {
            throw this.compileError;
        }
        return !!this.expression.getValue(new MutableContext_1.MutableContext(Rule.defaultFunctions, contextValues));
    }
    evaluateToNumber(contextValues) {
        if (this.compileError) {
            throw this.compileError;
        }
        return +this.expression.getValue(new MutableContext_1.MutableContext(Rule.defaultFunctions, contextValues));
    }
    evaluateToString(contextValues) {
        if (this.compileError) {
            throw this.compileError;
        }
        return this.expression.getValue(new MutableContext_1.MutableContext(Rule.defaultFunctions, contextValues)) + "";
    }
}
Rule.defaultFunctions = {
    abs: new Abs_1.Abs(),
    ceil: new Ceil_1.Ceil,
    every: new Every_1.Every(),
    filter: new Filter_1.Filter(),
    find: new Find_1.Find(),
    findIndex: new FindIndex_1.FindIndex(),
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
exports.Rule = Rule;
