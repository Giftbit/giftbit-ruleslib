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

    Rule(String expression) {
        try {
            this.expression = BuildAstVisitor.buildAst(expression)
        } catch (Exception e) {
            this.compileException = e
        }
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

    /**
     * Determine through static analysis whether the rule *might* evaluate
     * to the given type.  This is accomplished through static analysis and
     * is necessarily optimistic.  False is only returned if the value
     * type definitely cannot be returned.
     */
    boolean canEvaluateToType(AstAnalysisDataType t) {
        if (compileException) {
            throw compileException
        }
        return AstAnalysis.canEvaluateToType(expression, t)
    }

    /**
     * Determine through static analysis whether the rule *must* evaluate
     * to the given type.  This is accomplished through static analysis and
     * is necessarily pessimistic.  True is only returned if the value
     * type definitely will be returned.
     */
    boolean mustEvaluateToType(AstAnalysisDataType t) {
        if (compileException) {
            throw compileException
        }
        return AstAnalysis.mustEvaluateToType(expression, t)
    }
}
