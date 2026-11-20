import { readFile } from "node:fs/promises";
import vm from "node:vm";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const app = await readFile(resolve(root, "site/app.js"), "utf8");
const data = JSON.parse(await readFile(resolve(root, "site/recipes.json"), "utf8"));

function element(value = "") {
  const listeners = new Map();
  return {
    value, innerHTML: "", textContent: "", hidden: false, scrollTop: 0,
    classList: { add() {}, remove() {}, toggle() {} },
    addEventListener(type, listener) { listeners.set(type, listener); },
    dispatch(type, event = {}) { listeners.get(type)?.(event); },
    setAttribute() {}, focus() {},
    querySelectorAll() { return []; },
  };
}

async function smokeTest({ cachedMarkup = false, blockedStorage = false } = {}) {
  const elements = new Map([
    ["#recipes", element()], ["#empty", element()], ["#count", element("Loading…")],
    ["#detail", element()], ["#detail-content", element()],
    ["#progress-label", element()], ["#ink-picker", element()],
    ["#close", element()], ["#random-picker", element()],
  ]);
  const tracksSelect = element("all");
  if (!cachedMarkup) elements.set("#tracks-select", tracksSelect);

  const context = {
    console,
    document: {
      documentElement: { dataset: {} }, body: { classList: { add() {}, remove() {} } },
      querySelector: (selector) => elements.get(selector) || null,
      addEventListener() {},
    },
    window: { addEventListener() {} },
    history: { pushState() {} },
    location: { hash: "" },
    localStorage: blockedStorage ? {
      getItem() { throw new Error("storage blocked"); },
      setItem() { throw new Error("storage blocked"); },
      removeItem() { throw new Error("storage blocked"); },
    } : { getItem() { return null; }, setItem() {}, removeItem() {} },
    fetch: async () => ({ ok: true, json: async () => data }),
    decodeURIComponent,
  };

  vm.runInNewContext(app, context, { filename: "site/app.js" });
  await new Promise((resolvePromise) => setTimeout(resolvePromise, 0));
  if (elements.get("#count").textContent !== `${data.recipes.length} recipes`) {
    throw new Error(`Site did not render recipes${cachedMarkup ? " with cached markup" : ""}`);
  }
  if (!elements.get("#recipes").innerHTML.includes(data.recipes[0].title)) {
    throw new Error("Recipe cards were not rendered");
  }
  if (!cachedMarkup) {
    tracksSelect.value = "2";
    tracksSelect.dispatch("change");
    const twoTrackCount = data.recipes.filter((recipe) => recipe.tracks === 2).length;
    if (elements.get("#count").textContent !== `${twoTrackCount} recipes`) {
      throw new Error("Two tracks filter showed the wrong recipe count");
    }
    tracksSelect.value = "all";
    tracksSelect.dispatch("change");
    if (elements.get("#count").textContent !== `${data.recipes.length} recipes`) {
      throw new Error("All tracks did not show every recipe after changing back");
    }
    const displayedCards = (elements.get("#recipes").innerHTML.match(/class="recipe-card"/g) || []).length;
    if (displayedCards !== data.recipes.length) throw new Error(`All tracks rendered ${displayedCards} of ${data.recipes.length} recipes`);
  }
}

await smokeTest();
await smokeTest({ cachedMarkup: true, blockedStorage: true });
console.log("Site runtime smoke tests passed, including cached markup and blocked storage.");
