/**
 * @fileoverview The MarkdownSourceCode class.
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// Types
//-----------------------------------------------------------------------------

/** @typedef {import("mdast").Root} RootNode */
/** @typedef {import("mdast").Node} MarkdownNode */
/** @typedef {import("@eslint/core").Language} Language */
/** @typedef {import("@eslint/core").File} File */
/** @typedef {import("@eslint/core").TraversalStep} TraversalStep */
/** @typedef {import("@eslint/core").VisitTraversalStep} VisitTraversalStep */
/** @typedef {import("@eslint/core").TextSourceCode} TextSourceCode */
/** @typedef {import("@eslint/core").ParseResult<RootNode>} ParseResult */
/** @typedef {import("@eslint/core").SourceLocation} SourceLocation */
/** @typedef {import("@eslint/core").SourceRange} SourceRange */

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

/**
 * A class to represent a step in the traversal process.
 * @implements {VisitTraversalStep}
 */
class MarkdownTraversalStep {

    /**
     * The type of the step.
     * @type {"visit"}
     * @readonly
     */
    type = "visit";

    /**
     * The kind of the step. Represents the same data as the `type` property
     * but it's a number for performance.
     * @type {1}
     * @readonly
     */
    kind = 1;

    /**
     * The target of the step.
     * @type {MarkdownNode}
     */
    target;

    /**
     * The phase of the step.
     * @type {1|2}
     */
    phase;

    /**
     * The arguments of the step.
     * @type {Array<any>}
     */
    args;

    /**
     * Creates a new instance.
     * @param {Object} options The options for the step.
     * @param {MarkdownNode} options.target The target of the step.
     * @param {1|2} options.phase The phase of the step.
     * @param {Array<any>} options.args The arguments of the step.
     */
    constructor({ target, phase, args }) {
        this.target = target;
        this.phase = phase;
        this.args = args;
    }
}

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * JSON Source Code Object
 * @implements {TextSourceCode}
 */
export class MarkdownSourceCode {

    /**
     * Cached traversal steps.
     * @type {Array<MarkdownTraversalStep>|undefined}
     */
    #steps;

    /**
     * Cache of parent nodes.
     * @type {WeakMap<MarkdownNode, MarkdownNode>}
     */
    #parents = new WeakMap();

    /**
     * The lines of text in the source code.
     * @type {Array<string>}
     */
    #lines;

    /**
     * Cache of ranges.
     * @type {WeakMap<MarkdownNode, SourceRange>}
     */
    #ranges = new WeakMap();

    /**
     * The AST of the source code.
     * @type {RootNode}
     */
    ast;

    /**
     * The text of the source code.
     * @type {string}
     */
    text;

    /**
     * Creates a new instance.
     * @param {Object} options The options for the instance.
     * @param {string} options.text The source code text.
     * @param {RootNode} options.ast The root AST node.
     */
    constructor({ text, ast }) {
        this.ast = ast;
        this.text = text;
    }

    /* eslint-disable class-methods-use-this -- Required to complete interface. */
    /**
     * Gets the location of the node.
     * @param {MarkdownNode} node The node to get the location of.
     * @returns {SourceLocation} The location of the node.
     */
    getLoc(node) {
        return node.position;
    }

    /**
     * Gets the range of the node.
     * @param {MarkdownNode} node The node to get the range of.
     * @returns {SourceRange} The range of the node.
     */
    getRange(node) {

        if (!this.#ranges.has(node)) {
            this.#ranges.set(node, [node.position.start.offset, node.position.end.offset]);
        }

        return this.#ranges.get(node);
    }

    /* eslint-enable class-methods-use-this -- Required to complete interface. */

    /**
     * Returns the parent of the given node.
     * @param {MarkdownNode} node The node to get the parent of.
     * @returns {MarkdownNode|undefined} The parent of the node.
     */
    getParent(node) {
        return this.#parents.get(node);
    }

    /**
     * Gets all the ancestors of a given node
     * @param {MarkdownNode} node The node
     * @returns {Array<MarkdownNode>} All the ancestor nodes in the AST, not including the provided node, starting
     * from the root node at index 0 and going inwards to the parent node.
     * @throws {TypeError} When `node` is missing.
     */
    getAncestors(node) {
        if (!node) {
            throw new TypeError("Missing required argument: node.");
        }

        const ancestorsStartingAtParent = [];

        for (
            let ancestor = this.#parents.get(node);
            ancestor;
            ancestor = this.#parents.get(ancestor)
        ) {
            ancestorsStartingAtParent.push(ancestor);
        }

        return ancestorsStartingAtParent.reverse();
    }

    /**
     * Gets the source code for the given node.
     * @param {MarkdownNode} [node] The AST node to get the text for.
     * @param {number} [beforeCount] The number of characters before the node to retrieve.
     * @param {number} [afterCount] The number of characters after the node to retrieve.
     * @returns {string} The text representing the AST node.
     * @public
     */
    getText(node, beforeCount = 0, afterCount = 0) {
        if (node) {
            const range = this.getRange(node);

            return this.text.slice(
                Math.max(range[0] - beforeCount, 0),
                range[1] + afterCount
            );
        }
        return this.text;
    }

    /**
     * Gets the entire source text split into an array of lines.
     * @returns {Array} The source text as an array of lines.
     * @public
     */
    get lines() {
        if (!this.#lines) {
            this.#lines = this.text.split(/\r?\n/gu);
        }
        return this.#lines;
    }

    /**
     * Traverse the source code and return the steps that were taken.
     * @returns {Iterable<TraversalStep>} The steps that were taken while traversing the source code.
     */
    traverse() {

        // Because the AST doesn't mutate, we can cache the steps
        if (this.#steps) {
            return this.#steps.values();
        }

        const steps = (this.#steps = []);

        const visit = (node, parent) => {

            // first set the parent
            this.#parents.set(node, parent);

            // then add the step
            steps.push(
                new MarkdownTraversalStep({
                    target: node,
                    phase: 1,
                    args: [node, parent]
                })
            );

            // then visit the children
            if (node.children) {
                node.children.forEach(child => {
                    visit(child, node);
                });
            }

            // then add the exit step
            steps.push(
                new MarkdownTraversalStep({
                    target: node,
                    phase: 2,
                    args: [node, parent]
                })
            );
        };

        visit(this.ast);

        return steps;
    }
}
