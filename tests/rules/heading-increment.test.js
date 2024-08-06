/**
 * @fileoverview Tests for heading-increment rule.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------

import rule from "../../src/rules/heading-increment.js";
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

ruleTester.run("heading-increment", rule, {
    valid: [
        "# Heading 1",
        "## Heading 2",
        dedent`# Heading 1

        ## Heading 2`,
        dedent`# Heading 1

        # Heading 2`
    ],
    invalid: [
        {
            code: dedent`
                # Heading 1

                ### Heading 3
            `,
            errors: [
                {
                    messageId: "skippedHeading",
                    line: 3,
                    column: 1,
                    endLine: 3,
                    endColumn: 14,
                    data: {
                        fromLevel: 1,
                        toLevel: 3
                    }
                }
            ]
        },
        {
            code: dedent`
                ## Heading 2

                ##### Heading 5
            `,
            errors: [
                {
                    messageId: "skippedHeading",
                    line: 3,
                    column: 1,
                    endLine: 3,
                    endColumn: 16,
                    data: {
                        fromLevel: 2,
                        toLevel: 5
                    }
                }
            ]
        },
        {
            code: dedent`
                Heading 1
                =========

                ### Heading 3
            `,
            errors: [
                {
                    messageId: "skippedHeading",
                    line: 4,
                    column: 1,
                    endLine: 4,
                    endColumn: 14,
                    data: {
                        fromLevel: 1,
                        toLevel: 3
                    }
                }
            ]
        }
    ]
});
