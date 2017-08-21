package com.giftbit.ruleslib

import com.giftbit.ruleslib.functions.Max
import com.giftbit.ruleslib.functions.Min
import spock.lang.Specification

class BuildAstVisitorTest extends Specification {

    final Context emptyContext = new MutableContext()

    def "parses numbers"() {
        expect:
        BuildAstVisitor.buildAst("0").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("-0").getValue(emptyContext).innerValue == -0L
        BuildAstVisitor.buildAst("123").getValue(emptyContext).innerValue == 123L
        BuildAstVisitor.buildAst("-123").getValue(emptyContext).innerValue == -123L
        BuildAstVisitor.buildAst("1.234").getValue(emptyContext).innerValue == 1.234D
        BuildAstVisitor.buildAst("-1.234").getValue(emptyContext).innerValue == -1.234D
        BuildAstVisitor.buildAst("Inf").getValue(emptyContext).innerValue == Double.POSITIVE_INFINITY
    }

    def "parses strings"() {
        expect:
        BuildAstVisitor.buildAst("'foo'").getValue(emptyContext).innerValue == "foo"
        BuildAstVisitor.buildAst("\"foo\"").getValue(emptyContext).innerValue == "foo"
        BuildAstVisitor.buildAst("\"'foo\"").getValue(emptyContext).innerValue == "'foo"
        BuildAstVisitor.buildAst("'\"foo'").getValue(emptyContext).innerValue == "\"foo"
    }

    def "parses booleans"() {
        expect:
        BuildAstVisitor.buildAst("true").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("false").getValue(emptyContext).innerValue == Boolean.FALSE
    }

    def "parses null"() {
        expect:
        BuildAstVisitor.buildAst("null").getValue(emptyContext).innerValue == NullValue.instance
    }

    def "allows arbitrary white space"() {
        expect:
        BuildAstVisitor.buildAst("1 + 1").getValue(emptyContext).innerValue == 2L
        BuildAstVisitor.buildAst("1+1").getValue(emptyContext).innerValue == 2L
        BuildAstVisitor.buildAst("   1  +  \n\n \t1 ").getValue(emptyContext).innerValue == 2L
        BuildAstVisitor.buildAst("(1 + 1)").getValue(emptyContext).innerValue == 2L
    }

    def "unary minus"() {
        expect:
        BuildAstVisitor.buildAst("1").getValue(emptyContext).innerValue == 1L
        BuildAstVisitor.buildAst("-1").getValue(emptyContext).innerValue == -1L
        BuildAstVisitor.buildAst("-(-1)").getValue(emptyContext).innerValue == 1L

        BuildAstVisitor.buildAst("-'foo'").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("-'23'").getValue(emptyContext).innerValue == -23L

        BuildAstVisitor.buildAst("-true").getValue(emptyContext).innerValue == -1L
        BuildAstVisitor.buildAst("-false").getValue(emptyContext).innerValue == 0L

        BuildAstVisitor.buildAst("-null").getValue(emptyContext).innerValue == 0L
    }

    def "unary plus"() {
        expect:
        BuildAstVisitor.buildAst("+1").getValue(emptyContext).innerValue == 1L
        BuildAstVisitor.buildAst("+(-1)").getValue(emptyContext).innerValue == -1L
        BuildAstVisitor.buildAst("-(+1)").getValue(emptyContext).innerValue == -1L
        BuildAstVisitor.buildAst("+(+1)").getValue(emptyContext).innerValue == 1L

        BuildAstVisitor.buildAst("+'foo'").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("+'23'").getValue(emptyContext).innerValue == 23L

        BuildAstVisitor.buildAst("+true").getValue(emptyContext).innerValue == 1L
        BuildAstVisitor.buildAst("+false").getValue(emptyContext).innerValue == 0L

        BuildAstVisitor.buildAst("+null").getValue(emptyContext).innerValue == 0L
    }

    def "logcial not"() {
        expect:
        BuildAstVisitor.buildAst("!1").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("!0").getValue(emptyContext).innerValue == Boolean.TRUE

        BuildAstVisitor.buildAst("!''").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("!'foo'").getValue(emptyContext).innerValue == Boolean.FALSE

        BuildAstVisitor.buildAst("!true").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("!!true").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("!false").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("!!false").getValue(emptyContext).innerValue == Boolean.FALSE

        BuildAstVisitor.buildAst("!null").getValue(emptyContext).innerValue == Boolean.TRUE
    }

    def "addition"() {
        expect:
        BuildAstVisitor.buildAst("1 + 2").getValue(emptyContext).innerValue == 3L
        BuildAstVisitor.buildAst("12345 + 67890").getValue(emptyContext).innerValue == 80235L
        BuildAstVisitor.buildAst("1234567890 + 1234567890").getValue(emptyContext).innerValue == 2469135780L
        BuildAstVisitor.buildAst("4611686018427388000 + 4611686018427388000").getValue(emptyContext).innerValue == 9223372036854776000L
        BuildAstVisitor.buildAst("1.5 + 1.5").getValue(emptyContext).innerValue == 3.0D
        BuildAstVisitor.buildAst("1 + 1.5").getValue(emptyContext).innerValue == 2.5D

        BuildAstVisitor.buildAst("'foo' + 'bar'").getValue(emptyContext).innerValue == "foobar"
        BuildAstVisitor.buildAst("'foo' + 5").getValue(emptyContext).innerValue == "foo5"
        BuildAstVisitor.buildAst("'5' + 5").getValue(emptyContext).innerValue == "55"
        BuildAstVisitor.buildAst("5 + '5'").getValue(emptyContext).innerValue == "55"

        BuildAstVisitor.buildAst("true + 1").getValue(emptyContext).innerValue == 2L
        BuildAstVisitor.buildAst("false + 1").getValue(emptyContext).innerValue == 1L
        BuildAstVisitor.buildAst("true + 'foo'").getValue(emptyContext).innerValue == "truefoo"

        BuildAstVisitor.buildAst("null + 5").getValue(emptyContext).innerValue == 5L
        BuildAstVisitor.buildAst("null + true").getValue(emptyContext).innerValue == 1L
        BuildAstVisitor.buildAst("null + 'foo'").getValue(emptyContext).innerValue == "foo"
    }

    def "subtraction"() {
        expect:
        BuildAstVisitor.buildAst("1 - 1").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("10 - 7").getValue(emptyContext).innerValue == 3L
        BuildAstVisitor.buildAst("3 - 7").getValue(emptyContext).innerValue == -4L
        BuildAstVisitor.buildAst("4611686018427388000 - 4611686018427388000").getValue(emptyContext).innerValue == 0L

        BuildAstVisitor.buildAst("'foo' - 'bar'").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("'foo' - 5").getValue(emptyContext).innerValue == -5L

        BuildAstVisitor.buildAst("true - 1").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("false - 1").getValue(emptyContext).innerValue == -1L
        BuildAstVisitor.buildAst("true - 'foo'").getValue(emptyContext).innerValue == 1L
        BuildAstVisitor.buildAst("true - '5'").getValue(emptyContext).innerValue == -4L

        BuildAstVisitor.buildAst("1 - null").getValue(emptyContext).innerValue == 1L
        BuildAstVisitor.buildAst("'foo' - null").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("'5' - null").getValue(emptyContext).innerValue == 5L
        BuildAstVisitor.buildAst("true - null").getValue(emptyContext).innerValue == 1L
    }

    def "multiplication"() {
        expect:
        BuildAstVisitor.buildAst("1 * 1").getValue(emptyContext).innerValue == 1L
        BuildAstVisitor.buildAst("4 * 9").getValue(emptyContext).innerValue == 36L
        BuildAstVisitor.buildAst("-5 * 9").getValue(emptyContext).innerValue == -45L
        BuildAstVisitor.buildAst("6 * -9").getValue(emptyContext).innerValue == -54L
        BuildAstVisitor.buildAst("-7 * -9").getValue(emptyContext).innerValue == 63L
        BuildAstVisitor.buildAst("4.2 * 9.3").getValue(emptyContext).innerValue == 39.06D

        BuildAstVisitor.buildAst("'foo' * 5").getValue(emptyContext).innerValue == 0L

        BuildAstVisitor.buildAst("true * 100").getValue(emptyContext).innerValue == 100L
        BuildAstVisitor.buildAst("false * 100").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("true * 'foo'").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("true * '5'").getValue(emptyContext).innerValue == 5L

        BuildAstVisitor.buildAst("1 * null").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("'foo' * null").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("'5' * null").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("true * null").getValue(emptyContext).innerValue == 0L
    }

    def "division"() {
        expect:
        BuildAstVisitor.buildAst("1 / 1").getValue(emptyContext).innerValue == 1L
        BuildAstVisitor.buildAst("1 / 0").getValue(emptyContext).innerValue == Double.POSITIVE_INFINITY
        BuildAstVisitor.buildAst("0 / 0").getValue(emptyContext).innerValue == Double.NaN
        BuildAstVisitor.buildAst("8 / 2").getValue(emptyContext).innerValue == 4L
        BuildAstVisitor.buildAst("8.0 / 2").getValue(emptyContext).innerValue == 4.0D
        BuildAstVisitor.buildAst("9 / 2").getValue(emptyContext).innerValue == 4.5D
        BuildAstVisitor.buildAst("-10 / 2").getValue(emptyContext).innerValue == -5L
        BuildAstVisitor.buildAst("10 / -2.0").getValue(emptyContext).innerValue == -5.0D
        BuildAstVisitor.buildAst("-10.0 / -2.0").getValue(emptyContext).innerValue == 5.0D

        BuildAstVisitor.buildAst("'foo' / 5").getValue(emptyContext).innerValue == 0L

        BuildAstVisitor.buildAst("true / 100").getValue(emptyContext).innerValue == 0.01D
        BuildAstVisitor.buildAst("false / 100").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("true / 'foo'").getValue(emptyContext).innerValue == Double.POSITIVE_INFINITY
        BuildAstVisitor.buildAst("true / '100'").getValue(emptyContext).innerValue == 0.01D

        BuildAstVisitor.buildAst("1 / null").getValue(emptyContext).innerValue == Double.POSITIVE_INFINITY
        BuildAstVisitor.buildAst("'foo' / null").getValue(emptyContext).innerValue == Double.NaN
        BuildAstVisitor.buildAst("'5' / null").getValue(emptyContext).innerValue == Double.POSITIVE_INFINITY
        BuildAstVisitor.buildAst("true / null").getValue(emptyContext).innerValue == Double.POSITIVE_INFINITY
    }

    def "modulo"() {
        expect:
        BuildAstVisitor.buildAst("1 % 1").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("2 % 1").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("1 % 2").getValue(emptyContext).innerValue == 1L
        BuildAstVisitor.buildAst("2 % -3").getValue(emptyContext).innerValue == 2L
        BuildAstVisitor.buildAst("-3 % 4").getValue(emptyContext).innerValue == -3L
        BuildAstVisitor.buildAst("-4 % -500").getValue(emptyContext).innerValue == -4L

        BuildAstVisitor.buildAst("'foo' % 5").getValue(emptyContext).innerValue == 0L

        BuildAstVisitor.buildAst("true % 100").getValue(emptyContext).innerValue == 1L
        BuildAstVisitor.buildAst("false % 100").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("true % 'foo'").getValue(emptyContext).innerValue == Double.NaN

        BuildAstVisitor.buildAst("1 % null").getValue(emptyContext).innerValue == Double.NaN
        BuildAstVisitor.buildAst("'foo' % null").getValue(emptyContext).innerValue == Double.NaN
        BuildAstVisitor.buildAst("'5' % null").getValue(emptyContext).innerValue == Double.NaN
        BuildAstVisitor.buildAst("true % null").getValue(emptyContext).innerValue == Double.NaN
    }

    def "less than"() {
        expect:
        BuildAstVisitor.buildAst("1 < 1").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("1 < 1.0001").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("1 < 2").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("1 < '2'").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("'10' < 2").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("true < 2").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("true < 0").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("false < 0").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("false < 1").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("null < 1").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("null < 0").getValue(emptyContext).innerValue == Boolean.FALSE
    }

    def "less than or equal"() {
        expect:
        BuildAstVisitor.buildAst("1 <= 0").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("1 <= 1").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("1 <= 2").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("1 <= '2'").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("'10' <= 2").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("true <= 2").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("true <= 0").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("true <= 1").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("false <= 0").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("false <= -0.00001").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("null <= 1").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("null <= 0").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("null <= -2345").getValue(emptyContext).innerValue == Boolean.FALSE
    }

    def "greater than"() {
        expect:
        BuildAstVisitor.buildAst("1 > 1").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("1.0001 > 1").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("2 > 1").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("'2' > 1").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("2 > '10'").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("2 > true").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("0 > true").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("0 > false").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("1 > false").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("1 > null").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("0 > null").getValue(emptyContext).innerValue == Boolean.FALSE
    }

    def "greater than or equal"() {
        expect:
        BuildAstVisitor.buildAst("0 >= 1").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("1 >= 1").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("2 >= 1").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("'2' >= 1").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("2 >= '10'").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("2 >= true").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("0 >= true").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("1 >= true").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("0 >= false").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("-0.00001 >= false").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("1 >= null").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("0 >= null").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("-2345 >= null").getValue(emptyContext).innerValue == Boolean.FALSE
    }

    def "logcial equals"() {
        expect:
        BuildAstVisitor.buildAst("null == null").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("true == true").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("false == false").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("'foo' == 'foo'").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("0 == 0").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("+0 == -0").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("0 == false").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("false == 0").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("'' == false").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("false == ''").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("'' == 0").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("0 == ''").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("'0' == 0").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("0 == '0'").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("'17' == 17").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("17 == '17'").getValue(emptyContext).innerValue == Boolean.TRUE

        BuildAstVisitor.buildAst("null == true").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("true == null").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("null == false").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("false == null").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("null == 0").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("0 == null").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("null == 'null'").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("null == 'null'").getValue(emptyContext).innerValue == Boolean.FALSE
    }

    def "logcial not equals"() {
        expect:
        BuildAstVisitor.buildAst("null != null").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("true != true").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("false != false").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("'foo' != 'foo'").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("0 != 0").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("+0 != -0").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("0 != false").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("false != 0").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("'' != false").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("false != ''").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("'' != 0").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("0 != ''").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("'0' != 0").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("0 != '0'").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("'17' != 17").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("17 != '17'").getValue(emptyContext).innerValue == Boolean.FALSE

        BuildAstVisitor.buildAst("null != true").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("true != null").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("null != false").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("false != null").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("null != 0").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("0 != null").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("null != 'null'").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("null != 'null'").getValue(emptyContext).innerValue == Boolean.TRUE
    }

    def "logcial and"() {
        expect:
        BuildAstVisitor.buildAst("true && true").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("true && false").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("false && true").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("false && false").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("true && true && true && false && true").getValue(emptyContext).innerValue == Boolean.FALSE

        BuildAstVisitor.buildAst("1 && false").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("0 && 11").getValue(emptyContext).innerValue == 0L
        BuildAstVisitor.buildAst("12 && 11").getValue(emptyContext).innerValue == 11L
        BuildAstVisitor.buildAst("'monkey' && 'potato'").getValue(emptyContext).innerValue == "potato"
        BuildAstVisitor.buildAst("null && 'potato'").getValue(emptyContext).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("null && null").getValue(emptyContext).innerValue == NullValue.instance
    }

    def "logcial or"() {
        expect:
        BuildAstVisitor.buildAst("true || true").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("true || false").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("false || true").getValue(emptyContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("false || false").getValue(emptyContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("false || false || false || true || false").getValue(emptyContext).innerValue == Boolean.TRUE

        BuildAstVisitor.buildAst("1 || false").getValue(emptyContext).innerValue == 1L
        BuildAstVisitor.buildAst("0 || 11").getValue(emptyContext).innerValue == 11L
        BuildAstVisitor.buildAst("12 || 11").getValue(emptyContext).innerValue == 12L
        BuildAstVisitor.buildAst("'monkey' || 'potato'").getValue(emptyContext).innerValue == "monkey"
        BuildAstVisitor.buildAst("null || 'potato'").getValue(emptyContext).innerValue == "potato"
        BuildAstVisitor.buildAst("null || null").getValue(emptyContext).innerValue == NullValue.instance
    }

    def "ternary expression"() {
        expect:
        BuildAstVisitor.buildAst("true ? 'starfish' : 'gorilla'").getValue(emptyContext).innerValue == "starfish"
        BuildAstVisitor.buildAst("false ? 'starfish' : 'gorilla'").getValue(emptyContext).innerValue == "gorilla"
        BuildAstVisitor.buildAst("0 ? 'starfish' : 'gorilla'").getValue(emptyContext).innerValue == "gorilla"
        BuildAstVisitor.buildAst("12345 ? 'starfish' : 'gorilla'").getValue(emptyContext).innerValue == "starfish"
        BuildAstVisitor.buildAst("null ? 'starfish' : 'gorilla'").getValue(emptyContext).innerValue == "gorilla"
        BuildAstVisitor.buildAst("'xxx' && 'yyy' ? 'starfish' || 'seamonkey' : 'gorilla'").getValue(emptyContext).innerValue == "starfish"
        BuildAstVisitor.buildAst("'alpha' ? 'beta' ? 'charlie' ? 'delta' : 'echo' : 'foxtrot' : 'golf'").getValue(emptyContext).innerValue == "delta"
        BuildAstVisitor.buildAst("'alpha' ? 'beta' ? 'charlie' : 'delta' ? 'echo' : 'foxtrot' : 'golf'").getValue(emptyContext).innerValue == "charlie"
        BuildAstVisitor.buildAst("'alpha' ? 'beta' ? 'charlie' : 'delta' : 'echo' ? 'foxtrot' : 'golf'").getValue(emptyContext).innerValue == "charlie"
    }

    def "compound expressions"() {
        expect:
        BuildAstVisitor.buildAst("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9").getValue(emptyContext).innerValue == 45L
        BuildAstVisitor.buildAst("1 + 2 - 3 + 4 - 5 + 6 - 7 + 8 - 9").getValue(emptyContext).innerValue == -3L
        BuildAstVisitor.buildAst("1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9").getValue(emptyContext).innerValue == 362880L
        BuildAstVisitor.buildAst("(1 * 2) + (3 * 4) - (5 / 6) * (7 + 8) + 9").getValue(emptyContext).innerValue == 10.5D
    }

    def "function calls"() {
        given:
        Context functionContext = new MutableContext([
                max: new Max(),
                min: new Min()
        ])

        expect:
        BuildAstVisitor.buildAst("max(1)").getValue(functionContext).innerValue == 1L
        BuildAstVisitor.buildAst("max(1, 2)").getValue(functionContext).innerValue == 2L
        BuildAstVisitor.buildAst("max(1, 7, 2, 6, 3, 5, 4)").getValue(functionContext).innerValue == 7L
        BuildAstVisitor.buildAst("min(1)").getValue(functionContext).innerValue == 1L
        BuildAstVisitor.buildAst("min(1, 2)").getValue(functionContext).innerValue == 1L
        BuildAstVisitor.buildAst("min(7, 2, 6, 1, 3, 5, 4)").getValue(functionContext).innerValue == 1L
        BuildAstVisitor.buildAst("min(max(1, 2, 3), max(4, 5, 6), max(7, 8, 9))").getValue(functionContext).innerValue == 3L
    }

    def "variables"() {
        given:
        Context variableContext = new MutableContext([:], [
                iamnull        : Value.NULL,
                iamone         : new Value(1L),
                iamonepointfive: new Value(1.5D),
                iamtrue        : new Value(true),
                iamfalse       : new Value(false),
                iamfoo         : new Value("foo")
        ])

        expect:
        BuildAstVisitor.buildAst("iamnull").getValue(variableContext).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("iamone").getValue(variableContext).innerValue == 1L
        BuildAstVisitor.buildAst("iamonepointfive").getValue(variableContext).innerValue == 1.5D
        BuildAstVisitor.buildAst("iamtrue").getValue(variableContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("iamfalse").getValue(variableContext).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("iamfoo").getValue(variableContext).innerValue == "foo"
        BuildAstVisitor.buildAst("iamunset").getValue(variableContext).innerValue == NullValue.instance

        BuildAstVisitor.buildAst("iamone + iamone").getValue(variableContext).innerValue == 2L
        BuildAstVisitor.buildAst("iamonepointfive * 4.5").getValue(variableContext).innerValue == 6.75D
        BuildAstVisitor.buildAst("iamfoo + iamfalse + iamnull + 'bar'").getValue(variableContext).innerValue == "foofalsebar"
        BuildAstVisitor.buildAst("iamtrue || iamfalse").getValue(variableContext).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("iamtrue && iamfalse").getValue(variableContext).innerValue == Boolean.FALSE
    }

    def "arrays"() {
        given:
        Context context = new MutableContext(RedemptionRule.defaultFunctions, [
                empty  : new Value([]),
                anumber: new Value([new Value(1L)]),
                numbers: new Value([new Value(1L), new Value(2L), new Value(3L)]),
                foobar : new Value([new Value('foo'), new Value('bar')]),
                mixed  : new Value([new Value(1L), new Value('foo'), Value.NULL]),
                nested : new Value([new Value([new Value(1L), new Value(2L)]), new Value([new Value(3L), new Value(4L)])])
        ])

        expect:
        BuildAstVisitor.buildAst("[]").getValue(context).innerValue == []
        (BuildAstVisitor.buildAst("[1]").getValue(context).innerValue as List<Value>).size() == 1
        (BuildAstVisitor.buildAst("[1]").getValue(context).innerValue as List<Value>)[0].innerValue == 1L
        (BuildAstVisitor.buildAst("[1, 2, 3, 4]").getValue(context).innerValue as List<Value>).size() == 4
        (BuildAstVisitor.buildAst("[1, 2, 3, 4]").getValue(context).innerValue as List<Value>)[0].innerValue == 1L
        (BuildAstVisitor.buildAst("[1, 2, 3, 4]").getValue(context).innerValue as List<Value>)[3].innerValue == 4L
        (BuildAstVisitor.buildAst("['foo', null, ['bar']]").getValue(context).innerValue as List<Value>).size() == 3
        (BuildAstVisitor.buildAst("['foo', null, ['bar']]").getValue(context).innerValue as List<Value>)[0].innerValue == "foo"
        (BuildAstVisitor.buildAst("['foo', null, ['bar']]").getValue(context).innerValue as List<Value>)[1].innerValue == NullValue.instance
        ((BuildAstVisitor.buildAst("['foo', null, ['bar']]").getValue(context).innerValue as List<Value>)[2].innerValue as List<Value>)[0].innerValue == "bar"

        BuildAstVisitor.buildAst("[1, 2, 3, 4][0]").getValue(context).innerValue == 1L
        BuildAstVisitor.buildAst("[1, 2, 3, 4][2]").getValue(context).innerValue == 3L
        BuildAstVisitor.buildAst("[['a', 'b'], 2, ['c', 'd'], 4][0][1]").getValue(context).innerValue == "b"

        BuildAstVisitor.buildAst("empty[-1]").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("empty[0]").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("empty[1]").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("anumber[-1]").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("anumber[0]").getValue(context).innerValue == 1L
        BuildAstVisitor.buildAst("anumber[1]").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("numbers[-12313]").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("numbers[0]").getValue(context).innerValue == 1L
        BuildAstVisitor.buildAst("numbers[0.123]").getValue(context).innerValue == 1L
        BuildAstVisitor.buildAst("numbers[1]").getValue(context).innerValue == 2L
        BuildAstVisitor.buildAst("numbers[2]").getValue(context).innerValue == 3L
        BuildAstVisitor.buildAst("numbers[1233125641]").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("foobar[0]").getValue(context).innerValue == "foo"
        BuildAstVisitor.buildAst("foobar[1]").getValue(context).innerValue == "bar"
        BuildAstVisitor.buildAst("mixed[0]").getValue(context).innerValue == 1L
        BuildAstVisitor.buildAst("mixed[1]").getValue(context).innerValue == "foo"
        BuildAstVisitor.buildAst("mixed[2]").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("nested[0][1]").getValue(context).innerValue == 2L
        BuildAstVisitor.buildAst("nested[1][0]").getValue(context).innerValue == 3L
        BuildAstVisitor.buildAst("nested[100][99]").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("(foobar[1] ? mixed : numbers)[1]").getValue(context).innerValue == "foo"

        BuildAstVisitor.buildAst("sum([7, ['8'], 'eleven', numbers])").getValue(context).innerValue == (1L + 2L + 3L + 7L + 8L)

        BuildAstVisitor.buildAst("![]").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("[] == true").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("[] == false").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("[] == []").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("[] == [1]").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("[1] == [1]").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("['1'] == [1]").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("[1, 2, 3, 4] == [1, 2, 3, 4]").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("[1, 2, 3, 4] == [1, 2, 3, [4]]").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("[] + 'hello'").getValue(context).innerValue == "[]hello"
        BuildAstVisitor.buildAst("'hello' + ['world']").getValue(context).innerValue == "hello[world]"
        BuildAstVisitor.buildAst("'hello' + ['world', '!']").getValue(context).innerValue == "hello[world, !]"
        BuildAstVisitor.buildAst("[] - 5").getValue(context).innerValue == -5L
        BuildAstVisitor.buildAst("[] * 5").getValue(context).innerValue == 0L
    }

    def "maps"() {
        given:
        Context context = new MutableContext(RedemptionRule.defaultFunctions, [
                empty     : new Value([:]),
                flatmap   : Value.fromObject([
                        a     : "a",
                        one   : 1,
                        '2'   : 'two',
                        isnull: null
                ]),
                complexmap: Value.fromObject([
                        ismap        : [
                                a: 'alpha',
                                b: 'beta',
                                c: 'charlie'
                        ],
                        isarrayofmap : [
                                [
                                        d: 'delta',
                                        e: 'echo'
                                ],
                                [
                                        f: 'foxtrot',
                                        g: 'golf',
                                        h: 'hotel'
                                ],
                                [
                                        i: 'india',
                                        j: 'juliette'
                                ]
                        ],
                        nestedflatmap: [
                                a     : "a",
                                one   : 1,
                                '2'   : 'two',
                                isnull: null
                        ]
                ])
        ])

        expect:
        BuildAstVisitor.buildAst("empty").getValue(context).innerValue == [:]
        BuildAstVisitor.buildAst("empty[0]").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("empty['a']").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("flatmap['a']").getValue(context).innerValue == "a"
        BuildAstVisitor.buildAst("flatmap['one']").getValue(context).innerValue == 1L
        BuildAstVisitor.buildAst("flatmap['2']").getValue(context).innerValue == "two"
        BuildAstVisitor.buildAst("flatmap[2]").getValue(context).innerValue == "two"
        BuildAstVisitor.buildAst("flatmap['isnull']").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("flatmap['nosuchindex']").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("flatmap[-123]").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("complexmap['ismap']['a']").getValue(context).innerValue == "alpha"
        BuildAstVisitor.buildAst("complexmap['ismap']['c']").getValue(context).innerValue == "charlie"
        BuildAstVisitor.buildAst("complexmap['ismap']['d']").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("complexmap['ismap']['d']['e']").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("complexmap['isarrayofmap'][0]['e']").getValue(context).innerValue == "echo"
        BuildAstVisitor.buildAst("complexmap['isarrayofmap'][0]['f']").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("complexmap['isarrayofmap'][2]['j']").getValue(context).innerValue == "juliette"
        BuildAstVisitor.buildAst("complexmap['isarrayofmap'][3]['j']").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("complexmap['isarrayofmap'][flatmap['one']]['g']").getValue(context).innerValue == "golf"
        BuildAstVisitor.buildAst("complexmap['isarrayofmap'][[4, 3, 2, 1][3]]['g']").getValue(context).innerValue == "golf"

        BuildAstVisitor.buildAst("!empty").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("empty == null").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("empty == true").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("empty == false").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("empty == 1").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("empty == empty").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("flatmap == flatmap").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("flatmap != flatmap").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("flatmap != empty").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("flatmap == empty").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("complexmap == complexmap").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("complexmap != empty").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("complexmap == empty").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("complexmap != flatmap").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("complexmap == flatmap").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("complexmap['nestedflatmap'] == flatmap").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("complexmap['nestedflatmap'] != flatmap").getValue(context).innerValue == Boolean.FALSE

        BuildAstVisitor.buildAst("flatmap.a").getValue(context).innerValue == "a"
        BuildAstVisitor.buildAst("flatmap.one").getValue(context).innerValue == 1L
        BuildAstVisitor.buildAst("flatmap.two").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("complexmap.isarrayofmap[0].d").getValue(context).innerValue == "delta"
        BuildAstVisitor.buildAst("complexmap.nestedflatmap.a").getValue(context).innerValue == "a"
        BuildAstVisitor.buildAst("complexmap.nestedflatmap.b.c").getValue(context).innerValue == NullValue.instance
    }

    def "functions"() {
        given:
        Context context = new MutableContext(RedemptionRule.defaultFunctions, [
                someMap  : Value.fromObject([
                        a: 'alpha',
                        b: 'beta',
                        c: 'charlie'
                ]),
                someArray: Value.fromObject([1, 2, 3, 4])
        ])

        expect:
        BuildAstVisitor.buildAst("every(['a', 'b', 'c'], p => p == 'a')").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("every(['a', 'b', 'c'], p => p != '1')").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("every(['a', 'b', 'c'], p => true)").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("every([], p => false)").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("every(11)").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("every(null)").getValue(context).innerValue == Boolean.FALSE

        BuildAstVisitor.buildAst("filter(['a', 'b', 'c'], p => p == 'd')").getValue(context).innerValue == []
        BuildAstVisitor.buildAst("filter(['a', 'b', 'c'], p => p == 'a')[0]").getValue(context).innerValue == "a"
        BuildAstVisitor.buildAst("size(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], p => p % 2 == 0))").getValue(context).innerValue == 4L
        BuildAstVisitor.buildAst("filter([1, 2, 3, 4, 5, 6, 7, 8, 9], p => p % 2 == 0) == [2, 4, 6, 8]").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("filter([], p => p % 2 == 0) == []").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("filter(null) == []").getValue(context).innerValue == Boolean.TRUE

        BuildAstVisitor.buildAst("find([1, 2, 3, 4, 5, 6, 7, 8, 9], p => p % 4 == 0)").getValue(context).innerValue == 4L
        BuildAstVisitor.buildAst("find([1, 2, 3, 4, 5, 6, 7, 8, 9], p => p % 10 == 0)").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("find(null)").getValue(context).innerValue == NullValue.instance

        BuildAstVisitor.buildAst("findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], p => p % 4 == 0)").getValue(context).innerValue == 3L
        BuildAstVisitor.buildAst("findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], p => p % 10 == 0)").getValue(context).innerValue == -1L
        BuildAstVisitor.buildAst("findIndex(null)").getValue(context).innerValue == -1L

        BuildAstVisitor.buildAst("map([1, 2, 3, 4, 5, 6, 7, 8, 9], p => p * 2) == [2, 4, 6, 8, 10, 12, 14, 16, 18]").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("map([], p => p * 2) == []").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("map(null) == []").getValue(context).innerValue == Boolean.TRUE

        BuildAstVisitor.buildAst("size([1, 2, 3, 4, 5, 6, 7, 8, 9])").getValue(context).innerValue == 9L
        BuildAstVisitor.buildAst("size([])").getValue(context).innerValue == 0L
        BuildAstVisitor.buildAst("size('kwyjibo')").getValue(context).innerValue == 7L
        BuildAstVisitor.buildAst("size('')").getValue(context).innerValue == 0L
        BuildAstVisitor.buildAst("size(11)").getValue(context).innerValue == 0L
        BuildAstVisitor.buildAst("size(null)").getValue(context).innerValue == 0L

        BuildAstVisitor.buildAst("some(['a', 'b', 'c'], p => p == '1')").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("some(['a', 'b', 'c'], p => p == 'a')").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("some(['a', 'b', 'c'], p => p != '1')").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("some(['a', 'b', 'c'], p => true)").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("some([], p => true)").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("some(null)").getValue(context).innerValue == Boolean.FALSE

        BuildAstVisitor.buildAst("size(keys(someMap))").getValue(context).innerValue == 3L
        BuildAstVisitor.buildAst("keys(someMap) == ['a', 'b', 'c']").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("keys(null) == []").getValue(context).innerValue == Boolean.TRUE

        BuildAstVisitor.buildAst("size(values(someMap))").getValue(context).innerValue == 3L
        BuildAstVisitor.buildAst("values(someMap) == ['alpha', 'beta', 'charlie']").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("values(null) == []").getValue(context).innerValue == Boolean.TRUE
    }

    def "dot notation functions"() {
        given:
        Context context = new MutableContext(RedemptionRule.defaultFunctions, [
                someMap  : Value.fromObject([
                        a: 'alpha',
                        b: 'beta',
                        c: 'charlie'
                ]),
                someArray: Value.fromObject([1, 2, 3, 4])
        ])

        expect:
        BuildAstVisitor.buildAst("['a', 'b', 'c'].every(p => p == 'a')").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("['a', 'b', 'c'].every(p => p != '1')").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("['a', 'b', 'c'].every(p => true)").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("[].every(p => false)").getValue(context).innerValue == Boolean.TRUE

        BuildAstVisitor.buildAst("['a', 'b', 'c'].filter(p => p == 'd')").getValue(context).innerValue == []
        BuildAstVisitor.buildAst("['a', 'b', 'c'].filter(p => p == 'a')[0]").getValue(context).innerValue == "a"
        BuildAstVisitor.buildAst("[1, 2, 3, 4, 5, 6, 7, 8, 9].filter(p => p % 2 == 0).size()").getValue(context).innerValue == 4L
        BuildAstVisitor.buildAst("[1, 2, 3, 4, 5, 6, 7, 8, 9].filter(p => p % 2 == 0) == [2, 4, 6, 8]").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("[].filter(p => p % 2 == 0) == []").getValue(context).innerValue == Boolean.TRUE

        BuildAstVisitor.buildAst("[1, 2, 3, 4, 5, 6, 7, 8, 9].find(p => p % 4 == 0)").getValue(context).innerValue == 4L
        BuildAstVisitor.buildAst("[1, 2, 3, 4, 5, 6, 7, 8, 9].find(p => p % 10 == 0)").getValue(context).innerValue == NullValue.instance

        BuildAstVisitor.buildAst("[1, 2, 3, 4, 5, 6, 7, 8, 9].findIndex(p => p % 4 == 0)").getValue(context).innerValue == 3L
        BuildAstVisitor.buildAst("[1, 2, 3, 4, 5, 6, 7, 8, 9].findIndex(p => p % 10 == 0)").getValue(context).innerValue == -1L

        BuildAstVisitor.buildAst("[1, 2, 3, 4, 5, 6, 7, 8, 9].map(p => p * 2) == [2, 4, 6, 8, 10, 12, 14, 16, 18]").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("[].map(p => p * 2) == []").getValue(context).innerValue == Boolean.TRUE

        BuildAstVisitor.buildAst("[1, 2, 3, 4, 5, 6, 7, 8, 9].size()").getValue(context).innerValue == 9L
        BuildAstVisitor.buildAst("[].size()").getValue(context).innerValue == 0L
        BuildAstVisitor.buildAst("'kwyjibo'.size()").getValue(context).innerValue == 7L
        BuildAstVisitor.buildAst("''.size()").getValue(context).innerValue == 0L

        BuildAstVisitor.buildAst("['a', 'b', 'c'].some(p => p == '1')").getValue(context).innerValue == Boolean.FALSE
        BuildAstVisitor.buildAst("['a', 'b', 'c'].some(p => p == 'a')").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("['a', 'b', 'c'].some(p => p != '1')").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("['a', 'b', 'c'].some(p => true)").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("[].some(p => true)").getValue(context).innerValue == Boolean.FALSE

        BuildAstVisitor.buildAst("someMap.keys().size()").getValue(context).innerValue == 3L
        BuildAstVisitor.buildAst("someMap.keys() == ['a', 'b', 'c']").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("null.keys() == []").getValue(context).innerValue == Boolean.TRUE

        BuildAstVisitor.buildAst("someMap.values().size()").getValue(context).innerValue == 3L
        BuildAstVisitor.buildAst("someMap.values() == ['alpha', 'beta', 'charlie']").getValue(context).innerValue == Boolean.TRUE
        BuildAstVisitor.buildAst("null.values() == []").getValue(context).innerValue == Boolean.TRUE
    }

    def "math functions"() {
        given:
        Context context = new MutableContext(RedemptionRule.defaultFunctions, [:])

        expect:
        BuildAstVisitor.buildAst("max(null, null, null)").getValue(context).innerValue == 0L
        BuildAstVisitor.buildAst("max(null, null, 5, null)").getValue(context).innerValue == 5L
        BuildAstVisitor.buildAst("max(5)").getValue(context).innerValue == 5L
        BuildAstVisitor.buildAst("max(5, 10)").getValue(context).innerValue == 10L
        BuildAstVisitor.buildAst("max(5, 10, 30, 40)").getValue(context).innerValue == 40L
        BuildAstVisitor.buildAst("max(5, [10, 30, 40])").getValue(context).innerValue == 40L
        BuildAstVisitor.buildAst("max(5, [10, [30, 40]])").getValue(context).innerValue == 40L
        BuildAstVisitor.buildAst("5.max()").getValue(context).innerValue == 5L
        BuildAstVisitor.buildAst("5.max(2)").getValue(context).innerValue == 5L
        BuildAstVisitor.buildAst("5.max(11, 2)").getValue(context).innerValue == 11L
        BuildAstVisitor.buildAst("'afskjhasd'.max()").getValue(context).innerValue == 0L
        BuildAstVisitor.buildAst("max(1, 2, '3')").getValue(context).innerValue == 3L
    }

    def "string functions"() {
        given:
        Context context = new MutableContext(RedemptionRule.defaultFunctions, [:])

        expect:
        BuildAstVisitor.buildAst("null.substring()").getValue(context).innerValue == ""
        BuildAstVisitor.buildAst("'foobarbaz'.substring()").getValue(context).innerValue == "foobarbaz"
        BuildAstVisitor.buildAst("'foobarbaz'.substring(0)").getValue(context).innerValue == "foobarbaz"
        BuildAstVisitor.buildAst("'foobarbaz'.substring(3)").getValue(context).innerValue == "barbaz"
        BuildAstVisitor.buildAst("'foobarbaz'.substring(-3)").getValue(context).innerValue == "foobarbaz"
        BuildAstVisitor.buildAst("'foobarbaz'.substring(0, 6)").getValue(context).innerValue == "foobar"
        BuildAstVisitor.buildAst("'foobarbaz'.substring(3, 6)").getValue(context).innerValue == "bar"
        BuildAstVisitor.buildAst("'foobarbaz'.substring(6, 3)").getValue(context).innerValue == "bar"
        BuildAstVisitor.buildAst("'foobarbaz'.substring(-6, 3)").getValue(context).innerValue == "foo"
        BuildAstVisitor.buildAst("'foobarbaz'.substring(3, 3)").getValue(context).innerValue == ""

        BuildAstVisitor.buildAst("'foo'.toLowerCase()").getValue(context).innerValue == "foo"
        BuildAstVisitor.buildAst("'FoO'.toLowerCase()").getValue(context).innerValue == "foo"
        BuildAstVisitor.buildAst("'FOO'.toLowerCase()").getValue(context).innerValue == "foo"
        BuildAstVisitor.buildAst("null.toLowerCase()").getValue(context).innerValue == ""
        BuildAstVisitor.buildAst("[].toLowerCase()").getValue(context).innerValue == "[]"

        BuildAstVisitor.buildAst("'foo'.toUpperCase()").getValue(context).innerValue == "FOO"
        BuildAstVisitor.buildAst("'FoO'.toUpperCase()").getValue(context).innerValue == "FOO"
        BuildAstVisitor.buildAst("'FOO'.toUpperCase()").getValue(context).innerValue == "FOO"
        BuildAstVisitor.buildAst("null.toUpperCase()").getValue(context).innerValue == ""
        BuildAstVisitor.buildAst("1.toUpperCase()").getValue(context).innerValue == "1"
        BuildAstVisitor.buildAst("[].toUpperCase()").getValue(context).innerValue == "[]"
    }

    def "reduce"() {
        given:
        Context context = new MutableContext(RedemptionRule.defaultFunctions, [:])

        expect:
        BuildAstVisitor.buildAst("[].reduce()").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("[0, 1, 2, 3].reduce()").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("[].reduce(x => 10)").getValue(context).innerValue == NullValue.instance

        BuildAstVisitor.buildAst("['a'].reduce(x => 'c')").getValue(context).innerValue == "c"
        BuildAstVisitor.buildAst("[0, 1, 2, 3].reduce(x => x)").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("[0, 1, 2, 3].reduce(x => x, 5)").getValue(context).innerValue == 5L
        BuildAstVisitor.buildAst("[0, 1, 2, 3].reduce((x) => x)").getValue(context).innerValue == NullValue.instance
        BuildAstVisitor.buildAst("[0, 1, 2, 3].reduce((x) => x, 5)").getValue(context).innerValue == 5L

        BuildAstVisitor.buildAst("[0, 1, 2, 3].reduce((x, y) => x + y)").getValue(context).innerValue == 6L
        BuildAstVisitor.buildAst("[0, 1, 2, 3].reduce((x, y) => x + y, 5)").getValue(context).innerValue == 11L

        BuildAstVisitor.buildAst("[0, 1, 2, 3].reduce((x, y, z) => x + y + z)").getValue(context).innerValue == 12L
        BuildAstVisitor.buildAst("[0, 1, 2, 3].reduce((x, y, z) => x + y + z, 5)").getValue(context).innerValue == 17L

        BuildAstVisitor.buildAst("[0, 1, 2, 3].reduce((x, y, z, array) => x + y + array[z])").getValue(context).innerValue == 12L
        BuildAstVisitor.buildAst("[0, 1, 2, 3].reduce((x, y, z, array) => x + y + array[z], 5)").getValue(context).innerValue == 17L
    }

    def "member access precedence"() {
        given:
        Context context = new MutableContext(RedemptionRule.defaultFunctions, [:])

        expect:
        !BuildAstVisitor.buildAst("false && sum(1, 2, 3)").getValue(context).asBoolean()
        !BuildAstVisitor.buildAst("false && sum(1, -1)").getValue(context).asBoolean()
        BuildAstVisitor.buildAst("true && sum(1, 2, 3)").getValue(context).asBoolean()
        !BuildAstVisitor.buildAst("true && sum(1, -1)").getValue(context).asBoolean()
    }

    def "basic parse errors"() {
        when:
        BuildAstVisitor.buildAst("'unclosed * leftquote")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("unclosed * rightquote'")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("random' * middlequote")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("random * 'middlequote")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("\"unclosed * leftquote")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("unclosed * rightquote\"")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("random\" * middlequote")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("random * \"middlequote")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("(unclosed * leftparenthesis")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("unclosed * rightparenthesis)")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("((unclosed * leftparenthesis)")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("(unclosed * rightparenthesis))")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("hey) && (what")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("this is just words")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("1 = 1")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("1=1")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("== 1")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("1 ==")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("1=")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("*1")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("1 +")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("1 + 11 111")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("*")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("1 ^ 1")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("1 ?")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("? 1")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("1 ? 1")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("1 :")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst(": 1")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("1 : 1")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("1 ? 1 :")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("1 ?: 1")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("1 ? : 1")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("? 1 : 1")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("brokenfunctioncall(")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("()notafunctioncall")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("metadata.hats.some(hat -> hat.color == 'that should be a fat arrow')")
        then:
        thrown BuildAstException

        when:
        BuildAstVisitor.buildAst("metadata.hats.some(hat =>)")
        then:
        thrown BuildAstException
    }
}
