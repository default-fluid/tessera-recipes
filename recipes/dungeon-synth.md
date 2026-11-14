# Dungeon synth recipes

Six Tessera patches for dark fantasy, ruined keeps, torchlight, and long-form medieval atmosphere.

## Tower Beyond the Fog

A deterministic, self-playing dungeon synth patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT E**, **KNOB 2 SCALE MIN (Natural minor)**, and **KNOB 3 TEMPO 54 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create.
2. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **GLASS PAD**, T2 **STRING MACH**, T3 **FLUTE**, and T4 **808 KIT**.
3. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE MARKOV**, **KNOB 2 LEAP 16%**, **KNOB 3 DENS 59%**, and **KNOB 4 SPAN 2 octaves**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/16**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 86**.
4. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG DRONE**, **KNOB 3 BARS 1**, **KNOB 4 HIT HOLD**. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 115**.
5. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 6**, **KNOB 4 ROT 3**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 15**.
6. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 71**, **KNOB 3 Y 72**, **KNOB 4 DENS 49%**. **ARP > TWEAK:** **KNOB 3 HUMAN 19%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 43**.
7. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 13**, **KNOB 3 TIME 66**, **KNOB 4 REPEAT 29**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +19%**.
8. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM ABAC**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 10 MIN**, **KNOB 2 SHAPE ARCH**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Crypt Procession

A deterministic, self-playing dungeon synth patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT E**, **KNOB 2 SCALE MIN (Natural minor)**, and **KNOB 3 TEMPO 68 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **GLASS PAD**, T2 **STRING MACH**, T3 **FLUTE**, and T4 **808 KIT**.
2. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE BOUNCE**, **KNOB 2 SPEED 24**, **KNOB 3 ANGLE 56°**, and **KNOB 4 BALLS 4**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/8**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 44**.
3. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG CIRCLE**, **KNOB 3 BARS 1**, **KNOB 4 HIT HOLD**. Keep **OCT-** held on GEN and set **KNOB 2 STRUM 46 ms** and **KNOB 3 DIR DOWN** (**Tessera 3.5+**), then release it. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 73**.
4. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 6**, **KNOB 4 ROT 1**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 101**. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 125**, **KNOB 3 Y 126**, **KNOB 4 DENS 51%**. **ARP > TWEAK:** **KNOB 3 HUMAN 21%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 1**.
5. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 14**, **KNOB 3 TIME 52**, **KNOB 4 REPEAT 53**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +26%**. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM ABCA**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 8 MIN**, **KNOB 2 SHAPE WAVES**, **KNOB 3 COUNT 3**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Moss-Covered Throne

A deterministic, self-playing dungeon synth patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT E**, **KNOB 2 SCALE MPEN (Minor pentatonic)**, and **KNOB 3 TEMPO 46 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **GLASS PAD**, T2 **STRING MACH**, T3 **FLUTE**, and T4 **808 KIT**.
2. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE SERIES**, **KNOB 2 START 61**, **KNOB 3 INTV 2**, and **KNOB 4 LOOP 10**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/16**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 126**.
3. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG DRONE**, **KNOB 3 BARS 1**, **KNOB 4 HIT HOLD**. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 27**.
4. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 7**, **KNOB 4 ROT 3**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 55**.
5. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 77**, **KNOB 3 Y 78**, **KNOB 4 DENS 41%**. **ARP > TWEAK:** **KNOB 3 HUMAN 21%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 83**. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 30**, **KNOB 3 TIME 42**, **KNOB 4 REPEAT 37**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +10%**.
6. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM ABAC**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 8 MIN**, **KNOB 2 SHAPE ARCH**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## March of the Hollow Guard

A deterministic, self-playing dungeon synth patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT E**, **KNOB 2 SCALE MIN (Natural minor)**, and **KNOB 3 TEMPO 82 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create.
2. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **GLASS PAD**, T2 **STRING MACH**, T3 **FLUTE**, and T4 **808 KIT**.
3. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE MARKOV**, **KNOB 2 LEAP 36%**, **KNOB 3 DENS 41%**, and **KNOB 4 SPAN 2 octaves**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/8**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 112**.
4. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG DRONE**, **KNOB 3 BARS 1**, **KNOB 4 HIT HOLD**. Keep **OCT-** held on GEN and set **KNOB 2 STRUM 26 ms** and **KNOB 3 DIR ALT** (**Tessera 3.5+**), then release it. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 13**.
5. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 4**, **KNOB 4 ROT 5**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 41**.
6. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 120**, **KNOB 3 Y 121**, **KNOB 4 DENS 65%**. **ARP > TWEAK:** **KNOB 3 HUMAN 19%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 69**.
7. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 15**, **KNOB 3 TIME 58**, **KNOB 4 REPEAT 46**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +26%**.
8. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM ABCA**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 6 MIN**, **KNOB 2 SHAPE WAVES**, **KNOB 3 COUNT 3**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## Moonlit Ramparts

A deterministic, self-playing dungeon synth patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT E**, **KNOB 2 SCALE DOR (Dorian)**, and **KNOB 3 TEMPO 58 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create.
2. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **GLASS PAD**, T2 **STRING MACH**, T3 **FLUTE**, and T4 **808 KIT**.
3. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE MARKOV**, **KNOB 2 LEAP 26%**, **KNOB 3 DENS 62%**, and **KNOB 4 SPAN 1 octave**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/8**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 109**.
4. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG WALK**, **KNOB 3 BARS 2**, **KNOB 4 HIT HOLD**. Keep **OCT-** held on GEN and set **KNOB 2 STRUM 47 ms** and **KNOB 3 DIR ALT** (**Tessera 3.5+**), then release it. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 10**.
5. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 6**, **KNOB 4 ROT 2**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 38**.
6. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 179**, **KNOB 3 Y 180**, **KNOB 4 DENS 52%**. **ARP > TWEAK:** **KNOB 3 HUMAN 22%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 66**.
7. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 26**, **KNOB 3 TIME 61**, **KNOB 4 REPEAT 33**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +17%**.
8. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM AB**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 6 MIN**, **KNOB 2 SHAPE RISE**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.

## The Gate Opens Once

A deterministic, self-playing dungeon synth patch with seeded melody, harmony, bass, drums, and a complete automatic arrangement.

1. **Start — SAVE > PROJECT:** set **KNOB 1 New song**, press **OCT+**, and confirm with **OCT+** if asked. On **NEW SONG**, set **KNOB 1 ROOT E**, **KNOB 2 SCALE MIN (Natural minor)**, and **KNOB 3 TEMPO 60 BPM**; press **OCT+**. Set role **KNOBS 1–4 KEEP** and press **OCT+** to create.
2. **Sounds — HOME:** turn **ALGORITHM** to each track and set **PRESETS** to T1 **GLASS PAD**, T2 **STRING MACH**, T3 **FLUTE**, and T4 **808 KIT**.
3. **T1 melody — ALGORITHM T1 > SEQ > GEN:** **KNOB 1 MODE MARKOV**, **KNOB 2 LEAP 25%**, **KNOB 3 DENS 52%**, and **KNOB 4 SPAN 1 octave**. **SEQ > PATTERN:** **KNOB 1 LEN 16**, **KNOB 2 DIV 1/4**, **KNOB 3 SWING 12%**, **KNOB 4 GATE 64**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 95**.
4. **T2 harmony — ALGORITHM T2 > SEQ > GEN:** **KNOB 1 MODE CHORD**, **KNOB 2 PROG DRONE**, **KNOB 3 BARS 2**, **KNOB 4 HIT HOLD**. Keep **OCT-** held on GEN and set **KNOB 2 STRUM 37 ms** and **KNOB 3 DIR DOWN** (**Tessera 3.5+**), then release it. **SCL > CHORD:** **KNOB 1 CHRD DIA7**, **KNOB 2 VOIC OPEN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 124**.
5. **T3 bass — ALGORITHM T3 > SEQ > GEN:** **KNOB 1 MODE EUCLID**, **KNOB 2 STEPS 16**, **KNOB 3 PULSE 5**, **KNOB 4 ROT 4**. **ARP > TWEAK:** **KNOB 4 FOLLOW T2**; hold **OCT-** and set **KNOB 2 HOW BASS**, **KNOB 3 RHYTHM OWN**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 24**.
6. **T4 drums — ALGORITHM T4 > SEQ > GEN:** **KNOB 1 MODE ATLAS**, **KNOB 2 X 104**, **KNOB 3 Y 105**, **KNOB 4 DENS 64%**. **ARP > TWEAK:** **KNOB 3 HUMAN 12%**. **ARP > EVOLVE:** **KNOB 2 EVERY OFF**, **KNOB 4 ROLL 52**.
7. **Space and motion — ALGORITHM T1 > FX > FX 2:** **KNOB 1 TYPE ECHO**, **KNOB 2 MIX 30**, **KNOB 3 TIME 45**, **KNOB 4 REPEAT 41**. **ALGORITHM T2 > LFO > ORGANIC:** **KNOB 1 SPEED 50**. **LFO > MODS:** select unused **M1** with **KNOB 2**; set **KNOB 1 SOURCE T2 TIDE 1**, **KNOB 3 DESTINATION T2 CUTOFF**, **KNOB 4 AMOUNT +13%**.
8. **Arrangement — GLO > CHAIN:** **KNOB 1 FORM AABA**, **KNOB 2 PHRASE 8 bars**, **KNOB 3 WANDER 0%**. **GLO > ENTRIES:** **KNOB 1 ENTRIES 55%**, **KNOB 2 DWELL 2 phrases**, **KNOB 3 STYLE FADE**, **KNOB 4 FADE 2 bars**. **Ending — GLO > PIECE:** **KNOB 1 LENGTH 6 MIN**, **KNOB 2 SHAPE PLATEAU**, **KNOB 3 PEAK 65%**, **KNOB 4 END STOP**. Press **PLAY** once; Tessera performs and stops by itself.
