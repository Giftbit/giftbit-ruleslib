// Generated from com/giftbit/ruleslib/Rule.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RuleListener = require('./RuleListener').RuleListener;
var RuleVisitor = require('./RuleVisitor').RuleVisitor;

var grammarFileName = "Rule.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003#\u009b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003\u001c\n\u0003\f\u0003\u000e\u0003\u001f\u000b\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003\'\n\u0003\u0003\u0003\u0003\u0003\u0007\u0003+\n\u0003",
    "\f\u0003\u000e\u0003.\u000b\u0003\u0003\u0003\u0005\u00031\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u00038",
    "\n\u0003\f\u0003\u000e\u0003;\u000b\u0003\u0005\u0003=\n\u0003\u0003",
    "\u0003\u0005\u0003@\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003H\n\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u0003q\n\u0003\f\u0003\u000e\u0003t\u000b\u0003",
    "\u0005\u0003v\n\u0003\u0003\u0003\u0007\u0003y\n\u0003\f\u0003\u000e",
    "\u0003|\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0005\u0005\u0084\n\u0005\u0003\u0006\u0003",
    "\u0006\u0005\u0006\u0088\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u0091\n",
    "\u0007\f\u0007\u000e\u0007\u0094\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007\u0099\n\u0007\u0003\u0007\u0002\u0003\u0004",
    "\b\u0002\u0004\u0006\b\n\f\u0002\u0007\u0004\u0002\u0010\u0011\u0015",
    "\u0015\u0003\u0002\u0012\u0014\u0003\u0002\u0010\u0011\u0003\u0002\u0018",
    "\u001b\u0003\u0002\u0016\u0017\u0002\u00b4\u0002\u000e\u0003\u0002\u0002",
    "\u0002\u0004G\u0003\u0002\u0002\u0002\u0006}\u0003\u0002\u0002\u0002",
    "\b\u0083\u0003\u0002\u0002\u0002\n\u0087\u0003\u0002\u0002\u0002\f\u0098",
    "\u0003\u0002\u0002\u0002\u000e\u000f\u0005\u0004\u0003\u0002\u000f\u0010",
    "\u0007\u0002\u0002\u0003\u0010\u0003\u0003\u0002\u0002\u0002\u0011\u0012",
    "\b\u0003\u0001\u0002\u0012\u0013\u0007\u0004\u0002\u0002\u0013\u0014",
    "\u0005\u0004\u0003\u0002\u0014\u0015\u0007\u0005\u0002\u0002\u0015H",
    "\u0003\u0002\u0002\u0002\u0016\u0017\u0007\"\u0002\u0002\u0017\u0018",
    "\u0007\u0004\u0002\u0002\u0018\u001d\u0005\n\u0006\u0002\u0019\u001a",
    "\u0007\n\u0002\u0002\u001a\u001c\u0005\n\u0006\u0002\u001b\u0019\u0003",
    "\u0002\u0002\u0002\u001c\u001f\u0003\u0002\u0002\u0002\u001d\u001b\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e \u0003",
    "\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002 !\u0007\u0005",
    "\u0002\u0002!H\u0003\u0002\u0002\u0002\"#\t\u0002\u0002\u0002#H\u0005",
    "\u0004\u0003\u0011$&\u0007\u0006\u0002\u0002%\'\u0005\u0004\u0003\u0002",
    "&%\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\',\u0003\u0002",
    "\u0002\u0002()\u0007\n\u0002\u0002)+\u0005\u0004\u0003\u0002*(\u0003",
    "\u0002\u0002\u0002+.\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002",
    ",-\u0003\u0002\u0002\u0002-0\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002",
    "\u0002/1\u0007\n\u0002\u00020/\u0003\u0002\u0002\u000201\u0003\u0002",
    "\u0002\u000212\u0003\u0002\u0002\u00022H\u0007\u0007\u0002\u00023<\u0007",
    "\b\u0002\u000249\u0005\u0006\u0004\u000256\u0007\n\u0002\u000268\u0005",
    "\u0006\u0004\u000275\u0003\u0002\u0002\u00028;\u0003\u0002\u0002\u0002",
    "97\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002",
    "\u0002;9\u0003\u0002\u0002\u0002<4\u0003\u0002\u0002\u0002<=\u0003\u0002",
    "\u0002\u0002=?\u0003\u0002\u0002\u0002>@\u0007\n\u0002\u0002?>\u0003",
    "\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002",
    "AH\u0007\t\u0002\u0002BH\u0007!\u0002\u0002CH\u0007 \u0002\u0002DH\u0007",
    "\u001f\u0002\u0002EH\u0007\u001e\u0002\u0002FH\u0007\"\u0002\u0002G",
    "\u0011\u0003\u0002\u0002\u0002G\u0016\u0003\u0002\u0002\u0002G\"\u0003",
    "\u0002\u0002\u0002G$\u0003\u0002\u0002\u0002G3\u0003\u0002\u0002\u0002",
    "GB\u0003\u0002\u0002\u0002GC\u0003\u0002\u0002\u0002GD\u0003\u0002\u0002",
    "\u0002GE\u0003\u0002\u0002\u0002GF\u0003\u0002\u0002\u0002Hz\u0003\u0002",
    "\u0002\u0002IJ\f\u0010\u0002\u0002JK\t\u0003\u0002\u0002Ky\u0005\u0004",
    "\u0003\u0011LM\f\u000f\u0002\u0002MN\t\u0004\u0002\u0002Ny\u0005\u0004",
    "\u0003\u0010OP\f\u000e\u0002\u0002PQ\t\u0005\u0002\u0002Qy\u0005\u0004",
    "\u0003\u000fRS\f\r\u0002\u0002ST\t\u0006\u0002\u0002Ty\u0005\u0004\u0003",
    "\u000eUV\f\f\u0002\u0002VW\u0007\u001d\u0002\u0002Wy\u0005\u0004\u0003",
    "\rXY\f\u000b\u0002\u0002YZ\u0007\u001c\u0002\u0002Zy\u0005\u0004\u0003",
    "\f[\\\f\n\u0002\u0002\\]\u0007\f\u0002\u0002]^\u0005\u0004\u0003\u0002",
    "^_\u0007\r\u0002\u0002_`\u0005\u0004\u0003\n`y\u0003\u0002\u0002\u0002",
    "ab\f\u0015\u0002\u0002bc\u0007\u0006\u0002\u0002cd\u0005\u0004\u0003",
    "\u0002de\u0007\u0007\u0002\u0002ey\u0003\u0002\u0002\u0002fg\f\u0014",
    "\u0002\u0002gh\u0007\u000b\u0002\u0002hy\u0007\"\u0002\u0002ij\f\u0013",
    "\u0002\u0002jk\u0007\u000b\u0002\u0002kl\u0007\"\u0002\u0002lu\u0007",
    "\u0004\u0002\u0002mr\u0005\n\u0006\u0002no\u0007\n\u0002\u0002oq\u0005",
    "\n\u0006\u0002pn\u0003\u0002\u0002\u0002qt\u0003\u0002\u0002\u0002r",
    "p\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002sv\u0003\u0002\u0002",
    "\u0002tr\u0003\u0002\u0002\u0002um\u0003\u0002\u0002\u0002uv\u0003\u0002",
    "\u0002\u0002vw\u0003\u0002\u0002\u0002wy\u0007\u0005\u0002\u0002xI\u0003",
    "\u0002\u0002\u0002xL\u0003\u0002\u0002\u0002xO\u0003\u0002\u0002\u0002",
    "xR\u0003\u0002\u0002\u0002xU\u0003\u0002\u0002\u0002xX\u0003\u0002\u0002",
    "\u0002x[\u0003\u0002\u0002\u0002xa\u0003\u0002\u0002\u0002xf\u0003\u0002",
    "\u0002\u0002xi\u0003\u0002\u0002\u0002y|\u0003\u0002\u0002\u0002zx\u0003",
    "\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{\u0005\u0003\u0002\u0002",
    "\u0002|z\u0003\u0002\u0002\u0002}~\u0005\b\u0005\u0002~\u007f\u0007",
    "\r\u0002\u0002\u007f\u0080\u0005\u0004\u0003\u0002\u0080\u0007\u0003",
    "\u0002\u0002\u0002\u0081\u0084\u0007\"\u0002\u0002\u0082\u0084\u0007",
    "\u001f\u0002\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0083\u0082\u0003",
    "\u0002\u0002\u0002\u0084\t\u0003\u0002\u0002\u0002\u0085\u0088\u0005",
    "\f\u0007\u0002\u0086\u0088\u0005\u0004\u0003\u0002\u0087\u0085\u0003",
    "\u0002\u0002\u0002\u0087\u0086\u0003\u0002\u0002\u0002\u0088\u000b\u0003",
    "\u0002\u0002\u0002\u0089\u008a\u0007\"\u0002\u0002\u008a\u008b\u0007",
    "\u0003\u0002\u0002\u008b\u0099\u0005\u0004\u0003\u0002\u008c\u008d\u0007",
    "\u0004\u0002\u0002\u008d\u0092\u0007\"\u0002\u0002\u008e\u008f\u0007",
    "\n\u0002\u0002\u008f\u0091\u0007\"\u0002\u0002\u0090\u008e\u0003\u0002",
    "\u0002\u0002\u0091\u0094\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002",
    "\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0095\u0003\u0002",
    "\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0095\u0096\u0007\u0005",
    "\u0002\u0002\u0096\u0097\u0007\u0003\u0002\u0002\u0097\u0099\u0005\u0004",
    "\u0003\u0002\u0098\u0089\u0003\u0002\u0002\u0002\u0098\u008c\u0003\u0002",
    "\u0002\u0002\u0099\r\u0003\u0002\u0002\u0002\u0012\u001d&,09<?Gruxz",
    "\u0083\u0087\u0092\u0098"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'=>'", "'('", "')'", "'['", "']'", "'{'", "'}'", 
                     "','", "'.'", "'?'", "':'", "'''", "'\"'", "'+'", "'-'", 
                     "'*'", "'/'", "'%'", "'!'", "'=='", "'!='", "'<'", 
                     "'<='", "'>'", "'>='", "'||'", "'&&'", null, null, 
                     null, "'null'" ];

var symbolicNames = [ null, null, "PAREN_LEFT", "PAREN_RIGHT", "BRACKET_LEFT", 
                      "BRACKET_RIGHT", "BRACE_LEFT", "BRACE_RIGHT", "COMMA", 
                      "DOT", "QUESTION_MARK", "COLON", "SINGLE_QUOTE", "DOUBLE_QUOTE", 
                      "OP_ADD", "OP_SUB", "OP_MUL", "OP_DIV", "OP_MOD", 
                      "OP_NOT", "OP_EQ", "OP_NEQ", "OP_LT", "OP_LTE", "OP_GT", 
                      "OP_GTE", "OP_OR", "OP_AND", "Number", "String", "Boolean", 
                      "Null", "ID", "WS" ];

var ruleNames =  [ "compileUnit", "expr", "propertyAssignment", "propertyKey", 
                   "funcParam", "lambda" ];

function RuleParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RuleParser.prototype = Object.create(antlr4.Parser.prototype);
RuleParser.prototype.constructor = RuleParser;

Object.defineProperty(RuleParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RuleParser.EOF = antlr4.Token.EOF;
RuleParser.T__0 = 1;
RuleParser.PAREN_LEFT = 2;
RuleParser.PAREN_RIGHT = 3;
RuleParser.BRACKET_LEFT = 4;
RuleParser.BRACKET_RIGHT = 5;
RuleParser.BRACE_LEFT = 6;
RuleParser.BRACE_RIGHT = 7;
RuleParser.COMMA = 8;
RuleParser.DOT = 9;
RuleParser.QUESTION_MARK = 10;
RuleParser.COLON = 11;
RuleParser.SINGLE_QUOTE = 12;
RuleParser.DOUBLE_QUOTE = 13;
RuleParser.OP_ADD = 14;
RuleParser.OP_SUB = 15;
RuleParser.OP_MUL = 16;
RuleParser.OP_DIV = 17;
RuleParser.OP_MOD = 18;
RuleParser.OP_NOT = 19;
RuleParser.OP_EQ = 20;
RuleParser.OP_NEQ = 21;
RuleParser.OP_LT = 22;
RuleParser.OP_LTE = 23;
RuleParser.OP_GT = 24;
RuleParser.OP_GTE = 25;
RuleParser.OP_OR = 26;
RuleParser.OP_AND = 27;
RuleParser.Number = 28;
RuleParser.String = 29;
RuleParser.Boolean = 30;
RuleParser.Null = 31;
RuleParser.ID = 32;
RuleParser.WS = 33;

RuleParser.RULE_compileUnit = 0;
RuleParser.RULE_expr = 1;
RuleParser.RULE_propertyAssignment = 2;
RuleParser.RULE_propertyKey = 3;
RuleParser.RULE_funcParam = 4;
RuleParser.RULE_lambda = 5;

function CompileUnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleParser.RULE_compileUnit;
    return this;
}

CompileUnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompileUnitContext.prototype.constructor = CompileUnitContext;

CompileUnitContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

CompileUnitContext.prototype.EOF = function() {
    return this.getToken(RuleParser.EOF, 0);
};

CompileUnitContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterCompileUnit(this);
	}
};

CompileUnitContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitCompileUnit(this);
	}
};

CompileUnitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitCompileUnit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleParser.CompileUnitContext = CompileUnitContext;

RuleParser.prototype.compileUnit = function() {

    var localctx = new CompileUnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RuleParser.RULE_compileUnit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.expr(0);
        this.state = 13;
        this.match(RuleParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function FuncExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.func = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncExprContext.prototype = Object.create(ExprContext.prototype);
FuncExprContext.prototype.constructor = FuncExprContext;

RuleParser.FuncExprContext = FuncExprContext;

FuncExprContext.prototype.PAREN_LEFT = function() {
    return this.getToken(RuleParser.PAREN_LEFT, 0);
};

FuncExprContext.prototype.funcParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FuncParamContext);
    } else {
        return this.getTypedRuleContext(FuncParamContext,i);
    }
};

FuncExprContext.prototype.PAREN_RIGHT = function() {
    return this.getToken(RuleParser.PAREN_RIGHT, 0);
};

FuncExprContext.prototype.ID = function() {
    return this.getToken(RuleParser.ID, 0);
};

FuncExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RuleParser.COMMA);
    } else {
        return this.getToken(RuleParser.COMMA, i);
    }
};

FuncExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterFuncExpr(this);
	}
};

FuncExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitFuncExpr(this);
	}
};

FuncExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitFuncExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArrayExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayExprContext.prototype = Object.create(ExprContext.prototype);
ArrayExprContext.prototype.constructor = ArrayExprContext;

RuleParser.ArrayExprContext = ArrayExprContext;

ArrayExprContext.prototype.BRACKET_LEFT = function() {
    return this.getToken(RuleParser.BRACKET_LEFT, 0);
};

ArrayExprContext.prototype.BRACKET_RIGHT = function() {
    return this.getToken(RuleParser.BRACKET_RIGHT, 0);
};

ArrayExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ArrayExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RuleParser.COMMA);
    } else {
        return this.getToken(RuleParser.COMMA, i);
    }
};

ArrayExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterArrayExpr(this);
	}
};

ArrayExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitArrayExpr(this);
	}
};

ArrayExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitArrayExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ObjectExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObjectExprContext.prototype = Object.create(ExprContext.prototype);
ObjectExprContext.prototype.constructor = ObjectExprContext;

RuleParser.ObjectExprContext = ObjectExprContext;

ObjectExprContext.prototype.BRACE_LEFT = function() {
    return this.getToken(RuleParser.BRACE_LEFT, 0);
};

ObjectExprContext.prototype.BRACE_RIGHT = function() {
    return this.getToken(RuleParser.BRACE_RIGHT, 0);
};

ObjectExprContext.prototype.propertyAssignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertyAssignmentContext);
    } else {
        return this.getTypedRuleContext(PropertyAssignmentContext,i);
    }
};

ObjectExprContext.prototype.COMMA = function() {
    return this.getToken(RuleParser.COMMA, 0);
};
ObjectExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterObjectExpr(this);
	}
};

ObjectExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitObjectExpr(this);
	}
};

ObjectExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitObjectExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NullExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.value = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NullExprContext.prototype = Object.create(ExprContext.prototype);
NullExprContext.prototype.constructor = NullExprContext;

RuleParser.NullExprContext = NullExprContext;

NullExprContext.prototype.Null = function() {
    return this.getToken(RuleParser.Null, 0);
};
NullExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterNullExpr(this);
	}
};

NullExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitNullExpr(this);
	}
};

NullExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitNullExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumberExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.value = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberExprContext.prototype = Object.create(ExprContext.prototype);
NumberExprContext.prototype.constructor = NumberExprContext;

RuleParser.NumberExprContext = NumberExprContext;

NumberExprContext.prototype.Number = function() {
    return this.getToken(RuleParser.Number, 0);
};
NumberExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterNumberExpr(this);
	}
};

NumberExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitNumberExpr(this);
	}
};

NumberExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitNumberExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MemberExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.source = null; // ExprContext;
    this.member = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberExprContext.prototype = Object.create(ExprContext.prototype);
MemberExprContext.prototype.constructor = MemberExprContext;

RuleParser.MemberExprContext = MemberExprContext;

MemberExprContext.prototype.BRACKET_LEFT = function() {
    return this.getToken(RuleParser.BRACKET_LEFT, 0);
};

MemberExprContext.prototype.BRACKET_RIGHT = function() {
    return this.getToken(RuleParser.BRACKET_RIGHT, 0);
};

MemberExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
MemberExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterMemberExpr(this);
	}
};

MemberExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitMemberExpr(this);
	}
};

MemberExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitMemberExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParensExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParensExprContext.prototype = Object.create(ExprContext.prototype);
ParensExprContext.prototype.constructor = ParensExprContext;

RuleParser.ParensExprContext = ParensExprContext;

ParensExprContext.prototype.PAREN_LEFT = function() {
    return this.getToken(RuleParser.PAREN_LEFT, 0);
};

ParensExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ParensExprContext.prototype.PAREN_RIGHT = function() {
    return this.getToken(RuleParser.PAREN_RIGHT, 0);
};
ParensExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterParensExpr(this);
	}
};

ParensExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitParensExpr(this);
	}
};

ParensExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitParensExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.value = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringExprContext.prototype = Object.create(ExprContext.prototype);
StringExprContext.prototype.constructor = StringExprContext;

RuleParser.StringExprContext = StringExprContext;

StringExprContext.prototype.String = function() {
    return this.getToken(RuleParser.String, 0);
};
StringExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterStringExpr(this);
	}
};

StringExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitStringExpr(this);
	}
};

StringExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitStringExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.ident = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentExprContext.prototype = Object.create(ExprContext.prototype);
IdentExprContext.prototype.constructor = IdentExprContext;

RuleParser.IdentExprContext = IdentExprContext;

IdentExprContext.prototype.ID = function() {
    return this.getToken(RuleParser.ID, 0);
};
IdentExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterIdentExpr(this);
	}
};

IdentExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitIdentExpr(this);
	}
};

IdentExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitIdentExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InfixExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.op = null; // Token;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InfixExprContext.prototype = Object.create(ExprContext.prototype);
InfixExprContext.prototype.constructor = InfixExprContext;

RuleParser.InfixExprContext = InfixExprContext;

InfixExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

InfixExprContext.prototype.OP_MUL = function() {
    return this.getToken(RuleParser.OP_MUL, 0);
};

InfixExprContext.prototype.OP_DIV = function() {
    return this.getToken(RuleParser.OP_DIV, 0);
};

InfixExprContext.prototype.OP_MOD = function() {
    return this.getToken(RuleParser.OP_MOD, 0);
};

InfixExprContext.prototype.OP_ADD = function() {
    return this.getToken(RuleParser.OP_ADD, 0);
};

InfixExprContext.prototype.OP_SUB = function() {
    return this.getToken(RuleParser.OP_SUB, 0);
};

InfixExprContext.prototype.OP_LT = function() {
    return this.getToken(RuleParser.OP_LT, 0);
};

InfixExprContext.prototype.OP_LTE = function() {
    return this.getToken(RuleParser.OP_LTE, 0);
};

InfixExprContext.prototype.OP_GT = function() {
    return this.getToken(RuleParser.OP_GT, 0);
};

InfixExprContext.prototype.OP_GTE = function() {
    return this.getToken(RuleParser.OP_GTE, 0);
};

InfixExprContext.prototype.OP_EQ = function() {
    return this.getToken(RuleParser.OP_EQ, 0);
};

InfixExprContext.prototype.OP_NEQ = function() {
    return this.getToken(RuleParser.OP_NEQ, 0);
};

InfixExprContext.prototype.OP_AND = function() {
    return this.getToken(RuleParser.OP_AND, 0);
};

InfixExprContext.prototype.OP_OR = function() {
    return this.getToken(RuleParser.OP_OR, 0);
};
InfixExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterInfixExpr(this);
	}
};

InfixExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitInfixExpr(this);
	}
};

InfixExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitInfixExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    this.operand = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryExprContext.prototype = Object.create(ExprContext.prototype);
UnaryExprContext.prototype.constructor = UnaryExprContext;

RuleParser.UnaryExprContext = UnaryExprContext;

UnaryExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

UnaryExprContext.prototype.OP_ADD = function() {
    return this.getToken(RuleParser.OP_ADD, 0);
};

UnaryExprContext.prototype.OP_SUB = function() {
    return this.getToken(RuleParser.OP_SUB, 0);
};

UnaryExprContext.prototype.OP_NOT = function() {
    return this.getToken(RuleParser.OP_NOT, 0);
};
UnaryExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterUnaryExpr(this);
	}
};

UnaryExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitUnaryExpr(this);
	}
};

UnaryExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitUnaryExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TernaryExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.condition = null; // ExprContext;
    this.left = null; // ExprContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TernaryExprContext.prototype = Object.create(ExprContext.prototype);
TernaryExprContext.prototype.constructor = TernaryExprContext;

RuleParser.TernaryExprContext = TernaryExprContext;

TernaryExprContext.prototype.QUESTION_MARK = function() {
    return this.getToken(RuleParser.QUESTION_MARK, 0);
};

TernaryExprContext.prototype.COLON = function() {
    return this.getToken(RuleParser.COLON, 0);
};

TernaryExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
TernaryExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterTernaryExpr(this);
	}
};

TernaryExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitTernaryExpr(this);
	}
};

TernaryExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitTernaryExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FuncDotExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.func = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncDotExprContext.prototype = Object.create(ExprContext.prototype);
FuncDotExprContext.prototype.constructor = FuncDotExprContext;

RuleParser.FuncDotExprContext = FuncDotExprContext;

FuncDotExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FuncDotExprContext.prototype.DOT = function() {
    return this.getToken(RuleParser.DOT, 0);
};

FuncDotExprContext.prototype.PAREN_LEFT = function() {
    return this.getToken(RuleParser.PAREN_LEFT, 0);
};

FuncDotExprContext.prototype.PAREN_RIGHT = function() {
    return this.getToken(RuleParser.PAREN_RIGHT, 0);
};

FuncDotExprContext.prototype.ID = function() {
    return this.getToken(RuleParser.ID, 0);
};

FuncDotExprContext.prototype.funcParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FuncParamContext);
    } else {
        return this.getTypedRuleContext(FuncParamContext,i);
    }
};

FuncDotExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RuleParser.COMMA);
    } else {
        return this.getToken(RuleParser.COMMA, i);
    }
};

FuncDotExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterFuncDotExpr(this);
	}
};

FuncDotExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitFuncDotExpr(this);
	}
};

FuncDotExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitFuncDotExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.value = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolExprContext.prototype = Object.create(ExprContext.prototype);
BoolExprContext.prototype.constructor = BoolExprContext;

RuleParser.BoolExprContext = BoolExprContext;

BoolExprContext.prototype.Boolean = function() {
    return this.getToken(RuleParser.Boolean, 0);
};
BoolExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterBoolExpr(this);
	}
};

BoolExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitBoolExpr(this);
	}
};

BoolExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitBoolExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MemberDotExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.source = null; // ExprContext;
    this.member = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberDotExprContext.prototype = Object.create(ExprContext.prototype);
MemberDotExprContext.prototype.constructor = MemberDotExprContext;

RuleParser.MemberDotExprContext = MemberDotExprContext;

MemberDotExprContext.prototype.DOT = function() {
    return this.getToken(RuleParser.DOT, 0);
};

MemberDotExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

MemberDotExprContext.prototype.ID = function() {
    return this.getToken(RuleParser.ID, 0);
};
MemberDotExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterMemberDotExpr(this);
	}
};

MemberDotExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitMemberDotExpr(this);
	}
};

MemberDotExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitMemberDotExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RuleParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, RuleParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ParensExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 16;
            this.match(RuleParser.PAREN_LEFT);
            this.state = 17;
            this.expr(0);
            this.state = 18;
            this.match(RuleParser.PAREN_RIGHT);
            break;

        case 2:
            localctx = new FuncExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 20;
            localctx.func = this.match(RuleParser.ID);
            this.state = 21;
            this.match(RuleParser.PAREN_LEFT);
            this.state = 22;
            this.funcParam();
            this.state = 27;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RuleParser.COMMA) {
                this.state = 23;
                this.match(RuleParser.COMMA);
                this.state = 24;
                this.funcParam();
                this.state = 29;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 30;
            this.match(RuleParser.PAREN_RIGHT);
            break;

        case 3:
            localctx = new UnaryExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 32;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RuleParser.OP_ADD) | (1 << RuleParser.OP_SUB) | (1 << RuleParser.OP_NOT))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 33;
            localctx.operand = this.expr(15);
            break;

        case 4:
            localctx = new ArrayExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 34;
            this.match(RuleParser.BRACKET_LEFT);
            this.state = 36;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (RuleParser.PAREN_LEFT - 2)) | (1 << (RuleParser.BRACKET_LEFT - 2)) | (1 << (RuleParser.BRACE_LEFT - 2)) | (1 << (RuleParser.OP_ADD - 2)) | (1 << (RuleParser.OP_SUB - 2)) | (1 << (RuleParser.OP_NOT - 2)) | (1 << (RuleParser.Number - 2)) | (1 << (RuleParser.String - 2)) | (1 << (RuleParser.Boolean - 2)) | (1 << (RuleParser.Null - 2)) | (1 << (RuleParser.ID - 2)))) !== 0)) {
                this.state = 35;
                this.expr(0);
            }

            this.state = 42;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 38;
                    this.match(RuleParser.COMMA);
                    this.state = 39;
                    this.expr(0); 
                }
                this.state = 44;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
            }

            this.state = 46;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RuleParser.COMMA) {
                this.state = 45;
                this.match(RuleParser.COMMA);
            }

            this.state = 48;
            this.match(RuleParser.BRACKET_RIGHT);
            break;

        case 5:
            localctx = new ObjectExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 49;
            this.match(RuleParser.BRACE_LEFT);
            this.state = 58;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RuleParser.String || _la===RuleParser.ID) {
                this.state = 50;
                this.propertyAssignment();
                this.state = 55;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 51;
                        this.match(RuleParser.COMMA);
                        this.state = 52;
                        this.propertyAssignment(); 
                    }
                    this.state = 57;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
                }

            }

            this.state = 61;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RuleParser.COMMA) {
                this.state = 60;
                this.match(RuleParser.COMMA);
            }

            this.state = 63;
            this.match(RuleParser.BRACE_RIGHT);
            break;

        case 6:
            localctx = new NullExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 64;
            localctx.value = this.match(RuleParser.Null);
            break;

        case 7:
            localctx = new BoolExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 65;
            localctx.value = this.match(RuleParser.Boolean);
            break;

        case 8:
            localctx = new StringExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 66;
            localctx.value = this.match(RuleParser.String);
            break;

        case 9:
            localctx = new NumberExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 67;
            localctx.value = this.match(RuleParser.Number);
            break;

        case 10:
            localctx = new IdentExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 68;
            localctx.ident = this.match(RuleParser.ID);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 120;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 118;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new InfixExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 71;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 72;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RuleParser.OP_MUL) | (1 << RuleParser.OP_DIV) | (1 << RuleParser.OP_MOD))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 73;
                    localctx.right = this.expr(15);
                    break;

                case 2:
                    localctx = new InfixExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 74;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 75;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===RuleParser.OP_ADD || _la===RuleParser.OP_SUB)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 76;
                    localctx.right = this.expr(14);
                    break;

                case 3:
                    localctx = new InfixExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 77;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 78;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RuleParser.OP_LT) | (1 << RuleParser.OP_LTE) | (1 << RuleParser.OP_GT) | (1 << RuleParser.OP_GTE))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 79;
                    localctx.right = this.expr(13);
                    break;

                case 4:
                    localctx = new InfixExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 80;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 81;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===RuleParser.OP_EQ || _la===RuleParser.OP_NEQ)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 82;
                    localctx.right = this.expr(12);
                    break;

                case 5:
                    localctx = new InfixExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 83;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 84;
                    localctx.op = this.match(RuleParser.OP_AND);
                    this.state = 85;
                    localctx.right = this.expr(11);
                    break;

                case 6:
                    localctx = new InfixExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 86;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 87;
                    localctx.op = this.match(RuleParser.OP_OR);
                    this.state = 88;
                    localctx.right = this.expr(10);
                    break;

                case 7:
                    localctx = new TernaryExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.condition = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 89;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 90;
                    this.match(RuleParser.QUESTION_MARK);
                    this.state = 91;
                    localctx.left = this.expr(0);
                    this.state = 92;
                    this.match(RuleParser.COLON);
                    this.state = 93;
                    localctx.right = this.expr(8);
                    break;

                case 8:
                    localctx = new MemberExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.source = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 95;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 96;
                    this.match(RuleParser.BRACKET_LEFT);
                    this.state = 97;
                    localctx.member = this.expr(0);
                    this.state = 98;
                    this.match(RuleParser.BRACKET_RIGHT);
                    break;

                case 9:
                    localctx = new MemberDotExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.source = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 100;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 101;
                    this.match(RuleParser.DOT);
                    this.state = 102;
                    localctx.member = this.match(RuleParser.ID);
                    break;

                case 10:
                    localctx = new FuncDotExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 103;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 104;
                    this.match(RuleParser.DOT);
                    this.state = 105;
                    localctx.func = this.match(RuleParser.ID);
                    this.state = 106;
                    this.match(RuleParser.PAREN_LEFT);
                    this.state = 115;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (RuleParser.PAREN_LEFT - 2)) | (1 << (RuleParser.BRACKET_LEFT - 2)) | (1 << (RuleParser.BRACE_LEFT - 2)) | (1 << (RuleParser.OP_ADD - 2)) | (1 << (RuleParser.OP_SUB - 2)) | (1 << (RuleParser.OP_NOT - 2)) | (1 << (RuleParser.Number - 2)) | (1 << (RuleParser.String - 2)) | (1 << (RuleParser.Boolean - 2)) | (1 << (RuleParser.Null - 2)) | (1 << (RuleParser.ID - 2)))) !== 0)) {
                        this.state = 107;
                        this.funcParam();
                        this.state = 112;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while(_la===RuleParser.COMMA) {
                            this.state = 108;
                            this.match(RuleParser.COMMA);
                            this.state = 109;
                            this.funcParam();
                            this.state = 114;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }

                    this.state = 117;
                    this.match(RuleParser.PAREN_RIGHT);
                    break;

                } 
            }
            this.state = 122;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function PropertyAssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleParser.RULE_propertyAssignment;
    this.key = null; // PropertyKeyContext
    this.value = null; // ExprContext
    return this;
}

PropertyAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyAssignmentContext.prototype.constructor = PropertyAssignmentContext;

PropertyAssignmentContext.prototype.COLON = function() {
    return this.getToken(RuleParser.COLON, 0);
};

PropertyAssignmentContext.prototype.propertyKey = function() {
    return this.getTypedRuleContext(PropertyKeyContext,0);
};

PropertyAssignmentContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

PropertyAssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterPropertyAssignment(this);
	}
};

PropertyAssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitPropertyAssignment(this);
	}
};

PropertyAssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitPropertyAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleParser.PropertyAssignmentContext = PropertyAssignmentContext;

RuleParser.prototype.propertyAssignment = function() {

    var localctx = new PropertyAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RuleParser.RULE_propertyAssignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        localctx.key = this.propertyKey();
        this.state = 124;
        this.match(RuleParser.COLON);
        this.state = 125;
        localctx.value = this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyKeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleParser.RULE_propertyKey;
    this.ident = null; // Token
    this.string = null; // Token
    return this;
}

PropertyKeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyKeyContext.prototype.constructor = PropertyKeyContext;

PropertyKeyContext.prototype.ID = function() {
    return this.getToken(RuleParser.ID, 0);
};

PropertyKeyContext.prototype.String = function() {
    return this.getToken(RuleParser.String, 0);
};

PropertyKeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterPropertyKey(this);
	}
};

PropertyKeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitPropertyKey(this);
	}
};

PropertyKeyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitPropertyKey(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleParser.PropertyKeyContext = PropertyKeyContext;

RuleParser.prototype.propertyKey = function() {

    var localctx = new PropertyKeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RuleParser.RULE_propertyKey);
    try {
        this.state = 129;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RuleParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 127;
            localctx.ident = this.match(RuleParser.ID);
            break;
        case RuleParser.String:
            this.enterOuterAlt(localctx, 2);
            this.state = 128;
            localctx.string = this.match(RuleParser.String);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleParser.RULE_funcParam;
    return this;
}

FuncParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncParamContext.prototype.constructor = FuncParamContext;

FuncParamContext.prototype.lambda = function() {
    return this.getTypedRuleContext(LambdaContext,0);
};

FuncParamContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FuncParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterFuncParam(this);
	}
};

FuncParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitFuncParam(this);
	}
};

FuncParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitFuncParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleParser.FuncParamContext = FuncParamContext;

RuleParser.prototype.funcParam = function() {

    var localctx = new FuncParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RuleParser.RULE_funcParam);
    try {
        this.state = 133;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 131;
            this.lambda();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 132;
            this.expr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LambdaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleParser.RULE_lambda;
    return this;
}

LambdaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LambdaContext.prototype.constructor = LambdaContext;

LambdaContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RuleParser.ID);
    } else {
        return this.getToken(RuleParser.ID, i);
    }
};


LambdaContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

LambdaContext.prototype.PAREN_LEFT = function() {
    return this.getToken(RuleParser.PAREN_LEFT, 0);
};

LambdaContext.prototype.PAREN_RIGHT = function() {
    return this.getToken(RuleParser.PAREN_RIGHT, 0);
};

LambdaContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.enterLambda(this);
	}
};

LambdaContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleListener ) {
        listener.exitLambda(this);
	}
};

LambdaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleVisitor ) {
        return visitor.visitLambda(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleParser.LambdaContext = LambdaContext;

RuleParser.prototype.lambda = function() {

    var localctx = new LambdaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RuleParser.RULE_lambda);
    var _la = 0; // Token type
    try {
        this.state = 150;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RuleParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 135;
            this.match(RuleParser.ID);
            this.state = 136;
            this.match(RuleParser.T__0);
            this.state = 137;
            this.expr(0);
            break;
        case RuleParser.PAREN_LEFT:
            this.enterOuterAlt(localctx, 2);
            this.state = 138;
            this.match(RuleParser.PAREN_LEFT);
            this.state = 139;
            this.match(RuleParser.ID);
            this.state = 144;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RuleParser.COMMA) {
                this.state = 140;
                this.match(RuleParser.COMMA);
                this.state = 141;
                this.match(RuleParser.ID);
                this.state = 146;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 147;
            this.match(RuleParser.PAREN_RIGHT);
            this.state = 148;
            this.match(RuleParser.T__0);
            this.state = 149;
            this.expr(0);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


RuleParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

RuleParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
		case 4:
			return this.precpred(this._ctx, 10);
		case 5:
			return this.precpred(this._ctx, 9);
		case 6:
			return this.precpred(this._ctx, 8);
		case 7:
			return this.precpred(this._ctx, 19);
		case 8:
			return this.precpred(this._ctx, 18);
		case 9:
			return this.precpred(this._ctx, 17);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.RuleParser = RuleParser;
