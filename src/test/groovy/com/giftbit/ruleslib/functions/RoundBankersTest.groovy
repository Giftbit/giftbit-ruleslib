package com.giftbit.ruleslib.functions

import com.giftbit.ruleslib.ast.LiteralNode
import spock.lang.Specification

class RoundBankersTest extends Specification {

    RoundBankers round = new RoundBankers()

    def "rounds normally when not ending in 0.5"() {
        expect:
        round.invoke([new LiteralNode(1L)], null).asNumber() == 1L
        round.invoke([new LiteralNode(1.1D)], null).asNumber() == 1L
        round.invoke([new LiteralNode(1.2D)], null).asNumber() == 1L
        round.invoke([new LiteralNode(1.4999D)], null).asNumber() == 1L
        round.invoke([new LiteralNode(1.5001D)], null).asNumber() == 2L
        round.invoke([new LiteralNode(1.6001D)], null).asNumber() == 2L
        round.invoke([new LiteralNode(1.9999D)], null).asNumber() == 2L
        round.invoke([new LiteralNode(-134.1223D)], null).asNumber() == -134L
    }

    def "rounds 0.5 down on even values"() {
        expect:
        round.invoke([new LiteralNode(0.5D)], null).asNumber() == 0L
        round.invoke([new LiteralNode(2.5D)], null).asNumber() == 2L
        round.invoke([new LiteralNode(20.5D)], null).asNumber() == 20L
        round.invoke([new LiteralNode(-20.5D)], null).asNumber() == -20L
    }

    def "rounds 0.5 up on odd values"() {
        expect:
        round.invoke([new LiteralNode(1.5D)], null).asNumber() == 2L
        round.invoke([new LiteralNode(3.5D)], null).asNumber() == 4L
        round.invoke([new LiteralNode(21.5D)], null).asNumber() == 22L
        round.invoke([new LiteralNode(-21.5D)], null).asNumber() == -22L
    }
}
