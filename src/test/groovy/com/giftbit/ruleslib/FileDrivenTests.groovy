package com.giftbit.ruleslib

import com.giftbit.ruleslib.ast.ExpressionNode
import com.giftbit.ruleslib.functions.RuleFunction
import groovy.json.StringEscapeUtils
import org.junit.Test

import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths

class FileDrivenTests {

    private static class CustomFunction extends RuleFunction {

        @Override
        Value invoke(List<ExpressionNode> args, Context context) {
            return new Value("extracted ${resolveFirstAsNumber(args, context)} from custom function")
        }
    }

    private static Map<String, RuleFunction> customFunctions = [
            customFunction: new CustomFunction()
    ]

    private static Context context = new MutableContext(Rule.defaultFunctions + customFunctions, [
            iamnull        : Value.NULL,
            iamone         : new Value(1L),
            iamonepointfive: new Value(1.5D),
            iamtrue        : new Value(true),
            iamfalse       : new Value(false),
            iamfoo         : new Value("foo"),
            emptyarray     : new Value([]),
            anumber        : new Value([new Value(1L)]),
            numbers        : new Value([new Value(1L), new Value(2L), new Value(3L)]),
            foorbararray   : new Value([new Value('foo'), new Value('bar')]),
            mixedarray     : new Value([new Value(1L), new Value('foo'), Value.NULL]),
            nestedarray    : new Value([new Value([new Value(1L), new Value(2L)]), new Value([new Value(3L), new Value(4L)])]),
            empty          : new Value([:]),
            flatmap        : Value.fromObject([
                    a     : "a",
                    one   : 1,
                    '2'   : 'two',
                    isnull: null
            ]),
            complexmap     : Value.fromObject([
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

    @Test
    void "SyntaxTests"() {
        runTestFile("SyntaxTests.txt")
    }

    @Test
    void "FunctionTests"() {
        runTestFile("FunctionTests.txt")
    }

    @Test
    void "SyntaxErrorTests"() {
        runTestFile("SyntaxErrorTests.txt")
    }

    @Test
    void "CanEvaluateToTests"() {
        runEvaluateToTypeTestFile("CanEvaluateToTests.txt", true)
    }

    @Test
    void "MustEvaluateToTests"() {
        runEvaluateToTypeTestFile("MustEvaluateToTests.txt", false)
    }

    static void runTestFile(String fileName) {
        List<String> lines = loadTestFile(fileName)
        String lastComment = "file start"
        int assertCount = 0

        for (String line in lines) {
            line = line.trim()

            if (line.startsWith("#")) {
                lastComment = line.substring(1).trim()
            } else if (line.size() > 0) {
                int equalsIndex = line.lastIndexOf("=")
                String expressionString = line.substring(0, equalsIndex).trim()
                String valueString = line.substring(equalsIndex + 1).trim()

                if (valueString.startsWith("@")) {
                    String messageRegex = valueString.substring(1)
                    Exception ex = null
                    try {
                        BuildAstVisitor.buildAst(expressionString)
                    } catch (Exception e) {
                        ex = e
                    }
                    assert ex != null : "${lastComment} ➡ ${line} ➡ throws Exception"
                    if (ex instanceof NullPointerException) {
                        ex.printStackTrace()
                    }
                    assert ex instanceof AstException : "${lastComment} ➡ ${line} ➡ throws AstException"
                    if (messageRegex) {
                        assert ex.message.matches(messageRegex) : "${lastComment} ➡ ${line} ➡ ${ex.message} matches ${messageRegex}"
                    }
                } else {
                    ExpressionNode expression = BuildAstVisitor.buildAst(expressionString)
                    Value actualValue = expression.getValue(context)
                    Value expectedValue = parseValue(valueString)
                    System.out.println("Expected value: " + expectedValue)
                    assert actualValue.innerValue == expectedValue.innerValue: "${lastComment} ➡ ${line} ➡ ${expression.toString()}=${valueString} ➡ ${actualValue.toString()}=${expectedValue.toString()}"
                }
                assertCount++
            }
        }

        println("${fileName} passed ${assertCount} asserts")
    }

    static void runEvaluateToTypeTestFile(String fileName, boolean can) {
        List<String> lines = loadTestFile(fileName)
        String lastComment = "file start"
        AstAnalysisDataType type = null
        Boolean assertTrue = true
        int assertCount = 0

        for (String line in lines) {
            line = line.trim()

            if (line.startsWith("#")) {
                lastComment = line.substring(1).trim()

                String[] directiveParts = lastComment.split(" ")
                type = AstAnalysisDataType.valueOf(directiveParts[0].trim().toUpperCase())
                assertTrue = directiveParts[1].trim() == "true"
            } else if (line.size() > 0) {
                Rule rule = new Rule(line)

                if (can) {
                    assert rule.canEvaluateToType(type) == assertTrue : "${lastComment} ➡ ${line}"
                } else {
                    assert rule.mustEvaluateToType(type) == assertTrue : "${lastComment} ➡ ${line}"
                }
                assertCount++
            }
        }

        println("${fileName} passed ${assertCount} asserts")
    }

    static List<String> loadTestFile(String fileName) {
        URL resource = FileDrivenTests.class.getClassLoader().getResource(fileName)
        Path path = Paths.get(resource.toURI())
        return Files.readAllLines(path)
    }

    static Value parseValue(String text) {
        if (text == "null") {
            return Value.NULL
        } else if (text == "false") {
            return Value.FALSE
        } else if (text == "true") {
            return Value.TRUE
        } else if (text == "Inf") {
            return new Value(Double.POSITIVE_INFINITY)
        } else if (text == "-Inf") {
            return new Value(Double.NEGATIVE_INFINITY)
        } else if (text == "NaN") {
            return new Value(Double.NaN)
        } else if (text.matches(/^-?[0-9]+$/)) {
            return new Value(Long.parseLong(text))
        } else if (text.matches(/^-?[0-9]+.[0-9]+$/)) {
            return new Value(Double.parseDouble(text))
        } else if (text.matches(/^".*"$/)) {
            return new Value(StringEscapeUtils.unescapeJava(text.substring(1, text.length() - 1)))
        }

        throw new Exception("Unsupported value: ${text}")
    }
}
