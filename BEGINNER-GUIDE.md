# Beginner controls

Every recipe starts from a new song and ends with one press of **PLAY**. After that, Tessera performs and stops the
piece by itself. The recipes use the control names shown on the FM-1 screen.

## Start from a clean song

1. Tap **SAVE**, then turn **SELECT** until **PROJECT** appears.
2. Turn **KNOB 1** to **New song** and tap **OCT+**. Tap **OCT+** again if Tessera asks for confirmation.
3. On the **NEW SONG** key screen, set the recipe's **KNOB 1 ROOT**, **KNOB 2 SCALE**, and **KNOB 3 TEMPO**.
4. Tap **OCT+**. On the roles screen set **KNOB 1–4** to **KEEP**, then tap **OCT+** to create the empty song.

## Read a path

`SEQ > GEN > MODE` always means: tap **SEQ**, turn **SELECT** until the **GEN** page appears, then turn the knob
labelled **MODE**. A recipe spells this sequence out the first time it uses each kind of page.

- Select a track: turn **ALGORITHM** until the header says **T1**, **T2**, **T3**, or **T4**.
- Load a sound: tap **HOME**, select the track, then turn **PRESETS** until the exact preset name appears.
- Change tempo later: hold **GLO**, turn **SELECT** until the exact BPM appears, then release **GLO**.
- Change root or scale later: hold **SCL**; turn **KNOB 1** for **ROOT** and **KNOB 2** for **SCALE**; release **SCL**.
- Open a page: tap its section button, then turn **SELECT**. Generator pages are under **SEQ** and shaping pages
  such as **EVOLVE**, **FORM**, **TWEAK**, **LENGTH**, **TIMING**, and **ENERGY** are under **ARP**.
- Open a page's extra controls: keep that page visible and hold **OCT+**. For its alternate knob layer, hold
  **OCT-** while turning the named knob.
- Add an insert effect: select the track, tap **FX**, turn **SELECT** to **FX 1**, **FX 2**, or **FX 3**, then set
  **KNOB 1 TYPE**, **KNOB 2 MIX**, **KNOB 3 RATE/TIME**, and **KNOB 4 CHARACTER/REPEAT**.
- Add a modulation cord: select its destination track, tap **LFO**, turn **SELECT** to **MODS**, choose an unused mod
  with **KNOB 2**, then set **KNOB 1 SOURCE**, **KNOB 3 DESTINATION**, and **KNOB 4 AMOUNT**. Source and destination
  names include their track number. Set TIDE and SWARM speeds on **LFO > ORGANIC** first when a recipe lists them.
- Balance tracks: tap **GLO**, turn **SELECT** to **MIXER**; **KNOB 1–4** are T1–T4 levels.
- Automate the arrangement: tap **GLO**, then use **CHAIN** for sections, **ENTRIES** for automatic entrances and
  exits, and **PIECE** for the duration and ending. **PIECE > END STOP** makes Tessera stop without help.

## Make the same phrase every time

For every generator track, open **ARP > EVOLVE** and set **KNOB 4 ROLL** to the recipe's number. **PLAY** restarts
the generators, TIDE, and SWARM from that seed. Values not listed in a recipe stay at their new-song defaults.

Firmware reference: [Tessera manual](vendor/tessera/MANUAL.md), [cheat sheet](vendor/tessera/CHEATSHEET.md), and
[parameter list](vendor/tessera/docs/PARAMETERS.md).
