/**
 * @fileoverview Rule to prevent empty links in Markdown.
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
            recommended: true,
            description: "Disallow empty links."
        },

        messages: {
            emptyLink: "Unexpected empty link found."
        }
    },

    create(context) {

        return {
            link(node) {

                if (!node.url || node.url === "#") {
                    context.report({
                        loc: node.position,
                        messageId: "emptyLink"
                    });
                }

            }
        };
    }
};
