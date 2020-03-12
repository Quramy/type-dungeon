import fs from "fs";
import path from "path";
import lzstring from "lz-string";
import toc from "markdown-toc";
import { Output } from "./types";

const toPlaygroundLink = (code: string) => {
  const compressed = lzstring.compressToEncodedURIComponent(code);
  return `https://www.typescriptlang.org/v2/play?#code/${compressed}`;
};

const createHeading1 = () => {
  return `<!-- This is a generated file. Don't touch directly! -->

# Type Dungeon
TypeScript code exercise.

<!-- toc -->
<!-- tocstop -->

## Exercise
  `;
};

const createSection = (data: Output) => {
  const qBuf = fs.readFileSync(path.resolve(__dirname, "..", data.questionFileName), "utf8");
  const aBuf = fs.readFileSync(path.resolve(__dirname, "..", data.answerFileName), "utf8");
  const compressedQuestionCode = lzstring.compressToEncodedURIComponent(qBuf);
  return `
### ${data.name}

Difficulty: \`${data.difficultyStr}\` .

Play this with <a href="${toPlaygroundLink(qBuf)}" target="_blank">TypeScript playground</a> !

\`\`\`typescript
${qBuf}\`\`\`

<a href="${toPlaygroundLink(aBuf)}" target="_blank">
  Check out the answer.
</a>
  `;
};

const createFooter = () => {
  return `
## LICENSE
MIT
  `;
}

function main() {
  let outputString = "";
  const metadata = require("../dist/metadata.json") as Output[];
  metadata.sort((a, b) => a.difficulty - b.difficulty);

  outputString += createHeading1();

  metadata.forEach(data => {
    outputString += createSection(data);
  });

  outputString += createFooter();

  fs.writeFileSync(path.resolve(__dirname, "../dist/README.md"), toc.insert(outputString), "utf8");
}

main();
