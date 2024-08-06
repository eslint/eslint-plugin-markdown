/**
 * @fileoverview Generates the recommended configuration and import file for rules.
 *
 * Usage:
 *  node tools/build-rules.js
 *
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

//-----------------------------------------------------------------------------
// Main
//-----------------------------------------------------------------------------

const thisDir = path.dirname(fileURLToPath(import.meta.url));
const rulesPath = path.resolve(thisDir, "../src/rules");
const rules = fs.readdirSync(rulesPath);
const recommended = [];

for (const ruleId of rules) {
    const rulePath = path.resolve(rulesPath, ruleId);
    const rule = await import(pathToFileURL(rulePath));

    if (rule.default.meta.docs.recommended) {
        recommended.push(ruleId);
    }
}

const output = `export default {
    ${recommended.map(id => `"markdown/${id.slice(0, -3)}": "error"`).join(",\n    ")}
};
`;

fs.mkdirSync(path.resolve(thisDir, "../src/build"), { recursive: true });
fs.writeFileSync(path.resolve(thisDir, "../src/build/recommended-config.js"), output);

console.log("Recommended rules generated successfully.");

const rulesOutput = `
${rules.map((id, index) => `import rule${index} from "../rules/${id}";`).join("\n")}

export default {
    ${rules.map((id, index) => `"${id.slice(0, -3)}": rule${index},`).join("\n    ")}
};
`.trim();

fs.writeFileSync(path.resolve(thisDir, "../src/build/rules.js"), rulesOutput);

console.log("Rules import file generated successfully.");
