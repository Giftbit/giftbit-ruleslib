import RedemptionRuleVisitor = require("./RedemptionRuleVisitor");

export class AstVisitor extends RedemptionRuleVisitor.RedemptionRuleVisitor {

    visitFuncExpr(ctx: any): any {
        console.log("visitFuncExpr", ctx.text);
        return this.visitChildren(ctx);
    }

    visitArrayExpr(ctx: any): any {
        console.log("visitArrayExpr", ctx.text);
        return this.visitChildren(ctx);
    }

    visitNullExpr(ctx: any): any {
        console.log("visitNullExpr", ctx.text);
        return this.visitChildren(ctx);
    }

    visitNumberExpr(ctx: any): any {
        console.log("visitNumberExpr", ctx.value.text);
        return this.visitChildren(ctx);
    }

    visitMemberExpr(ctx: any): any {
        console.log("visitMemberExpr", ctx.text);
        return this.visitChildren(ctx);
    }

    visitStringExpr(ctx: any): any {
        console.log("visitStringExpr", ctx.value.text);
        return this.visitChildren(ctx);
    }

    visitIdentExpr(ctx: any): any {
        console.log("visitStringExpr", ctx.text);
        return this.visitChildren(ctx);
    }

    visitInfixExpr(ctx: any): any {
        console.log("visitInfixExpr", ctx.text);
        return this.visitChildren(ctx);
    }

    visitUnaryExpr(ctx: any): any {
        console.log("visitUnaryExpr", ctx.text);
        return this.visitChildren(ctx);
    }

    visitTernaryExpr(ctx: any): any {
        console.log("visitTernaryExpr", ctx.text);
        return this.visitChildren(ctx);
    }

    visitFuncDotExpr(ctx: any): any {
        console.log("visitFuncDotExpr", ctx.text);
        return this.visitChildren(ctx);
    }

    visitBoolExpr(ctx: any): any {
        console.log("visitBoolExpr", ctx.value.text);
        return this.visitChildren(ctx);
    }

    visitMemberDotExpr(ctx: any): any {
        console.log("visitMemberDotExpr", ctx.text);
        return this.visitChildren(ctx);
    }

    visitFuncParam(ctx: any): any {
        console.log("visitFuncParam", ctx.text);
        return this.visitChildren(ctx);
    }

    visitLambda(ctx: any): any {
        console.log("visitLambda", ctx.text);
        return this.visitChildren(ctx);
    }
}

function tracePrototypeChainOf(object) {

    var proto = object.constructor.prototype,
        result = '';

    while (proto) {
        result += ' -> ' + proto.constructor.name;
        proto = Object.getPrototypeOf(proto)
    }

    return result;
}
