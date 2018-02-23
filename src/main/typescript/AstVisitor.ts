import antlr4 = require("antlr4");
import {RuleLexer} from "./antlrgen/RuleLexer";
import {RuleVisitor} from "./antlrgen/RuleVisitor";
import {RuleParser} from "./antlrgen/RuleParser";
import {LiteralNode} from "./ast/LiteralNode";
import {InfixNode} from "./ast/InfixNode";
import {UnaryNode} from "./ast/UnaryNode";
import {UnsupportedOperationError} from "./UnsupportedOperationError";
import {ListNode} from "./ast/ListNode";
import {IdentifierNode} from "./ast/IdentifierNode";
import {MemberNode} from "./ast/MemberNode";
import {TernaryNode} from "./ast/TernaryNode";
import {ExpressionNode} from "./ast/ExpressionNode";
import {FuncCallNode} from "./ast/FuncCallNode";
import {LambdaNode} from "./ast/LambdaNode";
import {AstErrorListener} from "./AstErrorListener";

export class AstVisitor extends RuleVisitor {

    static buildAst(exp: string): ExpressionNode {
        const errorListener = new AstErrorListener(exp);
        const chars = new antlr4.InputStream(exp);
        const lexer = new RuleLexer(chars);
        lexer.removeErrorListeners();
        lexer.addErrorListener(errorListener);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new RuleParser(tokens);
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

    visit(ctx: any): any {
        // Not sure why the super class doesn't make this check but this
        // prevents things from blowing up.  The antlr project is intimidating
        // and I don't want to make a PR.
        if (ctx === null) {
            return null;
        }
        return super.visit(ctx);
    }

    visitCompileUnit(ctx: any): any {
        return this.visit(ctx.children[0]);
    }

    visitFuncExpr(ctx: any): any {
        return new FuncCallNode(ctx.func.text, ctx.funcParam().map(p => this.visit(p)), false);
    }

    visitArrayExpr(ctx: any): any {
        return new ListNode(ctx.expr().map(arg => this.visit(arg)));
    }

    visitNullExpr(ctx: any): any {
        return new LiteralNode(null);
    }

    visitNumberExpr(ctx: any): any {
        if (ctx.value.text === "Inf") {
            return new LiteralNode(Number.POSITIVE_INFINITY);
        }
        return new LiteralNode(+ctx.value.text);
    }

    visitMemberExpr(ctx: any): any {
        return new MemberNode(this.visit(ctx.source), this.visit(ctx.member), true);
    }

    visitParensExpr(ctx: any): any {
        return this.visit(ctx.children[1]);
    }

    visitStringExpr(ctx: any): any {
        const s = ctx.value.text.substring(1, ctx.value.text.length - 1)
            .replace(/\\(.)/g, (match, p1) => {
                switch (p1) {
                    case "b": return "\b";
                    case "f": return "\f";
                    case "n": return "\n";
                    case "r": return "\r";
                    case "t": return "\t";
                    case "v": return "\v";
                    case "'": return "'";
                    case "\"": return "\"";
                    case "\\": return "\\";
                    default: return p1;
                }
            });
        return new LiteralNode(s);
    }

    visitIdentExpr(ctx: any): any {
        return new IdentifierNode(ctx.ident.text);
    }

    visitInfixExpr(ctx: any): any {
        switch (ctx.op.type) {
            case RuleLexer.OP_ADD: return new InfixNode(this.visit(ctx.left), "+", this.visit(ctx.right));
            case RuleLexer.OP_SUB: return new InfixNode(this.visit(ctx.left), "-", this.visit(ctx.right));
            case RuleLexer.OP_MUL: return new InfixNode(this.visit(ctx.left), "*", this.visit(ctx.right));
            case RuleLexer.OP_DIV: return new InfixNode(this.visit(ctx.left), "/", this.visit(ctx.right));
            case RuleLexer.OP_MOD: return new InfixNode(this.visit(ctx.left), "%", this.visit(ctx.right));
            case RuleLexer.OP_EQ: return new InfixNode(this.visit(ctx.left), "==", this.visit(ctx.right));
            case RuleLexer.OP_NEQ: return new UnaryNode("!", new InfixNode(this.visit(ctx.left), "==", this.visit(ctx.right)));
            case RuleLexer.OP_AND: return new InfixNode(this.visit(ctx.left), "&&", this.visit(ctx.right));
            case RuleLexer.OP_OR: return new InfixNode(this.visit(ctx.left), "||", this.visit(ctx.right));
            case RuleLexer.OP_GT: return new InfixNode(this.visit(ctx.left), ">", this.visit(ctx.right));
            case RuleLexer.OP_GTE: return new InfixNode(this.visit(ctx.left), ">=", this.visit(ctx.right));
            case RuleLexer.OP_LT: return new InfixNode(this.visit(ctx.left), "<", this.visit(ctx.right));
            case RuleLexer.OP_LTE: return new InfixNode(this.visit(ctx.left), "<=", this.visit(ctx.right));
            default: throw new UnsupportedOperationError();
        }
    }

    visitUnaryExpr(ctx: any): any {
        switch (ctx.op.type) {
            case RuleLexer.OP_ADD: return new UnaryNode("+", this.visit(ctx.operand));
            case RuleLexer.OP_SUB: return new UnaryNode("-", this.visit(ctx.operand));
            case RuleLexer.OP_NOT: return new UnaryNode("!", this.visit(ctx.operand));
            default: throw new UnsupportedOperationError();
        }
    }

    visitTernaryExpr(ctx: any): any {
        if (ctx.condition && ctx.left && ctx.right) {
            return new TernaryNode(this.visit(ctx.condition), this.visit(ctx.left), this.visit(ctx.right));
        }
        return null;
    }

    visitFuncDotExpr(ctx: any): any {
        return new FuncCallNode(ctx.func.text, [this.visit(ctx.expr()), ...ctx.funcParam().map(p => this.visit(p))], true);
    }

    visitBoolExpr(ctx: any): any {
        return new LiteralNode(ctx.value.text === "true");
    }

    visitMemberDotExpr(ctx: any): any {
        return new MemberNode(this.visit(ctx.source), new LiteralNode(ctx.member.text), false);
    }

    visitFuncParam(ctx: any): any {
        const lambda = ctx.lambda();
        return lambda ? this.visitLambda(lambda) : this.visit(ctx.expr());
    }

    visitLambda(ctx: any): any {
        return new LambdaNode(ctx.ID().map(id => id.symbol.text), this.visit(ctx.expr()));
    }
}
