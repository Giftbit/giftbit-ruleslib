import { RuleVisitor } from "./antlrgen/RuleVisitor";
import { ExpressionNode } from "./ast/ExpressionNode";
export declare class AstVisitor extends RuleVisitor {
    static buildAst(exp: string): ExpressionNode;
    visitCompileUnit(ctx: any): any;
    visitFuncExpr(ctx: any): any;
    visitArrayExpr(ctx: any): any;
    visitNullExpr(ctx: any): any;
    visitNumberExpr(ctx: any): any;
    visitMemberExpr(ctx: any): any;
    visitParensExpr(ctx: any): any;
    visitStringExpr(ctx: any): any;
    visitIdentExpr(ctx: any): any;
    visitInfixExpr(ctx: any): any;
    visitUnaryExpr(ctx: any): any;
    visitTernaryExpr(ctx: any): any;
    visitFuncDotExpr(ctx: any): any;
    visitBoolExpr(ctx: any): any;
    visitMemberDotExpr(ctx: any): any;
    visitFuncParam(ctx: any): any;
    visitLambda(ctx: any): any;
}
