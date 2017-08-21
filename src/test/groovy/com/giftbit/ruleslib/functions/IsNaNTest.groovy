package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.ast.LiteralNode
import spock.lang.Specification

class IsNaNTest extends Specification {

    IsNaN isNan = new IsNaN()

    def "NaN is NaN"() {
        expect:
        isNan.invoke([new LiteralNode(Double.NaN)], null).asBoolean()
    }

    def "nothing else is NaN"() {
        expect:
        !isNan.invoke([new LiteralNode(0L)], null).asBoolean()
        !isNan.invoke([new LiteralNode(123L)], null).asBoolean()
        !isNan.invoke([new LiteralNode(0D)], null).asBoolean()
        !isNan.invoke([new LiteralNode(1.23D)], null).asBoolean()
        !isNan.invoke([new LiteralNode(true)], null).asBoolean()
        !isNan.invoke([new LiteralNode(false)], null).asBoolean()
        !isNan.invoke([new LiteralNode("")], null).asBoolean()
        !isNan.invoke([new LiteralNode("string")], null).asBoolean()
        !isNan.invoke([new LiteralNode([:])], null).asBoolean()
        !isNan.invoke([new LiteralNode([foo: "bar"])], null).asBoolean()
        !isNan.invoke([new LiteralNode([])], null).asBoolean()
        !isNan.invoke([new LiteralNode(["bing", "bang", "bong"])], null).asBoolean()
    }
}
