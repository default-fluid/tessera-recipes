const state = { recipes: [], category: "all", query: "", current: null, wakeLock: null };
const $ = (selector) => document.querySelector(selector);
const elements = {
  grid: $("#recipes"), empty: $("#empty"), count: $("#count"), search: $("#search"),
  filters: $("#filters"), detail: $("#detail"), detailContent: $("#detail-content"),
  progress: $("#progress-label"), theme: $("#theme"), wake: $("#wake"),
  typeSelect: $("#type-select"), recipeSelect: $("#recipe-select"),
};

const escapeHtml = (value = "") => value.replace(/[&<>"']/g, (char) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" })[char]);
const inline = (value = "") => escapeHtml(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/`(.+?)`/g, "<code>$1</code>");
const plain = (value = "") => value.replace(/\*\*|`/g, "");
const progressKey = (id) => `tessera-recipe:${id}`;
const readProgress = (id) => { try { return JSON.parse(localStorage.getItem(progressKey(id)) || "[]"); } catch (_) { return []; } };
const pattern = { lofi:"var(--p1)", rave:"var(--p2)", ambient:"var(--p3)", grooves:"var(--p4)", experiments:"linear-gradient(90deg,var(--p1) 0 25%,var(--p2) 25% 50%,var(--p3) 50% 75%,var(--p4) 75%)" };

function filteredRecipes() {
  const words = state.query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return state.recipes.filter((recipe) => {
    if (state.category !== "all" && recipe.category !== state.category) return false;
    const haystack = [recipe.title, recipe.categoryLabel, recipe.description, ...recipe.steps, recipe.note].join(" ").toLowerCase();
    return words.every((word) => haystack.includes(word));
  });
}

function render() {
  const recipes = filteredRecipes();
  elements.count.textContent = `${recipes.length} recipe${recipes.length === 1 ? "" : "s"}`;
  elements.empty.hidden = recipes.length > 0;
  elements.grid.innerHTML = recipes.map((recipe, index) => `
    <button class="recipe-card" type="button" data-id="${recipe.id}" style="--pattern:${pattern[recipe.category]}">
      <span class="number">${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHtml(recipe.title)}</h3>
      <p>${escapeHtml(plain(recipe.description || recipe.steps[0]))}</p>
      <span class="meta"><span>${escapeHtml(recipe.categoryLabel)}</span><span>${recipe.steps.length} steps →</span></span>
    </button>`).join("");
}

function updatePicker() {
  const category = elements.typeSelect.value;
  const recipes = state.recipes.filter((recipe) => category === "all" || recipe.category === category);
  elements.recipeSelect.innerHTML = recipes.map((recipe) => `<option value="${recipe.id}">${escapeHtml(recipe.title)}</option>`).join("");
}

function updateProgress() {
  if (!state.current) return;
  const checked = [...elements.detailContent.querySelectorAll("input:checked")].length;
  elements.progress.textContent = `${checked} / ${state.current.steps.length}`;
}

function openRecipe(id, pushHash = true) {
  const recipe = state.recipes.find((item) => item.id === id);
  if (!recipe) return;
  state.current = recipe;
  const completed = new Set(readProgress(id));
  elements.detailContent.innerHTML = `
    <span class="detail-category">${escapeHtml(recipe.categoryLabel)}</span>
    <h2>${escapeHtml(recipe.title)}</h2>
    ${recipe.description ? `<p class="detail-lede">${inline(recipe.description)}</p>` : ""}
    <ol class="steps">${recipe.steps.map((step, index) => `
      <li><input id="step-${index}" data-step="${index}" type="checkbox" ${completed.has(index) ? "checked" : ""}>
      <label class="step-check" for="step-${index}" aria-label="Mark step ${index + 1} complete"></label>
      <div class="step-copy">${inline(step)}</div></li>`).join("")}</ol>
    ${recipe.note ? `<div class="recipe-note">${inline(recipe.note)}</div>` : ""}
    <button class="button reset-progress" type="button">Reset steps</button>`;
  elements.detail.classList.add("open");
  elements.detail.setAttribute("aria-hidden", "false");
  document.body.classList.add("detail-open");
  elements.detail.scrollTop = 0;
  updateProgress();
  if (pushHash) history.pushState({ recipe: id }, "", `#recipe=${encodeURIComponent(id)}`);
  $("#close").focus();
}

function closeRecipe(updateHash = true) {
  elements.detail.classList.remove("open");
  elements.detail.setAttribute("aria-hidden", "true");
  document.body.classList.remove("detail-open");
  state.current = null;
  if (updateHash) history.pushState({}, "", "#library");
}

elements.grid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-id]"); if (card) openRecipe(card.dataset.id);
});
elements.search.addEventListener("input", () => { state.query = elements.search.value; render(); });
elements.filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]"); if (!button) return;
  state.category = button.dataset.category;
  elements.filters.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === button));
  render();
});
$("#close").addEventListener("click", () => closeRecipe());
$("#random").addEventListener("click", () => openRecipe(state.recipes[Math.floor(Math.random() * state.recipes.length)].id));
elements.typeSelect.addEventListener("change", updatePicker);
$("#open-selected").addEventListener("click", () => { if (elements.recipeSelect.value) openRecipe(elements.recipeSelect.value); });
$("#random-picker").addEventListener("click", () => {
  const category = elements.typeSelect.value;
  const choices = state.recipes.filter((recipe) => category === "all" || recipe.category === category);
  if (choices.length) openRecipe(choices[Math.floor(Math.random() * choices.length)].id);
});
elements.detailContent.addEventListener("change", (event) => {
  if (!state.current || event.target.type !== "checkbox") return;
  const completed = [...elements.detailContent.querySelectorAll("input:checked")].map((input) => Number(input.dataset.step));
  localStorage.setItem(progressKey(state.current.id), JSON.stringify(completed));
  updateProgress();
});
elements.detailContent.addEventListener("click", (event) => {
  if (!event.target.closest(".reset-progress") || !state.current) return;
  localStorage.removeItem(progressKey(state.current.id));
  elements.detailContent.querySelectorAll("input").forEach((input) => { input.checked = false; });
  updateProgress();
});

function setThemeLabel() { elements.theme.textContent = document.documentElement.dataset.theme === "light" ? "Dark" : "Light"; }
elements.theme.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next; localStorage.setItem("tessera-theme", next); setThemeLabel();
});
setThemeLabel();

if (!("wakeLock" in navigator)) elements.wake.hidden = true;
elements.wake.addEventListener("click", async () => {
  try {
    if (state.wakeLock) { await state.wakeLock.release(); state.wakeLock = null; }
    else { state.wakeLock = await navigator.wakeLock.request("screen"); state.wakeLock.addEventListener("release", () => { state.wakeLock = null; elements.wake.classList.remove("active"); }); }
    elements.wake.classList.toggle("active", Boolean(state.wakeLock));
  } catch (_) { elements.wake.title = "Screen wake lock is unavailable in this browser"; }
});

window.addEventListener("popstate", () => {
  const match = location.hash.match(/^#recipe=(.+)$/);
  if (match) openRecipe(decodeURIComponent(match[1]), false); else closeRecipe(false);
});
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && state.current) closeRecipe(); });

fetch("recipes.json")
  .then((response) => { if (!response.ok) throw new Error("Could not load recipes"); return response.json(); })
  .then((data) => {
    state.recipes = data.recipes; render(); updatePicker();
    const match = location.hash.match(/^#recipe=(.+)$/); if (match) openRecipe(decodeURIComponent(match[1]), false);
  })
  .catch((error) => { elements.count.textContent = "Unavailable"; elements.grid.innerHTML = `<p class="empty">${escapeHtml(error.message)}. Try reloading the page.</p>`; });
