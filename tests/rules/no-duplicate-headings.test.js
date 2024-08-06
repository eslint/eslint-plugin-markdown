/**
 * @fileoverview Tests for no-duplicate-heading rule.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------

import rule from "../../src/rules/no-duplicate-headings.js";
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

ruleTester.run("no-duplicate-headings", rule, {
    valid: [
        `# Heading 1

        ## Heading 2`
    ],
    invalid: [
        {
            code: `
# Heading 1

# Heading 1
            `,
            errors: [
                {
                    messageId: "duplicateHeading",
                    line: 4,
                    column: 1,
                    endLine: 4,
                    endColumn: 12
                }
            ]
        },
        {
            code: `
# Heading 1

## Heading 1
            `,
            errors: [
                {
                    messageId: "duplicateHeading",
                    line: 4,
                    column: 1,
                    endLine: 4,
                    endColumn: 13
                }
            ]
        },
        {
            code: `
# Heading 1

Heading 1
---------
            `,
            errors: [
                {
                    messageId: "duplicateHeading",
                    line: 4,
                    column: 1,
                    endLine: 5,
                    endColumn: 10
                }
            ]
        },
        {
            code: `
# Heading 1

Heading 1
=========
            `,
            errors: [
                {
                    messageId: "duplicateHeading",
                    line: 4,
                    column: 1,
                    endLine: 5,
                    endColumn: 10
                }
            ]
        }
    ]
});
