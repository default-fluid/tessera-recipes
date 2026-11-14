import { access, readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

const data = JSON.parse(await readFile(resolve(root, "site/recipes.json"), "utf8"));
assert(data.recipes.length === 56, `Expected 56 site recipes, found ${data.recipes.length}`);
assert(new Set(data.recipes.map((item) => item.id)).size === data.recipes.length, "Recipe IDs are not unique");
for (const recipe of data.recipes) {
  assert(recipe.title && recipe.category, `Recipe is missing title/category: ${recipe.id || "unknown"}`);
  assert(recipe.steps.length >= 4, `${recipe.title} has fewer than four steps`);
}

for (const filename of ["README.md", ...["lofi", "rave", "ambient", "grooves", "experiments"].map((name) => `recipes/${name}.md`)]) {
  const source = await readFile(resolve(root, filename), "utf8");
  for (const match of source.matchAll(/\[[^\]]+\]\(([^)#]+)(?:#[^)]+)?\)/g)) {
    const target = match[1];
    if (/^(?:https?:|mailto:)/.test(target)) continue;
    try { await access(resolve(root, dirname(filename), target)); }
    catch { failures.push(`${filename} links to missing file: ${target}`); }
  }
}

const html = await readFile(resolve(root, "site/index.html"), "utf8");
for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
  const target = match[1];
  if (/^(?:https?:|mailto:)/.test(target)) continue;
  try { await access(resolve(root, "site", target)); }
  catch { failures.push(`site/index.html references missing asset: ${target}`); }
}

try {
  const tag = execFileSync("git", ["-C", resolve(root, "vendor/tessera"), "describe", "--tags", "--exact-match", "HEAD"], { encoding: "utf8" }).trim();
  assert(/^v\d+\.\d+(?:\.\d+)?/.test(tag), `Submodule tag is not a Tessera release: ${tag}`);
} catch {
  failures.push("Tessera submodule is not pinned to an exact release tag");
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}
console.log("Repository checks passed: 56 recipes, links, assets, and release pin are valid.");
