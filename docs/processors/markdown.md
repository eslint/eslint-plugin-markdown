# Using the Markdown processor

With this processor, ESLint will lint [fenced code blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks) in your Markdown documents. This processor uses [CommonMark](https://commonmark.org) format to evaluate the Markdown code, but this shouldn't matter because all Markdown dialects use the same format for code blocks. Here are some examples:

````markdown
```js
// This gets linted
var answer = 6 * 7;
console.log(answer);
```

Here is some regular Markdown text that will be ignored.

```js
// This also gets linted

/* eslint quotes: [2, "double"] */

function hello() {
    console.log("Hello, world!");
}
hello();
```

```jsx
// This can be linted too if you add `.jsx` files to file patterns in the `eslint.config.js`.
var div = <div className="jsx"></div>;
```
````

Blocks that don't specify a syntax are ignored:

````markdown
```
This is plain text and doesn't get linted.
```
````

Unless a fenced code block's syntax appears as a file extension in file patterns in your config file, it will be ignored.

**Important:** You cannot combine this processor and Markdown-specific linting rules. You can either lint the code blocks or lint the Markdown, but not both. This is an ESLint limitation.

## Basic Configuration

To enable the Markdown processor, use the `processor` configuration, which contains all of the configuration for setting up the plugin and processor to work on `.md` files:

```js
// eslint.config.js
import markdown from "@eslint/markdown";

export default [
    ...markdown.configs.processor

    // your other configs here
];
```

## Advanced Configuration

You can manually include the Markdown processor by setting the `processor` option in your configuration file for all `.md` files.

Each fenced code block inside a Markdown document has a virtual filename appended to the Markdown file's path.

The virtual filename's extension will match the fenced code block's syntax tag, except for the following: 

* `javascript` and `ecmascript` are mapped to `js`
* `typescript` is mapped to `ts`
* `markdown` is mapped to `md`

For example, ```` ```js ```` code blocks in `README.md` would match `README.md/*.js` and ```` ```typescript ```` in `CONTRIBUTING.md` would match `CONTRIBUTING.md/*.ts`.

You can use glob patterns for these virtual filenames to customize configuration for code blocks without affecting regular code.
For more information on configuring processors, refer to the [ESLint documentation](https://eslint.org/docs/user-guide/configuring#specifying-processor).

Here's an example:

```js
// eslint.config.js
import markdown from "@eslint/markdown";

export default [
    {
        // 1. Add the plugin
        plugins: {
            markdown
        }
    },
    {
        // 2. Enable the Markdown processor for all .md files.
        files: ["**/*.md"],
        processor: "markdown/markdown"
    },
    {
        // 3. Optionally, customize the configuration ESLint uses for ```js
        // fenced code blocks inside .md files.
        files: ["**/*.md/*.js"],
        // ...
        rules: {
            // ...
        }
    }

    // your other configs here
];
```

## Frequently-Disabled Rules

Some rules that catch mistakes in regular code are less helpful in documentation.
For example, `no-undef` would flag variables that are declared outside of a code snippet because they aren't relevant to the example.
The `markdown.configs.processor` config disables these rules in Markdown files:

- [`no-undef`](https://eslint.org/docs/rules/no-undef)
- [`no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions)
- [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)
- [`padded-blocks`](https://eslint.org/docs/rules/padded-blocks)

Use glob patterns to disable more rules just for Markdown code blocks:

```js
// / eslint.config.js
import markdown from "@eslint/markdown";

export default [
    {
        plugins: {
            markdown
        }
    },
    {
        files: ["**/*.md"],
        processor: "markdown/markdown"
    },
    {
        // 1. Target ```js code blocks in .md files.
        files: ["**/*.md/*.js"],
        rules: {
            // 2. Disable other rules.
            "no-console": "off",
            "import/no-unresolved": "off"
        }
    }

    // your other configs here
];
```

## Additional Notes

Here are some other things to keep in mind when linting code blocks.

### Strict Mode

`"use strict"` directives in every code block would be annoying.
The `markdown.configs.processor` config enables the [`impliedStrict` parser option](https://eslint.org/docs/user-guide/configuring#specifying-parser-options) and disables the [`strict` rule](https://eslint.org/docs/rules/strict) in Markdown files.
This opts into strict mode parsing without repeated `"use strict"` directives.

### Unsatisfiable Rules

Markdown code blocks are not real files, so ESLint's file-format rules do not apply.
The `markdown.configs.processor` config disables these rules in Markdown files:

- [`eol-last`](https://eslint.org/docs/rules/eol-last): The Markdown parser trims trailing newlines from code blocks.
- [`unicode-bom`](https://eslint.org/docs/rules/unicode-bom): Markdown code blocks do not have Unicode Byte Order Marks.

### Autofixing

With this plugin, [ESLint's `--fix` option](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some issues in your Markdown fenced code blocks.
To enable this, pass the `--fix` flag when you run ESLint:

```bash
eslint --fix .
```

## Configuration Comments

The processor will convert HTML comments immediately preceding a code block into JavaScript block comments and insert them at the beginning of the source code that it passes to ESLint.
This permits configuring ESLint via configuration comments while keeping the configuration comments themselves hidden when the markdown is rendered.
Comment bodies are passed through unmodified, so the plugin supports any [configuration comments](http://eslint.org/docs/user-guide/configuring) supported by ESLint itself.

This example enables the `alert` global variable, disables the `no-alert` rule, and configures the `quotes` rule to prefer single quotes:

````markdown
<!-- global alert -->
<!-- eslint-disable no-alert -->
<!-- eslint quotes: ["error", "single"] -->

```js
alert('Hello, world!');
```
````

Each code block in a file is linted separately, so configuration comments apply only to the code block that immediately follows.

````markdown
Assuming `no-alert` is enabled in `eslint.config.js`, the first code block will have no error from `no-alert`:

<!-- global alert -->
<!-- eslint-disable no-alert -->

```js
alert("Hello, world!");
```

But the next code block will have an error from `no-alert`:

<!-- global alert -->

```js
alert("Hello, world!");
```
````

### Skipping Blocks

Sometimes it can be useful to have code blocks marked with `js` even though they don't contain valid JavaScript syntax, such as commented JSON blobs that need `js` syntax highlighting.
Standard `eslint-disable` comments only silence rule reporting, but ESLint still reports any syntax errors it finds.
In cases where a code block should not even be parsed, insert a non-standard `<!-- eslint-skip -->` comment before the block, and this plugin will hide the following block from ESLint.
Neither rule nor syntax errors will be reported.

````markdown
There are comments in this JSON, so we use `js` syntax for better
highlighting. Skip the block to prevent warnings about invalid syntax.

<!-- eslint-skip -->

```js
{
    // This code block is hidden from ESLint.
    "hello": "world"
}
```

```js
console.log("This code block is linted normally.");
```
````
