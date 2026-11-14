import { access, readFile, readdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

const data = JSON.parse(await readFile(resolve(root, "site/recipes.json"), "utf8"));
assert(data.recipes.length === 40, `Expected 40 site recipes, found ${data.recipes.length}`);
assert(new Set(data.recipes.map((item) => item.id)).size === data.recipes.length, "Recipe IDs are not unique");
for (const tracks of [2, 3, 4]) assert(data.recipes.some((recipe) => recipe.tracks === tracks), `No ${tracks}-track recipes were found`);
for (const recipe of data.recipes) {
  assert(recipe.title && recipe.category, `Recipe is missing title/category: ${recipe.id || "unknown"}`);
  assert(recipe.description === "", `${recipe.title} should not have a description`);
  assert(recipe.category === "recipes", `${recipe.title} has an unexpected type category`);
  assert([2, 3, 4].includes(recipe.tracks), `${recipe.title} has an invalid active-track count`);
  assert(recipe.steps.length >= 4 && recipe.steps.length <= 7, `${recipe.title} must have four to seven beginner steps`);
  assert(["3.4.1", "3.5"].includes(recipe.minVersion), `${recipe.title} has an invalid firmware version`);
  const text = recipe.steps.join(" ");
  for (const required of ["New song", "ROOT", "SCALE", "**Sounds", "MODE", "ROLL", "PIECE", "END STOP", "PLAY"]) {
    assert(text.includes(required), `${recipe.title} is missing required beginner detail: ${required}`);
  }
  assert(!/\*\*(?:Play it|Change it):|\b(?:to taste|low density|warm bass|choose a sound|about \d+|around \d+)\b/i.test(text), `${recipe.title} contains vague or live-performance wording`);
  assert(!/MODE EUCLID[^.]*\bDENS\b/i.test(text), `${recipe.title} incorrectly uses DENS with EUCLID`);
  assert(!/KNOB 1 EVERY/i.test(text), `${recipe.title} assigns EVOLVE EVERY to the wrong knob`);
  assert(!/FORM[^.]*KNOB 4 EVERY/i.test(text), `${recipe.title} assigns FORM's timing to the wrong knob`);
}

const recipeFiles = await readdir(resolve(root, "recipes"));
assert(recipeFiles.length === 1 && recipeFiles[0] === "lofi.md", `Only recipes/lofi.md should remain; found ${recipeFiles.join(", ")}`);
for (const filename of ["README.md", "BEGINNER-GUIDE.md", "recipes/lofi.md"]) {
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
assert(html.includes('id="tracks-select"'), "The website is missing its active-track selector");
assert(!/(?:type|version|steps)-select/.test(html), "Track count must be the only recipe selector filter");
assert((html.match(/class="ink-swatch/g) || []).length === 9, "Expected the nine single-color Tessera inks as square buttons");
assert(!/data-ink="(?:mosaic|sunset|ocean|neon)"/.test(html), "Multi-color ink themes must not be offered");
for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
  const target = match[1].split("?")[0];
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

const allText = data.recipes.flatMap((recipe) => recipe.steps).join(" ");
for (const feature of ["TURING", "MARKOV", "CONSTL", "SERIES", "BOUNCE", "AWAKE", "POLY", "MORPH", "EUCLID", "CHORD", "TIDE", "SWARM", "DRIFT", "ECHO", "TAPE", "FILTER", "CHORUS", "ROOM", "ENERGY", "FORM", "CHAIN", "ENTRIES"]) {
  assert(allText.includes(feature), `The recipe set does not exercise ${feature}`);
}
if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}
console.log("Repository checks passed: 40 lo-fi recipes, track counts, feature diversity, links, assets, and release pin are valid.");
