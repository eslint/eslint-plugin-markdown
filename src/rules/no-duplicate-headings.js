/**
 * @fileoverview Rule to prevent duplicate headings in Markdown.
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Type Definitions
//-----------------------------------------------------------------------------

/** @typedef {import("eslint").Rule.RuleModule} RuleModule */

//-----------------------------------------------------------------------------
// Rule Definition
//-----------------------------------------------------------------------------

/** @type {RuleModule} */
export default {
    meta: {
        type: "problem",

        docs: {
            description: "Disallow duplicate headings in the same document."
        },

        messages: {
            duplicateHeading: 'Duplicate heading "{{text}}" found.'
        }
    },

    create(context) {
        const headings = new Set();
        const { sourceCode } = context;

        return {
            heading(node) {

                /*
                 * There are two types of headings in markdown:
                    * - ATX headings, which start with one or more # characters
                    * - Setext headings, which are underlined with = or -
                 * Setext headings are identified by being on two lines instead of one,
                 * with the second line containing only = or - characters. In order to
                 * get the correct heading text, we need to determine which type of
                 * heading we're dealing with.
                 */
                const isSetext = node.position.start.line !== node.position.end.line;

                const text = isSetext

                    // get only the text from the first line
                    ? sourceCode.lines[node.position.start.line - 1].trim()

                    // get the text without the leading # characters
                    : sourceCode.getText(node).slice(node.depth + 1).trim();

                if (headings.has(text)) {
                    context.report({
                        loc: node.position,
                        messageId: "duplicateHeading",
                        data: {
                            text
                        }
                    });
                }

                headings.add(text);
            }
        };
    }
};
