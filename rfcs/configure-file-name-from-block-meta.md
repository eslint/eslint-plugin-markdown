# RFC: Configuring File Name from Block Meta

## Summary

Allowing code blocks to change the `filename` used in `eslint-plugin-markdown`'s processor using codeblock `meta` text.

## Motivation

Some projects use ESLint `overrides` to run different lint rules on files based on their file name.
There's no way to respect file name based `overrides` in parsed Markdown blocks right now using `eslint-plugin-markdown`'s parsing.
This RFC would allow code blocks to specify a custom file name so that `overrides` can be used more idiomatically.

### Real-World Example

In [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app), `*.json` files _except_ `package.json` files have [`jsonc/sort-keys`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html) enabled using [an ESLint config file `overrides`](https://github.com/JoshuaKGoldberg/create-typescript-app/blob/76a75186fd89fc3f66e4c1254c717c28d70afe0d/.eslintrc.cjs#L94).
However, a code block in a file named `docs/FAQs.md` intended to be a `package.json` is currently given a name like `create-typescript-app/docs/FAQs.md/0_0.jsonc`.
Short of hardcoding overrides or disabling the lint rule in the file, there is no way to have the `overrides` apply to the markdown code block.

## Detailed Design

This RFC proposes that code blocks be allowed to specify a file path in `meta` with `filename="..."`.
Doing so would replace the `filename` provided by `eslint-plugin-markdown`'s `preprocess` method.

````md
```json filename="package.json"
{}
```
````

Parsing would be handled by a regular expression similar to the [Docusaurus parser](https://github.com/facebook/docusaurus/blob/7650829e913ec4bb1263d855719779f6b97066b6/packages/docusaurus-theme-common/src/utils/codeBlockUtils.ts#L12).
The `title` meta prop name is intentionally the same as Docusaurus, so projects can use the same attribute for Docusaurus and ESLint.

Parsed language is ignored when the codeblock provides a custom title.
Some languages have many file extensions, such as TypeScript's `.cts`, `.ts`, `.tsx`, etc.
Some extensions may map to multiple languages, such as Perl and Prolog both using `.pl`.

Roughly:

```diff
- filename: `${index}.${block.lang.trim().split(" ")[0]}`,
+ filename: titleFromMeta(block) ?? `${index}.${block.lang.trim().split(" ")[0]}`,
```

### Name Uniqueness

Codeblocks must have unique file paths for ESLint processing.
If a codeblock has the same file path as a previously processed codeblock, it will have a sequentially increasing number appended before their extensions.
For example, given three blocks with the same name, would in order become:

-   `example`: `example`, `example-1`, `example-2`
-   `example.js`: `example.js`, `example-1.js`, `example-2.js`
-   `example.test.ts`: `example.test.ts`, `example-1.test.ts`, `example-2.test.ts`

Alternately, if multiple code blocks require the same _file_ name, developers can give different _directory paths_ to ensure uniqueness:

````md
```json filename="example-1/package.json"
{}
```

```json filename="example-2/package.json"
{}
```
````

### Parsing Meta

There is no unified standard in the ecosystem for parsing codeblock metadata in Markdown.
The syntax has roughly converged on the syntax looking like <code>\`\`\`lang key="value"</code>, and to a lesser extent, using `filename` as the prop name.

-   [Docusaurus's `codeBlockTitleRegex`](https://github.com/facebook/docusaurus/blob/7650829e913ec4bb1263d855719779f6b97066b6/packages/docusaurus-theme-common/src/utils/codeBlockUtils.ts#L12): only supports a [code title prop](https://mdxjs.com/guides/syntax-highlighting/#syntax-highlighting-with-the-meta-field) like <code>\`\`\`jsx title="/src/components/HelloCodeTitle.js"</code>
-   Gatsby plugins such as [`gatsby-remark-prismjs`](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs) rely on a syntax like <code>\`\`\`javascript{numberLines: true}`</code>.
    -   Separately, [`gatsby-remark-code-titles`](https://www.gatsbyjs.com/plugins/gatsby-remark-code-titles) allows a syntax like <code>\`\`\`js:title=example-file.js</code>.
-   [`rehype-mdx-code-props`](https://github.com/remcohaszing/rehype-mdx-code-props): generally handles parsing of the raw `meta` text from the rehype AST.
    It specifies syntax like <code>\`\`\`js copy filename="awesome.js"</code>, with a suggestion of `filename` for just the file's name.
    -   [`remark-mdx-code-meta`](https://github.com/remcohaszing/remark-mdx-code-meta) is [referenced in the mdxjs.com `meta` docs](https://mdxjs.com/guides/syntax-highlighting/#syntax-highlighting-with-the-meta-field), but was deprecated with a notice to use `rehype-mdx-code-props` instead.
        It also specified syntax like <code>\`\`\`js copy filename="awesome.js" onUsage={props.beAwesome} {...props}</code>.
-   [`remark-fenced-props`](https://github.com/shawnbot/remark-fenced-props): A proof-of-concept that augments Remark's codeblock parsing with arbitrary MDX props, written to support [mdx-js/mdx/issues/702](https://github.com/mdx-js/mdx/issues/702).
    It only specifies syntax like <code>\`\`\`jsx live style={{border: '1px solid red'}}</code>

This RFC chooses `filename` over alternatives such as `title`.
`filename` appears to be the closest to a "popular" choice in existing projects today.

## Related Discussions

See #226 for the original issue.
This RFC is intended to contain a superset of all information discussed there.
