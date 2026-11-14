import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const collections = [
  ["lofi", "Lo-fi", "recipes/lofi.md"],
  ["rave", "Techno / trance / rave", "recipes/rave.md"],
  ["ambient", "Ambient", "recipes/ambient.md"],
  ["grooves", "Grooves", "recipes/grooves.md"],
  ["experiments", "Experiments", "recipes/experiments.md"],
  ["chord-jams", "Chord jams", "recipes/chord-jams.md"],
  ["chiptune", "Chiptune", "recipes/chiptune.md"],
  ["anime", "Anime / cyberpunk", "recipes/anime.md"],
  ["shinobi-flute", "Shinobi flute", "recipes/shinobi-flute.md"],
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
      };
      continue;
    }
    if (!current || !line || line.startsWith("#")) continue;
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
if (recipes.length !== 90) {
  throw new Error(`Expected 90 recipes, parsed ${recipes.length}`);
}

await writeFile(
  resolve(root, "site/recipes.json"),
  `${JSON.stringify({ recipes }, null, 2)}\n`,
);
console.log(`Built site data for ${recipes.length} recipes.`);
