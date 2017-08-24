// Generated from com/giftbit/ruleslib/Rule.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RuleListener = require('./RuleListener').RuleListener;
var RuleVisitor = require('./RuleVisitor').RuleVisitor;

var grammarFileName = "Rule.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003!}\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0018\n\u0003\f\u0003",
    "\u000e\u0003\u001b\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003#\n\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003\'\n\u0003\f\u0003\u000e\u0003*\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u00032\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003[",
    "\n\u0003\f\u0003\u000e\u0003^\u000b\u0003\u0005\u0003`\n\u0003\u0003",
    "\u0003\u0007\u0003c\n\u0003\f\u0003\u000e\u0003f\u000b\u0003\u0003\u0004",
    "\u0003\u0004\u0005\u0004j\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005s\n\u0005",
    "\f\u0005\u000e\u0005v\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005{\n\u0005\u0003\u0005\u0002\u0003\u0004\u0006\u0002\u0004",
    "\u0006\b\u0002\u0007\u0004\u0002\u000e\u000f\u0013\u0013\u0003\u0002",
    "\u0010\u0012\u0003\u0002\u000e\u000f\u0003\u0002\u0016\u0019\u0003\u0002",
    "\u0014\u0015\u0002\u0092\u0002\n\u0003\u0002\u0002\u0002\u00041\u0003",
    "\u0002\u0002\u0002\u0006i\u0003\u0002\u0002\u0002\bz\u0003\u0002\u0002",
    "\u0002\n\u000b\u0005\u0004\u0003\u0002\u000b\f\u0007\u0002\u0002\u0003",
    "\f\u0003\u0003\u0002\u0002\u0002\r\u000e\b\u0003\u0001\u0002\u000e\u000f",
    "\u0007\u0004\u0002\u0002\u000f\u0010\u0005\u0004\u0003\u0002\u0010\u0011",
    "\u0007\u0005\u0002\u0002\u00112\u0003\u0002\u0002\u0002\u0012\u0013",
    "\u0007 \u0002\u0002\u0013\u0014\u0007\u0004\u0002\u0002\u0014\u0019",
    "\u0005\u0006\u0004\u0002\u0015\u0016\u0007\b\u0002\u0002\u0016\u0018",
    "\u0005\u0006\u0004\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0018\u001b",
    "\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a",
    "\u0003\u0002\u0002\u0002\u001a\u001c\u0003\u0002\u0002\u0002\u001b\u0019",
    "\u0003\u0002\u0002\u0002\u001c\u001d\u0007\u0005\u0002\u0002\u001d2",
    "\u0003\u0002\u0002\u0002\u001e\u001f\t\u0002\u0002\u0002\u001f2\u0005",
    "\u0004\u0003\u0010 \"\u0007\u0006\u0002\u0002!#\u0005\u0004\u0003\u0002",
    "\"!\u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#(\u0003\u0002",
    "\u0002\u0002$%\u0007\b\u0002\u0002%\'\u0005\u0004\u0003\u0002&$\u0003",
    "\u0002\u0002\u0002\'*\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002",
    "()\u0003\u0002\u0002\u0002)+\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002",
    "\u0002+2\u0007\u0007\u0002\u0002,2\u0007\u001f\u0002\u0002-2\u0007\u001e",
    "\u0002\u0002.2\u0007\u001d\u0002\u0002/2\u0007\u001c\u0002\u000202\u0007",
    " \u0002\u00021\r\u0003\u0002\u0002\u00021\u0012\u0003\u0002\u0002\u0002",
    "1\u001e\u0003\u0002\u0002\u00021 \u0003\u0002\u0002\u00021,\u0003\u0002",
    "\u0002\u00021-\u0003\u0002\u0002\u00021.\u0003\u0002\u0002\u00021/\u0003",
    "\u0002\u0002\u000210\u0003\u0002\u0002\u00022d\u0003\u0002\u0002\u0002",
    "34\f\u000f\u0002\u000245\t\u0003\u0002\u00025c\u0005\u0004\u0003\u0010",
    "67\f\u000e\u0002\u000278\t\u0004\u0002\u00028c\u0005\u0004\u0003\u000f",
    "9:\f\r\u0002\u0002:;\t\u0005\u0002\u0002;c\u0005\u0004\u0003\u000e<",
    "=\f\f\u0002\u0002=>\t\u0006\u0002\u0002>c\u0005\u0004\u0003\r?@\f\u000b",
    "\u0002\u0002@A\u0007\u001b\u0002\u0002Ac\u0005\u0004\u0003\fBC\f\n\u0002",
    "\u0002CD\u0007\u001a\u0002\u0002Dc\u0005\u0004\u0003\u000bEF\f\t\u0002",
    "\u0002FG\u0007\n\u0002\u0002GH\u0005\u0004\u0003\u0002HI\u0007\u000b",
    "\u0002\u0002IJ\u0005\u0004\u0003\tJc\u0003\u0002\u0002\u0002KL\f\u0014",
    "\u0002\u0002LM\u0007\u0006\u0002\u0002MN\u0005\u0004\u0003\u0002NO\u0007",
    "\u0007\u0002\u0002Oc\u0003\u0002\u0002\u0002PQ\f\u0013\u0002\u0002Q",
    "R\u0007\t\u0002\u0002Rc\u0007 \u0002\u0002ST\f\u0012\u0002\u0002TU\u0007",
    "\t\u0002\u0002UV\u0007 \u0002\u0002V_\u0007\u0004\u0002\u0002W\\\u0005",
    "\u0006\u0004\u0002XY\u0007\b\u0002\u0002Y[\u0005\u0006\u0004\u0002Z",
    "X\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002",
    "\u0002\\]\u0003\u0002\u0002\u0002]`\u0003\u0002\u0002\u0002^\\\u0003",
    "\u0002\u0002\u0002_W\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002",
    "`a\u0003\u0002\u0002\u0002ac\u0007\u0005\u0002\u0002b3\u0003\u0002\u0002",
    "\u0002b6\u0003\u0002\u0002\u0002b9\u0003\u0002\u0002\u0002b<\u0003\u0002",
    "\u0002\u0002b?\u0003\u0002\u0002\u0002bB\u0003\u0002\u0002\u0002bE\u0003",
    "\u0002\u0002\u0002bK\u0003\u0002\u0002\u0002bP\u0003\u0002\u0002\u0002",
    "bS\u0003\u0002\u0002\u0002cf\u0003\u0002\u0002\u0002db\u0003\u0002\u0002",
    "\u0002de\u0003\u0002\u0002\u0002e\u0005\u0003\u0002\u0002\u0002fd\u0003",
    "\u0002\u0002\u0002gj\u0005\b\u0005\u0002hj\u0005\u0004\u0003\u0002i",
    "g\u0003\u0002\u0002\u0002ih\u0003\u0002\u0002\u0002j\u0007\u0003\u0002",
    "\u0002\u0002kl\u0007 \u0002\u0002lm\u0007\u0003\u0002\u0002m{\u0005",
    "\u0004\u0003\u0002no\u0007\u0004\u0002\u0002ot\u0007 \u0002\u0002pq",
    "\u0007\b\u0002\u0002qs\u0007 \u0002\u0002rp\u0003\u0002\u0002\u0002",
    "sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002",
    "\u0002uw\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002wx\u0007\u0005",
    "\u0002\u0002xy\u0007\u0003\u0002\u0002y{\u0005\u0004\u0003\u0002zk\u0003",
    "\u0002\u0002\u0002zn\u0003\u0002\u0002\u0002{\t\u0003\u0002\u0002\u0002",
    "\r\u0019\"(1\\_bditz"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'=>'", "'('", "')'", "'['", "']'", "','", "'.'", 
                     "'?'", "':'", "'''", "'\"'", "'+'", "'-'", "'*'", "'/'", 
                     "'%'", "'!'", "'=='", "'!='", "'<'", "'<='", "'>'", 
                     "'>='", "'||'", "'&&'", null, null, null, "'null'" ];

var symbolicNames = [ null, null, "PAREN_LEFT", "PAREN_RIGHT", "BRACKET_LEFT", 
                      "BRACKET_RIGHT", "COMMA", "DOT", "QUESTION_MARK", 
                      "COLON", "SINGLE_QUOTE", "DOUBLE_QUOTE", "OP_ADD", 
                      "OP_SUB", "OP_MUL", "OP_DIV", "OP_MOD", "OP_NOT", 
                      "OP_EQ", "OP_NEQ", "OP_LT", "OP_LTE", "OP_GT", "OP_GTE", 
                      "OP_OR", "OP_AND", "Number", "String", "Boolean", 
                      "Null", "ID", "WS" ];

var ruleNames =  [ "compileUnit", "expr", "funcParam", "lambda" ];

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
RuleParser.COMMA = 6;
RuleParser.DOT = 7;
RuleParser.QUESTION_MARK = 8;
RuleParser.COLON = 9;
RuleParser.SINGLE_QUOTE = 10;
RuleParser.DOUBLE_QUOTE = 11;
RuleParser.OP_ADD = 12;
RuleParser.OP_SUB = 13;
RuleParser.OP_MUL = 14;
RuleParser.OP_DIV = 15;
RuleParser.OP_MOD = 16;
RuleParser.OP_NOT = 17;
RuleParser.OP_EQ = 18;
RuleParser.OP_NEQ = 19;
RuleParser.OP_LT = 20;
RuleParser.OP_LTE = 21;
RuleParser.OP_GT = 22;
RuleParser.OP_GTE = 23;
RuleParser.OP_OR = 24;
RuleParser.OP_AND = 25;
RuleParser.Number = 26;
RuleParser.String = 27;
RuleParser.Boolean = 28;
RuleParser.Null = 29;
RuleParser.ID = 30;
RuleParser.WS = 31;

RuleParser.RULE_compileUnit = 0;
RuleParser.RULE_expr = 1;
RuleParser.RULE_funcParam = 2;
RuleParser.RULE_lambda = 3;

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
        this.state = 8;
        this.expr(0);
        this.state = 9;
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
        this.state = 47;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ParensExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 12;
            this.match(RuleParser.PAREN_LEFT);
            this.state = 13;
            this.expr(0);
            this.state = 14;
            this.match(RuleParser.PAREN_RIGHT);
            break;

        case 2:
            localctx = new FuncExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 16;
            localctx.func = this.match(RuleParser.ID);
            this.state = 17;
            this.match(RuleParser.PAREN_LEFT);
            this.state = 18;
            this.funcParam();
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RuleParser.COMMA) {
                this.state = 19;
                this.match(RuleParser.COMMA);
                this.state = 20;
                this.funcParam();
                this.state = 25;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 26;
            this.match(RuleParser.PAREN_RIGHT);
            break;

        case 3:
            localctx = new UnaryExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 28;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RuleParser.OP_ADD) | (1 << RuleParser.OP_SUB) | (1 << RuleParser.OP_NOT))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 29;
            localctx.operand = this.expr(14);
            break;

        case 4:
            localctx = new ArrayExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 30;
            this.match(RuleParser.BRACKET_LEFT);
            this.state = 32;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RuleParser.PAREN_LEFT) | (1 << RuleParser.BRACKET_LEFT) | (1 << RuleParser.OP_ADD) | (1 << RuleParser.OP_SUB) | (1 << RuleParser.OP_NOT) | (1 << RuleParser.Number) | (1 << RuleParser.String) | (1 << RuleParser.Boolean) | (1 << RuleParser.Null) | (1 << RuleParser.ID))) !== 0)) {
                this.state = 31;
                this.expr(0);
            }

            this.state = 38;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RuleParser.COMMA) {
                this.state = 34;
                this.match(RuleParser.COMMA);
                this.state = 35;
                this.expr(0);
                this.state = 40;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 41;
            this.match(RuleParser.BRACKET_RIGHT);
            break;

        case 5:
            localctx = new NullExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 42;
            localctx.value = this.match(RuleParser.Null);
            break;

        case 6:
            localctx = new BoolExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 43;
            localctx.value = this.match(RuleParser.Boolean);
            break;

        case 7:
            localctx = new StringExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 44;
            localctx.value = this.match(RuleParser.String);
            break;

        case 8:
            localctx = new NumberExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 45;
            localctx.value = this.match(RuleParser.Number);
            break;

        case 9:
            localctx = new IdentExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 46;
            localctx.ident = this.match(RuleParser.ID);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 98;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 96;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new InfixExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 49;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 50;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RuleParser.OP_MUL) | (1 << RuleParser.OP_DIV) | (1 << RuleParser.OP_MOD))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 51;
                    localctx.right = this.expr(14);
                    break;

                case 2:
                    localctx = new InfixExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 52;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 53;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===RuleParser.OP_ADD || _la===RuleParser.OP_SUB)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 54;
                    localctx.right = this.expr(13);
                    break;

                case 3:
                    localctx = new InfixExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 55;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 56;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RuleParser.OP_LT) | (1 << RuleParser.OP_LTE) | (1 << RuleParser.OP_GT) | (1 << RuleParser.OP_GTE))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 57;
                    localctx.right = this.expr(12);
                    break;

                case 4:
                    localctx = new InfixExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 58;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 59;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===RuleParser.OP_EQ || _la===RuleParser.OP_NEQ)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 60;
                    localctx.right = this.expr(11);
                    break;

                case 5:
                    localctx = new InfixExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 61;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 62;
                    localctx.op = this.match(RuleParser.OP_AND);
                    this.state = 63;
                    localctx.right = this.expr(10);
                    break;

                case 6:
                    localctx = new InfixExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 64;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 65;
                    localctx.op = this.match(RuleParser.OP_OR);
                    this.state = 66;
                    localctx.right = this.expr(9);
                    break;

                case 7:
                    localctx = new TernaryExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.condition = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 67;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 68;
                    this.match(RuleParser.QUESTION_MARK);
                    this.state = 69;
                    localctx.left = this.expr(0);
                    this.state = 70;
                    this.match(RuleParser.COLON);
                    this.state = 71;
                    localctx.right = this.expr(7);
                    break;

                case 8:
                    localctx = new MemberExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.source = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 73;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 74;
                    this.match(RuleParser.BRACKET_LEFT);
                    this.state = 75;
                    localctx.member = this.expr(0);
                    this.state = 76;
                    this.match(RuleParser.BRACKET_RIGHT);
                    break;

                case 9:
                    localctx = new MemberDotExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.source = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 78;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 79;
                    this.match(RuleParser.DOT);
                    this.state = 80;
                    localctx.member = this.match(RuleParser.ID);
                    break;

                case 10:
                    localctx = new FuncDotExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, RuleParser.RULE_expr);
                    this.state = 81;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 82;
                    this.match(RuleParser.DOT);
                    this.state = 83;
                    localctx.func = this.match(RuleParser.ID);
                    this.state = 84;
                    this.match(RuleParser.PAREN_LEFT);
                    this.state = 93;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RuleParser.PAREN_LEFT) | (1 << RuleParser.BRACKET_LEFT) | (1 << RuleParser.OP_ADD) | (1 << RuleParser.OP_SUB) | (1 << RuleParser.OP_NOT) | (1 << RuleParser.Number) | (1 << RuleParser.String) | (1 << RuleParser.Boolean) | (1 << RuleParser.Null) | (1 << RuleParser.ID))) !== 0)) {
                        this.state = 85;
                        this.funcParam();
                        this.state = 90;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while(_la===RuleParser.COMMA) {
                            this.state = 86;
                            this.match(RuleParser.COMMA);
                            this.state = 87;
                            this.funcParam();
                            this.state = 92;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }

                    this.state = 95;
                    this.match(RuleParser.PAREN_RIGHT);
                    break;

                } 
            }
            this.state = 100;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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
    this.enterRule(localctx, 4, RuleParser.RULE_funcParam);
    try {
        this.state = 103;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 101;
            this.lambda();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 102;
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
    this.enterRule(localctx, 6, RuleParser.RULE_lambda);
    var _la = 0; // Token type
    try {
        this.state = 120;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RuleParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 105;
            this.match(RuleParser.ID);
            this.state = 106;
            this.match(RuleParser.T__0);
            this.state = 107;
            this.expr(0);
            break;
        case RuleParser.PAREN_LEFT:
            this.enterOuterAlt(localctx, 2);
            this.state = 108;
            this.match(RuleParser.PAREN_LEFT);
            this.state = 109;
            this.match(RuleParser.ID);
            this.state = 114;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RuleParser.COMMA) {
                this.state = 110;
                this.match(RuleParser.COMMA);
                this.state = 111;
                this.match(RuleParser.ID);
                this.state = 116;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 117;
            this.match(RuleParser.PAREN_RIGHT);
            this.state = 118;
            this.match(RuleParser.T__0);
            this.state = 119;
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
			return this.precpred(this._ctx, 13);
		case 1:
			return this.precpred(this._ctx, 12);
		case 2:
			return this.precpred(this._ctx, 11);
		case 3:
			return this.precpred(this._ctx, 10);
		case 4:
			return this.precpred(this._ctx, 9);
		case 5:
			return this.precpred(this._ctx, 8);
		case 6:
			return this.precpred(this._ctx, 7);
		case 7:
			return this.precpred(this._ctx, 18);
		case 8:
			return this.precpred(this._ctx, 17);
		case 9:
			return this.precpred(this._ctx, 16);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.RuleParser = RuleParser;
