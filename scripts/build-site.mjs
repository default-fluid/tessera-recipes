import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const collections = [
  ["recipes", "Lo-fi Recipes", "recipes/lofi.md"],
];

const slugify = (value) => value
  .toLowerCase()
  .normalize("NFKD")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

function parseCollection(source, category, categoryLabel) {
  const lines = source.split(/\r?\n/);
  const recipes = [];
  let current = null;

  function finish() {
    if (!current || current.steps.length === 0) return;
    current.description = current.description.join(" ").trim();
    current.note = current.note.join(" ").trim();
    if (![2, 3, 4].includes(current.tracks)) throw new Error(`${current.title} needs a **Tracks:** value from 2 to 4`);
    const recipeText = [current.description, ...current.steps, current.note].join(" ");
    current.minVersion = /\bSOURCE KEYS\b/i.test(recipeText) ? "3.7"
      : /\b(?:DRIVE|FOLD)\b|\bTIME \d+ ms\b|\b(?:2NDS|4THS|5THS)\b/i.test(recipeText) ? "3.7.2"
      : /\*\*3\.5\+\*\*|\bSTRUM\b|\bMOD DEPTH\b|\bDIR (?:BACK|PEND|FOLD|RAND|DRUNK)\b/i.test(recipeText) ? "3.5"
      : /\b(?:QNT HARM|HOW HARM|HARMONIZER)\b/i.test(recipeText) ? "3.6" : "3.4.1";
    recipes.push(current);
  }

  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith("## ")) {
      finish();
      const title = line.slice(3).trim();
      current = {
        id: slugify(title),
        title,
        category,
        categoryLabel,
        description: [],
        steps: [],
        note: [],
        tracks: null,
      };
      continue;
    }
    if (!current || !line || line.startsWith("#")) continue;
    const tracks = line.match(/^\*\*Tracks:\*\*\s*([234])$/);
    if (tracks) {
      current.tracks = Number(tracks[1]);
      continue;
    }
    const step = line.match(/^\d+\.\s+(.+)$/);
    if (step) {
      current.steps.push(step[1]);
    } else if (current.steps.length === 0) {
      current.description.push(line);
    } else {
      current.note.push(line);
    }
  }
  finish();
  return recipes;
}

const recipes = [];
for (const [category, label, filename] of collections) {
  const source = await readFile(resolve(root, filename), "utf8");
  recipes.push(...parseCollection(source, category, label));
}

const duplicateIds = recipes.filter((recipe, index) =>
  recipes.findIndex((candidate) => candidate.id === recipe.id) !== index);
if (duplicateIds.length) {
  throw new Error(`Duplicate recipe IDs: ${duplicateIds.map((item) => item.id).join(", ")}`);
}
if (recipes.length < 1) {
  throw new Error("Expected at least one recipe");
}

await writeFile(
  resolve(root, "site/recipes.json"),
  `${JSON.stringify({ recipes: recipes.map(({ minVersion, ...recipe }) => recipe) }, null, 2)}\n`,
);
console.log(`Built site data for ${recipes.length} recipes.`);
