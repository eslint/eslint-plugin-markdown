/**
 * @fileoverview Tests for MarkdownSourceCode.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------

import assert from "node:assert";
import { MarkdownSourceCode } from "../../src/language/markdown-source-code.js";
import { fromMarkdown } from "mdast-util-from-markdown";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const markdownText = `# Hello, world!

This is a paragraph.

\`\`\`js
console.log("Hello, world!");
\`\`\`

## This is a heading level 2

This is *another* paragraph.`;

const ast = fromMarkdown(markdownText);

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("MarkdownSourceCode", () => {

    let sourceCode;

    beforeEach(() => {
        sourceCode = new MarkdownSourceCode({ text: markdownText, ast });
    });

    describe("getText()", () => {
        it("should return the text of the Markdown source code", () => {
            assert.strictEqual(sourceCode.getText(), markdownText);
        });

        it("should return just the text of the first paragraph", () => {
            assert.strictEqual(sourceCode.getText(ast.children[1]), "This is a paragraph.");
        });

        it("should return the text of the code block plus the ## of the following heading", () => {
            assert.strictEqual(sourceCode.getText(ast.children[2], 0, 4), "```js\nconsole.log(\"Hello, world!\");\n```\n\n##");
        });
    });

    describe("getLoc()", () => {

        it("should return the location of a node", () => {
            assert.deepStrictEqual(sourceCode.getLoc(ast.children[0]), ast.children[0].position);
        });

    });

    describe("getRange()", () => {

        it("should return the range of a node", () => {
            assert.deepStrictEqual(sourceCode.getRange(ast.children[0]), [ast.children[0].position.start.offset, ast.children[0].position.end.offset]);
        });

    });

    describe("traverse()", () => {

        it("should traverse the AST", () => {

            const steps = sourceCode.traverse();
            const stepsArray = Array.from(steps).map(step => [step.phase, step.target.type, step.target.value]);

            assert.deepStrictEqual(stepsArray, [
                [1, "root", void 0],
                [1, "heading", void 0],
                [1, "text", "Hello, world!"],
                [2, "text", "Hello, world!"],
                [2, "heading", void 0],
                [1, "paragraph", void 0],
                [1, "text", "This is a paragraph."],
                [2, "text", "This is a paragraph."],
                [2, "paragraph", void 0],
                [1, "code", "console.log(\"Hello, world!\");"],
                [2, "code", "console.log(\"Hello, world!\");"],
                [1, "heading", void 0],
                [1, "text", "This is a heading level 2"],
                [2, "text", "This is a heading level 2"],
                [2, "heading", void 0],
                [1, "paragraph", void 0],
                [1, "text", "This is "],
                [2, "text", "This is "],
                [1, "emphasis", void 0],
                [1, "text", "another"],
                [2, "text", "another"],
                [2, "emphasis", void 0],
                [1, "text", " paragraph."],
                [2, "text", " paragraph."],
                [2, "paragraph", void 0],
                [2, "root", void 0]
            ]);
        });

    });

});
