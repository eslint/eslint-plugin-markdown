/**
 * @fileoverview Functions to fix up rules to provide missing methods on the `context` object.
 * @author Nicholas C. Zakas
 */

/* eslint class-methods-use-this: 0 -- Required to complete interface. */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------

import { MarkdownSourceCode } from "./markdown-source-code.js";
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { gfm } from "micromark-extension-gfm";

//-----------------------------------------------------------------------------
// Types
//-----------------------------------------------------------------------------

/** @typedef {import("mdast").Root} RootNode */
/** @typedef {import("@eslint/core").Language} Language */
/** @typedef {import("@eslint/core").File} File */
/** @typedef {import("@eslint/core").ParseResult<RootNode>} ParseResult */
/** @typedef {import("@eslint/core").OkParseResult<RootNode>} OkParseResult */
/** @typedef {import("@eslint/core").SyntaxElement} SyntaxElement */
/** @typedef {"commonmark"|"gfm"} ParserMode */

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Markdown Language Object
 * @implements {Language}
 */
export class MarkdownLanguage {

    /**
     * The type of file to read.
     * @type {"text"}
     */
    fileType = "text";

    /**
     * The line number at which the parser starts counting.
     * @type {0|1}
     */
    lineStart = 1;

    /**
     * The column number at which the parser starts counting.
     * @type {0|1}
     */
    columnStart = 1;

    /**
     * The name of the key that holds the type of the node.
     * @type {string}
     */
    nodeTypeKey = "type";


    /**
     * The Markdown parser mode.
     * @type {ParserMode}
     */
    #mode = "commonmark";

    /**
     * Creates a new instance.
     * @param {Object} options The options to use for this instance.
     * @param {ParserMode} [options.mode] The Markdown parser mode to use.
     */
    constructor({ mode } = {}) {
        if (mode) {
            this.#mode = mode;
        }
    }

    /* eslint-disable no-unused-vars -- Required to complete interface. */
    /**
     * Validates the language options.
     * @param {Object} languageOptions The language options to validate.
     * @returns {void}
     * @throws {Error} When the language options are invalid.
     */
    validateLanguageOptions(languageOptions) {

        // no-op
    }
    /* eslint-enable no-unused-vars -- Required to complete interface. */

    /**
     * Parses the given file into an AST.
     * @param {File} file The virtual file to parse.
     * @returns {ParseResult} The result of parsing.
     */
    parse(file) {

        // Note: BOM already removed
        const text = /** @type {string} */ (file.body);

        /*
         * Check for parsing errors first. If there's a parsing error, nothing
         * else can happen. However, a parsing error does not throw an error
         * from this method - it's just considered a fatal error message, a
         * problem that ESLint identified just like any other.
         */
        try {
            const options = this.#mode === "gfm" ? {
                extensions: [gfm()],
                mdastExtensions: [gfmFromMarkdown()]
            } : { extensions: [] };
            const root = fromMarkdown(text, options);

            return {
                ok: true,
                ast: root
            };

        } catch (ex) {

            return {
                ok: false,
                errors: [
                    ex
                ]
            };
        }
    }

    /**
     * Creates a new `JSONSourceCode` object from the given information.
     * @param {File} file The virtual file to create a `JSONSourceCode` object from.
     * @param {OkParseResult} parseResult The result returned from `parse()`.
     * @returns {MarkdownSourceCode} The new `JSONSourceCode` object.
     */
    createSourceCode(file, parseResult) {
        return new MarkdownSourceCode({
            text: /** @type {string} */ (file.body),
            ast: parseResult.ast
        });
    }
}
