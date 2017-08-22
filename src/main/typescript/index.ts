import antlr4 = require("antlr4");
import RedemptionRuleLexer = require("./RedemptionRuleLexer");
import RedemptionRuleParser = require("./RedemptionRuleParser");
import {AstVisitor} from "./AstVisitor";

const input = "1 + 1 + 'foobar'";
const chars = new antlr4.InputStream(input);
const lexer = new RedemptionRuleLexer.RedemptionRuleLexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new RedemptionRuleParser.RedemptionRuleParser(tokens);
parser.buildParseTrees = true;

const tree = parser.compileUnit();
const visitor = new AstVisitor();
visitor.visitCompileUnit(tree);
