# ESLint Markdown Language Plugin

[![npm Version](https://img.shields.io/npm/v/@eslint/markdown.svg)](https://www.npmjs.com/package/@eslint/markdown)
[![Downloads](https://img.shields.io/npm/dm/@eslint/markdown.svg)](https://www.npmjs.com/package/@eslint/markdown)
[![Build Status](https://github.com/eslint/markdown/workflows/CI/badge.svg)](https://github.com/eslint/markdown/actions)

Lint JS, JSX, TypeScript, and more inside Markdown.

<img
    src="screenshot.png"
    height="142"
    width="432"
    alt="A JS code snippet in a Markdown editor has red squiggly underlines. A tooltip explains the problem."
/>

## Usage

### Installing

Install the plugin alongside ESLint v8 or greater:

```sh
npm install --save-dev eslint @eslint/markdown
```

### Configurations

| **Configuration Name** | **Description** |
|---------------|-----------------|
| `recommended` | Lints all `.md` files with the recommended rules and assumes [CommonMark](https://commonmark.org/) format. |
| `processor` | Enables extracting code blocks from all `.md` files so code blocks can be individually linted. |

In your `eslint.config.js` file, import `@eslint/markdown` and include the recommended config to enable the Markdown processor on all `.md` files:

```js
// eslint.config.js
import markdown from "@eslint/markdown";

export default [
    ...markdown.configs.recommended

    // your other configs here
];
```

### Rules

| **Rule Name** | **Description** |
|---------------|-----------------|
| [`fenced-code-language`](./docs/rules/fenced-code-language.md) | Enforce fenced code blocks to specify a language. |
| [`heading-increment`](./docs/rules/heading-increment.md) | Enforce heading levels increment by one. |
| [`no-duplicate-headings`](./docs/rules/no-duplicate-headings.md) | Disallow duplicate headings in the same document. |
| [`no-empty-links`](./docs/rules/no-empty-links.md) | Disallow empty links. |
| [`no-html`](./docs/rules/no-html.md) | Enforce fenced code blocks to specify a language. |
| [`no-missing-label-refs`](./docs/rules/no-missing-label-refs.md) | Disallow missing label references. |

**Note:** This plugin does not provide formatting rules. We recommend using a source code formatter such as [Prettier](https://prettier.io) for that purpose.

In order to individually configure a rule in your `eslint.config.js` file, import `@eslint/markdown` and configure each rule with a prefix:

```js
// eslint.config.js
import markdown from "@eslint/markdown";

export default [
    {
        files: ["**/*.md"],
        plugins: {
            markdown
        },
        rules: {
            "markdown/no-html": "error"
        }
    }
];
```

### Languages

| **Language Name** | **Description** |
|---------------|-----------------|
| `commonmark` | Parse using [CommonMark](https://commonmark.org) Markdown format | 
| `gfm` | Parse using [GitHub-Flavored Markdown](https://github.github.com/gfm/) format | 


In order to individually configure a language in your `eslint.config.js` file, import `@eslint/markdown` and configure a `language`:

```js
// eslint.config.js
import markdown from "@eslint/markdown";

export default [
    {
        files: ["**/*.md"],
        plugins: {
            markdown
        },
        language: "markdown/gfm",
        rules: {
            "markdown/no-html": "error"
        }
    }
];
```

### Processors

| **Processor Name** | **Description** |
|---------------|-----------------|
| [`markdown`](./docs/processors/markdown.md) | Extract fenced code blocks from the Markdown code so they can be linted separately. | 

## Editor Integrations

### VSCode

[`vscode-eslint`](https://github.com/microsoft/vscode-eslint) has built-in support for the Markdown processor.

### Atom

The [`linter-eslint`](https://atom.io/packages/linter-eslint) package allows for linting within the [Atom IDE](https://atom.io/).

In order to see `@eslint/markdown` work its magic within Markdown code blocks in your Atom editor, you can go to `linter-eslint`'s settings and within "List of scopes to run ESLint on...", add the cursor scope "source.gfm".

However, this reports a problem when viewing Markdown which does not have configuration, so you may wish to use the cursor scope "source.embedded.js", but note that `@eslint/markdown` configuration comments and skip directives won't work in this context.

## Contributing

```sh
$ git clone https://github.com/eslint/markdown.git
$ cd markdown
$ npm install
$ npm test
```

This project follows the [ESLint contribution guidelines](https://eslint.org/docs/latest/contribute/).
