package com.giftbit.ruleslib

import org.antlr.v4.runtime.BaseErrorListener
import org.antlr.v4.runtime.RecognitionException
import org.antlr.v4.runtime.Recognizer

class BuildAstErrorListener extends BaseErrorListener {

    private final List<BuildAstException> errors = []
    final String expression

    BuildAstErrorListener(String exp) {
        this.expression = exp
    }

    @Override
    void syntaxError(Recognizer<?, ?> recognizer, Object offendingSymbol, int line, int charPositionInLine, String msg, RecognitionException e) {
        errors.push(new BuildAstException(line, charPositionInLine, expression, replaceEof(msg), e))
    }

    private String replaceEof(String msg) {
        return msg.replaceAll("'<EOF>'", "at the end of the rule").replaceAll("<EOF>", "the end of the rule")
    }

    List<BuildAstException> getErrors() {
        return errors
    }
}
