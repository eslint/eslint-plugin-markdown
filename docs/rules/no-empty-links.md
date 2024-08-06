# no-empty-links

Disallow empty links.

## Background

Markdown syntax can make it difficult to easily see that you've forgotten to give a link a destination. This is especially true when writing prose in Markdown, in which case you may intend to create a link but leave the destination for later...and then forget to go back and add it.

## Rule Details

This rule warns when it finds links that either don't have a URL specified or have only an empty fragment (`"#"`).

Examples of incorrect code:

```markdown
[ESLint]()

[Skip to Content](#)
```

## When Not to Use It

If you aren't concerned with empty links, you can safely disable this rule.

## Prior Art

* [MD042 - no-empty-links](https://github.com/DavidAnson/markdownlint/blob/main/doc/md042.md)
