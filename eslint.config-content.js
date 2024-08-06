import markdown from "./src/index.js";

export default [
    {
        name: "markdown/content/ignores",
        ignores: ["**/*.js", "**/.cjs", "**/.mjs"]
    },
    ...markdown.configs.recommended
];
