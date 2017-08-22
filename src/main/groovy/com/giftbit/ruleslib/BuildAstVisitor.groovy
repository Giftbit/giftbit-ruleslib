package com.giftbit.ruleslib

import com.giftbit.ruleslib.ast.*
import groovy.json.StringEscapeUtils
import org.antlr.v4.runtime.CharStream
import org.antlr.v4.runtime.CharStreams
import org.antlr.v4.runtime.CommonTokenStream

class BuildAstVisitor extends RedemptionRuleBaseVisitor<ExpressionNode> {

    static ExpressionNode buildAst(String exp) throws BuildAstException {

        try {
            BuildAstErrorListener errorListener = new BuildAstErrorListener(exp)

            CharStream stream = CharStreams.fromString(exp)
            RedemptionRuleLexer lexer = new RedemptionRuleLexer(stream)
            CommonTokenStream tokenStream = new CommonTokenStream(lexer)
            lexer.removeErrorListeners()
            lexer.addErrorListener(errorListener)
            RedemptionRuleParser parser = new RedemptionRuleParser(tokenStream)
            parser.removeErrorListeners()
            parser.addErrorListener(errorListener)
            RedemptionRuleParser.CompileUnitContext cst = parser.compileUnit()
            ExpressionNode expression = new BuildAstVisitor().visitCompileUnit(cst)

            if (!errorListener.errors.empty) {
                throw errorListener.errors[0]
            }
            return expression
        } catch (StringIndexOutOfBoundsException e) {
            // This happens in Antlr4.7 when the error is right at the end of the expression
            String[] lines = exp.split("\n")
            throw new BuildAstException(lines.length, lines[lines.length - 1].length(), exp, "unexpected character at end of rule", e)
        }
    }

    @Override
    ExpressionNode visitStringExpr(RedemptionRuleParser.StringExprContext ctx) {
        return new LiteralNode(new Value(StringEscapeUtils.unescapeJava(ctx.value.text.substring(1, ctx.value.text.length() - 1))))
    }

    @Override
    ExpressionNode visitCompileUnit(RedemptionRuleParser.CompileUnitContext ctx) {
        return visit(ctx.expr())
    }

    @Override
    ExpressionNode visitIdentExpr(RedemptionRuleParser.IdentExprContext ctx) {
        return new IdentifierNode(ctx.ident.text)
    }

    @Override
    ExpressionNode visitInfixExpr(RedemptionRuleParser.InfixExprContext ctx) {
        switch (ctx.op.type) {
            case RedemptionRuleLexer.OP_ADD: return new AdditionNode(visit(ctx.left), visit(ctx.right))
            case RedemptionRuleLexer.OP_SUB: return new SubtractionNode(visit(ctx.left), visit(ctx.right))
            case RedemptionRuleLexer.OP_MUL: return new MultiplicationNode(visit(ctx.left), visit(ctx.right))
            case RedemptionRuleLexer.OP_DIV: return new DivisionNode(visit(ctx.left), visit(ctx.right))
            case RedemptionRuleLexer.OP_MOD: return new ModuloNode(visit(ctx.left), visit(ctx.right))
            case RedemptionRuleLexer.OP_EQ: return new EqualityNode(visit(ctx.left), visit(ctx.right))
            case RedemptionRuleLexer.OP_NEQ: return new NotNode(new EqualityNode(visit(ctx.left), visit(ctx.right)))
            case RedemptionRuleLexer.OP_AND: return new AndNode(visit(ctx.left), visit(ctx.right))
            case RedemptionRuleLexer.OP_OR: return new OrNode(visit(ctx.left), visit(ctx.right))
            case RedemptionRuleLexer.OP_GT: return new ComparisonNode(visit(ctx.left), ">", visit(ctx.right))
            case RedemptionRuleLexer.OP_GTE: return new ComparisonNode(visit(ctx.left), ">=", visit(ctx.right))
            case RedemptionRuleLexer.OP_LT: return new ComparisonNode(visit(ctx.left), "<", visit(ctx.right))
            case RedemptionRuleLexer.OP_LTE: return new ComparisonNode(visit(ctx.left), "<=", visit(ctx.right))
        }
        throw new UnsupportedOperationException()
    }

    @Override
    ExpressionNode visitUnaryExpr(RedemptionRuleParser.UnaryExprContext ctx) {
        switch (ctx.op.type) {
            case RedemptionRuleLexer.OP_ADD: return new UnaryPlusNode(visit(ctx.operand))
            case RedemptionRuleLexer.OP_SUB: return new UnaryMinusNode(visit(ctx.operand))
            case RedemptionRuleLexer.OP_NOT: return new NotNode(visit(ctx.operand))
        }
        throw new UnsupportedOperationException()
    }

    @Override
    ExpressionNode visitFuncExpr(RedemptionRuleParser.FuncExprContext ctx) {
        return new FuncCallNode(ctx.func.text, ctx.funcParam().collect({ arg -> visit(arg) }))
    }

    @Override
    ExpressionNode visitArrayExpr(RedemptionRuleParser.ArrayExprContext ctx) {
        return new ArrayNode(ctx.expr().collect({ arg -> visit(arg) }))
    }

    @Override
    ExpressionNode visitNullExpr(RedemptionRuleParser.NullExprContext ctx) {
        return new LiteralNode(Value.NULL)
    }

    @Override
    ExpressionNode visitTernaryExpr(RedemptionRuleParser.TernaryExprContext ctx) {
        return new TernaryNode(visit(ctx.condition), visit(ctx.left), visit(ctx.right))
    }

    @Override
    ExpressionNode visitFuncDotExpr(RedemptionRuleParser.FuncDotExprContext ctx) {
        return new FuncCallNode(ctx.func.text, visit(ctx.expr()), ctx.funcParam().collect({ arg -> visit(arg) }))
    }

    @Override
    ExpressionNode visitNumberExpr(RedemptionRuleParser.NumberExprContext ctx) {
        if (ctx.value.text == 'Inf') {
            return new LiteralNode(new Value(Double.POSITIVE_INFINITY))
        }
        if ((ctx.value.text as String).indexOf('.') == -1) {
            try {
                return new LiteralNode(new Value(Long.valueOf(ctx.value.text)))
            } catch (NumberFormatException ignored) {
            }
        }
        try {
            return new LiteralNode(new Value(Double.valueOf(ctx.value.text)))
        } catch (NumberFormatException ignored) {
        }
        throw new UnsupportedOperationException()
    }

    @Override
    ExpressionNode visitMemberExpr(RedemptionRuleParser.MemberExprContext ctx) {
        return new MemberNode(visit(ctx.source), visit(ctx.member), true)
    }

    @Override
    ExpressionNode visitParensExpr(RedemptionRuleParser.ParensExprContext ctx) {
        return visit(ctx.expr())
    }

    @Override
    ExpressionNode visitBoolExpr(RedemptionRuleParser.BoolExprContext ctx) {
        new LiteralNode(new Value(ctx.value.text == "true"))
    }

    @Override
    ExpressionNode visitMemberDotExpr(RedemptionRuleParser.MemberDotExprContext ctx) {
        return new MemberNode(visit(ctx.source), new LiteralNode(new Value(ctx.member.text)), false)
    }

    @Override
    ExpressionNode visitLambda(RedemptionRuleParser.LambdaContext ctx) {
        return new LambdaNode(ctx.ID().collect({ id -> id.text }), visit(ctx.expr()))
    }
}
