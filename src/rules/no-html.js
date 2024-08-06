/**
 * @fileoverview Rule to disallow HTML inside of content.
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
            description: "Disallow HTML tags."
        },

        messages: {
            disallowedElement: 'HTML element "{{name}}" is not allowed.'
        },

        schema: [
            {
                type: "object",
                properties: {
                    allowed: {
                        type: "array",
                        items: {
                            type: "string"
                        },
                        uniqueItems: true
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {

        const allowed = new Set(context.options[0]?.allowed ?? []);

        return {
            html(node) {

                // don't care about closing tags
                if (node.value.startsWith("</")) {
                    return;
                }

                // don't care about comments
                if (node.value.startsWith("<!--")) {
                    return;
                }

                const tagName = node.value.match(/<([a-zA-Z0-9]+)/u)?.[1];

                if (allowed.size === 0 || !allowed.has(tagName)) {
                    context.report({
                        loc: node.position,
                        messageId: "disallowedElement",
                        data: {
                            name: tagName
                        }
                    });
                }

            }
        };
    }
};
