// Redemption rules grammar inspired by JavaScript.
// see: https://github.com/antlr/grammars-v4/blob/master/ecmascript/ECMAScript.g4

grammar RedemptionRule;

// The root compilation unit.
compileUnit: expr EOF;

// Order here defines the prescedence of operations.
expr
    : PAREN_LEFT expr PAREN_RIGHT                                               # parensExpr
    | source=expr BRACKET_LEFT member=expr BRACKET_RIGHT                        # memberExpr
    | source=expr DOT member=ID                                                 # memberDotExpr
    | expr DOT func=ID PAREN_LEFT (funcParam (COMMA funcParam)*)? PAREN_RIGHT   # funcDotExpr
    | func=ID PAREN_LEFT funcParam (COMMA funcParam)* PAREN_RIGHT               # funcExpr
    | op=(OP_ADD|OP_SUB|OP_NOT) operand=expr                                    # unaryExpr
    | left=expr op=(OP_MUL|OP_DIV|OP_MOD) right=expr                            # infixExpr
    | left=expr op=(OP_ADD|OP_SUB) right=expr                                   # infixExpr
    | left=expr op=(OP_LT|OP_LTE|OP_GT|OP_GTE) right=expr                       # infixExpr
    | left=expr op=(OP_EQ|OP_NEQ) right=expr                                    # infixExpr
    | left=expr op=OP_AND right=expr                                            # infixExpr
    | left=expr op=OP_OR right=expr                                             # infixExpr
    | <assoc=right> condition=expr QUESTION_MARK left=expr COLON right=expr     # ternaryExpr
    | BRACKET_LEFT expr? (COMMA expr)* BRACKET_RIGHT                            # arrayExpr
    | value=Null                                                                # nullExpr
    | value=Boolean                                                             # boolExpr
    | value=String                                                              # stringExpr
    | value=Number                                                              # numberExpr
    | ident=ID                                                                  # identExpr
    ;

funcParam: lambda | expr;

lambda
    : ID '=>' expr
    | PAREN_LEFT ID (',' ID)* PAREN_RIGHT '=>' expr
    ;

// Lexer rules start with an upper case character.  Clear lexer rules
// make parser errors more meaningful.

PAREN_LEFT   : '(';
PAREN_RIGHT  : ')';
BRACKET_LEFT : '[';
BRACKET_RIGHT: ']';
COMMA        : ',';
DOT          : '.';
QUESTION_MARK: '?';
COLON        : ':';
SINGLE_QUOTE : '\'';
DOUBLE_QUOTE : '"';

OP_ADD: '+';
OP_SUB: '-';
OP_MUL: '*';
OP_DIV: '/';
OP_MOD: '%';
OP_NOT: '!';
OP_EQ : '==';
OP_NEQ: '!=';
OP_LT : '<';
OP_LTE: '<=';
OP_GT : '>';
OP_GTE: '>=';
OP_OR : '||';
OP_AND: '&&';

Number
    : 'Inf'
    | [0-9]+ (DOT [0-9]+)? ([eE] [+-]? [0-9]+)?
    ;
String
    : DOUBLE_QUOTE (~('\\'|'"'))* DOUBLE_QUOTE
    | SINGLE_QUOTE (~('\''|'\\'))* SINGLE_QUOTE
    ;
Boolean : 'false' | 'true';
Null    : 'null';
ID      : [a-zA-Z_$]+;
WS      : [ \t\r\n] -> channel(HIDDEN);
