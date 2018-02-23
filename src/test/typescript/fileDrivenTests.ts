import * as chai from "chai";
import * as fs from "fs";
import * as path from "path";
import {AstVisitor} from "../../main/typescript/AstVisitor";
import {Value} from "../../main/typescript/Value";
import {MutableContext} from "../../main/typescript/MutableContext";
import {Rule} from "../../main/typescript/Rule";
import {AstError} from "../../main/typescript/AstError";

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
runTestFile("SyntaxErrorTests.txt");
runEvaluateToTypeTestFile("CanEvaluateToTests.txt", true);
runEvaluateToTypeTestFile("MustEvaluateToTests.txt", false);

/**
 * Evaluate a test file with the format:
 *  - empty lines are ignored
 *  - lines starting with # are like comments that split the test into sections
 *  - otherwise the lines are tests:
 *    - everything before the last = is an expression to evaluate
 *    - everything after the last = is te value it must evaluate to
 *    - if the value to evaluate to is an @ then it must throw a syntax exception
 */
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
                                if (valueString[0] === "@") {
                                    const messageRegex = valueString.substring(1);
                                    let er: Error = null;
                                    try {
                                        AstVisitor.buildAst(expressionString)
                                    } catch (e) {
                                        er = e;
                                    }
                                    chai.assert.isNotNull(er, "throws Error");
                                    chai.assert.instanceOf(er, AstError, er.stack);
                                    if (messageRegex) {
                                        chai.assert(er.message.match(messageRegex), `${er.message} matches ${messageRegex}`);
                                    }
                                } else {
                                    console.log("compiling...", expressionString);
                                    const expression = AstVisitor.buildAst(expressionString);
                                    const expectedValue = parseValue(valueString);
                                    const actualValue = expression.getValue(context);
                                    if (typeof expectedValue === "number" && isNaN(expectedValue)) {
                                        chai.assert.isNaN(actualValue, `${expression.toString()} == ${expectedValue}`);
                                    } else {
                                        chai.assert.strictEqual(actualValue, expectedValue, `${expression.toString()} == ${expectedValue}`)
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    });
}

/**
 * Evaluate a test file with the following format:
 *  - empty lines are ignored
 *  - lines starting with # give the type and truthiness
 *  - otherwise the lines are checked to see if they can evaluate to that type
 */
function runEvaluateToTypeTestFile(fileName: string, can: boolean): void {
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
                    const directiveParts = lastComment.split(" ");
                    const type = directiveParts[0];
                    const assertTrue = directiveParts[1] === "true";

                    for (; lineIx < lines.length; lineIx++) {
                        if (lines[lineIx].trim().length == 0) {
                            // no-op
                        } else if (lines[lineIx][0] === "#") {
                            lineIx--;
                            break;
                        } else {
                            const line = lines[lineIx].trim();

                            it(line, () => {
                                const rule = new Rule(line);
                                if (can) {
                                    chai.assert.equal(rule.canEvaluateToType(type as any), assertTrue);
                                } else {
                                    chai.assert.equal(rule.mustEvaluateToType(type as any), assertTrue);
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
        return text.substring(1, text.length - 1).replace(/\\"/g, "\"");
    }

    throw new Error(`Unsupported value: ${text}`)
}
