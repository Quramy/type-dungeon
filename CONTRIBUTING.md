# How to contribute

## Create new type question

New questions as PR are welcome!

### Setup

- Fork this repository and clone it
- `$ yarn --pure-lockfile`

### Create your type question code

Create a new TypeScript file under `questions` directory and edit it. This repository has a code generator from one TypeScript file to both answer code and question code to display to user.

- You should the answer of the question as plain TypeScript code.
- You should the description of the question as TSDoc comment.
- You can hide or replace the correct statement with TSDoc directives.

For example:

```ts
import "type-dungeon";

/**
 *
 * @typeQuestion
 * Description of this question.
 * 
 * @replaceTo
 * ```
 * type SomeType = unknown;
 * ```
 *
 */
type SomeType = string;

const val: SomeType = "hoge".toUpperCase();
```

### Local build

Executing `$ yarn build` generates README.md and answer / question codes under `dist` directory.

```
- dist/
 |- answers/
  |  your-question.ts
  |  (other answer codes)
 |- questions/
  |  your-question.ts
  |  (other question codes)
 |  metadata.json
 |  README.md
- questions/
 |  your-question.ts
 |  (other question sources)
```

## TSDoc Directive reference

### `@typeQuestion`

`@typeQuestion` directive tells the code generator description of this question. 

```ts
/**
 * @typeQuestion
 *
 * Complete the type to match the following expected type condition.
 *
 */
type X = string;
```

The above code will be converted to the following question code:

```
// Complete the type to match the following expected type condition.
type X = string;
```

### `@difficulty`
Specify difficulty of the question. Choose `easy` or `medium` or `hard` (default: `medium`).

### `@replaceTo`

`@replaceTo` directive replaces statement which is located at the next line of the comment to specified fenced code block.

```ts
/**
 * @replaceTo
 *
 * ```
 * type X = any;
 * ```
 */
type X = string;
```

The above code generates the following as a question code:

```ts
type X = any;
```

And generates the following as an answer code:

```
type X = string;
```

### `@remove`

`@remove` directive is similar to `@replaceTo`. It does not replace but remove the next statement.

## Why `import "type-dugenon"` ?
Each question code should not affect to each other.
But because of TypeScript module convention, `import` or `export` is needed to be treated the file as a module, I put `import "type-dungeon` at the top of each question code.

This import declaration will be removed via question / answer code generating procedure :sunglasses:
