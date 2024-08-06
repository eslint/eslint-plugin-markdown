/**
 * @fileoverview Tests for no-missing-label-refs rule.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------

import rule from "../../src/rules/no-missing-label-refs.js";
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

ruleTester.run("no-missing-label-refs", rule, {
    valid: [
        "[*foo*]",
        "[foo]\n\n[foo]: http://bar.com",
        "[foo][foo]\n\n[foo]: http://bar.com",
        "![foo][foo]\n\n[foo]: http://bar.com/image.jpg",
        "[foo][]\n\n[foo]: http://bar.com/image.jpg",
        "![foo][]\n\n[foo]: http://bar.com/image.jpg"
    ],
    invalid: [
        {
            code: "[foo][bar]",
            errors: [
                {
                    messageId: "notFound",
                    data: { label: "bar" },
                    line: 1,
                    column: 7,
                    endLine: 1,
                    endColumn: 10
                }
            ]
        },
        {
            code: "![foo][bar]",
            errors: [
                {
                    messageId: "notFound",
                    data: { label: "bar" },
                    line: 1,
                    column: 8,
                    endLine: 1,
                    endColumn: 11
                }
            ]
        },
        {
            code: "[foo][]",
            errors: [
                {
                    messageId: "notFound",
                    data: { label: "foo" },
                    line: 1,
                    column: 2,
                    endLine: 1,
                    endColumn: 5
                }
            ]
        },
        {
            code: "![foo][]",
            errors: [
                {
                    messageId: "notFound",
                    data: { label: "foo" },
                    line: 1,
                    column: 3,
                    endLine: 1,
                    endColumn: 6
                }
            ]
        },
        {
            code: "[foo]",
            errors: [
                {
                    messageId: "notFound",
                    data: { label: "foo" },
                    line: 1,
                    column: 2,
                    endLine: 1,
                    endColumn: 5
                }
            ]
        },
        {
            code: "![foo]",
            errors: [
                {
                    messageId: "notFound",
                    data: { label: "foo" },
                    line: 1,
                    column: 3,
                    endLine: 1,
                    endColumn: 6
                }
            ]
        },
        {
            code: "[foo]\n[bar]",
            errors: [
                {
                    messageId: "notFound",
                    data: { label: "foo" },
                    line: 1,
                    column: 2,
                    endLine: 1,
                    endColumn: 5
                },
                {
                    messageId: "notFound",
                    data: { label: "bar" },
                    line: 2,
                    column: 2,
                    endLine: 2,
                    endColumn: 5
                }
            ]
        }
    ]
});
