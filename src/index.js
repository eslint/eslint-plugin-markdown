/**
 * @fileoverview Enables the processor for Markdown file extensions.
 * @author Brandon Mills
 */

//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------

import { processor } from "./processor.js";
import { MarkdownLanguage } from "./language/markdown-language.js";
import recommendedRules from "./build/recommended-config.js";
import rules from "./build/rules.js";

//-----------------------------------------------------------------------------
// Type Definitions
//-----------------------------------------------------------------------------

/** @typedef {import("eslint").Linter.RulesRecord} RulesRecord*/
/** @typedef {import("eslint").Linter.Config} Config*/
/** @typedef {import("eslint").ESLint.Plugin} Plugin */
/** @typedef {import("eslint").Rule.RuleModule} RuleModule */
/** @typedef {import("@eslint/core").Language} Language */

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/** @type {RulesRecord} */
const processorRulesConfig = {

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

/** @type {Plugin & { languages: Record<string,Language>}} */
const plugin = {
    meta: {
        name: "@eslint/markdown",
        version: "5.1.0" // x-release-please-version
    },
    processors: {
        markdown: processor
    },
    languages: {
        commonmark: new MarkdownLanguage({ mode: "commonmark" }),
        gfm: new MarkdownLanguage({ mode: "gfm" })
    },
    rules,
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
                        ...processorRulesConfig
                    }
                }
            ]
        }
    }
};

plugin.configs.recommended = [

    /** @type {Config & {language:string}} */
    ({
        name: "markdown/recommended",
        files: ["**/*.md"],
        language: "markdown/commonmark",
        plugins: {
            markdown: plugin
        },
        rules: /** @type {RulesRecord} */ (recommendedRules)
    })
];

plugin.configs.processor = [
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
            ...processorRulesConfig
        }
    }
];

export default plugin;
