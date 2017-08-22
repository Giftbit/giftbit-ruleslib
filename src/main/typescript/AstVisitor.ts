import antlr4 = require("antlr4");
import {RedemptionRuleLexer} from "./RedemptionRuleLexer";
import {RedemptionRuleVisitor} from "./RedemptionRuleVisitor";
import {RedemptionRuleParser} from "./RedemptionRuleParser";
import {LiteralNode} from "./ast/LiteralNode";
import {InfixNode} from "./ast/InfixNode";
import {UnaryNode} from "./ast/UnaryNode";
import {UnsupportedOperationError} from "./UnsupportedOperationError";
import {ArrayNode} from "./ast/ArrayNode";
import {IdentifierNode} from "./ast/IdentifierNode";
import {MemberNode} from "./ast/MemberNode";
import {TernaryNode} from "./ast/TernaryNode";
import {ExpressionNode} from "./ast/ExpressionNode";

export class AstVisitor extends RedemptionRuleVisitor {

    static buildAst(exp: string): ExpressionNode {
        const chars = new antlr4.InputStream(exp);
        const lexer = new RedemptionRuleLexer(chars);
        const tokens  = new antlr4.CommonTokenStream(lexer);
        const parser = new RedemptionRuleParser(tokens);
        parser.buildParseTrees = true;

        const tree = parser.compileUnit();
        const visitor = new AstVisitor();
        return visitor.visitCompileUnit(tree);
    }

    visitFuncExpr(ctx: any): any {
        throw new UnsupportedOperationError();  // TODO
    }

    visitArrayExpr(ctx: any): any {
        return new ArrayNode(ctx.expr().map(arg => this.visitChildren(arg)));   // TODO this might be shaky
    }

    visitNullExpr(ctx: any): any {
        return new LiteralNode(null);
    }

    visitNumberExpr(ctx: any): any {
        return new LiteralNode(+ctx.value.text);
    }

    visitMemberExpr(ctx: any): any {
        return new MemberNode(this.visitChildren(ctx.source), this.visitChildren(ctx.member), true);
    }

    visitStringExpr(ctx: any): any {
        return new LiteralNode(ctx.value.text.substring(1, ctx.value.text.length - 1));
    }

    visitIdentExpr(ctx: any): any {
        return new IdentifierNode(ctx.ident.text);
    }

    visitInfixExpr(ctx: any): any {
        switch (ctx.op.type) {
            case RedemptionRuleLexer.OP_ADD: return new InfixNode(this.visitChildren(ctx.left), "+", this.visitChildren(ctx.right));
            case RedemptionRuleLexer.OP_SUB: return new InfixNode(this.visitChildren(ctx.left), "-", this.visitChildren(ctx.right));
            case RedemptionRuleLexer.OP_MUL: return new InfixNode(this.visitChildren(ctx.left), "*", this.visitChildren(ctx.right));
            case RedemptionRuleLexer.OP_DIV: return new InfixNode(this.visitChildren(ctx.left), "/", this.visitChildren(ctx.right));
            case RedemptionRuleLexer.OP_MOD: return new InfixNode(this.visitChildren(ctx.left), "%", this.visitChildren(ctx.right));
            case RedemptionRuleLexer.OP_EQ: return new InfixNode(this.visitChildren(ctx.left), "==", this.visitChildren(ctx.right));
            case RedemptionRuleLexer.OP_NEQ: return new UnaryNode("!", new InfixNode(this.visitChildren(ctx.left), "==", this.visitChildren(ctx.right)));
            case RedemptionRuleLexer.OP_AND: return new InfixNode(this.visitChildren(ctx.left), "&&", this.visitChildren(ctx.right));
            case RedemptionRuleLexer.OP_OR: return new InfixNode(this.visitChildren(ctx.left), "||", this.visitChildren(ctx.right));
            case RedemptionRuleLexer.OP_GT: return new InfixNode(this.visitChildren(ctx.left), ">", this.visitChildren(ctx.right));
            case RedemptionRuleLexer.OP_GTE: return new InfixNode(this.visitChildren(ctx.left), ">=", this.visitChildren(ctx.right));
            case RedemptionRuleLexer.OP_LT: return new InfixNode(this.visitChildren(ctx.left), "<", this.visitChildren(ctx.right));
            case RedemptionRuleLexer.OP_LTE: return new InfixNode(this.visitChildren(ctx.left), "<=", this.visitChildren(ctx.right));
            default: throw new UnsupportedOperationError();
        }
    }

    visitUnaryExpr(ctx: any): any {
        switch (ctx.op.type) {
            case RedemptionRuleLexer.OP_ADD: return new UnaryNode("+", this.visitChildren(ctx.operand));
            case RedemptionRuleLexer.OP_SUB: return new UnaryNode("-", this.visitChildren(ctx.operand));
            case RedemptionRuleLexer.OP_NOT: return new UnaryNode("!", this.visitChildren(ctx.operand));
            default: throw new UnsupportedOperationError();
        }
    }

    visitTernaryExpr(ctx: any): any {
        return new TernaryNode(this.visitChildren(ctx.condition), this.visitChildren(ctx.left), this.visitChildren(ctx.right))
    }

    visitFuncDotExpr(ctx: any): any {
        throw new UnsupportedOperationError();  // TODO
    }

    visitBoolExpr(ctx: any): any {
        switch (ctx.value.text) {
            case "true": return new LiteralNode(true);
            case "false": return new LiteralNode(false);
            default: throw new UnsupportedOperationError(`not a boolean value: ${ctx.value.text}`);
        }
    }

    visitMemberDotExpr(ctx: any): any {
        return new MemberNode(this.visitChildren(ctx.source), new LiteralNode(ctx.member.text), false);
    }

    visitFuncParam(ctx: any): any {
        throw new UnsupportedOperationError();  // TODO
    }

    visitLambda(ctx: any): any {
        throw new UnsupportedOperationError();  // TODO
    }
}
