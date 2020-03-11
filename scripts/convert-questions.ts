import ts from "typescript";
import glob from "glob";
import { TSDocParser, TextRange } from "@microsoft/tsdoc";
import { DocNode, DocExcerpt, DocFencedCode } from '@microsoft/tsdoc';
import { createParser } from "./helpers/custom-tsdoc-parser";

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
  originalContent: string;
  replacements: ts.TextChange[];
};

function parseTsFile(parser: TSDocParser, fileName: string, fileContent: string) {
  const src = ts.createSourceFile(fileName, fileContent, ts.ScriptTarget.Latest, true, fileName.endsWith("tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const descriptor: QuestionDescriptor = {
    fileName,
    originalContent: fileContent,
    replacements: [],
  };
  ts.forEachChild(src, node => {
    const commentRanges = ts.getLeadingCommentRanges(fileContent, node.getFullStart());
    if (!commentRanges) return;
    commentRanges.filter(c => c.kind === ts.SyntaxKind.MultiLineCommentTrivia).forEach(range => {
      const { docComment } = parser.parseRange(TextRange.fromStringRange(fileContent, range.pos, range.end));
      let toBeRemoved = false;
      let replacementComment = "";
      if (docComment.modifierTagSet.hasTagName("@typeQuestion")) {
        descriptor.description = Formatter.renderDocNode(docComment.summarySection).trim();
        toBeRemoved = true;
        replacementComment = descriptor.description.split('\n').map(l => '// ' + l).join('\n');
      }
      docComment.customBlocks.forEach(block => {
        if (block.blockTag.tagName === "@replaceTo") {
          toBeRemoved = true;
          for (let child of block.content.getChildNodes()) {
            if (child instanceof DocFencedCode) {
              descriptor.replacements.push({
                newText: child.code,
                span: {
                  start: node.getStart(),
                  length: node.getWidth(),
                },
              });
              break;
            }
          }
        }
      });
      if (toBeRemoved) {
        descriptor.replacements.push({
          newText: replacementComment,
          span: {
            start: range.pos,
            length: range.end - range.pos,
          },
        });
      }
    });
  });
  descriptor.replacements.sort((a, b) => b.span.start - a.span.start);
  if (descriptor.description) return descriptor;
}

function getQuersionText({ originalContent, replacements }: QuestionDescriptor) {
  for (const { newText, span: { start, length } } of replacements) {
    originalContent = originalContent.slice(0, start) + newText + originalContent.slice(start + length);
  }
  return {
    fullText: originalContent,
  };
}

function main() {
  const parser = createParser();

  const files = glob.sync("**/*.ts", { 
    nodir: true,
    cwd: __dirname + "/../questions",
  });

  files.forEach(fileName => {
    const buf = ts.sys.readFile(ts.sys.resolvePath(__dirname + "/../questions/" + fileName))!;
    const ret = parseTsFile(parser, fileName, buf);
    if (!ret) return;
    const out = getQuersionText(ret);
    ts.sys.writeFile(__dirname + "/../dist/questions/" + ret.fileName, out.fullText);
  });
}

main();
