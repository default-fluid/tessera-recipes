import { access, readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

const data = JSON.parse(await readFile(resolve(root, "site/recipes.json"), "utf8"));
assert(data.recipes.length === 122, `Expected 122 site recipes, found ${data.recipes.length}`);
assert(new Set(data.recipes.map((item) => item.id)).size === data.recipes.length, "Recipe IDs are not unique");
for (const recipe of data.recipes) {
  assert(recipe.title && recipe.category, `Recipe is missing title/category: ${recipe.id || "unknown"}`);
  assert(recipe.steps.length >= 7 && recipe.steps.length <= 9, `${recipe.title} must have seven to nine beginner steps`);
  assert(["3.4.1", "3.5"].includes(recipe.minVersion), `${recipe.title} has an invalid firmware version`);
  const text = recipe.steps.join(" ");
  for (const required of ["New song", "KNOB 1 ROOT", "KNOB 2 SCALE", "T1 **", "T2 **", "T3 **", "T4 **", "MODE", "ROLL", "MODS", "CHAIN", "ENTRIES", "PIECE", "END STOP", "Press **PLAY** once"]) {
    assert(text.includes(required), `${recipe.title} is missing required beginner detail: ${required}`);
  }
  assert(!/\*\*(?:Play it|Change it):|\b(?:to taste|low density|warm bass|choose a sound|about \d+|around \d+)\b/i.test(text), `${recipe.title} contains vague or live-performance wording`);
  assert(!/MODE EUCLID[^.]*\bDENS\b/i.test(text), `${recipe.title} incorrectly uses DENS with EUCLID`);
  assert(!/KNOB 1 EVERY/i.test(text), `${recipe.title} assigns EVOLVE EVERY to the wrong knob`);
}

for (const filename of ["README.md", "BEGINNER-GUIDE.md", ...["lofi", "rave", "ambient", "grooves", "experiments", "chord-jams", "chiptune", "anime", "shinobi-flute", "dungeon-synth", "medieval-lofi", "hooky", "funk-rock", "brazilian"].map((name) => `recipes/${name}.md`)]) {
  const source = await readFile(resolve(root, filename), "utf8");
  for (const match of source.matchAll(/\[[^\]]+\]\(([^)#]+)(?:#[^)]+)?\)/g)) {
    const target = match[1];
    if (/^(?:https?:|mailto:)/.test(target)) continue;
    try { await access(resolve(root, dirname(filename), target)); }
    catch { failures.push(`${filename} links to missing file: ${target}`); }
  }
}

const html = await readFile(resolve(root, "site/index.html"), "utf8");
assert(!html.includes('id="ink-select"'), "Ink colors must not use a dropdown");
assert((html.match(/class="ink-swatch/g) || []).length === 13, "Expected all 13 Tessera inks as square buttons");
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
console.log("Repository checks passed: 122 recipes, links, assets, and release pin are valid.");
