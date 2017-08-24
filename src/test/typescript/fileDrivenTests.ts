import * as chai from "chai";
import * as fs from "fs";
import * as path from "path";
import {AstVisitor} from "../../main/typescript/AstVisitor";
import {Value} from "../../main/typescript/Value";
import {MutableContext} from "../../main/typescript/MutableContext";
import {Rule} from "../../main/typescript/Rule";

const context = new MutableContext(Rule.defaultFunctions, {
    iamnull: null,
    iamone: 1,
    iamonepointfive: 1.5,
    iamtrue: true,
    iamfalse: false,
    iamfoo: "foo",
    emptyarray: [],
    anumber: [1],
    numbers: [1, 2, 3],
    foorbararray: ["foo", "bar"],
    mixedarray: [1, "foo", null],
    nestedarray: [[1, 2], [3, 4]],
    empty: {},
    flatmap: {
        a: "a",
        one: 1,
        '2': 'two',
        isnull: null
    },
    complexmap: {
        ismap: {
            a: 'alpha',
            b: 'beta',
            c: 'charlie'
        },
        isarrayofmap: [
            {
                d: 'delta',
                e: 'echo'
            },
            {
                f: 'foxtrot',
                g: 'golf',
                h: 'hotel'
            },
            {
                i: 'india',
                j: 'juliette'
            }
        ],
        nestedflatmap: {
            a: "a",
            one: 1,
            '2': 'two',
            isnull: null
        }
    }
});

runTestFile("SyntaxTests.txt");
runTestFile("FunctionTests.txt");

function runTestFile(fileName: string): void {
    const lines = fs.readFileSync(path.join(__dirname, "..", "resources", fileName)).toString("ascii").split("\n");

    describe(fileName, () => {
        let lastComment = "file start";

        for (let lineIx = 0; lineIx < lines.length; lineIx++) {
            if (lines[lineIx].trim().length == 0) {
                // no-op
            } else if (lines[lineIx][0] === "#") {
                lastComment = lines[lineIx].substring(1).trim();
            } else {
                describe(lastComment, () => {
                    for (; lineIx < lines.length; lineIx++) {
                        if (lines[lineIx].trim().length == 0) {
                            // no-op
                        } else if (lines[lineIx][0] === "#") {
                            lineIx--;
                            break;
                        } else {
                            const line = lines[lineIx];
                            const equalsIndex = line.lastIndexOf("=");
                            const expressionString = line.substring(0, equalsIndex).trim();
                            const valueString = line.substring(equalsIndex + 1).trim();

                            it(line, () => {
                                const expression = AstVisitor.buildAst(expressionString);
                                const actualValue = expression.getValue(context);
                                const expectedValue = parseValue(valueString);

                                if (typeof expectedValue === "number" && isNaN(expectedValue)) {
                                    chai.assert.isNaN(actualValue, `${expression.toString()} == ${expectedValue}`);
                                } else {
                                    chai.assert.strictEqual(actualValue, expectedValue, `${expression.toString()} == ${expectedValue}`)
                                }
                            });
                        }
                    }
                });
            }
        }
    });
}

function parseValue(text: string): Value {
    if (text == "null") {
        return null;
    } else if (text == "false") {
        return false;
    } else if (text == "true") {
        return true;
    } else if (text == "Inf") {
        return Number.POSITIVE_INFINITY;
    } else if (text == "-Inf") {
        return Number.NEGATIVE_INFINITY;
    } else if (text == "NaN") {
        return Number.NaN;
    } else if (text.match(/^-?[0-9]+$/)) {
        return parseInt(text, 10);
    } else if (text.match(/^-?[0-9]+.[0-9]+$/)) {
        return parseFloat(text);
    } else if (text.match(/^".*"$/)) {
        return text.substring(1, text.length - 1).replace("\\\"", "\"");
    }

    throw new Error(`Unsupported value: ${text}`)
}
