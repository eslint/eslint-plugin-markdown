/**
 * @fileoverview Tests for no-empty-links rule.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------

import rule from "../../src/rules/no-empty-links.js";
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

ruleTester.run("no-empty-links", rule, {
    valid: [
        "[foo](bar)",
        "[foo](#bar)",
        "[foo](http://bar.com)"
    ],
    invalid: [
        {
            code: "[foo]()",
            errors: [
                {
                    messageId: "emptyLink",
                    line: 1,
                    column: 1,
                    endLine: 1,
                    endColumn: 8
                }
            ]
        },
        {
            code: "[foo](#)",
            errors: [
                {
                    messageId: "emptyLink",
                    line: 1,
                    column: 1,
                    endLine: 1,
                    endColumn: 9
                }
            ]
        },
        {
            code: "[foo]( )",
            errors: [
                {
                    messageId: "emptyLink",
                    line: 1,
                    column: 1,
                    endLine: 1,
                    endColumn: 9
                }
            ]
        }
    ]
});
