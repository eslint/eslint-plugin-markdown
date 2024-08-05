/**
 * @fileoverview Enables the processor for Markdown file extensions.
 * @author Brandon Mills
 */

//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------

import { processor } from "./processor.js";

//-----------------------------------------------------------------------------
// Type Definitions
//-----------------------------------------------------------------------------

/** @typedef {import("eslint").Linter.RulesRecord} RulesRecord*/
/** @typedef {import("eslint").ESLint.Plugin} Plugin */

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/** @type {RulesRecord} */
const rulesConfig = {

    // The Markdown parser automatically trims trailing
    // newlines from code blocks.
    "eol-last": "off",

    // In code snippets and examples, these rules are often
    // counterproductive to clarity and brevity.
    "no-undef": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "padded-blocks": "off",

    // Adding a "use strict" directive at the top of every
    // code block is tedious and distracting. The config
    // opts into strict mode parsing without the directive.
    strict: "off",

    // The processor will not receive a Unicode Byte Order
    // Mark from the Markdown parser.
    "unicode-bom": "off"
};

/** @type {Plugin} */
const plugin = {
    meta: {
        name: "@eslint/markdown",
        version: "6.0.0" // x-release-please-version
    },
    processors: {
        markdown: processor
    },
    configs: {
        "recommended-legacy": {
            plugins: ["markdown"],
            overrides: [
                {
                    files: ["*.md"],
                    processor: "markdown/markdown"
                },
                {
                    files: ["**/*.md/**"],
                    parserOptions: {
                        ecmaFeatures: {

                            // Adding a "use strict" directive at the top of
                            // every code block is tedious and distracting, so
                            // opt into strict mode parsing without the
                            // directive.
                            impliedStrict: true
                        }
                    },
                    rules: {
                        ...rulesConfig
                    }
                }
            ]
        }
    }
};

plugin.configs.recommended = [
    {
        name: "markdown/recommended/plugin",
        plugins: {
            markdown: plugin
        }
    },
    {
        name: "markdown/recommended/processor",
        files: ["**/*.md"],
        processor: "markdown/markdown"
    },
    {
        name: "markdown/recommended/code-blocks",
        files: ["**/*.md/**"],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {

                    // Adding a "use strict" directive at the top of
                    // every code block is tedious and distracting, so
                    // opt into strict mode parsing without the
                    // directive.
                    impliedStrict: true
                }
            }
        },
        rules: {
            ...rulesConfig
        }
    }
];

export default plugin;
