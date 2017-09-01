package com.giftbit.ruleslib

class AstException extends Exception {

    final int row
    final int column
    final String expression

    AstException(int row, int column, String expression, String msg, Throwable cause = null) {
        super(msg, cause)
        this.row = row
        this.column = column
        this.expression = expression
    }
}
