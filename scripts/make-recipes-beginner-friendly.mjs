import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const files = ["lofi", "rave", "ambient", "grooves", "experiments", "chord-jams", "chiptune", "anime", "shinobi-flute", "dungeon-synth", "medieval-lofi", "hooky", "funk-rock", "brazilian"];
const presets = ["KUGO HARP", "KOTO WARM", "FLUTE", "808 KIT", "STRING MACH", "SUB BASS", "TINE EP", "BELLS", "GLASS PAD", "DEEP PAD", "SOFT PAD", "BREATH FLUTE"];
const sounds = {
  lofi: ["KUGO HARP", "STRING MACH", "SUB BASS", "808 KIT"],
  rave: ["BELLS", "TINE EP", "SUB BASS", "808 KIT"],
  ambient: ["GLASS PAD", "STRING MACH", "FLUTE", "808 KIT"],
  grooves: ["KUGO HARP", "TINE EP", "SUB BASS", "808 KIT"],
  experiments: ["KUGO HARP", "STRING MACH", "FLUTE", "808 KIT"],
  "chord-jams": ["KUGO HARP", "STRING MACH", "SUB BASS", "808 KIT"],
  chiptune: ["BELLS", "TINE EP", "SUB BASS", "808 KIT"],
  anime: ["BELLS", "STRING MACH", "SUB BASS", "808 KIT"],
  "shinobi-flute": ["FLUTE", "KOTO WARM", "SUB BASS", "808 KIT"],
  "dungeon-synth": ["GLASS PAD", "STRING MACH", "FLUTE", "808 KIT"],
  "medieval-lofi": ["KOTO WARM", "FLUTE", "SUB BASS", "808 KIT"],
  hooky: ["KUGO HARP", "TINE EP", "SUB BASS", "808 KIT"],
  "funk-rock": ["BELLS", "TINE EP", "SUB BASS", "808 KIT"],
  brazilian: ["KOTO WARM", "TINE EP", "SUB BASS", "808 KIT"],
};

function hash(value) {
  let result = 0;
  for (const char of value) result = (result * 31 + char.codePointAt(0)) >>> 0;
  return result;
}

function rootAndScale(text, category) {
  const plain = text.replace(/\*\*/g, "");
  const root = plain.match(/root\s+([A-G](?:#|♯|b|♭)?)/i)?.[1]
    ?? plain.match(/\b([A-G](?:#|♯|b|♭)?)\s+(?:natural\s+|harmonic\s+)?(?:major|minor|dorian|phrygian|kumoi)/i)?.[1]
    ?? ({ rave:"E", ambient:"E", chiptune:"C", anime:"E", brazilian:"D" }[category] || "E");
  let code = "KUMOI";
  let name = "Kumoi";
  const scaleText = plain.toLowerCase();
  if (/chromatic/.test(scaleText)) [code, name] = ["CHR", "Chromatic"];
  else if (/harmonic minor/.test(scaleText)) [code, name] = ["HARM", "Harmonic minor"];
  else if (/minor pentatonic/.test(scaleText)) [code, name] = ["MPEN", "Minor pentatonic"];
  else if (/major pentatonic/.test(scaleText)) [code, name] = ["PEN", "Major pentatonic"];
  else if (/dorian/.test(scaleText)) [code, name] = ["DOR", "Dorian"];
  else if (/phrygian/.test(scaleText)) [code, name] = ["PHRY", "Phrygian"];
  else if (/kumoi/.test(scaleText)) [code, name] = ["KUMOI", "Kumoi"];
  else if (/minor/.test(scaleText)) [code, name] = ["MIN", "Natural minor"];
  else if (/major/.test(scaleText)) [code, name] = ["MAJ", "Major"];
  return [root.replace("♯", "#").replace("♭", "b"), code, name];
}

function exactSounds(text, category) {
  const result = [...sounds[category]];
  const upper = text.toUpperCase();
  for (let track = 1; track <= 4; track++) {
    const starts = [...upper.matchAll(new RegExp(`(?:\\*\\*)?T${track}(?:\\*\\*)?`, "g"))];
    for (const start of starts) {
      const window = upper.slice(start.index, start.index + 180);
      const found = presets.find((preset) => window.includes(preset));
      if (found) { result[track - 1] = found; break; }
    }
  }
  return result;
}

function clarify(step) {
  return step
    .replace(/choose a sharp lead/gi, "use the exact **BELLS** preset")
    .replace(/a bright pad or keys sound/gi, "the exact **STRING MACH** preset")
    .replace(/a soft tine sound/gi, "the exact **TINE EP** preset")
    .replace(/a warm bass sound/gi, "the exact **SUB BASS** preset")
    .replace(/a flute-like sound/gi, "the exact **FLUTE** preset")
    .replace(/a bell or tine sound/gi, "the exact **BELLS** preset")
    .replace(/a thinner sound/gi, "the exact **KOTO WARM** preset")
    .replace(/a pad sound/gi, "the exact **GLASS PAD** preset")
    .replace(/a single CHORD DRONE/gi, "**GLASS PAD** on SEQ > GEN > MODE **CHORD**, PROG **DRONE**")
    .replace(/just above silence/gi, "at GLO > MIXER level **12**")
    .replace(/almost inaudible/gi, "at GLO > MIXER level **10**")
    .replace(/\babout\s+(\d+)/gi, "$1")
    .replace(/\baround\s+(\d+)/gi, "$1")
    .replace(/\bnear\s+(\d+)/gi, "$1")
    .replace(/\bmodest echo\b/gi, "FX > FX 2 TYPE **ECHO**, MIX **18**, TIME **60**, REPEAT **42**")
    .replace(/\bsmall FILTER sweep\b/gi, "FX > FX 1 TYPE **FILTER**, MIX **100**, CUT **48**, RES **18**")
    .replace(/\bsmall amount\b/gi, "**+8%**")
    .replace(/\beven smaller amount\b/gi, "**+4%**")
    .replace(/\bvery slow DRIFT\b/gi, "**DRIFT**")
    .replace(/\blow master levels\b/gi, "GLO > MIXER levels **70 / 50 / 55 / 60**")
    .replace(/\bkeep it very quiet\b/gi, "set its GLO > MIXER level to **12**")
    .replace(/\bkeep hats low\b/gi, "set HAT to **20**")
    .replace(/\bhats low\b/gi, "HAT **20**")
    .replace(/\bhats sparse\b/gi, "HAT **18**")
    .replace(/\bsparse kick\b/gi, "KICK **28**")
    .replace(/\bsparse notes\b/gi, "ARP > TWEAK > DROP **65**")
    .replace(/\bsoft kick\b/gi, "808 KIT kick at **32**")
    .replace(/\bkick full\b/gi, "KICK **100**")
    .replace(/\bsnare soft\b/gi, "SNARE **38**")
    .replace(/\bshort echo\b/gi, "FX > FX 2 TYPE **ECHO**, MIX **16**, TIME **48**, REPEAT **30**")
    .replace(/\bmore echo\b/gi, "FX > FX 2 TYPE **ECHO**, MIX **24**, TIME **64**, REPEAT **45**")
    .replace(/\bopen voicing\b/gi, "SCL > CHORD > VOIC **OPEN**")
    .replace(/\bminor scale\b/gi, "**MIN (Natural minor)** scale")
    .replace(/\bmajor scale\b/gi, "**MAJ (Major)** scale");
}

function rewriteSection(section, category) {
  const lines = section.trimEnd().split("\n");
  const title = lines.shift();
  const description = [];
  const oldSteps = [];
  for (const raw of lines) {
    const line = raw.trim();
    const match = line.match(/^\d+\.\s+(.+)$/);
    if (match) oldSteps.push(match[1]);
    else if (line && !/^\*\*(?:Play it|Change it):/i.test(line) && oldSteps.length === 0) description.push(line);
  }
  const allText = [title, ...description, ...oldSteps].join(" ");
  const bpmFound = allText.match(/\*\*(\d+) BPM\*\*/i)?.[1] ?? allText.match(/\b(\d+) BPM\b/i)?.[1] ?? "80";
  const bpm = String(Math.max(40, Math.min(240, Number(bpmFound))));
  let [rootNote, scaleCode, scaleName] = rootAndScale(allText, category);
  if (title === "## Rain on the Study Window") rootNote = "D";
  const trackSounds = sounds[category];
  const seed = hash(title) % 128 + 1;
  const forms = ["AB", "ABAC", "AABA", "ABCA"];
  const shapes = ["ARCH", "RISE", "WAVES", "PLATEAU"];
  const generators = ["TURING", "MARKOV", "CONSTL", "SERIES", "BOUNCE"];
  const progressions = ["POP", "50S", "2-5-1", "CIRCLE", "TWO", "DRONE", "WALK"];
  const divisions = ["1/8", "1/8", "1/16", "1/4"];
  const form = forms[hash(title + "form") % forms.length];
  const shape = shapes[hash(title + "shape") % shapes.length];
  const length = ["6 MIN", "8 MIN", "10 MIN"][hash(title + "length") % 3];
  const generator = generators[hash(title + "generator") % generators.length];
  const progression = progressions[hash(title + "progression") % progressions.length];
  const division = divisions[hash(title + "division") % divisions.length];
  const melodySettings = {
    TURING: `**KNOB 2 LENGTH ${6 + hash(title) % 5}**, **KNOB 3 PROB ${hash(title) % 9}%**, and **KNOB 4 SPAN ${1 + hash(title) % 2} octave${hash(title) % 2 ? "s" : ""}**`,
    MARKOV: `**KNOB 2 LEAP ${10 + hash(title) % 31}%**, **KNOB 3 DENS ${30 + hash(title) % 36}%**, and **KNOB 4 SPAN ${1 + hash(title) % 2} octave${hash(title) % 2 ? "s" : ""}**`,
    CONSTL: `**KNOB 2 Y ${4 + hash(title) % 7}**, **KNOB 3 DENS ${25 + hash(title) % 36}%**, and **KNOB 4 SPEED ${division}**`,
    SERIES: `**KNOB 2 START ${hash(title) % 64}**, **KNOB 3 INTV ${1 + hash(title) % 4}**, and **KNOB 4 LOOP ${6 + hash(title) % 7}**`,
    BOUNCE: `**KNOB 2 SPEED ${8 + hash(title) % 21}**, **KNOB 3 ANGLE ${25 + hash(title) % 36}°**, and **KNOB 4 BALLS ${1 + hash(title) % 4}**`,
  }[generator];
  const atlasX = 70 + hash(title + "x") % 117;
  const atlasY = 70 + hash(title + "y") % 117;
  const atlasDensity = 30 + hash(title + "density") % 46;
  const pulse = 3 + hash(title + "pulse") % 5;
  const rotation = hash(title + "rotation") % 8;
  const echoMix = 12 + hash(title + "echo") % 19;
  const echoTime = 42 + hash(title + "time") % 39;
  const echoRepeat = 24 + hash(title + "repeat") % 35;
  const tideAmount = 10 + hash(title + "tide") % 21;
  const fallbackDescription = `A seeded ${category.replaceAll("-", " ")} arrangement. Press PLAY once; Tessera handles its sections and ending.`;
  const strum = hash(title + "strum") % 3 === 0
    ? ` Keep **OCT-** held on GEN and set **KNOB 2 STRUM ${15 + hash(title) % 36} ms** and **KNOB 3 DIR ${["UP", "DOWN", "ALT"][hash(title) % 3]}** (**Tessera 3.5+**), then release it.`
    : "";
  const steps = [
    `Start clean and set the project exactly. Tap **SAVE**, turn **SELECT** to **PROJECT**, turn **KNOB 1** to **New song**, and tap **OCT+**; tap **OCT+** again if Tessera asks. On the **NEW SONG** key screen set **KNOB 1 ROOT ${rootNote}**, **KNOB 2 SCALE ${scaleCode} (${scaleName})**, and **KNOB 3 TEMPO ${bpm} BPM**, then tap **OCT+**. On the roles screen set **KNOB 1–4** to **KEEP**, then tap **OCT+** to create the empty song.`,
    `Load the four exact sounds from **HOME**. Turn **ALGORITHM** to each track, then turn **PRESETS**: T1 **${trackSounds[0]}**, T2 **${trackSounds[1]}**, T3 **${trackSounds[2]}**, T4 **${trackSounds[3]}**.`,
    `Program T1's melody. Turn **ALGORITHM** to **T1**, tap **SEQ**, and turn **SELECT** to **GEN**. Set **KNOB 1 MODE ${generator}**, ${melodySettings}. Turn **SELECT** to **PATTERN** and set **KNOB 1 LEN 16**, **KNOB 2 DIV ${division}**, **KNOB 3 SWING ${category === "lofi" ? 18 : category === "rave" ? 8 : 12}%**, and **KNOB 4 GATE 64**. Tap **ARP**, turn **SELECT** to **EVOLVE**, and set **KNOB 2 EVERY OFF** and **KNOB 4 ROLL ${seed}**.`,
    `Program T2's harmony. Turn **ALGORITHM** to **T2**, tap **SEQ**, turn **SELECT** to **GEN**, and set **KNOB 1 MODE CHORD**, **KNOB 2 PROG ${progression}**, **KNOB 3 BARS ${hash(title) % 2 ? 1 : 2}**, and **KNOB 4 HIT ${category === "rave" || category === "grooves" ? "OFFBEAT" : "HOLD"}**.${strum} Tap **SCL**, turn **SELECT** to **CHORD**, then set **KNOB 1 CHRD DIA7** and **KNOB 2 VOIC OPEN**. Tap **ARP**, turn **SELECT** to **EVOLVE**, and set **KNOB 2 EVERY OFF** and **KNOB 4 ROLL ${(seed + 28) % 128 + 1}**.`,
    `Program T3's bass. Turn **ALGORITHM** to **T3**, tap **SEQ**, turn **SELECT** to **GEN**, and set **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE ${pulse}**, and **KNOB 4 ROT ${rotation}**. Tap **ARP**, turn **SELECT** to **TWEAK**, and set **KNOB 4 FOLLOW T2**. Keep **OCT-** held while setting **KNOB 2 HOW BASS** and **KNOB 3 RHYTHM OWN**, then release it. Turn **SELECT** to **EVOLVE** and set **KNOB 2 EVERY OFF** and **KNOB 4 ROLL ${(seed + 56) % 128 + 1}**.`,
    `Program T4's drums. Turn **ALGORITHM** to **T4**, tap **SEQ**, turn **SELECT** to **GEN**, and set **KNOB 1 MODE ATLAS**, **KNOB 2 X ${atlasX}**, **KNOB 3 Y ${atlasY}**, and **KNOB 4 DENS ${atlasDensity}%**. Tap **ARP**, turn **SELECT** to **TWEAK**, and set **KNOB 3 HUMAN ${8 + hash(title) % 18}%**. Turn **SELECT** to **EVOLVE** and set **KNOB 2 EVERY OFF** and **KNOB 4 ROLL ${(seed + 84) % 128 + 1}**.`,
    `Add exact space and motion. Turn **ALGORITHM** to **T1**, tap **FX**, turn **SELECT** to **FX 2**, and set **KNOB 1 TYPE ECHO**, **KNOB 2 MIX ${echoMix}**, **KNOB 3 TIME ${echoTime}**, and **KNOB 4 REPEAT ${echoRepeat}**. Turn **ALGORITHM** to **T2**, tap **LFO**, turn **SELECT** to **ORGANIC**, and set **KNOB 1 SPEED 50**. Turn **SELECT** to **MODS**, choose unused **M1** with **KNOB 2**, then set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, and **KNOB 4 AMOUNT +${tideAmount}%**.`,
    `Automate sections: tap **GLO**, turn **SELECT** to **CHAIN**, then set **KNOB 1 FORM ${form}**, **KNOB 2 PHRASE 8 bars**, and **KNOB 3 WANDER 0%**. Turn **SELECT** to **ENTRIES** and set **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, and **KNOB 4 FADE 2 bars**.`,
    `Make it perform and finish by itself: still under **GLO**, turn **SELECT** to **PIECE**; set **KNOB 1 LENGTH ${length}**, **KNOB 2 SHAPE ${shape}**, **KNOB 3 ${shape === "WAVES" ? "COUNT 3" : "PEAK 65%"}**, and **KNOB 4 END STOP**. Press **PLAY** once. Tessera now runs the complete arrangement and stops at the end.`,
  ];
  return `${title}\n\n${description.join(" ") || fallbackDescription}\n\n${steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}\n`;
}

for (const category of files) {
  const filename = resolve(root, `recipes/${category}.md`);
  const source = await readFile(filename, "utf8");
  const firstRecipe = source.indexOf("\n## ");
  const intro = source.slice(0, firstRecipe).trimEnd();
  const sections = source.slice(firstRecipe + 1).split(/\n(?=## )/);
  const rewritten = sections.map((section) => rewriteSection(section, category)).join("\n");
  await writeFile(filename, `${intro}\n\n${rewritten}`);
}

console.log("Rewrote every recipe with exact setup, sounds, seeds, and automatic arrangements.");
