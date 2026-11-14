import { readFile } from "node:fs/promises";
import vm from "node:vm";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const app = await readFile(resolve(root, "site/app.js"), "utf8");
const data = JSON.parse(await readFile(resolve(root, "site/recipes.json"), "utf8"));

function element(value = "") {
  return {
    value, innerHTML: "", textContent: "", hidden: false, scrollTop: 0,
    classList: { add() {}, remove() {}, toggle() {} },
    addEventListener() {}, setAttribute() {}, focus() {},
    querySelectorAll() { return []; },
  };
}

async function smokeTest({ cachedMarkup = false, blockedStorage = false } = {}) {
  const elements = new Map([
    ["#recipes", element()], ["#empty", element()], ["#count", element("Loading…")],
    ["#search", element()], ["#detail", element()], ["#detail-content", element()],
    ["#progress-label", element()], ["#ink-picker", element()], ["#recipe-select", element()],
    ["#close", element()], ["#open-selected", element()], ["#random-picker", element()],
  ]);
  if (!cachedMarkup) elements.set("#tracks-select", element("all"));

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
}

await smokeTest();
await smokeTest({ cachedMarkup: true, blockedStorage: true });
console.log("Site runtime smoke tests passed, including cached markup and blocked storage.");
