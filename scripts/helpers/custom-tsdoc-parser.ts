import { TSDocParser, TSDocConfiguration, TSDocTagSyntaxKind, Standardization, TSDocTagDefinition } from "@microsoft/tsdoc";

export function createParser() {
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
  const removeTagDef = new TSDocTagDefinition({
    syntaxKind: TSDocTagSyntaxKind.ModifierTag,
    tagName: "@remove",
  });
  conf.addTagDefinitions([typeQuestionTagDef, difficultyTagDef, replaceToTagDef, removeTagDef]);
  const parser = new TSDocParser(conf);
  return parser;
}
