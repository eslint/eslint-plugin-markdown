/**
 * @fileoverview Tests for fenced-code-language rule.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------

import rule from "../../src/rules/fenced-code-language.js";
import markdown from "../../src/index.js";
import { RuleTester } from "eslint";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    plugins: {
        markdown
    },
    language: "markdown/commonmark"
});

ruleTester.run("fenced-code-language", rule, {
    valid: [
        `\`\`\`js
        console.log("Hello, world!");
        \`\`\``,
        `\`\`\`javascript
        console.log("Hello, world!");
        \`\`\``,

        // indented code block
        `
    console.log("Hello, world!");
        `,
        {
            code:
                `\`\`\`js
                console.log("Hello, world!");
                \`\`\``,
            options: [{ required: ["js"] }]
        }
    ],
    invalid: [
        {
            code:
                `\`\`\`
                console.log("Hello, world!");
                \`\`\``,
            errors: [
                {
                    messageId: "missingLanguage",
                    line: 1,
                    column: 1,
                    endLine: 3,
                    endColumn: 20
                }
            ]
        },
        {
            code:
                `\`\`\`javascript
                console.log("Hello, world!");
                \`\`\``,
            options: [{ required: ["js"] }],
            errors: [
                {
                    messageId: "disallowedLanguage",
                    line: 1,
                    column: 1,
                    endLine: 3,
                    endColumn: 20
                }
            ]
        }
    ]
});
