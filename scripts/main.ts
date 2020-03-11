import ts from "typescript";
import glob from "glob";
import { TSDocParser, TSDocConfiguration, TSDocTagSyntaxKind, Standardization, TSDocTagDefinition } from "@microsoft/tsdoc";

function main() {
  const conf = new TSDocConfiguration();
  const typeQuestionTagDef = new TSDocTagDefinition({
    syntaxKind: TSDocTagSyntaxKind.ModifierTag,
    tagName: "@typeQuestion",
  });
  const difficultyTagDef = new TSDocTagDefinition({
    syntaxKind: TSDocTagSyntaxKind.BlockTag,
    tagName: "@difficulty",
  });
  const replaceToTagDef = new TSDocTagDefinition({
    syntaxKind: TSDocTagSyntaxKind.BlockTag,
    tagName: "@replaceTo",
  });
  conf.addTagDefinitions([typeQuestionTagDef, difficultyTagDef, replaceToTagDef]);
  const files = glob.sync("**/*.ts", { 
    nodir: true,
    cwd: __dirname + "/../questions",
  });
  const parser = new TSDocParser(conf);

  files.forEach(fileName => {
    const buf = ts.sys.readFile(ts.sys.resolvePath(__dirname + "/../questions/" + fileName))!;
    const parseContext = parser.parseString(buf);
    console.log(parseContext.docComment.modifierTagSet.hasTagName("@typeQuestion"));
    console.log(parseContext.docComment.customBlocks.map(cb => cb.blockTag.tagName));
  });
}

main();
