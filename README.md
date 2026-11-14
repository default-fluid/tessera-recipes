# Tessera recipes

A community cookbook for making music with [Tessera](https://github.com/Rastapopolix/tessera), the generative firmware for the M-Vave FM-1.

The phone-friendly recipe browser is deployed with GitHub Pages at **https://default-fluid.github.io/tessera-recipes/**.

The recipes favor useful starting points over finished songs: dial one in, listen for a minute, then change a seed, scale, sound, or modulation route until it becomes yours.

## Pick a recipe

| Collection | Recipes | Character |
| --- | ---: | --- |
| [Lo-fi](recipes/lofi.md) | 20 | dusty beats, sleepy chords, tape-like movement, late-night loops |
| [Ambient](recipes/ambient.md) | 8 | drones, slow systems, spacious generative beds |
| [Techno, trance, and rave](recipes/rave.md) | 12 | warehouse techno, trance builds, acid, rave, Eurodance |
| [Grooves](recipes/grooves.md) | 8 | broken beats, polyrhythms, dub, minimal dance patterns |
| [Experiments](recipes/experiments.md) | 8 | self-playing structures, odd meters, canons, controlled chaos |

That is **56 recipes** in total. Start with [Rain on the Study Window](recipes/lofi.md#rain-on-the-study-window) for a complete four-track lo-fi patch, or [Midnight Warehouse](recipes/rave.md#midnight-warehouse) for a club patch.

## How to read the recipes

- Page names and controls are written as they appear in Tessera: **GEN**, **EVOLVE**, **TWEAK**, **MODS**, and so on.
- `T1` through `T4` mean tracks 1 through 4.
- Values are starting points, not requirements. “About 30” means that the neighborhood matters more than the exact number.
- A recipe marked **3.5+** uses features introduced in Tessera 3.5.
- Unless a recipe says otherwise, choose any scale and root you enjoy. D minor, E KUMOI, and C major are friendly starting points.

Tessera's upstream [manual](vendor/tessera/MANUAL.md), [cheat sheet](vendor/tessera/CHEATSHEET.md), and [official recipes](vendor/tessera/RECIPES.md) are included in the submodule for reference.

## Clone

```sh
git clone --recurse-submodules https://github.com/default-fluid/tessera-recipes.git
```

If you already cloned without submodules:

```sh
git submodule update --init --recursive
```

## Tessera version

`vendor/tessera` is pinned to a released Tessera version. The [update workflow](.github/workflows/update-tessera.yml) checks the upstream repository daily and advances the submodule when a newer GitHub release appears. It can also be run manually from the Actions tab.

## A good way to explore

1. Build only the first two tracks of a recipe and press **PLAY**.
2. Add the remaining tracks one at a time.
3. Turn **ROLL** one click to audition a nearby seed; turn back to recover the old one.
4. Save a project before making structural changes.
5. Print a generator phrase you love by holding **REC**, then edit it as a STEP pattern.

These recipes are companion material, not part of the Tessera project itself.
