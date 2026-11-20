const state = { recipes: [], tracks: "2", current: null, favorites: new Set() };
const $ = (selector) => document.querySelector(selector);
const elements = {
  grid: $("#recipes"), empty: $("#empty"), count: $("#count"),
  detail: $("#detail"), detailContent: $("#detail-content"),
  progress: $("#progress-label"), inkPicker: $("#ink-picker"),
  tracksSelect: $("#tracks-select"),
};

const escapeHtml = (value = "") => value.replace(/[&<>"']/g, (char) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" })[char]);
const inline = (value = "") => escapeHtml(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/`(.+?)`/g, "<code>$1</code>");
const storageGet = (key, fallback = null) => { try { return localStorage.getItem(key) ?? fallback; } catch (_) { return fallback; } };
const storageSet = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
const storageRemove = (key) => { try { localStorage.removeItem(key); } catch (_) {} };
const progressKey = (id) => `tessera-recipe:${id}`;
const readProgress = (id) => { try { return JSON.parse(storageGet(progressKey(id), "[]")); } catch (_) { return []; } };
const favoritesKey = "tessera-recipe-favorites";
try { state.favorites = new Set(JSON.parse(storageGet(favoritesKey, "[]"))); } catch (_) {}

function filteredRecipes() {
  return state.recipes.filter((recipe) => recipe.tracks === Number(state.tracks));
}

function render() {
  const recipes = filteredRecipes();
  elements.count.textContent = `${recipes.length} recipe${recipes.length === 1 ? "" : "s"}`;
  elements.empty.hidden = recipes.length > 0;
  elements.grid.innerHTML = recipes.map((recipe, index) => `
    <article class="recipe-card" style="--pattern:var(--p1)">
      <button class="card-open" type="button" data-id="${recipe.id}">
        <span class="number">${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHtml(recipe.title)}</h3>
        <span class="meta"><span>${recipe.tracks} active tracks</span><span>${recipe.steps.length} steps →</span></span>
      </button>
      <button class="favorite-button ${state.favorites.has(recipe.id) ? "active" : ""}" type="button" data-favorite="${recipe.id}" aria-label="${state.favorites.has(recipe.id) ? "Remove from" : "Add to"} favorites" aria-pressed="${state.favorites.has(recipe.id)}">${state.favorites.has(recipe.id) ? "♥" : "♡"}</button>
    </article>`).join("");
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
    <span class="detail-category">${recipe.tracks} active tracks</span>
    <h2>${escapeHtml(recipe.title)}</h2>
    ${recipe.description ? `<p class="detail-lede">${inline(recipe.description)}</p>` : ""}
    <aside class="recipe-setup">
      <strong>How to read the steps</strong>
      <p>A path such as <b>T1 &gt; SEQ &gt; GEN</b> means: turn <b>ALGORITHM</b> to T1, tap <b>SEQ</b>, then turn <b>SELECT</b> until GEN appears. <b>PRESETS</b> loads the named sound. Turn the numbered knob shown; keep <b>OCT-</b> held only where a step says so.</p>
      <p>Every control the recipe uses is specified. Short recipes intentionally use fewer tracks and layers; they are not incomplete. After the final single press of <b>PLAY</b>, no live performance is required.</p>
    </aside>
    <ol class="steps">${recipe.steps.map((step, index) => `
      <li><input id="step-${index}" data-step="${index}" type="checkbox" ${completed.has(index) ? "checked" : ""}>
      <label class="step-check" for="step-${index}" aria-label="Mark step ${index + 1} complete"></label>
      <div class="step-copy">${inline(step)}</div></li>`).join("")}</ol>
    ${recipe.note ? `<div class="recipe-note">${inline(recipe.note)}</div>` : ""}
    <div class="detail-actions">
      <button class="button favorite-detail ${state.favorites.has(recipe.id) ? "primary" : ""}" type="button"><span class="favorite-heart">${state.favorites.has(recipe.id) ? "♥" : "♡"}</span> ${state.favorites.has(recipe.id) ? "Favorited" : "Favorite"}</button>
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

elements.grid?.addEventListener("click", (event) => {
  const favorite = event.target.closest("[data-favorite]");
  if (favorite) { toggleFavorite(favorite.dataset.favorite); return; }
  const card = event.target.closest("[data-id]"); if (card) openRecipe(card.dataset.id);
});
$("#close")?.addEventListener("click", () => closeRecipe());
elements.tracksSelect?.addEventListener("change", () => { state.tracks = elements.tracksSelect.value; render(); });
$("#random-picker")?.addEventListener("click", () => {
  const choices = state.recipes.filter((recipe) => recipe.tracks === Number(state.tracks));
  if (choices.length) openRecipe(choices[Math.floor(Math.random() * choices.length)].id);
});
elements.detailContent?.addEventListener("change", (event) => {
  if (!state.current || event.target.type !== "checkbox") return;
  const completed = [...elements.detailContent.querySelectorAll("input:checked")].map((input) => Number(input.dataset.step));
  storageSet(progressKey(state.current.id), JSON.stringify(completed));
  updateProgress();
});
elements.detailContent?.addEventListener("click", (event) => {
  if (event.target.closest(".favorite-detail") && state.current) { toggleFavorite(state.current.id); openRecipe(state.current.id, false); return; }
  if (!event.target.closest(".reset-progress") || !state.current) return;
  storageRemove(progressKey(state.current.id));
  elements.detailContent.querySelectorAll("input").forEach((input) => { input.checked = false; });
  updateProgress();
});

function toggleFavorite(id) {
  if (state.favorites.has(id)) state.favorites.delete(id); else state.favorites.add(id);
  storageSet(favoritesKey, JSON.stringify([...state.favorites]));
  render();
}

function setInk(ink) {
  const singleInks = ["yellow", "white", "green", "blue", "red", "orange", "pink", "hot-pink", "lilac"];
  if (!singleInks.includes(ink)) ink = "yellow";
  document.documentElement.dataset.ink = ink;
  storageSet("tessera-ink", ink);
  elements.inkPicker?.querySelectorAll("[data-ink]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.ink === ink));
  });
}
setInk(document.documentElement.dataset.ink || "yellow");
elements.inkPicker?.addEventListener("click", (event) => {
  const swatch = event.target.closest("[data-ink]");
  if (swatch) setInk(swatch.dataset.ink);
});

window.addEventListener("popstate", () => {
  const match = location.hash.match(/^#recipe=(.+)$/);
  if (match) openRecipe(decodeURIComponent(match[1]), false); else closeRecipe(false);
});
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && state.current) closeRecipe(); });

fetch("recipes.json?v=2", { cache: "no-store" })
  .then((response) => { if (!response.ok) throw new Error("Could not load recipes"); return response.json(); })
  .then((data) => {
    state.recipes = data.recipes; render();
    const match = location.hash.match(/^#recipe=(.+)$/); if (match) openRecipe(decodeURIComponent(match[1]), false);
  })
  .catch((error) => { elements.count.textContent = "Unavailable"; elements.grid.innerHTML = `<p class="empty">${escapeHtml(error.message)}. Try reloading the page.</p>`; });
