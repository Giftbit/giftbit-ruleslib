package com.giftbit.ruleslib

import com.giftbit.ruleslib.ast.ExpressionNode
import groovy.json.StringEscapeUtils
import org.junit.Test

import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths

class FileDrivenTests {

    Context context = new MutableContext(Rule.defaultFunctions, [
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

    @Test
    void testValueTests() {
        List<String> lines = loadTestFile("ValueTests.txt")
        String lastComment = "file start"
        int assertCount = 0

        for (String line in lines) {
            if (line.startsWith("#")) {
                lastComment = line.substring(1).trim()
            } else if (line.contains(",")) {
                int equalsIndex = line.lastIndexOf("=")
                String expressionString = line.substring(0, equalsIndex).trim()
                String valueString = line.substring(equalsIndex+1).trim()

                ExpressionNode expression = BuildAstVisitor.buildAst(expressionString)
                Value actualValue = expression.getValue(context)
                Value expectedValue = parseValue(valueString)
                assert actualValue.innerValue == expectedValue.innerValue : "${lastComment}: ${expressionString} ➡ ${expression.toString()} ➡ ${actualValue.toString()} == ${valueString} ➡ ${expectedValue.toString()}"
                assertCount++
            }
        }

        println("Made ${assertCount} asserts")
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
