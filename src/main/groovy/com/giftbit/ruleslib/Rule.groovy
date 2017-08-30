package com.giftbit.ruleslib

import com.giftbit.ruleslib.ast.ExpressionNode
import com.giftbit.ruleslib.functions.*

class Rule {

    final static defaultFunctions = [
            abs         : new Abs(),
            ceil        : new Ceil(),
            every       : new Every(),
            filter      : new Filter(),
            find        : new Find(),
            findIndex   : new FindIndex(),
            floor       : new Floor(),
            isNaN       : new IsNaN(),
            isNull      : new IsNull(),
            keys        : new Keys(),
            map         : new MapFxn(),
            max         : new Max(),
            min         : new Min(),
            reduce      : new Reduce(),
            round       : new Round(),
            roundBankers: new RoundBankers(),
            size        : new Size(),
            some        : new Some(),
            substring   : new Substring(),
            sum         : new Sum(),
            toLowerCase : new ToLowerCase(),
            toUpperCase : new ToUpperCase(),
            values      : new Values()
    ].asImmutable()

    final ExpressionNode expression
    final Exception compileException

    Rule(ExpressionNode expression) {
        this.expression = expression
        this.compileException = null
    }

    Rule(Exception compileException) {
        this.expression = null
        this.compileException = compileException
    }

    def evaluate(Context context) {
        if (compileException) {
            throw compileException
        }
        return expression.getValue(context).asNativeValue()
    }

    def evaluate(Map contextValues) {
        MutableContext mutableContext = new MutableContext(defaultFunctions, Value.fromObject(contextValues).asMap())
        return evaluate(mutableContext)
    }

    boolean evaluateToBoolean(Context context) {
        if (compileException) {
            throw compileException
        }
        return expression.getValue(context).asBoolean()
    }

    boolean evaluateToBoolean(Map contextValues) {
        MutableContext mutableContext = new MutableContext(defaultFunctions, Value.fromObject(contextValues).asMap())
        return evaluateToBoolean(mutableContext)
    }

    String evaluateToString(Context context) {
        if (compileException) {
            throw compileException
        }
        return expression.getValue(context).asString()
    }

    String evaluateToString(Map contextValues) {
        MutableContext mutableContext = new MutableContext(defaultFunctions, Value.fromObject(contextValues).asMap())
        return evaluateToString(mutableContext)
    }

    boolean canEvaluateToType(AstAnalysisType t) {
        if (compileException) {
            throw compileException
        }
        return AstAnalysis.canEvaluateToType(expression, t)
    }
}
