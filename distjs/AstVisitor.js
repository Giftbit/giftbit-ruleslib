"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4 = require("antlr4");
const RuleLexer_1 = require("./antlrgen/RuleLexer");
const RuleVisitor_1 = require("./antlrgen/RuleVisitor");
const RuleParser_1 = require("./antlrgen/RuleParser");
const LiteralNode_1 = require("./ast/LiteralNode");
const InfixNode_1 = require("./ast/InfixNode");
const UnaryNode_1 = require("./ast/UnaryNode");
const UnsupportedOperationError_1 = require("./UnsupportedOperationError");
const ListNode_1 = require("./ast/ListNode");
const IdentifierNode_1 = require("./ast/IdentifierNode");
const MemberNode_1 = require("./ast/MemberNode");
const TernaryNode_1 = require("./ast/TernaryNode");
const FuncCallNode_1 = require("./ast/FuncCallNode");
const LambdaNode_1 = require("./ast/LambdaNode");
const AstErrorListener_1 = require("./AstErrorListener");
class AstVisitor extends RuleVisitor_1.RuleVisitor {
    static buildAst(exp) {
        const errorListener = new AstErrorListener_1.AstErrorListener(exp);
        const chars = new antlr4.InputStream(exp);
        const lexer = new RuleLexer_1.RuleLexer(chars);
        lexer.removeErrorListeners();
        lexer.addErrorListener(errorListener);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new RuleParser_1.RuleParser(tokens);
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);
        parser.buildParseTrees = true;
        const tree = parser.compileUnit();
        const visitor = new AstVisitor();
        const astNode = visitor.visitCompileUnit(tree);
        if (errorListener.errors.length > 0) {
            throw errorListener.errors[0];
        }
        return astNode;
    }
    visit(ctx) {
        // Not sure why the super class doesn't make this check but this
        // prevents things from blowing up.  The antlr project is intimidating
        // and I don't want to make a PR.
        if (ctx === null) {
            return null;
        }
        return super.visit(ctx);
    }
    visitCompileUnit(ctx) {
        return this.visit(ctx.children[0]);
    }
    visitFuncExpr(ctx) {
        return new FuncCallNode_1.FuncCallNode(ctx.func.text, ctx.funcParam().map(p => this.visit(p)), false);
    }
    visitArrayExpr(ctx) {
        return new ListNode_1.ListNode(ctx.expr().map(arg => this.visit(arg)));
    }
    visitNullExpr(ctx) {
        return new LiteralNode_1.LiteralNode(null);
    }
    visitNumberExpr(ctx) {
        if (ctx.value.text === "Inf") {
            return new LiteralNode_1.LiteralNode(Number.POSITIVE_INFINITY);
        }
        return new LiteralNode_1.LiteralNode(+ctx.value.text);
    }
    visitMemberExpr(ctx) {
        return new MemberNode_1.MemberNode(this.visit(ctx.source), this.visit(ctx.member), true);
    }
    visitParensExpr(ctx) {
        return this.visit(ctx.children[1]);
    }
    visitStringExpr(ctx) {
        return new LiteralNode_1.LiteralNode(ctx.value.text.substring(1, ctx.value.text.length - 1));
    }
    visitIdentExpr(ctx) {
        return new IdentifierNode_1.IdentifierNode(ctx.ident.text);
    }
    visitInfixExpr(ctx) {
        switch (ctx.op.type) {
            case RuleLexer_1.RuleLexer.OP_ADD: return new InfixNode_1.InfixNode(this.visit(ctx.left), "+", this.visit(ctx.right));
            case RuleLexer_1.RuleLexer.OP_SUB: return new InfixNode_1.InfixNode(this.visit(ctx.left), "-", this.visit(ctx.right));
            case RuleLexer_1.RuleLexer.OP_MUL: return new InfixNode_1.InfixNode(this.visit(ctx.left), "*", this.visit(ctx.right));
            case RuleLexer_1.RuleLexer.OP_DIV: return new InfixNode_1.InfixNode(this.visit(ctx.left), "/", this.visit(ctx.right));
            case RuleLexer_1.RuleLexer.OP_MOD: return new InfixNode_1.InfixNode(this.visit(ctx.left), "%", this.visit(ctx.right));
            case RuleLexer_1.RuleLexer.OP_EQ: return new InfixNode_1.InfixNode(this.visit(ctx.left), "==", this.visit(ctx.right));
            case RuleLexer_1.RuleLexer.OP_NEQ: return new UnaryNode_1.UnaryNode("!", new InfixNode_1.InfixNode(this.visit(ctx.left), "==", this.visit(ctx.right)));
            case RuleLexer_1.RuleLexer.OP_AND: return new InfixNode_1.InfixNode(this.visit(ctx.left), "&&", this.visit(ctx.right));
            case RuleLexer_1.RuleLexer.OP_OR: return new InfixNode_1.InfixNode(this.visit(ctx.left), "||", this.visit(ctx.right));
            case RuleLexer_1.RuleLexer.OP_GT: return new InfixNode_1.InfixNode(this.visit(ctx.left), ">", this.visit(ctx.right));
            case RuleLexer_1.RuleLexer.OP_GTE: return new InfixNode_1.InfixNode(this.visit(ctx.left), ">=", this.visit(ctx.right));
            case RuleLexer_1.RuleLexer.OP_LT: return new InfixNode_1.InfixNode(this.visit(ctx.left), "<", this.visit(ctx.right));
            case RuleLexer_1.RuleLexer.OP_LTE: return new InfixNode_1.InfixNode(this.visit(ctx.left), "<=", this.visit(ctx.right));
            default: throw new UnsupportedOperationError_1.UnsupportedOperationError();
        }
    }
    visitUnaryExpr(ctx) {
        switch (ctx.op.type) {
            case RuleLexer_1.RuleLexer.OP_ADD: return new UnaryNode_1.UnaryNode("+", this.visit(ctx.operand));
            case RuleLexer_1.RuleLexer.OP_SUB: return new UnaryNode_1.UnaryNode("-", this.visit(ctx.operand));
            case RuleLexer_1.RuleLexer.OP_NOT: return new UnaryNode_1.UnaryNode("!", this.visit(ctx.operand));
            default: throw new UnsupportedOperationError_1.UnsupportedOperationError();
        }
    }
    visitTernaryExpr(ctx) {
        if (ctx.condition && ctx.left && ctx.right) {
            return new TernaryNode_1.TernaryNode(this.visit(ctx.condition), this.visit(ctx.left), this.visit(ctx.right));
        }
        return null;
    }
    visitFuncDotExpr(ctx) {
        return new FuncCallNode_1.FuncCallNode(ctx.func.text, [this.visit(ctx.expr()), ...ctx.funcParam().map(p => this.visit(p))], true);
    }
    visitBoolExpr(ctx) {
        return new LiteralNode_1.LiteralNode(ctx.value.text === "true");
    }
    visitMemberDotExpr(ctx) {
        return new MemberNode_1.MemberNode(this.visit(ctx.source), new LiteralNode_1.LiteralNode(ctx.member.text), false);
    }
    visitFuncParam(ctx) {
        const lambda = ctx.lambda();
        return lambda ? this.visitLambda(lambda) : this.visit(ctx.expr());
    }
    visitLambda(ctx) {
        return new LambdaNode_1.LambdaNode(ctx.ID().map(id => id.symbol.text), this.visit(ctx.expr()));
    }
}
exports.AstVisitor = AstVisitor;
