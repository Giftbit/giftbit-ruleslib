package com.giftbit.ruleslib

class BuildAstException extends Exception {

    final int line
    final int character
    final String expression

    BuildAstException(int line, int character, String expression, String msg, Throwable cause = null) {
        super(msg, cause)
        this.line = line
        this.character = character
        this.expression = expression
    }
}
