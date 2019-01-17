package com.giftbit.ruleslib

import com.giftbit.ruleslib.ast.*
import groovy.json.StringEscapeUtils
import org.antlr.v4.runtime.CharStream
import org.antlr.v4.runtime.CharStreams
import org.antlr.v4.runtime.CommonTokenStream

class BuildAstVisitor extends RuleBaseVisitor<ExpressionNode> {

    static ExpressionNode buildAst(String exp) throws AstException {

        try {
            BuildAstErrorListener errorListener = new BuildAstErrorListener(exp)

            CharStream stream = CharStreams.fromString(exp)
            RuleLexer lexer = new RuleLexer(stream)
            CommonTokenStream tokenStream = new CommonTokenStream(lexer)
            lexer.removeErrorListeners()
            lexer.addErrorListener(errorListener)
            RuleParser parser = new RuleParser(tokenStream)
            parser.removeErrorListeners()
            parser.addErrorListener(errorListener)
            RuleParser.CompileUnitContext cst = parser.compileUnit()
            ExpressionNode expression = new BuildAstVisitor().visitCompileUnit(cst)

            if (!errorListener.errors.empty) {
                throw errorListener.errors[0]
            }
            return expression
        } catch (StringIndexOutOfBoundsException e) {
            // This happens in Antlr4.7 when the error is right at the end of the expression
            String[] lines = exp.split("\n")
            throw new AstException(lines.length, lines[lines.length - 1].length(), exp, "unexpected character at end of rule", e)
        }
    }

    @Override
    ExpressionNode visitStringExpr(RuleParser.StringExprContext ctx) {
        return new LiteralNode(new Value(getStringContent(ctx.value.text)))
    }

    @Override
    ExpressionNode visitCompileUnit(RuleParser.CompileUnitContext ctx) {
        return visit(ctx.expr())
    }

    @Override
    ExpressionNode visitIdentExpr(RuleParser.IdentExprContext ctx) {
        return new IdentifierNode(ctx.ident.text)
    }

    @Override
    ExpressionNode visitInfixExpr(RuleParser.InfixExprContext ctx) {
        switch (ctx.op.type) {
            case RuleLexer.OP_ADD: return new AdditionNode(visit(ctx.left), visit(ctx.right))
            case RuleLexer.OP_SUB: return new SubtractionNode(visit(ctx.left), visit(ctx.right))
            case RuleLexer.OP_MUL: return new MultiplicationNode(visit(ctx.left), visit(ctx.right))
            case RuleLexer.OP_DIV: return new DivisionNode(visit(ctx.left), visit(ctx.right))
            case RuleLexer.OP_MOD: return new ModuloNode(visit(ctx.left), visit(ctx.right))
            case RuleLexer.OP_EQ: return new EqualityNode(visit(ctx.left), visit(ctx.right))
            case RuleLexer.OP_NEQ: return new NotNode(new EqualityNode(visit(ctx.left), visit(ctx.right)))
            case RuleLexer.OP_AND: return new AndNode(visit(ctx.left), visit(ctx.right))
            case RuleLexer.OP_OR: return new OrNode(visit(ctx.left), visit(ctx.right))
            case RuleLexer.OP_GT: return new ComparisonNode(visit(ctx.left), ">", visit(ctx.right))
            case RuleLexer.OP_GTE: return new ComparisonNode(visit(ctx.left), ">=", visit(ctx.right))
            case RuleLexer.OP_LT: return new ComparisonNode(visit(ctx.left), "<", visit(ctx.right))
            case RuleLexer.OP_LTE: return new ComparisonNode(visit(ctx.left), "<=", visit(ctx.right))
        }
        throw new UnsupportedOperationException()
    }

    @Override
    ExpressionNode visitUnaryExpr(RuleParser.UnaryExprContext ctx) {
        switch (ctx.op.type) {
            case RuleLexer.OP_ADD: return new UnaryPlusNode(visit(ctx.operand))
            case RuleLexer.OP_SUB: return new UnaryMinusNode(visit(ctx.operand))
            case RuleLexer.OP_NOT: return new NotNode(visit(ctx.operand))
        }
        throw new UnsupportedOperationException()
    }

    @Override
    ExpressionNode visitFuncExpr(RuleParser.FuncExprContext ctx) {
        return new FuncCallNode(ctx.func.text, ctx.funcParam().collect({ arg -> visit(arg) }))
    }

    @Override
    ExpressionNode visitArrayExpr(RuleParser.ArrayExprContext ctx) {
        return new ListNode(ctx.expr().collect({ arg -> visit(arg) }))
    }

    @Override
    ExpressionNode visitObjectExpr(RuleParser.ObjectExprContext ctx) {
        def expressionMap = new HashMap<String, ExpressionNode>()
        for (def assignment : ctx.propertyAssignment()) {
            if (!assignment.value) {
                // Catch object assignments without values (eg: {a}).  This should be a parser error.
                // The JavaScript version doesn't get this far and I'm not sure why this one does.
                throw new AstException(ctx.start.line, ctx.start.charPositionInLine, ctx.text, "object key without value")
            }
            def key = assignment.key.ident ? assignment.key.ident.text : getStringContent(assignment.key.string.text)
            expressionMap.put(key, visit(assignment.value))
        }
        return new ObjectNode(expressionMap)
    }

    @Override
    ExpressionNode visitNullExpr(RuleParser.NullExprContext ctx) {
        return new LiteralNode(Value.NULL)
    }

    @Override
    ExpressionNode visitTernaryExpr(RuleParser.TernaryExprContext ctx) {
        if (ctx.condition && ctx.left && ctx.right) {
            return new TernaryNode(visit(ctx.condition), visit(ctx.left), visit(ctx.right))
        }
        return null
    }

    @Override
    ExpressionNode visitFuncDotExpr(RuleParser.FuncDotExprContext ctx) {
        return new FuncCallNode(ctx.func.text, visit(ctx.expr()), ctx.funcParam().collect({ arg -> visit(arg) }))
    }

    @Override
    ExpressionNode visitNumberExpr(RuleParser.NumberExprContext ctx) {
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
    ExpressionNode visitMemberExpr(RuleParser.MemberExprContext ctx) {
        return new MemberNode(visit(ctx.source), visit(ctx.member), true)
    }

    @Override
    ExpressionNode visitParensExpr(RuleParser.ParensExprContext ctx) {
        return visit(ctx.expr())
    }

    @Override
    ExpressionNode visitBoolExpr(RuleParser.BoolExprContext ctx) {
        new LiteralNode(new Value(ctx.value.text == "true"))
    }

    @Override
    ExpressionNode visitMemberDotExpr(RuleParser.MemberDotExprContext ctx) {
        return new MemberNode(visit(ctx.source), new LiteralNode(new Value(ctx.member.text)), false)
    }

    @Override
    ExpressionNode visitLambda(RuleParser.LambdaContext ctx) {
        return new LambdaNode(ctx.ID().collect({ id -> id.text }), visit(ctx.expr()))
    }

    private static String getStringContent(String s) {
        return StringEscapeUtils.unescapeJava(s.substring(1, s.length() - 1))
    }
}
