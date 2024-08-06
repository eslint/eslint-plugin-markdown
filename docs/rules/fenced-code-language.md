# fenced-code-language

Require languages for fenced code blocks.

## Background

One of the ways that Markdown allows you to embed syntax-highlighted blocks of other languages is using fenced code blocks, such as:

````markdown
```js
const message = "Hello, world!";
console.log(message);
```
````

The language name is expected, but not required, after the initial three backticks. In general, it's a good idea to provide a language because that allows editors and converters to properly syntax highlight the embedded code. Even if you're just embedding plain text, it's preferable to use `text` as the language to indicate your intention.

## Rule Details

This rule warns when it finds code blocks without a language specified.

Examples of incorrect code:

````markdown
```
const message = "Hello, world!";
console.log(message);
```
````

## Options

The following options are available on this rule:

* `required: Array<string>` - when specified, fenced code blocks must use one of the languages specified in this array. 

Examples of incorrect code when configured as `"fenced-code-language: ["error", { required: ["js"]}]`:

````markdown
```javascript
const message = "Hello, world!";
console.log(message);
```
````

## When Not to Use It

If you don't mind omitting the language for fenced code blocks, you can safely disable this rule.

## Prior Art

* [MD040 - Fenced code blocks should have a language specified](https://github.com/markdownlint/markdownlint/blob/main/docs/RULES.md#md040---fenced-code-blocks-should-have-a-language-specified)
* [MD040 fenced-code-language](https://github.com/DavidAnson/markdownlint/blob/main/doc/md040.md)
