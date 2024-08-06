
import js from "@eslint/js";
import markdown from "../../src/index.js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";

export default [
    js.configs.recommended,
    ...markdown.configs.processor,
    reactPlugin.configs.flat.recommended,
    {
        settings: {
            react: {
                version: "16.8.0"
            }
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            ecmaVersion: 2015,
            sourceType: "module",
            globals: globals.browser
        }
    },
    {
        files: ["**/*.md/*.jsx"],
        languageOptions: {
            globals: {
                React: false
            }
        }
    }
];
