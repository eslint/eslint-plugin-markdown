/**
 * @fileoverview Rule to prevent missing label references in Markdown.
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Type Definitions
//-----------------------------------------------------------------------------

/** @typedef {import("unist").Position} Position */
/** @typedef {import("mdast").Text} TextNode */
/** @typedef {import("eslint").Rule.RuleModule} RuleModule */

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

const labelPatterns = [

    // [foo][bar]
    /\]\[([^\]]+)\]/u,

    // [foo][]
    /(\]\[\])/u,

    // [foo]
    /\[([^\]]+)\]/u
];

/**
 * Finds the line and column offsets for a given start offset in a string.
 * @param {string} text The text to search.
 * @param {number} startOffset The offset to find.
 * @returns {{lineOffset:number,columnOffset:number}} The location of the offset.
 */
function findOffsets(text, startOffset) {

    let lineOffset = 0;
    let columnOffset = 0;

    for (let i = 0; i < startOffset; i++) {
        if (text[i] === "\n") {
            lineOffset++;
            columnOffset = 0;
        } else {
            columnOffset++;
        }
    }

    return {
        lineOffset,
        columnOffset
    };
}

/**
 * Finds missing references in a node.
 * @param {TextNode} node The node to check.
 * @param {string} text The text of the node.
 * @returns {Array<{label:string,position:Position}>} The missing references.
 */
function findMissingReferences(node, text) {

    const missing = [];
    let startIndex = 0;

    while (startIndex < node.value.length) {

        const value = node.value.slice(startIndex);

        const match = labelPatterns.reduce((previous, pattern) => {
            if (previous) {
                return previous;
            }

            return value.match(pattern);
        }, null);

        // check for array instead of null to appease TypeScript
        if (!Array.isArray(match)) {
            break;
        }

        let label = match[1];
        let columnStart = startIndex + match.index + 1;

        // need to look backward to get the label
        if (match[0] === "][]") {

            // adding 1 to the index just in case we're in a ![] and need to skip the !.
            const startFrom = node.position.start.offset + startIndex + 1;
            const lastOpenBracket = text.lastIndexOf("[", startFrom);

            if (lastOpenBracket === -1) {
                startIndex += match.index + match[0].length;
                continue;
            }

            label = text.slice(lastOpenBracket, match.index + match[0].length).match(/!?\[([^\]]+)\]/u)?.[1];
            columnStart -= label.length;
        } else if (match[0].startsWith("]")) {
            columnStart += 2;
        } else {
            columnStart += 1;
        }

        const {
            lineOffset,
            columnOffset
        } = findOffsets(node.value, columnStart);

        const line = node.position.start.line + lineOffset;

        missing.push({
            label,
            position: {
                start: {
                    line,
                    column: columnOffset
                },
                end: {
                    line,
                    column: columnOffset + label.length
                }
            }
        });

        startIndex += match.index + match[0].length;
    }

    return missing;

}

//-----------------------------------------------------------------------------
// Rule Definition
//-----------------------------------------------------------------------------

/** @type {RuleModule} */
export default {
    meta: {
        type: "problem",

        docs: {
            recommended: true,
            description: "Disallow missing label references."
        },

        messages: {
            notFound: "Label reference '{{label}}' not found."
        }
    },

    create(context) {

        const { sourceCode } = context;

        return {
            text(node) {

                const missingReferences = findMissingReferences(node, sourceCode.text);

                for (const missingReference of missingReferences) {
                    context.report({
                        loc: missingReference.position,
                        messageId: "notFound",
                        data: {
                            label: missingReference.label
                        }
                    });
                }
            }
        };
    }
};
