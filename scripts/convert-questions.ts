import path from "path";
import ts from "typescript";
import glob from "glob";
import { TSDocParser, TextRange } from "@microsoft/tsdoc";
import { DocNode, DocExcerpt, DocFencedCode, DocParagraph } from '@microsoft/tsdoc';
import { createParser } from "./helpers/custom-tsdoc-parser";
import { Output } from "./types";

export class Formatter {

  public static renderDocNode(docNode: DocNode): string {
    let result: string = '';
    if (docNode) {
      if (docNode instanceof DocExcerpt) {
        result += docNode.content.toString();
      }
      for (const childNode of docNode.getChildNodes()) {
        result += Formatter.renderDocNode(childNode);
      }
    }
    return result;
  }

  public static renderDocNodes(docNodes: ReadonlyArray<DocNode>): string {
    let result: string = '';
    for (const docNode of docNodes) {
      result += Formatter.renderDocNode(docNode);
    }
    return result;
  }
}

type QuestionDescriptor = {
  fileName: string;
  description?: string;
  difficultyStr?: string;
  originalContent: string;
  replacements: ts.TextChange[];
};

function parseTsFile(parser: TSDocParser, fileName: string, fileContent: string) {
  const src = ts.createSourceFile(fileName, fileContent, ts.ScriptTarget.Latest, true, fileName.endsWith("tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const qd: QuestionDescriptor = {
    fileName,
    originalContent: fileContent,
    replacements: [],
  };
  const ad: QuestionDescriptor = {
    fileName,
    originalContent: fileContent,
    replacements: [],
  };
  ts.forEachChild(src, node => {
    if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier)) {
      if (node.moduleSpecifier.text === "type-dungeon") {
        const r = {
          newText: "",
          span: {
            start: node.getFullStart(),
            length: node.getFullWidth(),
          },
        };
        qd.replacements.push(r);
        ad.replacements.push(r);
      }
    }
    const commentRanges = ts.getLeadingCommentRanges(fileContent, node.getFullStart());
    if (!commentRanges) return;
    commentRanges.filter(c => c.kind === ts.SyntaxKind.MultiLineCommentTrivia).forEach(range => {
      const { docComment } = parser.parseRange(TextRange.fromStringRange(fileContent, range.pos, range.end));
      let toBeRemoved = false;
      let replacementComment = "";
      if (docComment.modifierTagSet.hasTagName("@typeQuestion")) {
        qd.description = Formatter.renderDocNode(docComment.summarySection).trim();
        toBeRemoved = true;
        replacementComment = qd.description.split("\n").map(line => `// ${line}`).join("\n");
      }
      if (docComment.modifierTagSet.hasTagName("@remove")) {
        toBeRemoved = true;
        qd.replacements.push({
          newText: "",
          span: {
            start: node.getStart(),
            length: node.getWidth(),
          },
        });
      }
      docComment.customBlocks.forEach(block => {
        if (block.blockTag.tagName === "@replaceTo") {
          toBeRemoved = true;
          for (let child of block.content.getChildNodes()) {
            if (child instanceof DocFencedCode) {
              qd.replacements.push({
                newText: child.code,
                span: {
                  start: node.getStart(),
                  length: node.getWidth(),
                },
              });
              break;
            }
          }
        } else if (block.blockTag.tagName === "@difficulty") {
          const firstNode = block.content.getChildNodes()[0];
          if (firstNode instanceof DocParagraph) {
            const dstr = Formatter.renderDocNode(firstNode).trim().toUpperCase();
            qd.difficultyStr = dstr;
          }
        }
      });
      if (toBeRemoved) {
        qd.replacements.push({
          newText: replacementComment,
          span: {
            start: range.pos,
            length: range.end - range.pos,
          },
        });
        ad.replacements.push({
          newText: "",
          span: {
            start: range.pos,
            length: range.end - range.pos,
          },
        });
      }
    });
  });
  if (qd.description) return [qd, ad];
}

const difficultyMap: Record<string, number> = {
  "EASY": 5,
  "MEDIUM": 10,
  "HARD": 15,
};

function applyReplacements({ originalContent, replacements }: QuestionDescriptor) {
  const cloned = replacements.slice().sort((a, b) => b.span.start - a.span.start);
  for (const { newText, span: { start, length } } of cloned) {
    originalContent = originalContent.slice(0, start) + newText + originalContent.slice(start + length);
  }
  return {
    fullText: originalContent.trim(),
  };
}

function main() {
  const parser = createParser();

  const files = glob.sync("**/*.ts", { 
    nodir: true,
    cwd: __dirname + "/../questions",
  });

  const outputs: Output[] = [];

  files.forEach(fileName => {
    const buf = ts.sys.readFile(ts.sys.resolvePath(__dirname + "/../questions/" + fileName))!;
    const ret = parseTsFile(parser, fileName, buf);
    if (!ret) return;
    const [qd, ad] = ret;
    const qOut = applyReplacements(qd);
    const aOut = applyReplacements(ad);
    ts.sys.writeFile(__dirname + "/../dist/questions/" + qd.fileName, qOut.fullText);
    ts.sys.writeFile(__dirname + "/../dist/answers/" + ad.fileName, aOut.fullText);
    const outJsonRecord: Output = {
      name: path.basename(fileName).replace(/\.tsx?$/, ""),
      difficulty: difficultyMap[qd.difficultyStr || "MEDIUM"] || difficultyMap.MEDIUM,
      questionFileName: `dist/questions/${fileName}`,
      answerFileName: `dist/answers/${fileName}`,
    };
    outputs.push(outJsonRecord);
  });
  ts.sys.writeFile(__dirname + "/../dist/metadata.json", JSON.stringify(outputs, null, 2));
}

main();
