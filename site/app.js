const state = { recipes: [], category: "all", version: "all", query: "", current: null, wakeLock: null, favorites: new Set() };
const $ = (selector) => document.querySelector(selector);
const elements = {
  grid: $("#recipes"), empty: $("#empty"), count: $("#count"), search: $("#search"),
  filters: $("#filters"), detail: $("#detail"), detailContent: $("#detail-content"),
  progress: $("#progress-label"), wake: $("#wake"),
  typeSelect: $("#type-select"), recipeSelect: $("#recipe-select"), versionSelect: $("#version-select"),
};

const escapeHtml = (value = "") => value.replace(/[&<>"']/g, (char) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" })[char]);
const inline = (value = "") => escapeHtml(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/`(.+?)`/g, "<code>$1</code>");
const plain = (value = "") => value.replace(/\*\*|`/g, "");
const progressKey = (id) => `tessera-recipe:${id}`;
const readProgress = (id) => { try { return JSON.parse(localStorage.getItem(progressKey(id)) || "[]"); } catch (_) { return []; } };
const favoritesKey = "tessera-recipe-favorites";
try { state.favorites = new Set(JSON.parse(localStorage.getItem(favoritesKey) || "[]")); } catch (_) {}
const pattern = { lofi:"var(--p1)", rave:"var(--p2)", ambient:"var(--p3)", grooves:"var(--p4)", experiments:"linear-gradient(90deg,var(--p1) 0 25%,var(--p2) 25% 50%,var(--p3) 50% 75%,var(--p4) 75%)", "chord-jams":"var(--p1)", chiptune:"var(--p2)", anime:"var(--p3)", "shinobi-flute":"var(--p4)" };

function filteredRecipes() {
  const words = state.query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return state.recipes.filter((recipe) => {
    if (state.category === "favorites" && !state.favorites.has(recipe.id)) return false;
    if (state.category !== "all" && state.category !== "favorites" && recipe.category !== state.category) return false;
    if (state.version !== "all" && recipe.minVersion !== state.version) return false;
    const haystack = [recipe.title, recipe.categoryLabel, recipe.description, ...recipe.steps, recipe.note].join(" ").toLowerCase();
    return words.every((word) => haystack.includes(word));
  });
}

function render() {
  const recipes = filteredRecipes();
  elements.count.textContent = `${recipes.length} recipe${recipes.length === 1 ? "" : "s"}`;
  elements.empty.hidden = recipes.length > 0;
  elements.grid.innerHTML = recipes.map((recipe, index) => `
    <article class="recipe-card" style="--pattern:${pattern[recipe.category]}">
      <button class="card-open" type="button" data-id="${recipe.id}">
        <span class="number">${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHtml(recipe.title)}</h3>
        <p>${escapeHtml(plain(recipe.description || recipe.steps[0]))}</p>
        <span class="version-badge">${recipe.minVersion === "3.5" ? "Tessera 3.5+" : "Tessera 3.4.1+"}</span>
        <span class="meta"><span>${escapeHtml(recipe.categoryLabel)}</span><span>${recipe.steps.length} steps →</span></span>
      </button>
      <button class="favorite-button ${state.favorites.has(recipe.id) ? "active" : ""}" type="button" data-favorite="${recipe.id}" aria-label="${state.favorites.has(recipe.id) ? "Remove from" : "Add to"} favorites" aria-pressed="${state.favorites.has(recipe.id)}">★</button>
    </article>`).join("");
  const favoriteCount = $("#favorite-count");
  if (favoriteCount) favoriteCount.textContent = state.favorites.size;
}

function updatePicker() {
  const category = elements.typeSelect.value;
  const version = elements.versionSelect.value;
  const recipes = state.recipes.filter((recipe) =>
    (category === "all" || (category === "favorites" ? state.favorites.has(recipe.id) : recipe.category === category)) &&
    (version === "all" || recipe.minVersion === version));
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
    <span class="detail-category">${escapeHtml(recipe.categoryLabel)}</span><span class="version-badge">${recipe.minVersion === "3.5" ? "Tessera 3.5+" : "Tessera 3.4.1+"}</span>
    <h2>${escapeHtml(recipe.title)}</h2>
    ${recipe.description ? `<p class="detail-lede">${inline(recipe.description)}</p>` : ""}
    <ol class="steps">${recipe.steps.map((step, index) => `
      <li><input id="step-${index}" data-step="${index}" type="checkbox" ${completed.has(index) ? "checked" : ""}>
      <label class="step-check" for="step-${index}" aria-label="Mark step ${index + 1} complete"></label>
      <div class="step-copy">${inline(step)}</div></li>`).join("")}</ol>
    ${recipe.note ? `<div class="recipe-note">${inline(recipe.note)}</div>` : ""}
    <div class="detail-actions">
      <button class="button favorite-detail ${state.favorites.has(recipe.id) ? "primary" : ""}" type="button">${state.favorites.has(recipe.id) ? "★ Favorited" : "☆ Favorite"}</button>
      <button class="button reset-progress" type="button">Reset steps</button>
    </div>`;
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
  const favorite = event.target.closest("[data-favorite]");
  if (favorite) { toggleFavorite(favorite.dataset.favorite); return; }
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
elements.versionSelect.addEventListener("change", () => { state.version = elements.versionSelect.value; render(); updatePicker(); });
$("#open-selected").addEventListener("click", () => { if (elements.recipeSelect.value) openRecipe(elements.recipeSelect.value); });
$("#random-picker").addEventListener("click", () => {
  const category = elements.typeSelect.value;
  const version = elements.versionSelect.value;
  const choices = state.recipes.filter((recipe) =>
    (category === "all" || (category === "favorites" ? state.favorites.has(recipe.id) : recipe.category === category)) &&
    (version === "all" || recipe.minVersion === version));
  if (choices.length) openRecipe(choices[Math.floor(Math.random() * choices.length)].id);
});
elements.detailContent.addEventListener("change", (event) => {
  if (!state.current || event.target.type !== "checkbox") return;
  const completed = [...elements.detailContent.querySelectorAll("input:checked")].map((input) => Number(input.dataset.step));
  localStorage.setItem(progressKey(state.current.id), JSON.stringify(completed));
  updateProgress();
});
elements.detailContent.addEventListener("click", (event) => {
  if (event.target.closest(".favorite-detail") && state.current) { toggleFavorite(state.current.id); openRecipe(state.current.id, false); return; }
  if (!event.target.closest(".reset-progress") || !state.current) return;
  localStorage.removeItem(progressKey(state.current.id));
  elements.detailContent.querySelectorAll("input").forEach((input) => { input.checked = false; });
  updateProgress();
});

function toggleFavorite(id) {
  if (state.favorites.has(id)) state.favorites.delete(id); else state.favorites.add(id);
  localStorage.setItem(favoritesKey, JSON.stringify([...state.favorites]));
  render();
  updatePicker();
}

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
