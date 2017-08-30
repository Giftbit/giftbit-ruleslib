// Generated from com/giftbit/ruleslib/Rule.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by RuleParser.

function RuleVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RuleVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RuleVisitor.prototype.constructor = RuleVisitor;

// Visit a parse tree produced by RuleParser#compileUnit.
RuleVisitor.prototype.visitCompileUnit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#funcExpr.
RuleVisitor.prototype.visitFuncExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#arrayExpr.
RuleVisitor.prototype.visitArrayExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#nullExpr.
RuleVisitor.prototype.visitNullExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#numberExpr.
RuleVisitor.prototype.visitNumberExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#memberExpr.
RuleVisitor.prototype.visitMemberExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#parensExpr.
RuleVisitor.prototype.visitParensExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#stringExpr.
RuleVisitor.prototype.visitStringExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#identExpr.
RuleVisitor.prototype.visitIdentExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#infixExpr.
RuleVisitor.prototype.visitInfixExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#unaryExpr.
RuleVisitor.prototype.visitUnaryExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#ternaryExpr.
RuleVisitor.prototype.visitTernaryExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#funcDotExpr.
RuleVisitor.prototype.visitFuncDotExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#boolExpr.
RuleVisitor.prototype.visitBoolExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#memberDotExpr.
RuleVisitor.prototype.visitMemberDotExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#funcParam.
RuleVisitor.prototype.visitFuncParam = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RuleParser#lambda.
RuleVisitor.prototype.visitLambda = function(ctx) {
  return this.visitChildren(ctx);
};



exports.RuleVisitor = RuleVisitor;