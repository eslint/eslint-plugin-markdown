/**
 * @fileoverview Tests for no-html rule.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------

import rule from "../../src/rules/no-html.js";
import markdown from "../../src/index.js";
import { RuleTester } from "eslint";
import dedent from "dedent";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    plugins: {
        markdown
    },
    language: "markdown/commonmark"
});

ruleTester.run("no-html", rule, {
    valid: [
        "Hello world!",
        " 1 < 5",
        "<!-- comment -->",
        dedent`\`\`\`html
        <b>Hello world!</b>
        \`\`\``,
        {
            code: "<b>Hello world!</b>",
            options: [{ allowed: ["b"] }]
        }
    ],
    invalid: [
        {
            code: "<b>Hello world!</b>",
            errors: [
                {
                    messageId: "disallowedElement",
                    line: 1,
                    column: 1,
                    endLine: 1,
                    endColumn: 4,
                    data: {
                        name: "b"
                    }
                }
            ]
        },
        {
            code: "<b>Hello world!</b>",
            options: [{ allowed: ["em"] }],
            errors: [
                {
                    messageId: "disallowedElement",
                    line: 1,
                    column: 1,
                    endLine: 1,
                    endColumn: 4,
                    data: {
                        name: "b"
                    }
                }
            ]
        }
    ]
});
